const app = {
  view: "forces",
  group: "すべて",
  statusMode: "safe",
  search: "",
  forceFilter: "",
  categoryFilter: "",
  page: 1,
  pageSize: 10,
  detail: null,
  timelineAxis: "voyage",
  timelineType: "すべて",
  timelinePerson: "",
  timelineForce: "",
  timelineSearch: "",
  timelineSort: "asc",
  expandedEventId: null,
  mapSelectedEventId: "event-0001",
  mapTimelineScroll: 0
};

const elements = {
  sidebar: document.getElementById("sidebar"),
  sidebarBackdrop: document.getElementById("sidebarBackdrop"),
  menuButton: document.getElementById("menuButton"),
  pageTitle: document.getElementById("pageTitle"),
  pageEnglish: document.getElementById("pageEnglish"),
  pageDescription: document.getElementById("pageDescription"),
  toolbar: document.getElementById("toolbar"),
  searchInput: document.getElementById("searchInput"),
  groupTabs: document.getElementById("groupTabs"),
  filterButton: document.getElementById("filterButton"),
  filterPanel: document.getElementById("filterPanel"),
  forceFilter: document.getElementById("forceFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  clearFilters: document.getElementById("clearFilters"),
  safeModeButton: document.getElementById("safeModeButton"),
  latestModeButton: document.getElementById("latestModeButton"),
  mobileMode: document.getElementById("mobileMode"),
  viewContent: document.getElementById("viewContent")
};

const viewSettings = {
  forces: {
    title: "勢力",
    english: "FORCES DATABASE",
    description: "王子陣営・マフィアの構成と戦力を確認",
    placeholder: "勢力名・代表者名で検索"
  },
  people: {
    title: "人物",
    english: "PERSONNEL DATABASE",
    description: "王子・王妃・私設兵・ハンター・マフィアを検索",
    placeholder: "人物名で検索"
  },
  network: {
    title: "相関",
    english: "NETWORK DATABASE",
    description: "血縁・監視配置から人物と勢力のつながりを確認"
  },
  timeline: {
    title: "時系列",
    english: "EVENT LOG",
    description: "王位継承戦で発生した出来事を時系列で確認"
  },
  map: {
    title: "航海図",
    english: "LIVE MAP LOG",
    description: "主要イベントを選択して船内各層の動きを確認"
  }
};

function getGroupType(character) {
  return character.groupType === "マフィア" ? "マフィア" : "王子陣営";
}

function getForceType(forceName) {
  const member = characters.find(character => character.force === forceName);
  return member ? getGroupType(member) : "王子陣営";
}

function getForceOrder(forceName) {
  const princeMatch = forceName.match(/第(\d+)王子陣営/);
  if (princeMatch) return Number(princeMatch[1]);

  const mafiaOrder = {
    "シュウ＝ウ一家": 101,
    "エイ＝イ一家": 102,
    "シャ＝ア一家": 103
  };
  return mafiaOrder[forceName] || 999;
}

function getForceRecords() {
  const forceNames = [...new Set(characters.map(character => character.force).filter(Boolean))];

  return forceNames
    .map(name => {
      const members = characters.filter(character => character.force === name);
      const type = getForceType(name);
      const leader = members.find(character =>
        type === "マフィア" ? character.category === "組長" : character.category === "王子"
      );
      const monitoring = characters.filter(character =>
        character.force !== name &&
        Array.isArray(character.monitorFor) &&
        character.monitorFor.includes(name)
      );
      const monitoringMembers = [...new Map([
        ...members.filter(character => character.category === "監視"),
        ...monitoring
      ].map(character => [character.id, character])).values()];

      return { name, type, leader, members, monitoring, monitoringMembers };
    })
    .sort((a, b) => getForceOrder(a.name) - getForceOrder(b.name));
}

const forceRecords = getForceRecords();

// Ver.1.0の人物データには、王子とマフィアの後ろ盾関係がないため、
// 相関画面と勢力表示で共用する小さな対応表として分離しています。
const mafiaBackingRelations = [
  { princeId: 3, mafiaForce: "シュウ＝ウ一家" },
  { princeId: 4, mafiaForce: "エイ＝イ一家" },
  { princeId: 7, mafiaForce: "シャ＝ア一家" }
];

function getQueenGroups() {
  const groups = new Map();
  characters
    .filter(character => character.category === "王子")
    .forEach(prince => {
      const mother = prince.mother || {};
      const key = mother.title || mother.name || "王妃不明";
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          mother: {
            name: mother.name || "不明",
            title: mother.title || "王妃不明",
            image: mother.image || ""
          },
          princes: []
        });
      }
      groups.get(key).princes.push(prince);
    });

  return [...groups.values()]
    .sort((a, b) => getForceOrder(a.princes[0]?.force || "") - getForceOrder(b.princes[0]?.force || ""))
    .map(group => ({ ...group, princes: group.princes.sort((a, b) => Number(a.id) - Number(b.id)) }));
}

const queenGroups = getQueenGroups();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function placeholderSvg(name, type = "王子陣営") {
  const accent = type === "マフィア" ? "#8b3d3c" : "#8d744d";
  const initial = (name || "?").slice(0, 1);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#c6c0b5"/>
      <circle cx="100" cy="76" r="37" fill="#34383a"/>
      <path d="M38 188c5-48 29-73 62-73s57 25 62 73" fill="#34383a"/>
      <circle cx="160" cy="38" r="22" fill="${accent}" opacity=".9"/>
      <text x="160" y="45" text-anchor="middle" font-size="22" fill="#eee7db" font-family="sans-serif">${initial}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageHtml(character, className = "person-image") {
  const name = character?.name || "情報未登録";
  const type = character ? getGroupType(character) : "王子陣営";
  const src = character?.image || placeholderSvg(name, type);
  return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(name)}" data-fallback-name="${escapeHtml(name)}" data-fallback-type="${type}">`;
}

function hydrateImages() {
  elements.viewContent.querySelectorAll("img[data-fallback-name]").forEach(image => {
    image.addEventListener("error", () => {
      image.src = placeholderSvg(image.dataset.fallbackName, image.dataset.fallbackType);
    }, { once: true });
  });
}

function abilityMarkup(character) {
  if (app.statusMode === "safe") {
    return `<span class="redaction"></span><span class="classified">CLASSIFIED</span>`;
  }

  const abilityName = character.nenAbility?.name || "未判明";
  return `<span class="ability-name">${escapeHtml(abilityName)}</span><span></span>`;
}

