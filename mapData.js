/*
  ブラックホエール号の場所マスタと、時系列イベントのマップ位置対応

  baseVisibleはイベント未選択時にも層内のエリア名として表示する場所を示します。
  mapSubEventsは、主要イベントを選択した間だけ表示する小イベント用です。
*/

const shipMapData = {
  id: "black-whale",
  name: "ブラックホエール号",
  tiers: [
    {
      id: "tier-1",
      name: "第1層",
      areaIds: [
        "area-tier-1-royal-residence",
        "area-tier-1-prince-residence",
        "area-tier-1-prince-recreation",
        "area-tier-1-guest-house",
        "area-tier-1-beyond-detention"
      ]
    },
    {
      id: "tier-2",
      name: "第2層",
      areaIds: [
        "area-tier-2-general-rooms",
        "area-tier-2-theater",
        "area-tier-2-judiciary"
      ]
    },
    {
      id: "tier-3",
      name: "第3層",
      areaIds: [
        "area-tier-3-general-rooms",
        "area-tier-3-first-class-rooms",
        "area-tier-3-waiting-room",
        "area-tier-3-central-medical",
        "area-tier-3-central-court",
        "area-tier-3-central-police"
      ]
    },
    {
      id: "tier-4",
      name: "第4層",
      areaIds: [
        "area-tier-4-general-rooms",
        "area-tier-4-kakin-army-conference",
        "area-tier-4-central-passage"
      ]
    },
    {
      id: "tier-5",
      name: "第5層",
      areaIds: [
        "area-tier-5-general-rooms",
        "area-tier-5-dining-passage",
        "area-tier-5-central-dining",
        "area-tier-5-warehouse"
      ]
    }
  ],
  locations: [
    { id: "ship-wide", name: "船全体", type: "ship", tierIds: ["tier-1", "tier-2", "tier-3", "tier-4", "tier-5"], baseVisible: false },
    { id: "off-ship", name: "船外", type: "external", tierIds: [], baseVisible: false },

    { id: "tier-1", name: "第1層", type: "tier", tierIds: ["tier-1"], baseVisible: false },
    { id: "tier-2", name: "第2層", type: "tier", tierIds: ["tier-2"], baseVisible: false },
    { id: "tier-3", name: "第3層", type: "tier", tierIds: ["tier-3"], baseVisible: false },
    { id: "tier-4", name: "第4層", type: "tier", tierIds: ["tier-4"], baseVisible: false },
    { id: "tier-5", name: "第5層", type: "tier", tierIds: ["tier-5"], baseVisible: false },

    { id: "area-tier-1-royal-residence", name: "王居住区", type: "area", tierIds: ["tier-1"], parentId: "tier-1", baseVisible: true },
    { id: "area-tier-1-prince-residence", name: "王子居住区", type: "area", tierIds: ["tier-1"], parentId: "tier-1", baseVisible: true },
    { id: "area-tier-1-prince-recreation", name: "王子専用娯楽施設", type: "area", tierIds: ["tier-1"], parentId: "tier-1", baseVisible: true },
    { id: "area-tier-1-guest-house", name: "迎賓館（セレモニー会場）", type: "area", tierIds: ["tier-1"], parentId: "tier-1", baseVisible: true },
    { id: "area-tier-1-beyond-detention", name: "ビヨンド拘束室", type: "area", tierIds: ["tier-1"], parentId: "tier-1", baseVisible: true },
    { id: "area-tier-1-vvip-common", name: "V・VIP共用部", type: "area", tierIds: ["tier-1"], parentId: "area-tier-1-prince-residence", baseVisible: false },

    { id: "area-tier-2-general-rooms", name: "一般客室", type: "area", tierIds: ["tier-2"], parentId: "tier-2", baseVisible: true },
    { id: "area-tier-2-theater", name: "シアター会場", type: "area", tierIds: ["tier-2"], parentId: "tier-2", baseVisible: true },
    { id: "area-tier-2-judiciary", name: "司法局", type: "area", tierIds: ["tier-2"], parentId: "tier-2", baseVisible: true },

    { id: "area-tier-3-general-rooms", name: "一般客室", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-first-class-rooms", name: "1等客室", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-waiting-room", name: "待合室", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-central-medical", name: "中央医療室", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-central-court", name: "中央裁判所", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-central-police", name: "中央警察署", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: true },
    { id: "area-tier-3-central-stairs", name: "中央階段広場", type: "area", tierIds: ["tier-3"], parentId: "tier-3", baseVisible: false },

    { id: "area-tier-4-general-rooms", name: "一般客室", type: "area", tierIds: ["tier-4"], parentId: "tier-4", baseVisible: true },
    { id: "area-tier-4-kakin-army-conference", name: "カキン国王軍会議室", type: "area", tierIds: ["tier-4"], parentId: "tier-4", baseVisible: true },
    { id: "area-tier-4-central-passage", name: "中央連絡通路", type: "area", tierIds: ["tier-4"], parentId: "tier-4", baseVisible: true },

    { id: "area-tier-5-general-rooms", name: "一般客室", type: "area", tierIds: ["tier-5"], parentId: "tier-5", baseVisible: true },
    { id: "area-tier-5-dining-passage", name: "大食堂連絡通路", type: "area", tierIds: ["tier-5"], parentId: "tier-5", baseVisible: true },
    { id: "area-tier-5-central-dining", name: "中央食堂", type: "area", tierIds: ["tier-5"], parentId: "tier-5", baseVisible: true },
    { id: "area-tier-5-warehouse", name: "倉庫", type: "area", tierIds: ["tier-5"], parentId: "tier-5", baseVisible: true },
    { id: "area-tier-5-sha-a-office", name: "シャ＝ア一家事務所", type: "area", tierIds: ["tier-5"], parentId: "tier-5", baseVisible: false },

    { id: "area-tier-2-3-heil-ly-hideout", name: "エイ＝イ一家アジト", type: "area", tierIds: ["tier-2", "tier-3"], parentIds: ["tier-2", "tier-3"], baseVisible: false },

    ...Array.from({ length: 14 }, (_, index) => {
      const roomNumber = 1001 + index;
      return {
        id: `room-${roomNumber}`,
        name: `${roomNumber}号室`,
        type: "room",
        tierIds: ["tier-1"],
        parentId: "area-tier-1-prince-residence",
        roomNumber: String(roomNumber),
        grid: {
          row: roomNumber % 2 === 0 ? 1 : 2,
          column: Math.ceil((roomNumber - 1000) / 2)
        },
        baseVisible: true
      };
    })
  ],
  residence: {
    id: "area-tier-1-prince-residence",
    name: "V・VIP居住区",
    tierId: "tier-1",
    commonAreaIds: ["area-tier-1-vvip-common"],
    roomIds: Array.from({ length: 14 }, (_, index) => `room-${1001 + index}`)
  }
};

const eventMapLocations = {
  "event-0001": ["ship-wide"],
  "event-0002": ["room-1014"],
  "event-0003": ["room-1014"],
  "event-0004": ["room-1014"],
  "event-0005": ["room-1014"],
  "event-0006": ["room-1003"],
  "event-0007": ["room-1004"],
  "event-0008": ["room-1014"],
  "event-0009": ["room-1012"],
  "event-0010": ["room-1014"],
  "event-0011": ["room-1014"],
  "event-0012": ["room-1014"],
  "event-0013": ["room-1014"],
  "event-0014": ["room-1014"],
  "event-0015": ["room-1013"],
  "event-0016": ["room-1002"],
  "event-0017": ["room-1011"],
  "event-0018": ["room-1009"],
  "event-0019": ["room-1014"],
  "event-0020": ["room-1004"],
  "event-0021": ["area-tier-5-central-dining"],
  "event-0022": ["tier-3"],
  "event-0023": ["area-tier-1-vvip-common"],
  "event-0024": ["room-1008"],
  "event-0025": ["room-1009"],
  "event-0026": ["room-1008"],
  "event-0027": ["area-tier-1-guest-house"],
  "event-0028": ["off-ship"],
  "event-0029": ["area-tier-5-sha-a-office"],
  "event-0030": ["room-1004"],
  "event-0031": ["area-tier-2-judiciary"],
  "event-0032": ["room-1009"],
  "event-0033": ["room-1009"],
  "event-0034": ["room-1001"],
  "event-0035": ["tier-3"],
  "event-0036": ["tier-3"],
  "event-0037": ["room-1014"],
  "event-0038": ["area-tier-1-beyond-detention"],
  "event-0039": ["room-1003", "room-1005", "room-1014"],
  "event-0040": ["room-1011"],
  "event-0041": ["room-1004"],
  "event-0042": ["room-1001", "room-1002", "room-1003", "room-1004", "room-1005", "room-1006", "room-1007", "room-1013", "room-1014"],
  "event-0043": ["area-tier-2-judiciary"],
  "event-0044": ["area-tier-2-judiciary"],
  "event-0045": ["area-tier-3-central-medical"],
  "event-0046": ["area-tier-3-central-stairs"],
  "event-0047": ["area-tier-2-3-heil-ly-hideout"],
  "event-0048": ["ship-wide"],
  "event-0049": ["area-tier-2-judiciary"],
  "event-0050": ["area-tier-2-judiciary"],
  "event-0051": ["room-1014"],
  "event-0052": ["room-1014"],
  "event-0053": ["room-1014"],
  "event-0054": ["room-1014"],
  "event-0055": ["area-tier-1-beyond-detention"],
  "event-0056": ["tier-1"],
  "event-0057": ["room-1001"],
  "event-0058": ["room-1007"],
  "event-0059": ["room-1014"],
  "event-0060": ["room-1014"]
};

const mapSubEvents = [];

function getShipMapLocation(locationId) {
  return shipMapData.locations.find(location => location.id === locationId) || null;
}

function getEventMapLocations(event) {
  return (event?.location?.locationIds || [])
    .map(getShipMapLocation)
    .filter(Boolean);
}

function getEventMapTierIds(event) {
  return [...new Set(getEventMapLocations(event).flatMap(location => location.tierIds || []))];
}

function attachEventMapLocations(events) {
  events.forEach(event => {
    const locationIds = eventMapLocations[event.id];
    if (!locationIds) return;
    const locations = locationIds.map(getShipMapLocation).filter(Boolean);
    const tierIds = [...new Set(locations.flatMap(location => location.tierIds || []))];
    const isShipWide = locations.some(location => location.type === "ship");
    const isExternal = locations.some(location => location.type === "external");

    event.location.locationIds = [...locationIds];
    event.location.tierIds = tierIds;
    event.location.certainty = "confirmed";

    if (isShipWide) {
      event.location.tier = null;
      event.location.place = "船全体";
      return;
    }

    if (isExternal) {
      event.location.tier = null;
      event.location.place = "船外";
      return;
    }

    event.location.tier = tierIds
      .map(tierId => shipMapData.tiers.find(tier => tier.id === tierId)?.name)
      .filter(Boolean)
      .join("・") || null;

    if (!event.location.place || locations.length > 1) {
      event.location.place = locations
        .filter(location => location.type !== "tier")
        .map(location => location.name)
        .join("・");
    }
  });
}

function validateShipMapData(events) {
  const errors = [];
  const locationIds = shipMapData.locations.map(location => location.id);
  const locationIdSet = new Set(locationIds);
  const tierIdSet = new Set(shipMapData.tiers.map(tier => tier.id));
  const eventIdSet = new Set(events.map(event => event.id));

  if (locationIdSet.size !== locationIds.length) errors.push("場所IDが重複しています。");

  shipMapData.locations.forEach(location => {
    (location.tierIds || []).forEach(tierId => {
      if (!tierIdSet.has(tierId)) errors.push(`${location.id}: 未定義の層ID ${tierId}`);
    });
    [location.parentId, ...(location.parentIds || [])].filter(Boolean).forEach(parentId => {
      if (!locationIdSet.has(parentId)) errors.push(`${location.id}: 未定義の親場所ID ${parentId}`);
    });
  });

  shipMapData.tiers.forEach(tier => {
    tier.areaIds.forEach(areaId => {
      if (!locationIdSet.has(areaId)) errors.push(`${tier.id}: 未定義のエリアID ${areaId}`);
    });
  });

  Object.entries(eventMapLocations).forEach(([eventId, mappedLocationIds]) => {
    if (!eventIdSet.has(eventId)) errors.push(`未定義のイベントID ${eventId}`);
    mappedLocationIds.forEach(locationId => {
      if (!locationIdSet.has(locationId)) errors.push(`${eventId}: 未定義の場所ID ${locationId}`);
    });
  });

  events.forEach(event => {
    if (!eventMapLocations[event.id]) errors.push(`${event.id}: マップ場所が未設定です。`);
  });

  mapSubEvents.forEach(subEvent => {
    if (!eventIdSet.has(subEvent.parentEventId)) errors.push(`${subEvent.id}: 未定義の親イベント ${subEvent.parentEventId}`);
    if (!locationIdSet.has(subEvent.locationId)) errors.push(`${subEvent.id}: 未定義の場所ID ${subEvent.locationId}`);
  });

  return errors;
}

attachEventMapLocations(timelineEvents);

const shipMapDataErrors = validateShipMapData(timelineEvents);
if (shipMapDataErrors.length) {
  throw new Error(`マップデータの整合性エラー:\n${shipMapDataErrors.join("\n")}`);
}