function statusMarkup(character) {
  if (app.statusMode === "latest" && character.status === "死亡") {
    return `<span class="death-badge">死亡</span>`;
  }
  return "";
}

function personCardHtml(character) {
  const type = getGroupType(character);
  const deadClass = app.statusMode === "latest" && character.status === "死亡" ? "is-dead" : "";

  return `
    <article class="person-card ${type === "マフィア" ? "mafia" : ""} ${deadClass}" data-person-id="${character.id}" tabindex="0" role="button">
      <div class="person-image-wrap">${imageHtml(character)}</div>
      <div class="person-body">
        ${statusMarkup(character)}
        <h2 class="person-name">${escapeHtml(character.name)}</h2>
        <p class="person-subname">${escapeHtml(character.subName || character.category || "情報未登録")}</p>
        <div class="affiliation">${escapeHtml(character.force || "所属未確認")}</div>
        <div class="ability-row"><span>念能力</span>${abilityMarkup(character)}</div>
      </div>
    </article>`;
}

function filterPeople() {
  const keyword = app.search.trim().toLowerCase();
  return characters.filter(character => {
    const groupMatch = app.group === "すべて" || getGroupType(character) === app.group;
    const forceMatch = !app.forceFilter || character.force === app.forceFilter;
    const categoryMatch = !app.categoryFilter || character.category === app.categoryFilter;
    const searchTarget = `${character.name || ""} ${character.subName || ""}`.toLowerCase();
    return groupMatch && forceMatch && categoryMatch && searchTarget.includes(keyword);
  });
}

function renderPeople() {
  const filtered = filterPeople();
  const totalPages = Math.max(1, Math.ceil(filtered.length / app.pageSize));
  app.page = Math.min(app.page, totalPages);
  const start = (app.page - 1) * app.pageSize;
  const current = filtered.slice(start, start + app.pageSize);

  if (current.length === 0) {
    elements.viewContent.innerHTML = `<div class="no-results">条件に一致する人物が見つかりません。<br>検索語または絞り込み条件を変更してください。</div>`;
    return;
  }

  elements.viewContent.innerHTML = `
    <div class="content-meta"><span>${filtered.length}名を表示</span><span>${start + 1}–${start + current.length} / ${filtered.length}</span></div>
    <div class="people-grid">${current.map(personCardHtml).join("")}</div>
    ${paginationHtml(totalPages)}`;
  hydrateImages();
}

function paginationHtml(totalPages) {
  if (totalPages <= 1) return "";
  const visiblePages = [...new Set([1, app.page - 1, app.page, app.page + 1, totalPages])]
    .filter(page => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  let lastPage = 0;
  const buttons = visiblePages.map(page => {
    const spacer = page - lastPage > 1 ? `<span>…</span>` : "";
    lastPage = page;
    return `${spacer}<button class="${page === app.page ? "active" : ""}" data-page="${page}" type="button">${page}</button>`;
  }).join("");

  return `<div class="pagination">${buttons}</div>`;
}

function summaryCategories(record) {
  const categories = record.type === "マフィア"
    ? ["組長", "幹部", "組員"]
    : ["私設兵", "従事者", "ハンター"];

  const classMap = {
    "私設兵": "guard",
    "従事者": "servant",
    "ハンター": "hunter",
    "監視": "monitor",
    "組長": "mafia-dot",
    "幹部": "mafia-dot",
    "組員": "mafia-dot"
  };

  const rows = categories.map(category => ({
    category,
    count: record.members.filter(member => member.category === category).length,
    className: classMap[category]
  })).filter(row => row.count > 0);

  if (record.monitoringMembers.length > 0) {
    rows.push({ category: "監視", count: record.monitoringMembers.length, className: "monitor" });
  }
  return rows;
}

function summaryIconsHtml(count, className) {
  return `<span class="summary-icons" aria-label="${count}名">${`<i class="person-dot ${className}"></i>`.repeat(count)}</span>`;
}

function mafiaPatronHtml(record) {
  const relation = mafiaBackingRelations.find(item => item.mafiaForce === record.name);
  const prince = relation
    ? characters.find(character => String(character.id) === String(relation.princeId))
    : null;
  const princeLabel = prince
    ? `${prince.subName || "王子"} ${prince.name}`
    : "情報未登録";

  return `
    <div class="mafia-patron">
      <span>ケツモチ</span>
      <strong>${escapeHtml(princeLabel)}</strong>
    </div>`;
}

function forceCardHtml(record) {
  const leader = record.leader || { name: "代表者情報未登録", image: "", subName: "" };
  return `
    <article class="force-card ${record.type === "マフィア" ? "mafia" : ""}" data-force="${escapeHtml(record.name)}" tabindex="0" role="button">
      <div class="portrait">${imageHtml(leader, "")}</div>
      <div class="force-info">
        <h3>${escapeHtml(record.name)}</h3>
        <p class="leader-name">${escapeHtml(leader.name)} <small>代表者</small></p>
        ${record.type === "マフィア"
          ? mafiaPatronHtml(record)
          : `<p class="force-total">登録 ${record.members.length}名</p>
             ${summaryCategories(record).map(row => `
               <div class="summary-row"><span class="summary-label">${row.category}</span>${summaryIconsHtml(row.count, row.className)}</div>
             `).join("")}`}
        <span class="details-link">詳細を見る →</span>
      </div>
    </article>`;
}

function filterForces() {
  const keyword = app.search.trim().toLowerCase();
  return forceRecords.filter(record => {
    const groupMatch = app.group === "すべて" || record.type === app.group;
    const forceMatch = !app.forceFilter || record.name === app.forceFilter;
    const categoryMatch = !app.categoryFilter || record.members.some(member => member.category === app.categoryFilter);
    const target = `${record.name} ${record.leader?.name || ""}`.toLowerCase();
    return groupMatch && forceMatch && categoryMatch && target.includes(keyword);
  });
}

function renderForces() {
  const filtered = filterForces();
  const princeForces = filtered.filter(record => record.type === "王子陣営");
  const mafiaForces = filtered.filter(record => record.type === "マフィア");

  if (filtered.length === 0) {
    elements.viewContent.innerHTML = `<div class="no-results">条件に一致する勢力が見つかりません。<br>検索語または絞り込み条件を変更してください。</div>`;
    return;
  }

  elements.viewContent.innerHTML = `
    <div class="content-meta"><span>${filtered.length}勢力を表示</span><span>並び替え：勢力順</span></div>
    ${princeForces.length ? `
      <div class="section-heading"><h2>王位継承戦参加勢力</h2><span>${princeForces.length} PRINCE FORCES</span></div>
      <div class="force-grid">${princeForces.map(forceCardHtml).join("")}</div>` : ""}
    ${mafiaForces.length ? `
      <div class="section-heading mafia"><h2>下層勢力</h2><span>${mafiaForces.length} LOWER DECK FORCES</span></div>
      <div class="force-grid mafia-grid">${mafiaForces.map(forceCardHtml).join("")}</div>` : ""}`;
  hydrateImages();
}

function memberCardHtml(character, isMonitoring = false) {
  const deadClass = app.statusMode === "latest" && character.status === "死亡" ? "is-dead" : "";
  return `
    <article class="member-card ${isMonitoring ? "monitor" : ""} ${deadClass}" data-person-id="${character.id}" tabindex="0" role="button">
      ${imageHtml(character, "")}
      <div><h4>${escapeHtml(character.name)}</h4><p>${escapeHtml(isMonitoring ? "監視担当" : character.category)}</p><p>${escapeHtml(character.subName || "")}</p></div>
    </article>`;
}

function renderForceDetail(forceName) {
  const record = forceRecords.find(item => item.name === forceName);
  if (!record) return renderForces();
  const leader = record.leader || record.members[0];
  const regularMembers = record.members.filter(member => member !== leader);

  elements.viewContent.innerHTML = `
    <button class="back-button" data-back="${escapeHtml(app.detail?.returnView || "forces")}" type="button">← 前の画面に戻る</button>
    <section class="detail-hero ${record.type === "マフィア" ? "mafia" : ""}">
      ${imageHtml(leader, "hero-image")}
      <div>
        <p>${record.type === "マフィア" ? "LOWER DECK FORCE" : "PRINCE FORCE"}</p>
        <h2>${escapeHtml(record.name)}</h2>
        <p>代表者：${escapeHtml(leader?.name || "情報未登録")}${record.type === "マフィア" ? "" : `　／　登録構成員：${record.members.length}名`}</p>
        <div>${record.type === "マフィア"
          ? mafiaPatronHtml(record)
          : summaryCategories(record).map(row => `<div class="summary-row"><span class="summary-label">${row.category}</span>${summaryIconsHtml(row.count, row.className)}</div>`).join("")}</div>
      </div>
    </section>
    ${record.type === "王子陣営" && leader ? princeExtraHtml(leader) : ""}
    ${record.monitoring.length ? `
      <section class="member-section"><h3>外部からの監視担当</h3><div class="member-grid">${record.monitoring.map(member => memberCardHtml(member, true)).join("")}</div></section>` : ""}
    <section class="member-section"><h3>${record.type === "マフィア" ? "組織構成" : "所属メンバー"}</h3><div class="member-grid">${regularMembers.map(member => memberCardHtml(member)).join("")}</div></section>`;
  hydrateImages();
}

function princeExtraHtml(prince) {
  const mother = prince.mother;
  const beast = prince.guardianSpiritBeast;
  const ability = prince.nenAbility;
  const abilityContent = app.statusMode === "safe"
    ? `<span class="redaction"></span><span class="classified">CLASSIFIED</span>`
    : `<p class="prince-info-name">${escapeHtml(ability?.name || "未判明")}</p>
       <p class="prince-info-description">${escapeHtml(ability?.description || "説明は未登録です。")}</p>`;
  return `
    <div class="detail-blocks">
      <section class="detail-block prince-info-block">
        <h3>王妃</h3>
        ${mother ? imageHtml({ ...mother, groupType: "王子陣営" }, "prince-info-image") : ""}
        <p class="prince-info-name">${escapeHtml(mother?.name || "不明")}</p>
        <p class="prince-info-title">${escapeHtml(mother?.title || "情報未登録")}</p>
      </section>
      <section class="detail-block prince-info-block">
        <h3>守護霊獣</h3>
        ${beast ? imageHtml({ ...beast, groupType: "王子陣営" }, "prince-info-image") : ""}
        <p class="prince-info-name">${escapeHtml(beast?.name || "未判明")}</p>
        <p class="prince-info-description">${escapeHtml(beast?.description || "説明は未登録です。")}</p>
      </section>
      <section class="detail-block prince-info-block"><h3>念能力</h3>${abilityContent}</section>
    </div>`;
}

function renderPersonDetail(id) {
  const character = characters.find(item => String(item.id) === String(id));
  if (!character) return renderPeople();
  const monitoring = Array.isArray(character.monitorFor) ? character.monitorFor : [];
  const ability = app.statusMode === "safe"
    ? `<span class="redaction"></span><span class="classified">CLASSIFIED</span>`
    : escapeHtml(character.nenAbility?.name || "未判明");

  elements.viewContent.innerHTML = `
    <div class="person-detail">
      <button class="back-button" data-back="${escapeHtml(app.detail?.returnView || "people")}" type="button">← 前の画面に戻る</button>
      <section class="detail-hero ${getGroupType(character) === "マフィア" ? "mafia" : ""}">
        ${imageHtml(character, "hero-image")}
        <div>
          ${statusMarkup(character)}
          <h2>${escapeHtml(character.name)}</h2>
          <p>${escapeHtml(character.subName || character.category)}</p>
          <div class="detail-meta"><span class="chip">${escapeHtml(character.force)}</span><span class="chip">${escapeHtml(character.category)}</span></div>
          <p>${escapeHtml(character.description || "人物説明は現在整理中です。")}</p>
        </div>
      </section>
      <div class="detail-blocks">
        <section class="detail-block"><h3>念能力</h3><p>${ability}</p></section>
        <section class="detail-block"><h3>所属勢力</h3><p><button class="text-button" data-force="${escapeHtml(character.force)}" type="button">${escapeHtml(character.force)} →</button></p></section>
        <section class="detail-block"><h3>監視先</h3><p>${monitoring.length ? monitoring.map(escapeHtml).join("<br>") : "監視先なし"}</p></section>
      </div>
    </div>`;
  hydrateImages();
}

function networkPortraitHtml(character, extraClass = "") {
  return `<span class="network-portrait ${extraClass}">${imageHtml(character, "")}</span>`;
}

function princeNetworkNodeHtml(prince) {
  const deadClass = app.statusMode === "latest" && prince.status === "死亡" ? "is-dead" : "";
  return `
    <article class="network-person-node ${deadClass}" data-person-id="${prince.id}" tabindex="0" role="button">
      ${networkPortraitHtml(prince)}
      <div class="network-node-copy">
        <strong>${escapeHtml(prince.name)}</strong>
        <small>${escapeHtml(prince.subName || "王子")}</small>
        <button class="network-force-link" data-force="${escapeHtml(prince.force)}" type="button">${escapeHtml(prince.force)} →</button>
      </div>
      ${deadClass ? `<span class="network-death">死亡</span>` : ""}
    </article>`;
}

function familyGroupHtml(group) {
  const queenCharacter = { ...group.mother, force: "カキン王室" };
  return `
    <section class="relation-group family-group">
      <button class="queen-node" data-queen-key="${escapeHtml(group.key)}" type="button">
        ${networkPortraitHtml(queenCharacter, "queen-portrait")}
        <span><strong>${escapeHtml(group.mother.name)}</strong><small>${escapeHtml(group.mother.title)}</small></span>
        <i>王妃</i>
      </button>
      <div class="relation-connector family-connector" aria-hidden="true"><span></span></div>
      <div class="relation-children">${group.princes.map(princeNetworkNodeHtml).join("")}</div>
    </section>`;
}

function monitoringGroups() {
  const groups = new Map();
  characters.forEach(character => {
    if (!Array.isArray(character.monitorFor)) return;
    character.monitorFor.forEach(targetForce => {
      if (!groups.has(targetForce)) groups.set(targetForce, []);
      groups.get(targetForce).push(character);
    });
  });

  return [...groups.entries()]
    .map(([targetForce, monitors]) => ({
      targetForce,
      targetPrince: characters.find(character => character.force === targetForce && character.category === "王子"),
      monitors
    }))
    .sort((a, b) => getForceOrder(a.targetForce) - getForceOrder(b.targetForce));
}

function monitoringGroupHtml(group) {
  const target = group.targetPrince;
  return `
    <section class="relation-group monitoring-group">
      <button class="network-force-node target-force-node" data-force="${escapeHtml(group.targetForce)}" type="button">
        ${target ? networkPortraitHtml(target) : ""}
        <span><strong>${escapeHtml(group.targetForce)}</strong><small>${escapeHtml(target?.name || "代表者情報未登録")}</small></span>
        <i>監視先</i>
      </button>
      <div class="monitor-arrow" aria-hidden="true"><span>↑</span><small>監視</small></div>
      <div class="monitor-list">
        ${group.monitors.map(monitor => {
          const deadClass = app.statusMode === "latest" && monitor.status === "死亡" ? "is-dead" : "";
          return `
            <article class="monitor-node ${deadClass}" data-person-id="${monitor.id}" tabindex="0" role="button">
              ${networkPortraitHtml(monitor)}
              <div><strong>${escapeHtml(monitor.name)}</strong><small>${escapeHtml(monitor.subName || monitor.category)}</small><button data-force="${escapeHtml(monitor.force)}" type="button">${escapeHtml(monitor.force)}</button></div>
              <i>監視元</i>
            </article>`;
        }).join("")}
      </div>
    </section>`;
}

function mafiaRelationHtml(relation) {
  const prince = characters.find(character => String(character.id) === String(relation.princeId));
  const mafia = forceRecords.find(record => record.name === relation.mafiaForce);
  if (!prince || !mafia) return "";

  return `
    <section class="mafia-relation-card">
      <article class="backer-prince" data-person-id="${prince.id}" tabindex="0" role="button">
        ${networkPortraitHtml(prince)}
        <div><strong>${escapeHtml(prince.name)}</strong><small>${escapeHtml(prince.subName)}</small><button data-force="${escapeHtml(prince.force)}" type="button">${escapeHtml(prince.force)}</button></div>
      </article>
      <div class="backing-arrow" aria-hidden="true"><span>後ろ盾</span><b>→</b></div>
      <button class="backed-mafia" data-force="${escapeHtml(mafia.name)}" type="button">
        ${networkPortraitHtml(mafia.leader)}
        <span><strong>${escapeHtml(mafia.name)}</strong><small>組長：${escapeHtml(mafia.leader?.name || "不明")}</small></span>
      </button>
    </section>`;
}

function renderNetwork() {
  const monitorGroups = monitoringGroups();
  const monitorCount = monitorGroups.reduce((total, group) => total + group.monitors.length, 0);
  elements.viewContent.innerHTML = `
    <div class="network-intro">
      <div><strong>GROUPED RELATION VIEW</strong><p>自由配置ではなく、関係の種類ごとにグループ化して表示しています。</p></div>
      <div class="network-legend"><span><i class="legend-line gold"></i>血縁</span><span><i class="legend-line steel"></i>監視</span><span><i class="legend-line red"></i>後ろ盾</span></div>
    </div>

    <section class="network-section" id="familyRelations">
      <header class="network-section-heading"><div><span>ROYAL FAMILY</span><h2>王妃 → 王子 → 陣営</h2></div><p>${queenGroups.length}人の王妃・14人の王子</p></header>
      <div class="family-grid">${queenGroups.map(familyGroupHtml).join("")}</div>
    </section>

    <section class="network-section" id="monitorRelations">
      <header class="network-section-heading"><div><span>SURVEILLANCE</span><h2>監視元 → 監視先</h2></div><p>${monitorCount}名の監視担当</p></header>
      <div class="monitor-grid">${monitorGroups.map(monitoringGroupHtml).join("")}</div>
    </section>

    <section class="network-section mafia-network-section" id="mafiaRelations">
      <header class="network-section-heading"><div><span>ROYAL BACKING</span><h2>王子 → 後ろ盾となるマフィア</h2></div><p>${mafiaBackingRelations.length}組の関係</p></header>
      <div class="mafia-relation-grid">${mafiaBackingRelations.map(mafiaRelationHtml).join("")}</div>
    </section>`;
  hydrateImages();
}

function renderQueenDetail(key) {
  const group = queenGroups.find(item => item.key === key);
  if (!group) return renderNetwork();
  const queenCharacter = { ...group.mother, force: "カキン王室" };
  elements.viewContent.innerHTML = `
    <div class="person-detail">
      <button class="back-button" data-back="network" type="button">← 相関画面に戻る</button>
      <section class="detail-hero">
        ${imageHtml(queenCharacter, "hero-image")}
        <div><p>ROYAL FAMILY</p><h2>${escapeHtml(group.mother.name)}</h2><p>${escapeHtml(group.mother.title)}</p><p>王子たちの母。王妃を起点とした親子関係を表示しています。</p></div>
      </section>
      <section class="member-section"><h3>実子</h3><div class="member-grid">${group.princes.map(prince => memberCardHtml(prince)).join("")}</div></section>
    </div>`;
  hydrateImages();
}

function getEventPeople(event) {
  return event.relatedPersonIds
    .map(personId => characters.find(character => String(character.id) === String(personId)))
    .filter(Boolean);
}

function getTimelineFilterOptions() {
  const personIds = [...new Set(timelineEvents.flatMap(event => event.relatedPersonIds).map(String))];
  const people = personIds
    .map(id => characters.find(character => String(character.id) === id))
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name, "ja"));
  const forces = [...new Set(timelineEvents.flatMap(event => event.relatedForces))]
    .sort((a, b) => getForceOrder(a) - getForceOrder(b));
  return { people, forces };
}

function filterTimelineEvents() {
  const keyword = app.timelineSearch.trim().toLowerCase();
  return timelineEvents.filter(event => {
    if (app.statusMode === "safe" && event.spoiler?.hideInSafeMode) return false;
    if (app.timelineType !== "すべて" && event.primaryType !== app.timelineType) return false;
    if (app.timelinePerson && !event.relatedPersonIds.some(id => String(id) === app.timelinePerson)) return false;
    if (app.timelineForce && !event.relatedForces.includes(app.timelineForce)) return false;

    const peopleNames = getEventPeople(event).map(person => person.name).join(" ");
    const searchText = [
      event.title,
      event.summary,
      event.detail,
      event.primaryType,
      ...(event.tags || []),
      peopleNames,
      ...(event.relatedForces || [])
    ].join(" ").toLowerCase();
    return searchText.includes(keyword);
  });
}

function sortTimelineEvents(events) {
  const sorted = [...events].sort((a, b) => {
    if (app.timelineAxis === "episode") {
      return (
        a.episode.number - b.episode.number ||
        (a.episode.order || 999) - (b.episode.order || 999) ||
        a.displayOrder - b.displayOrder
      );
    }

    const aDay = a.voyage.day ?? 9999;
    const bDay = b.voyage.day ?? 9999;
    return (
      (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999) ||
      aDay - bDay ||
      (a.voyage.orderInDay ?? 9999) - (b.voyage.orderInDay ?? 9999) ||
      a.episode.number - b.episode.number
    );
  });
  return app.timelineSort === "desc" ? sorted.reverse() : sorted;
}

function timelineGroupLabel(event) {
  if (app.timelineAxis === "episode") return `第${event.episode.number}話`;
  return event.voyage.day == null ? "日時不明" : `航海${event.voyage.day}日目`;
}

function groupTimelineEvents(events) {
  const groups = [];
  events.forEach(event => {
    const label = timelineGroupLabel(event);
    let group = groups.find(item => item.label === label);
    if (!group) {
      group = { label, events: [] };
      groups.push(group);
    }
    group.events.push(event);
  });
  return groups;
}

function eventTypeClass(type) {
  const typeMap = {
    "戦闘": "combat",
    "死亡・離脱": "death",
    "監視・配置": "monitoring",
    "交渉": "negotiation",
    "念能力": "nen",
    "王室": "royal",
    "マフィア": "mafia-event",
    "ハンター協会": "hunter-event"
  };
  return typeMap[type] || "other-event";
}

function timelinePersonChips(event) {
  const people = getEventPeople(event);
  const visible = people.slice(0, 4);
  return `
    ${visible.map(person => `
      <button class="event-person-chip" data-person-id="${person.id}" type="button">
        ${networkPortraitHtml(person)}<span>${escapeHtml(person.name)}</span>
      </button>`).join("")}
    ${people.length > visible.length ? `<span class="more-chip">ほか${people.length - visible.length}名</span>` : ""}`;
}

function timelineForceChips(event) {
  const visible = event.relatedForces.slice(0, 4);
  return `
    ${visible.map(force => `<button class="event-force-chip" data-force="${escapeHtml(force)}" type="button">${escapeHtml(force)}</button>`).join("")}
    ${event.relatedForces.length > visible.length ? `<span class="more-chip">ほか${event.relatedForces.length - visible.length}勢力</span>` : ""}`;
}

function eventImageHtml(event) {
  if (!event.image?.src) return "";

  return `
    <figure class="event-image">
      <img src="${escapeHtml(event.image.src)}" alt="${escapeHtml(event.image.alt || "")}" loading="lazy" decoding="async" data-event-image>
      ${event.image.caption ? `<figcaption>${escapeHtml(event.image.caption)}</figcaption>` : ""}
    </figure>`;
}

function eventTimeText(event) {
  if (app.timelineAxis === "episode") {
    return event.voyage.day == null
      ? "航海日不明"
      : `航海${event.voyage.day}日目 ${event.voyage.timeLabel || "時刻不明"}`;
  }
  return `第${event.episode.number}話`;
}

function eventCardHtml(event) {
  const expanded = app.expandedEventId === event.id;
  const location = [event.location?.tier, event.location?.place].filter(Boolean).join("・") || "場所不明";
  const estimated = [event.voyage.dayCertainty, event.voyage.orderCertainty, event.occurrenceCertainty].includes("estimated");

  return `
    <article class="timeline-event-card ${eventTypeClass(event.primaryType)} ${expanded ? "expanded" : ""}">
      <div class="timeline-event-main ${event.image?.src ? "has-image" : ""}">
        <div class="event-meta-column"><strong>${escapeHtml(event.voyage.timeLabel || "時刻不明")}</strong><small>${escapeHtml(eventTimeText(event))}</small></div>
        ${eventImageHtml(event)}
        <div class="event-copy">
          <div class="event-title-row"><h3>${escapeHtml(event.title)}</h3><span class="event-type">${escapeHtml(event.primaryType)}</span></div>
          <p>${escapeHtml(event.summary)}</p>
          <div class="event-submeta"><span>${escapeHtml(location)}</span>${estimated ? `<span class="estimated-label">推定を含む</span>` : ""}</div>
        </div>
        <button class="event-expand-button" data-event-id="${event.id}" type="button">${expanded ? "閉じる" : "詳細を見る"} ${expanded ? "↑" : "→"}</button>
      </div>
      <div class="event-relations">
        ${event.relatedPersonIds.length ? `<div><small>関係人物</small><div class="event-chip-list">${timelinePersonChips(event)}</div></div>` : ""}
        ${event.relatedForces.length ? `<div><small>関係勢力</small><div class="event-chip-list">${timelineForceChips(event)}</div></div>` : ""}
      </div>
      ${expanded ? `
        <div class="event-detail-panel">
          <dl>
            <div><dt>掲載話</dt><dd>第${event.episode.number}話</dd></div>
            <div><dt>航海日時</dt><dd>${event.voyage.day == null ? "不明" : `${event.voyage.day}日目`} ${escapeHtml(event.voyage.timeLabel || "時刻不明")}</dd></div>
            <div><dt>確度</dt><dd>${event.occurrenceCertainty === "estimated" ? "推定" : "確定"}</dd></div>
          </dl>
          ${event.detail ? `<p>${escapeHtml(event.detail)}</p>` : ""}
          ${event.voyage.chronologyNote ? `<p class="chronology-note">時系列メモ：${escapeHtml(event.voyage.chronologyNote)}</p>` : ""}
        </div>` : ""}
    </article>`;
}

function renderTimeline() {
  const options = getTimelineFilterOptions();
  const events = sortTimelineEvents(filterTimelineEvents());
  const groups = groupTimelineEvents(events);
  const activeTypes = ["すべて", ...timelineEventTypes.filter(type => timelineEvents.some(event => event.primaryType === type))];

  elements.viewContent.innerHTML = `
    <section class="timeline-toolbar">
      <label class="timeline-search"><span>⌕</span><input id="timelineSearchInput" type="search" value="${escapeHtml(app.timelineSearch)}" placeholder="事件名・人物名・勢力名で検索"></label>
      <div class="timeline-control-row">
        <div class="timeline-axis-switch">
          <button class="${app.timelineAxis === "voyage" ? "active" : ""}" data-timeline-axis="voyage" type="button">航海日</button>
          <button class="${app.timelineAxis === "episode" ? "active" : ""}" data-timeline-axis="episode" type="button">話数</button>
        </div>
        <div class="timeline-type-filters">${activeTypes.map(type => `<button class="${app.timelineType === type ? "active" : ""}" data-event-type="${escapeHtml(type)}" type="button">${escapeHtml(type)}</button>`).join("")}</div>
        <button class="timeline-sort" data-timeline-sort type="button">${app.timelineSort === "asc" ? "古い順" : "新しい順"} ↕</button>
      </div>
      <div class="timeline-select-row">
        <label>人物<select id="timelinePersonFilter"><option value="">指定なし</option>${options.people.map(person => `<option value="${person.id}" ${app.timelinePerson === String(person.id) ? "selected" : ""}>${escapeHtml(person.name)}</option>`).join("")}</select></label>
        <label>勢力<select id="timelineForceFilter"><option value="">指定なし</option>${options.forces.map(force => `<option value="${escapeHtml(force)}" ${app.timelineForce === force ? "selected" : ""}>${escapeHtml(force)}</option>`).join("")}</select></label>
        <button class="text-button" data-clear-timeline type="button">条件をクリア</button>
      </div>
    </section>

    <div class="timeline-results-meta"><span>${events.length}件のイベントを表示</span><span>${app.timelineAxis === "voyage" ? "航海日順" : "話数順"}</span></div>
    ${app.statusMode === "safe" ? `<div class="timeline-safe-notice">SAFE MODE：機密指定されたイベントは表示していません。</div>` : ""}
    ${events.length ? `
      <div class="timeline-list">
        ${groups.map(group => `
          <section class="timeline-group">
            <div class="timeline-group-marker"><span>${escapeHtml(group.label)}</span></div>
            <div class="timeline-group-events">${group.events.map(eventCardHtml).join("")}</div>
          </section>`).join("")}
      </div>` : `<div class="no-results">条件に一致するイベントがありません。<br>検索語または絞り込み条件を変更してください。</div>`}`;
  hydrateImages();
  elements.viewContent.querySelectorAll("img[data-event-image]").forEach(image => {
    image.addEventListener("error", () => {
      image.closest(".timeline-event-main")?.classList.remove("has-image");
      image.closest(".event-image")?.setAttribute("hidden", "");
    }, { once: true });
  });
}

function getMapVisibleEvents() {
  return [...timelineEvents]
    .filter(event => event.location?.locationIds?.length)
    .filter(event => app.statusMode !== "safe" || !event.spoiler?.hideInSafeMode)
    .sort((a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999));
}

function getSelectedMapEvent(events) {
  const selected = events.find(event => event.id === app.mapSelectedEventId);
  if (selected) return selected;
  app.mapSelectedEventId = events[0]?.id || null;
  return events[0] || null;
}

function mapEventTimeLabel(event) {
  if (event.voyage.day != null) {
    return `航海${event.voyage.day}日目 ${event.voyage.timeLabel || "時刻不明"}`;
  }
  return event.voyage.timeLabel || "日時不明";
}

function getMapVisualItems(event) {
  if (!event) return [];

  const majorEvent = {
    id: event.id,
    title: event.title,
    mapLabel: event.mapLabel || event.title,
    locationIds: event.location?.locationIds || [],
    importance: "major"
  };
  const subEvents = mapSubEvents
    .filter(subEvent => subEvent.parentEventId === event.id)
    .map(subEvent => ({
      ...subEvent,
      mapLabel: subEvent.mapLabel || subEvent.label || subEvent.title,
      locationIds: subEvent.locationIds || [subEvent.locationId].filter(Boolean),
      importance: "minor"
    }));
  return [majorEvent, ...subEvents];
}

function mapItemLocations(item) {
  return item.locationIds.map(getShipMapLocation).filter(Boolean);
}

function isResidenceMapLocation(location) {
  if (!location) return false;
  if (location.type === "room" || location.id === shipMapData.residence.id) return true;
  let parentId = location.parentId;
  while (parentId) {
    if (parentId === shipMapData.residence.id) return true;
    parentId = getShipMapLocation(parentId)?.parentId;
  }
  return false;
}

function mapItemHtml(item, className) {
  return `<div class="${className} ${item.importance === "minor" ? "minor" : "major"}" title="${escapeHtml(item.title || item.mapLabel)}">${escapeHtml(item.mapLabel)}</div>`;
}

function residenceRoomHtml(roomId, visualItems) {
  const room = getShipMapLocation(roomId);
  const events = visualItems.filter(item => item.locationIds.includes(roomId));
  return `
    <div class="map-room ${events.length ? "has-event" : ""}" style="--room-row:${room.grid.row};--room-column:${room.grid.column}" aria-label="${escapeHtml(room.name)}${events.length ? `・${escapeHtml(events.map(item => item.title).join("・"))}` : ""}">
      <strong>${escapeHtml(room.roomNumber)}</strong>
      ${events.length ? `<div class="map-room-events">${events.map(item => mapItemHtml(item, "map-room-event")).join("")}</div>` : ""}
    </div>`;
}

function residenceMapHtml(visualItems) {
  const commonAreaIds = shipMapData.residence.commonAreaIds;
  const commonEvents = visualItems.filter(item => item.locationIds.some(locationId => commonAreaIds.includes(locationId)));
  return `
    <section class="residence-map-panel" aria-labelledby="residenceMapTitle">
      <div class="map-panel-heading">
        <div><h2 id="residenceMapTitle">V・VIP居住区</h2><span>PRINCES' QUARTERS</span></div>
        <small>第1層</small>
      </div>
      <div class="residence-common-area ${commonEvents.length ? "has-event" : ""}">
        <span>V・VIP共用部</span>
        ${commonEvents.map(item => mapItemHtml(item, "map-common-event")).join("")}
      </div>
      <div class="residence-room-grid">
        ${shipMapData.residence.roomIds.map(roomId => residenceRoomHtml(roomId, visualItems)).join("")}
      </div>
    </section>`;
}

function tierMapHtml(tier, visualItems) {
  const tierItems = visualItems.filter(item => mapItemLocations(item).some(location => location.tierIds?.includes(tier.id)));
  const exactTierItems = tierItems.filter(item => mapItemLocations(item).some(location => (
    location.tierIds?.includes(tier.id) &&
    location.type !== "ship" &&
    location.type !== "external" &&
    !isResidenceMapLocation(location)
  )));
  const areas = tier.areaIds
    .map(getShipMapLocation)
    .filter(Boolean);

  return `
    <div class="ship-tier ${tierItems.length ? "has-event" : ""}" data-map-tier="${tier.id}">
      <strong class="ship-tier-name">${escapeHtml(tier.name)}</strong>
      <div class="ship-tier-content">
        <div class="ship-tier-areas">${areas.map(area => `<span>${escapeHtml(area.name)}</span>`).join("")}</div>
        ${exactTierItems.length ? `<div class="ship-tier-events">${exactTierItems.map(item => mapItemHtml(item, "ship-tier-event")).join("")}</div>` : ""}
      </div>
    </div>`;
}

function overallMapHtml(visualItems) {
  const shipWideItems = visualItems.filter(item => mapItemLocations(item).some(location => location.type === "ship"));
  const externalItems = visualItems.filter(item => mapItemLocations(item).some(location => location.type === "external"));
  return `
    <section class="overall-map-panel" aria-labelledby="overallMapTitle">
      <div class="map-panel-heading">
        <div><h2 id="overallMapTitle">ブラックホエール号 全体マップ</h2><span>ALL TIERS</span></div>
        <small>第1層―第5層</small>
      </div>
      ${shipWideItems.length ? `<div class="map-wide-event ship-wide">${shipWideItems.map(item => mapItemHtml(item, "map-wide-event-label")).join("")}</div>` : ""}
      ${externalItems.length ? `<div class="map-wide-event external">船外：${externalItems.map(item => mapItemHtml(item, "map-wide-event-label")).join("")}</div>` : ""}
      <div class="ship-tier-stack">
        ${shipMapData.tiers.map(tier => tierMapHtml(tier, visualItems)).join("")}
      </div>
    </section>`;
}

function mapTimelineEventHtml(event, selected) {
  return `
    <button class="map-timeline-event ${selected ? "active" : ""}" data-map-event-id="${event.id}" type="button" aria-pressed="${selected}">
      <span>${escapeHtml(mapEventTimeLabel(event))}</span>
      <strong>${escapeHtml(event.title)}</strong>
      <small>第${event.episode.number}話</small>
    </button>`;
}

function renderMap() {
  const events = getMapVisibleEvents();
  const selectedEvent = getSelectedMapEvent(events);
  const visualItems = getMapVisualItems(selectedEvent);

  elements.viewContent.innerHTML = selectedEvent ? `
    <section class="map-log-layout">
      <div class="map-stack">
        ${residenceMapHtml(visualItems)}
        ${overallMapHtml(visualItems)}
      </div>
      <aside class="map-timeline-rail" aria-label="主要イベント時系列">
        <div class="map-timeline-heading">
          <span>SELECTED EVENT</span>
          <strong>${escapeHtml(mapEventTimeLabel(selectedEvent))}</strong>
          <p>${escapeHtml(selectedEvent.title)}</p>
        </div>
        <div class="map-timeline-list">
          ${events.map(event => mapTimelineEventHtml(event, event.id === selectedEvent.id)).join("")}
        </div>
      </aside>
    </section>` : `<div class="no-results">表示できるマップイベントがありません。</div>`;

  const rail = elements.viewContent.querySelector(".map-timeline-list");
  if (rail) requestAnimationFrame(() => { rail.scrollTop = app.mapTimelineScroll; });
}

function renderPlaceholder(type) {
  const title = type === "network" ? "相関画面" : "時系列画面";
  const message = type === "network"
    ? "王妃・王子家系／監視配置を、次の実装段階で追加します。"
    : "航海日・話数別のイベントログを、次の実装段階で追加します。";
  elements.viewContent.innerHTML = `<div class="placeholder-view"><div><strong>${title}</strong><p>${message}</p><span class="classified">COMING NEXT PHASE</span></div></div>`;
}

function populateFilters() {
  const forceOptions = forceRecords.map(record => `<option value="${escapeHtml(record.name)}">${escapeHtml(record.name)}</option>`).join("");
  const categories = [...new Set(characters.map(character => character.category).filter(Boolean))].sort();
  elements.forceFilter.innerHTML = `<option value="">すべて</option>${forceOptions}`;
  elements.categoryFilter.innerHTML = `<option value="">すべて</option>${categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}`;
}

function setView(view, options = {}) {
  app.view = view;
  app.detail = options.detail || null;
  app.search = "";
  app.page = 1;
  elements.searchInput.value = "";
  setSidebarOpen(false);

  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  const settings = viewSettings[view];
  elements.pageTitle.textContent = settings.title;
  elements.pageEnglish.textContent = settings.english;
  elements.pageDescription.textContent = settings.description;
  elements.toolbar.hidden = view === "network" || view === "timeline" || view === "map" || app.detail;
  elements.searchInput.placeholder = settings.placeholder || "検索";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setSidebarOpen(isOpen) {
  elements.sidebar.classList.toggle("open", isOpen);
  elements.menuButton.setAttribute("aria-expanded", String(isOpen));
}

function render() {
  elements.safeModeButton.classList.toggle("active", app.statusMode === "safe");
  elements.latestModeButton.classList.toggle("active", app.statusMode === "latest");
  elements.mobileMode.textContent = app.statusMode === "safe" ? "SAFE" : "LATEST";

  if (app.detail?.type === "force") return renderForceDetail(app.detail.id);
  if (app.detail?.type === "person") return renderPersonDetail(app.detail.id);
  if (app.detail?.type === "queen") return renderQueenDetail(app.detail.id);
  if (app.view === "forces") return renderForces();
  if (app.view === "people") return renderPeople();
  if (app.view === "network") return renderNetwork();
  if (app.view === "timeline") return renderTimeline();
  if (app.view === "map") return renderMap();
  renderPlaceholder(app.view);
}

function openPerson(id) {
  const returnView = app.view;
  const returnDetail = app.detail ? { ...app.detail } : null;
  app.view = "people";
  app.detail = { type: "person", id, returnView, returnDetail };
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === "people"));
  const settings = viewSettings.people;
  elements.pageTitle.textContent = settings.title;
  elements.pageEnglish.textContent = settings.english;
  elements.pageDescription.textContent = settings.description;
  elements.toolbar.hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openForce(name) {
  const returnView = app.view;
  const returnDetail = app.detail ? { ...app.detail } : null;
  app.view = "forces";
  app.detail = { type: "force", id: name, returnView, returnDetail };
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === "forces"));
  const settings = viewSettings.forces;
  elements.pageTitle.textContent = settings.title;
  elements.pageEnglish.textContent = settings.english;
  elements.pageDescription.textContent = settings.description;
  elements.toolbar.hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack(fallbackView) {
  const previousDetail = app.detail?.returnDetail;
  if (!previousDetail) {
    setView(fallbackView);
    return;
  }

  const previousView = app.detail.returnView || fallbackView;
  app.view = previousView;
  app.detail = previousDetail;
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === previousView));
  const settings = viewSettings[previousView];
  elements.pageTitle.textContent = settings.title;
  elements.pageEnglish.textContent = settings.english;
  elements.pageDescription.textContent = settings.description;
  elements.toolbar.hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
elements.menuButton.setAttribute("aria-expanded", "false");
elements.menuButton.addEventListener("click", () => setSidebarOpen(!elements.sidebar.classList.contains("open")));
elements.sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && elements.sidebar.classList.contains("open")) setSidebarOpen(false);
});
elements.searchInput.addEventListener("input", event => {
  app.search = event.target.value;
  app.page = 1;
  render();
});
elements.groupTabs.addEventListener("click", event => {
  const button = event.target.closest("button[data-group]");
  if (!button) return;
  app.group = button.dataset.group;
  app.page = 1;
  elements.groupTabs.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  render();
});
elements.filterButton.addEventListener("click", () => {
  elements.filterPanel.hidden = !elements.filterPanel.hidden;
});
elements.forceFilter.addEventListener("change", event => { app.forceFilter = event.target.value; app.page = 1; render(); });
elements.categoryFilter.addEventListener("change", event => { app.categoryFilter = event.target.value; app.page = 1; render(); });
elements.clearFilters.addEventListener("click", () => {
  app.forceFilter = "";
  app.categoryFilter = "";
  elements.forceFilter.value = "";
  elements.categoryFilter.value = "";
  render();
});
elements.safeModeButton.addEventListener("click", () => { app.statusMode = "safe"; render(); });
elements.latestModeButton.addEventListener("click", () => { app.statusMode = "latest"; render(); });

elements.viewContent.addEventListener("click", event => {
  const force = event.target.closest("[data-force]");
  if (force) return openForce(force.dataset.force);
  const person = event.target.closest("[data-person-id]");
  if (person) return openPerson(person.dataset.personId);
  const queen = event.target.closest("[data-queen-key]");
  if (queen) {
    app.detail = { type: "queen", id: queen.dataset.queenKey };
    elements.toolbar.hidden = true;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const mapEventButton = event.target.closest("[data-map-event-id]");
  if (mapEventButton) {
    app.mapTimelineScroll = mapEventButton.closest(".map-timeline-list")?.scrollTop || 0;
    app.mapSelectedEventId = mapEventButton.dataset.mapEventId;
    renderMap();
    return;
  }
  const axis = event.target.closest("[data-timeline-axis]");
  if (axis) { app.timelineAxis = axis.dataset.timelineAxis; app.expandedEventId = null; render(); return; }
  const eventType = event.target.closest("[data-event-type]");
  if (eventType) { app.timelineType = eventType.dataset.eventType; app.expandedEventId = null; render(); return; }
  const sort = event.target.closest("[data-timeline-sort]");
  if (sort) { app.timelineSort = app.timelineSort === "asc" ? "desc" : "asc"; render(); return; }
  const eventButton = event.target.closest("[data-event-id]");
  if (eventButton) { app.expandedEventId = app.expandedEventId === eventButton.dataset.eventId ? null : eventButton.dataset.eventId; render(); return; }
  const clearTimeline = event.target.closest("[data-clear-timeline]");
  if (clearTimeline) {
    app.timelineSearch = ""; app.timelineType = "すべて"; app.timelinePerson = ""; app.timelineForce = ""; app.expandedEventId = null; render(); return;
  }
  const page = event.target.closest("[data-page]");
  if (page) { app.page = Number(page.dataset.page); render(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const back = event.target.closest("[data-back]");
  if (back) goBack(back.dataset.back);
});

elements.viewContent.addEventListener("input", event => {
  if (event.target.id !== "timelineSearchInput") return;
  app.timelineSearch = event.target.value;
  app.expandedEventId = null;
  render();
  const input = document.getElementById("timelineSearchInput");
  if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
});

elements.viewContent.addEventListener("change", event => {
  if (event.target.id === "timelinePersonFilter") app.timelinePerson = event.target.value;
  else if (event.target.id === "timelineForceFilter") app.timelineForce = event.target.value;
  else return;
  app.expandedEventId = null;
  render();
});

elements.viewContent.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const clickable = event.target.closest("[data-person-id], [data-force], [data-queen-key]");
  if (!clickable) return;
  event.preventDefault();
  if (clickable.dataset.force) return openForce(clickable.dataset.force);
  if (clickable.dataset.personId) return openPerson(clickable.dataset.personId);
  app.detail = { type: "queen", id: clickable.dataset.queenKey, returnView: "network" };
  elements.toolbar.hidden = true;
  render();
});

populateFilters();
render();
