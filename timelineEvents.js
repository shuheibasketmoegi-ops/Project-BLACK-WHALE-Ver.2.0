/*
  王位継承編の時系列データ

  新しいイベントは、timelineEvents配列の末尾へ同じ形式で追加します。
  relatedPersonIdsはcharacters.jsのid、relatedForcesはforce名と一致させます。
*/

const timelineEventTypes = [
  "戦闘",
  "死亡・離脱",
  "監視・配置",
  "交渉",
  "念能力",
  "王室",
  "マフィア",
  "ハンター協会",
  "その他"
];

const timelineEvents = [
  {
    id: "event-0001",
    title: "ブラック・ホエール号―出航",
    summary: "",
    detail: "",
    image: {
      src: "images/timeline/event-0001.png",
      alt: "海上を進むブラック・ホエール号",
      caption: ""
    },
    episode: { number: 359, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "12:00",
      timeLabel: "12:00",
      orderInDay: 1,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "",
      certainty: "unknown"
    },
    primaryType: "王室",
    tags: ["出航", "ブラック・ホエール号"],
    relatedPersonIds: [],
    relatedForces: [],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 359, hideInSafeMode: false },
    displayOrder: 1
  },
  {
    id: "event-0002",
    title: "ウッディ死亡",
    summary: "",
    detail: "",
    image: {
      src: "images/timeline/event-0002.png",
      alt: "便器の前で座り込むウッディ",
      caption: ""
    },
    episode: { number: 359, order: 2 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（昼）",
      orderInDay: 2,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "死亡・離脱",
    tags: ["死亡", "1014号室"],
    relatedPersonIds: ["011"],
    relatedForces: ["第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 359, hideInSafeMode: true },
    displayOrder: 2
  },
  {
    id: "event-0003",
    title: "壷中卵の儀―発現",
    summary: "王子の守護霊獣たちが集結",
    detail: "第6,7,12,13王子の守護霊獣が1014号室に集まる",
    image: {
      src: "images/timeline/event-0003.png",
      alt: "1014号室に現れた王子たちの守護霊獣",
      caption: ""
    },
    episode: { number: 360, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（昼）",
      orderInDay: 3,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["王子", "守護霊獣", "1014号室"],
    relatedPersonIds: [6, 7, 12, 13, 14],
    relatedForces: [
      "第6王子陣営", "第7王子陣営", "第12王子陣営",
      "第13王子陣営", "第14王子陣営"
    ],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 360, hideInSafeMode: false },
    displayOrder: 3
  },
  {
    id: "event-0004",
    title: "ワブル王子警護兵が壊滅",
    summary: "1014号室の警護が2人になる",
    detail: "",
    image: {
      src: "images/timeline/event-0004.png",
      alt: "1014号室で警護人数について話すクラピカたち",
      caption: ""
    },
    episode: { number: 361, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "14:00",
      timeLabel: "14:00",
      orderInDay: 4,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "監視・配置",
    tags: ["警護", "1014号室"],
    relatedPersonIds: [],
    relatedForces: [],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 361, hideInSafeMode: false },
    displayOrder: 4
  },
  {
    id: "event-0005",
    title: "ビンセント襲撃",
    summary: "第1王子私設兵ビンセントが1014号室を襲撃",
    detail: "クラピカの絶対時間（エンペラータイム）開始。1秒につき1時間寿命が縮まる",
    image: {
      src: "images/timeline/event-0005.png",
      alt: "大柄な男性に肩を押さえられるクラピカ",
      caption: ""
    },
    episode: { number: 364, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "15:00",
      timeLabel: "推定15:00頃",
      orderInDay: 5,
      orderCertainty: "estimated",
      chronologyNote: "時刻は推定"
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "戦闘",
    tags: ["襲撃", "絶対時間", "エンペラータイム", "1014号室"],
    relatedPersonIds: [102],
    relatedForces: ["第1王子陣営", "第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 364, hideInSafeMode: false },
    displayOrder: 5
  },
  {
    id: "event-0006",
    title: "ワブル王子陣営、チョウライと面会",
    summary: "クラピカの一斉アナウンスにより第３王子チョウライが面会を希望",
    detail: "",
    image: {
      src: "images/timeline/event-0006.png",
      alt: "チョウライの背後に現れた守護霊獣",
      caption: ""
    },
    episode: { number: 365, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（昼）",
      orderInDay: 6,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
    },
    location: {
      tier: null,
      place: "1003号室",
      certainty: "confirmed"
    },
    primaryType: "交渉",
    tags: ["面会", "1003号室"],
    relatedPersonIds: [1401, 3],
    relatedForces: ["第14王子陣営", "第3王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 365, hideInSafeMode: false },
    displayOrder: 6
  },
  {
    id: "event-0007",
    title: "マラヤームの念獣が肥大化",
    summary: "各部屋で変化が起き始める",
    detail: "",
    image: {
      src: "images/timeline/event-0007.png",
      alt: "1013号室で肥大化したマラヤームの念獣",
      caption: ""
    },
    episode: { number: 366, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "16:00",
      timeLabel: "16:00",
      orderInDay: 7,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "1013号室",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["守護霊獣", "1013号室"],
    relatedPersonIds: [13, 1302, 1202],
    relatedForces: ["第13王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 366, hideInSafeMode: false },
    displayOrder: 7
  },
  {
    id: "event-0008",
    title: "クラピカ、念能力を開示",
    summary: "第1,3,5王子私設兵が1014号室に入室",
    detail: "オイトが\"裏窓\"（リトルアイ）を発動し、1014号室の調査を開始",
    image: {
      src: "images/timeline/event-0008.png",
      alt: "念能力の一端を見せると話すクラピカ",
      caption: ""
    },
    episode: { number: 367, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "16:00",
      timeLabel: "推定16:00頃",
      orderInDay: 8,
      orderCertainty: "estimated",
      chronologyNote: "時刻は推定"
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "監視・配置",
    tags: ["入室", "1014号室"],
    relatedPersonIds: [501],
    relatedForces: ["第5王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 367, hideInSafeMode: false },
    displayOrder: 8
  },
  {
    id: "event-0009",
    title: "モモゼ暗殺",
    summary: "第12王子モモゼが何者かによって暗殺される",
    detail: "絶対時間（エンペラータイム）3時間経過し、クラピカ失神。\"裏窓\"（リトルアイ）使用開始から約1時間経過",
    image: {
      src: "images/timeline/event-0009.png",
      alt: "ベッドの上に倒れているモモゼ",
      caption: ""
    },
    episode: { number: 368, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "17:00",
      timeLabel: "推定17:00頃",
      orderInDay: 9,
      orderCertainty: "estimated",
      chronologyNote: "時刻は推定"
    },
    location: {
      tier: null,
      place: "1012号室",
      certainty: "confirmed"
    },
    primaryType: "死亡・離脱",
    tags: ["暗殺", "絶対時間", "エンペラータイム", "1012号室"],
    relatedPersonIds: [12, 1401],
    relatedForces: ["第12王子陣営", "第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 368, hideInSafeMode: true },
    displayOrder: 9
  },
  {
    id: "event-0010",
    title: "クラピカ、失神から目覚める",
    summary: "",
    detail: "絶対時間（エンペラータイム）12時間経過",
    image: {
      src: "images/timeline/event-0010.png",
      alt: "ベッドで横になる人物を見守るオイトとワブル",
      caption: ""
    },
    episode: { number: 369, order: 1 },
    voyage: {
      day: 2,
      dayCertainty: "confirmed",
      time: "06:00",
      timeLabel: "6:00",
      orderInDay: 1,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "その他",
    tags: ["失神", "絶対時間", "エンペラータイム", "1014号室"],
    relatedPersonIds: [1401],
    relatedForces: ["第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 369, hideInSafeMode: false },
    displayOrder: 10
  },
  {
    id: "event-0011",
    title: "第1回念能力講習会",
    summary: "",
    detail: "",
    image: {
      src: "images/timeline/event-0011.png",
      alt: "1014号室に集まった第1回念能力講習会の参加者",
      caption: ""
    },
    episode: { number: 369, order: 2 },
    voyage: {
      day: 2,
      dayCertainty: "confirmed",
      time: "09:00",
      timeLabel: "9:00",
      orderInDay: 2,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["念能力講習会", "1014号室"],
    relatedPersonIds: [
      1401, 108, 103, 1303, 1301, 801, 701, 501, 502,
      403, 404, 303, 1103, 1104, 1006, 1007, 901, 902
    ],
    relatedForces: [
      "第1王子陣営", "第3王子陣営", "第4王子陣営", "第5王子陣営",
      "第7王子陣営", "第8王子陣営", "第9王子陣営", "第10王子陣営",
      "第11王子陣営", "第13王子陣営", "第14王子陣営"
    ],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 369, hideInSafeMode: false },
    displayOrder: 11
  },
  {
    id: "event-0012",
    title: "\"11人いる！\"(サイレントマジョリティー)発動",
    summary: "第13王子マラヤーム陣営・第7王妃兵バリゲンが死亡する",
    detail: "1名に黒ぼっこを視せ、別の1名をツチボッコで攻撃する能力",
    image: {
      src: "images/timeline/event-0012.png",
      alt: "床に座り込みバリゲンの名を叫ぶ男性",
      caption: ""
    },
    episode: { number: 370, order: 1 },
    voyage: {
      day: 2,
      dayCertainty: "confirmed",
      time: "09:45",
      timeLabel: "9:45",
      orderInDay: 3,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["11人いる！", "サイレントマジョリティー", "死亡", "1014号室"],
    relatedPersonIds: [1301],
    relatedForces: ["第13王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 370, hideInSafeMode: true },
    displayOrder: 12
  },

  {
    "id": "event-0013",
    "title": "第１回念能力講習会―再開",
    "summary": "",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0013.png",
      "alt": "念能力講習会を再開すると告げるクラピカ",
      "caption": ""
    },
    "episode": {
      "number": 371,
      "order": 1
    },
    "voyage": {
      "day": 2,
      "dayCertainty": "confirmed",
      "time": "10:00",
      "timeLabel": "10:00",
      "orderInDay": 4,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "念能力講習会",
      "再開",
      "1014号室"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 371,
      "hideInSafeMode": false
    },
    "displayOrder": 13
  },
  {
    "id": "event-0014",
    "title": "第１回念能力講習会―終了",
    "summary": "",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0014.png",
      "alt": "念能力講習会の終了時刻について話すクラピカ",
      "caption": ""
    },
    "episode": {
      "number": 372,
      "order": 1
    },
    "voyage": {
      "day": 2,
      "dayCertainty": "confirmed",
      "time": "12:00",
      "timeLabel": "12:00",
      "orderInDay": 5,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "念能力講習会",
      "終了",
      "1014号室"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 372,
      "hideInSafeMode": false
    },
    "displayOrder": 14
  },
  {
    "id": "event-0016",
    "title": "カミーラvsムッセ",
    "summary": "第2王子カミーラと第1王子私設兵ムッセが接敵",
    "detail": "ムッセ死亡。\"裏窓の鳥（シークレットウインドウ）\"発動。",
    "image": {
      "src": "images/timeline/event-0016.png",
      "alt": "カミーラの背後に現れた猫型の念獣",
      "caption": ""
    },
    "episode": {
      "number": 373,
      "order": 1
    },
    "voyage": {
      "day": 2,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明（夕）",
      "orderInDay": 7,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "1002号室",
      "certainty": "confirmed"
    },
    "primaryType": "戦闘",
    "tags": [
      "戦闘",
      "ムッセ死亡",
      "裏窓の鳥",
      "シークレットウインドウ",
      "1002号室"
    ],
    "relatedPersonIds": [
      2,
      107
    ],
    "relatedForces": [
      "第2王子陣営",
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 373,
      "hideInSafeMode": true
    },
    "displayOrder": 16
  },
  {
    "id": "event-0017",
    "title": "フウゲツ、守護霊獣の能力を発動",
    "summary": "",
    "detail": "\"魔法の抜け道\"（マジカルワーム）を発動",
    "image": {
      "src": "images/timeline/event-0017.png",
      "alt": "寝室で守護霊獣の能力を使うフウゲツとカチョウ",
      "caption": ""
    },
    "episode": {
      "number": 374,
      "order": 1
    },
    "voyage": {
      "day": 3,
      "dayCertainty": "confirmed",
      "time": "01:30",
      "timeLabel": "1:30",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1011号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "守護霊獣",
      "魔法の抜け道",
      "マジカルワーム",
      "1011号室"
    ],
    "relatedPersonIds": [
      11
    ],
    "relatedForces": [
      "第11王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 374,
      "hideInSafeMode": false
    },
    "displayOrder": 17
  },
  {
    "id": "event-0018",
    "title": "ハルケンブルグの守護霊獣による鳴動",
    "summary": "1回目の鳴動",
    "detail": "この様子を第1王子私設兵シカクが目撃、報告を行う",
    "image": {
      "src": "images/timeline/event-0018.png",
      "alt": "ハルケンブルグ陣営の周囲で発生する鳴動",
      "caption": ""
    },
    "episode": {
      "number": 375,
      "order": 1
    },
    "voyage": {
      "day": 3,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "1009号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "守護霊獣",
      "鳴動",
      "1009号室"
    ],
    "relatedPersonIds": [
      9
    ],
    "relatedForces": [
      "第9王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 375,
      "hideInSafeMode": false
    },
    "displayOrder": 18
  },
  {
    "id": "event-0019",
    "title": "\"11人いる！\"(サイレントマジョリティー)発動",
    "summary": "2回目の発動",
    "detail": "第4王子私設兵ミュハンが死亡",
    "image": {
      "src": "images/timeline/event-0019.png",
      "alt": "1014号室で発生した異変を警戒する講習会参加者",
      "caption": ""
    },
    "episode": {
      "number": 376,
      "order": 1
    },
    "voyage": {
      "day": 3,
      "dayCertainty": "confirmed",
      "time": "10:05",
      "timeLabel": "10:05",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "11人いる！",
      "サイレントマジョリティー",
      "②回目",
      "ミュハン死亡",
      "1014号室"
    ],
    "relatedPersonIds": [
      403
    ],
    "relatedForces": [
      "第4王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 376,
      "hideInSafeMode": true
    },
    "displayOrder": 19
  },
  {
    "id": "event-0020",
    "title": "水見式でツェリードニヒの念系統が判明",
    "summary": "特質系…禍々しい事だけが確か……!!",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0020.png",
      "alt": "ツェリードニヒの水見式で変化する水",
      "caption": ""
    },
    "episode": {
      "number": 376,
      "order": 2
    },
    "voyage": {
      "day": 4,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "1004号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "水見式",
      "念系統",
      "1004号室"
    ],
    "relatedPersonIds": [
      4
    ],
    "relatedForces": [
      "第4王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 376,
      "hideInSafeMode": false
    },
    "displayOrder": 20
  },
  {
    "id": "event-0021",
    "title": "幻影旅団、集結",
    "summary": "",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0021.png",
      "alt": "集結した幻影旅団の団員たち",
      "caption": ""
    },
    "episode": {
      "number": 377,
      "order": 1
    },
    "voyage": {
      "day": 4,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": "第５層",
      "place": "",
      "certainty": "confirmed"
    },
    "primaryType": "その他",
    "tags": [
      "幻影旅団",
      "集結",
      "第５層"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 377,
      "hideInSafeMode": false
    },
    "displayOrder": 21
  },
  {
    "id": "event-0022",
    "title": "フウゲツ、第３層に逃亡",
    "summary": "",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0022.png",
      "alt": "防寒着姿で第11王子と呼ばれるフウゲツ",
      "caption": ""
    },
    "episode": {
      "number": 380,
      "order": 1
    },
    "voyage": {
      "day": 4,
      "dayCertainty": "confirmed",
      "time": "10:00",
      "timeLabel": "10:00",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第３層",
      "place": "",
      "certainty": "confirmed"
    },
    "primaryType": "その他",
    "tags": [
      "逃亡",
      "第３層"
    ],
    "relatedPersonIds": [
      11
    ],
    "relatedForces": [
      "第11王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 380,
      "hideInSafeMode": false
    },
    "displayOrder": 22
  },
  {
    "id": "event-0023",
    "title": "カイザル、フウゲツの身辺監視を開始",
    "summary": "不思議な心音…",
    "detail": "司法局カイザルが第11王子フウゲツの72時間監視を開始する",
    "image": {
      "src": "images/timeline/event-0023.png",
      "alt": "カイザルがセンリツへ王子監視について話す場面",
      "caption": ""
    },
    "episode": {
      "number": 381,
      "order": 1
    },
    "voyage": {
      "day": 5,
      "dayCertainty": "confirmed",
      "time": "16:00",
      "timeLabel": "16:00",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "センリツ",
      "カイザル",
      "密談"
    ],
    "relatedPersonIds": [
      1003
    ],
    "relatedForces": [
      "第10王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 381,
      "hideInSafeMode": false
    },
    "displayOrder": 23
  },
  {
    "id": "event-0024",
    "title": "\"異邦人\"(プレデター)がサレサレの守護霊獣を捕食",
    "summary": "第1王子私設兵リハンの念能力が発動",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0024.png",
      "alt": "サレサレの守護霊獣を捕食するリハンの異邦人",
      "caption": ""
    },
    "episode": {
      "number": 381,
      "order": 2
    },
    "voyage": {
      "day": 5,
      "dayCertainty": "confirmed",
      "time": "20:00",
      "timeLabel": "20:00",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1008号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "異邦人",
      "プレデター",
      "守護霊獣",
      "捕食",
      "1008号室"
    ],
    "relatedPersonIds": [
      110,
      8
    ],
    "relatedForces": [
      "第1王子陣営",
      "第8王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 381,
      "hideInSafeMode": false
    },
    "displayOrder": 24
  },
  {
    "id": "event-0025",
    "title": "ハルケンブルグの守護霊獣による鳴動",
    "summary": "2回目の鳴動",
    "detail": "シカク⇔スミドリの人格転移",
    "image": {
      "src": "images/timeline/event-0025.png",
      "alt": "敬礼する兵士とその背後に立つ人物",
      "caption": ""
    },
    "episode": {
      "number": 382,
      "order": 1
    },
    "voyage": {
      "day": null,
      "dayCertainty": "unknown",
      "time": null,
      "timeLabel": "5日目20:00～8日目20:00の間",
      "timeRange": {
        "startDay": 5,
        "startTime": "20:00",
        "endDay": 8,
        "endTime": "20:00"
      },
      "orderInDay": 1,
      "orderCertainty": "estimated",
      "chronologyNote": "航海5日目20:00から8日目20:00までの間に発生。区間内の正確な日時は不明"
    },
    "location": {
      "tier": null,
      "place": "1009号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "守護霊獣",
      "鳴動",
      "2回目",
      "人格転移",
      "1009号室"
    ],
    "relatedPersonIds": [
      9,
      111,
      903
    ],
    "relatedForces": [
      "第9王子陣営",
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 382,
      "hideInSafeMode": false
    },
    "displayOrder": 25
  },
  {
    "id": "event-0026",
    "title": "サレサレ死亡",
    "summary": "サレサレ死亡",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0026.png",
      "alt": "ベッド上で死亡したサレサレ",
      "caption": ""
    },
    "episode": {
      "number": 382,
      "order": 2
    },
    "voyage": {
      "day": null,
      "dayCertainty": "unknown",
      "time": null,
      "timeLabel": "5日目20:00～8日目20:00の間",
      "timeRange": {
        "startDay": 5,
        "startTime": "20:00",
        "endDay": 8,
        "endTime": "20:00"
      },
      "orderInDay": 2,
      "orderCertainty": "estimated",
      "chronologyNote": "航海5日目20:00から8日目20:00までの間に発生。区間内では鳴動【2回目】の後に配置"
    },
    "location": {
      "tier": null,
      "place": "1008号室",
      "certainty": "confirmed"
    },
    "primaryType": "死亡・離脱",
    "tags": [
      "死亡",
      "1008号室"
    ],
    "relatedPersonIds": [
      8
    ],
    "relatedForces": [
      "第8王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 382,
      "hideInSafeMode": true
    },
    "displayOrder": 26
  },
  {
    "id": "event-0027",
    "title": "第一回晩餐会開始",
    "summary": "第一回晩餐会開始",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0027.png",
      "alt": "晩餐会で演奏するセンリツと会場の出席者たち",
      "caption": ""
    },
    "episode": {
      "number": 383,
      "order": 1
    },
    "voyage": {
      "day": 8,
      "dayCertainty": "confirmed",
      "time": "20:00",
      "timeLabel": "20:00",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "王室",
    "tags": [
      "第一回晩餐会",
      "晩餐会"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 383,
      "hideInSafeMode": false
    },
    "displayOrder": 29
  },
  {
    "id": "event-0028",
    "title": "カチョウ死亡",
    "summary": "カチョウ死亡",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0028.png",
      "alt": "魔法の抜け道で移動するカチョウとフウゲツ",
      "caption": ""
    },
    "episode": {
      "number": 383,
      "order": 2
    },
    "voyage": {
      "day": 8,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明（夜）",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "死亡・離脱",
    "tags": [
      "死亡"
    ],
    "relatedPersonIds": [
      10
    ],
    "relatedForces": [
      "第10王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 383,
      "hideInSafeMode": true
    },
    "displayOrder": 30
  },
  {
    "id": "event-0029",
    "title": "旅団、シャ=ア一家会談",
    "summary": "旅団、シャ=ア一家会談",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0029.png",
      "alt": "会談する幻影旅団とシャ＝ア一家の関係者",
      "caption": ""
    },
    "episode": {
      "number": 384,
      "order": 1
    },
    "voyage": {
      "day": 7,
      "dayCertainty": "confirmed",
      "time": "22:30",
      "timeLabel": "22:30",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第５層",
      "place": "",
      "certainty": "confirmed"
    },
    "primaryType": "交渉",
    "tags": [
      "幻影旅団",
      "シャ=ア一家",
      "会談",
      "第５層"
    ],
    "relatedPersonIds": [],
    "relatedForces": [
      "シャ＝ア一家"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 384,
      "hideInSafeMode": false
    },
    "displayOrder": 27
  },
  {
    "id": "event-0030",
    "title": "ツェリードニヒが発を習得して能力発動",
    "summary": "ツェリードニヒが発を習得して能力発動",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0030.png",
      "alt": "念能力の修行を続けるツェリードニヒとテータ",
      "caption": ""
    },
    "episode": {
      "number": 385,
      "order": 1
    },
    "voyage": {
      "day": 8,
      "dayCertainty": "confirmed",
      "time": "19:35",
      "timeLabel": "19:35",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "念能力",
    "tags": [
      "発",
      "能力発動"
    ],
    "relatedPersonIds": [
      4
    ],
    "relatedForces": [
      "第4王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 385,
      "hideInSafeMode": false
    },
    "displayOrder": 28
  },
  {
    "id": "event-0031",
    "title": "センリツが司法局に拘束",
    "summary": "この時間を利用して 何とか次の手を考えなくては…！",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0031.png",
      "alt": "センリツと話すカイザル",
      "caption": ""
    },
    "episode": {
      "number": 386,
      "order": 1
    },
    "voyage": {
      "day": 9,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": "第２層",
      "place": "司法局",
      "certainty": "confirmed"
    },
    "primaryType": "交渉",
    "tags": [
      "センリツ",
      "カイザル",
      "対面",
      "司法局"
    ],
    "relatedPersonIds": [
      1003
    ],
    "relatedForces": [
      "第10王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 386,
      "hideInSafeMode": false
    },
    "displayOrder": 31
  },
  {
    "id": "event-0032",
    "title": "ハルケンブルグの守護霊獣による鳴動【3回目】",
    "summary": "ハルケンブルグの守護霊獣による鳴動【3回目】",
    "detail": "シカクが1007号室前で自害",
    "image": {
      "src": "images/timeline/event-0032.png",
      "alt": "スミドリへ任務を頼むハルケンブルグ",
      "caption": ""
    },
    "episode": {
      "number": 386,
      "order": 2
    },
    "voyage": {
      "day": 9,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "1009号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "守護霊獣",
      "鳴動",
      "3回目",
      "自害",
      "1009号室",
      "1007号室"
    ],
    "relatedPersonIds": [
      9,
      111
    ],
    "relatedForces": [
      "第9王子陣営",
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 386,
      "hideInSafeMode": false
    },
    "displayOrder": 32
  },
  {
    "id": "event-0033",
    "title": "ハルケンブルグの守護霊獣による鳴動【4回目】",
    "summary": "ハルケンブルグの守護霊獣による鳴動【4回目】",
    "detail": "ビクトに人格転移が発生",
    "image": {
      "src": "images/timeline/event-0033.png",
      "alt": "4度目の鳴動を察知するクラピカ",
      "caption": ""
    },
    "episode": {
      "number": 388,
      "order": 1
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": "11:30",
      "timeLabel": "11:30",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1009号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "守護霊獣",
      "鳴動",
      "4回目",
      "人格転移",
      "1009号室"
    ],
    "relatedPersonIds": [
      9,
      105
    ],
    "relatedForces": [
      "第9王子陣営",
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 388,
      "hideInSafeMode": false
    },
    "displayOrder": 34
  },
  {
    "id": "event-0034",
    "title": "バルサミルコとカンジドルが会議",
    "summary": "バルサミルコとカンジドルが会議",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0034.png",
      "alt": "第9王子への対応を協議するバルサミルコたち",
      "caption": ""
    },
    "episode": {
      "number": 389,
      "order": 1
    },
    "voyage": {
      "day": 9,
      "dayCertainty": "confirmed",
      "time": "10:00",
      "timeLabel": "10:00",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1001号室",
      "certainty": "confirmed"
    },
    "primaryType": "交渉",
    "tags": [
      "会議",
      "1001号室"
    ],
    "relatedPersonIds": [
      101,
      113
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 389,
      "hideInSafeMode": false
    },
    "displayOrder": 33
  },
  {
    "id": "event-0035",
    "title": "ヒンリギとエイ＝イが抗争を開始する",
    "summary": "ヒンリギとエイ＝イが抗争を開始する",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0035.png",
      "alt": "エイ＝イ一家との抗争開始を告げる人物",
      "caption": ""
    },
    "episode": {
      "number": 390,
      "order": 1
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": "第３層",
      "place": "",
      "certainty": "confirmed"
    },
    "primaryType": "戦闘",
    "tags": [
      "ヒンリギ",
      "エイ＝イ",
      "抗争",
      "第３層"
    ],
    "relatedPersonIds": [
      "shu-1001"
    ],
    "relatedForces": [
      "シュウ＝ウ一家",
      "エイ＝イ一家"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 390,
      "hideInSafeMode": false
    },
    "displayOrder": 35
  },
  {
    "id": "event-0036",
    "title": "王立軍学校４期が会議",
    "summary": "王立軍学校４期が会議",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0036.png",
      "alt": "王立軍学校4期の仲間たち",
      "caption": ""
    },
    "episode": {
      "number": 394,
      "order": 1
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "王立軍学校４期",
      "会議"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 394,
      "hideInSafeMode": false
    },
    "displayOrder": 36
  },
  {
    "id": "event-0037",
    "title": "クラピカが第5王子警護兵ロンギと密約を交わす。",
    "summary": "クラピカが第5王子警護兵ロンギと密約を交わす。",
    "detail": "ロンギの\"透明言葉（ゲッコウジョウレイ）\"発動",
    "image": {
      "src": "images/timeline/event-0037.png",
      "alt": "密約を交わすロンギとクラピカ",
      "caption": ""
    },
    "episode": {
      "number": 401,
      "order": 1
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": "11:45",
      "timeLabel": "11:45",
      "orderInDay": 4,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "密約",
      "透明言葉",
      "ゲッコウジョウレイ"
    ],
    "relatedPersonIds": [
      1401,
      502
    ],
    "relatedForces": [
      "第14王子陣営",
      "第5王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 401,
      "hideInSafeMode": false
    },
    "displayOrder": 37
  },
  {
    "id": "event-0038",
    "title": "ビヨンドが誰かを呼ぶ",
    "summary": "ビヨンドが誰かを呼ぶ",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0038.png",
      "alt": "拘束されたビヨンド",
      "caption": ""
    },
    "episode": {
      "number": 401,
      "order": 2
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": "14:00",
      "timeLabel": "14:00",
      "orderInDay": 6,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "その他",
    "tags": [
      "ビヨンド"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 401,
      "hideInSafeMode": false
    },
    "displayOrder": 39
  },
  {
    "id": "event-0039",
    "title": "第３・５・１４王子の和平協定が成立",
    "summary": "第３・５・１４王子の和平協定が成立",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0039.png",
      "alt": "第3・5・14王子の和平について協議する関係者たち",
      "caption": ""
    },
    "episode": {
      "number": 402,
      "order": 1
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": "13:30",
      "timeLabel": "13:30",
      "orderInDay": 5,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "和平協定",
      "第３王子",
      "第５王子",
      "第１４王子"
    ],
    "relatedPersonIds": [
      3,
      5,
      14
    ],
    "relatedForces": [
      "第3王子陣営",
      "第5王子陣営",
      "第14王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 402,
      "hideInSafeMode": false
    },
    "displayOrder": 38
  },
  {
    "id": "event-0040",
    "title": "センリツ、カイザル、カチョウが手紙の作戦を練る",
    "summary": "センリツ、カイザル、カチョウが手紙の作戦を練る",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0040.png",
      "alt": "手紙の作戦について話すセンリツとカイザル",
      "caption": ""
    },
    "episode": {
      "number": 402,
      "order": 2
    },
    "voyage": {
      "day": 11,
      "dayCertainty": "confirmed",
      "time": "06:00",
      "timeLabel": "6:00",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "センリツ",
      "カイザル",
      "カチョウ",
      "手紙",
      "作戦"
    ],
    "relatedPersonIds": [
      1003,
      10
    ],
    "relatedForces": [
      "第10王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 402,
      "hideInSafeMode": false
    },
    "displayOrder": 42
  },
  {
    "id": "event-0041",
    "title": "ツェリードニヒの絶が10秒を切る",
    "summary": "ツェリードニヒの絶が10秒を切る",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0041.png",
      "alt": "絶の時間を計測するツェリードニヒたち",
      "caption": ""
    },
    "episode": {
      "number": 402,
      "order": 3
    },
    "voyage": {
      "day": 11,
      "dayCertainty": "confirmed",
      "time": "08:00",
      "timeLabel": "8:00",
      "orderInDay": 4,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1004号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "絶",
      "10秒",
      "1004号室"
    ],
    "relatedPersonIds": [
      4
    ],
    "relatedForces": [
      "第4王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 402,
      "hideInSafeMode": false
    },
    "displayOrder": 45
  },
  {
    "id": "event-0042",
    "title": "フウゲツが各王子に手紙を渡し終える",
    "summary": "フウゲツが各王子に手紙を渡し終える",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0042.png",
      "alt": "各王子へ手紙を渡すため移動するフウゲツたち",
      "caption": ""
    },
    "episode": {
      "number": 402,
      "order": 4
    },
    "voyage": {
      "day": 11,
      "dayCertainty": "confirmed",
      "time": "08:50",
      "timeLabel": "8:50",
      "orderInDay": 5,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "王室",
    "tags": [
      "手紙",
      "王子"
    ],
    "relatedPersonIds": [
      11
    ],
    "relatedForces": [
      "第11王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 402,
      "hideInSafeMode": false
    },
    "displayOrder": 46
  },
  {
    "id": "event-0043",
    "title": "バルサミルコとビクトが対峙する",
    "summary": "バルサミルコとビクトが対峙する",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0043.png",
      "alt": "対峙するバルサミルコとビクト",
      "caption": ""
    },
    "episode": {
      "number": 403,
      "order": 1
    },
    "voyage": {
      "day": 11,
      "dayCertainty": "confirmed",
      "time": "06:45",
      "timeLabel": "6:45",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第２層",
      "place": "司法局",
      "certainty": "confirmed"
    },
    "primaryType": "戦闘",
    "tags": [
      "対峙",
      "司法局"
    ],
    "relatedPersonIds": [
      101,
      105
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 403,
      "hideInSafeMode": false
    },
    "displayOrder": 43
  },
  {
    "id": "event-0044",
    "title": "バルサミルコがベンジャミンに定期報告を行う",
    "summary": "バルサミルコがベンジャミンに定期報告を行う",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0044.png",
      "alt": "電話で定期報告を行うバルサミルコ",
      "caption": ""
    },
    "episode": {
      "number": 403,
      "order": 2
    },
    "voyage": {
      "day": 11,
      "dayCertainty": "confirmed",
      "time": "07:50",
      "timeLabel": "7:50",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第２層",
      "place": "司法局",
      "certainty": "confirmed"
    },
    "primaryType": "監視・配置",
    "tags": [
      "定期報告",
      "司法局"
    ],
    "relatedPersonIds": [
      101,
      1
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 403,
      "hideInSafeMode": false
    },
    "displayOrder": 44
  },
  {
    "id": "event-0045",
    "title": "ハルケンブルグの肉体が死亡する",
    "summary": "ハルケンブルグの肉体が死亡する",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0045.png",
      "alt": "担架の上で死亡したハルケンブルグの肉体",
      "caption": ""
    },
    "episode": {
      "number": 404,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 1,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "死亡・離脱",
    "tags": [
      "肉体",
      "死亡"
    ],
    "relatedPersonIds": [
      9
    ],
    "relatedForces": [
      "第9王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 404,
      "hideInSafeMode": true
    },
    "displayOrder": 47
  },
  {
    "id": "event-0046",
    "title": "ハルケンブルグの葬列が始まる",
    "summary": "ハルケンブルグの葬列が始まる",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0046.png",
      "alt": "大勢の群衆に見守られるハルケンブルグの葬列",
      "caption": ""
    },
    "episode": {
      "number": 406,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "12:00",
      "timeLabel": "12:00",
      "orderInDay": 6,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "王室",
    "tags": [
      "葬列"
    ],
    "relatedPersonIds": [
      9
    ],
    "relatedForces": [
      "第9王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 406,
      "hideInSafeMode": false
    },
    "displayOrder": 52
  },
  {
    "id": "event-0047",
    "title": "ボークセンとモレナが交渉ゲームを始める",
    "summary": "ボークセンとモレナが交渉ゲームを始める",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0047.png",
      "alt": "ボークセンを迎えるモレナとエイ＝イ一家のアジト",
      "caption": ""
    },
    "episode": {
      "number": 407,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "13:00",
      "timeLabel": "13:00",
      "orderInDay": 7,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "エイ＝イ一家アジト",
      "certainty": "confirmed"
    },
    "primaryType": "交渉",
    "tags": [
      "ボークセン",
      "モレナ",
      "交渉ゲーム",
      "エイ＝イ一家アジト"
    ],
    "relatedPersonIds": [
      "ei-2000"
    ],
    "relatedForces": [
      "エイ＝イ一家"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 407,
      "hideInSafeMode": false
    },
    "displayOrder": 53
  },
  {
    "id": "event-0048",
    "title": "特殊戒厳令発動",
    "summary": "特殊戒厳令発動",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0048.png",
      "alt": "ブラック・ホエール号で発令される特殊戒厳令",
      "caption": ""
    },
    "episode": {
      "number": 408,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "14:15",
      "timeLabel": "14:15",
      "orderInDay": 12,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "王室",
    "tags": [
      "特殊戒厳令",
      "発動"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 408,
      "hideInSafeMode": false
    },
    "displayOrder": 58
  },
  {
    "id": "event-0049",
    "title": "司法局に総合指令本部設置（ベンジャミン）",
    "summary": "司法局に総合指令本部設置（ベンジャミン）",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0049.png",
      "alt": "第1王子居住区へ向かう警護兵たち",
      "caption": ""
    },
    "episode": {
      "number": 410,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "14:55",
      "timeLabel": "14:55",
      "orderInDay": 14,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第２層",
      "place": "司法局",
      "certainty": "confirmed"
    },
    "primaryType": "監視・配置",
    "tags": [
      "司法局",
      "総合指令本部",
      "ベンジャミン"
    ],
    "relatedPersonIds": [
      1
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 410,
      "hideInSafeMode": false
    },
    "displayOrder": 60
  },
  {
    "id": "event-0050",
    "title": "バルサミルコがベンジャミンに定期報告を終える",
    "summary": "バルサミルコがベンジャミンに定期報告を終える",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0050.png",
      "alt": "司法局で定期報告を終えるバルサミルコ",
      "caption": ""
    },
    "episode": {
      "number": 411,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "08:00",
      "timeLabel": "8:00",
      "orderInDay": 2,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": "第２層",
      "place": "司法局",
      "certainty": "confirmed"
    },
    "primaryType": "監視・配置",
    "tags": [
      "定期報告",
      "司法局"
    ],
    "relatedPersonIds": [
      101,
      1
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 411,
      "hideInSafeMode": false
    },
    "displayOrder": 48
  },
  {
    "id": "event-0051",
    "title": "第２回念能力講習会",
    "summary": "第２回念能力講習会",
    "detail": "参加者⇒クラピカ、ヒュリコフ、バビマイナ、ベレレインテ、ハピエッチ、サトビ、ガトー、マオール、ダンジン、テンフトリ、イラルディア、ラジオラス、ユウリ、ロッコリー、サラヘル、ナイペイ、トネアスタ、リズルラ、サカキ、ハシトウ、スラッカ",
    "image": {
      "src": "images/timeline/event-0051.png",
      "alt": "1014号室に集まった第2回念能力講習会の参加者",
      "caption": ""
    },
    "episode": {
      "number": 411,
      "order": 2
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "09:00",
      "timeLabel": "9:00",
      "orderInDay": 3,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "第２回念能力講習会",
      "1014号室",
      "クラピカ",
      "ヒュリコフ",
      "バビマイナ",
      "ベレレインテ",
      "ハピエッチ",
      "サトビ",
      "ガトー",
      "マオール",
      "ダンジン",
      "テンフトリ",
      "イラルディア",
      "ラジオラス",
      "ユウリ",
      "ロッコリー",
      "サラヘル",
      "ナイペイ",
      "トネアスタ",
      "リズルラ",
      "サカキ",
      "ハシトウ",
      "スラッカ"
    ],
    "relatedPersonIds": [
      1401,
      108,
      103,
      1303,
      702,
      701,
      501,
      404,
      303,
      1103,
      1104,
      1007,
      1008,
      207,
      1307,
      1105,
      1009,
      302,
      "021"
    ],
    "relatedForces": [
      "第14王子陣営",
      "第1王子陣営",
      "第13王子陣営",
      "第7王子陣営",
      "第5王子陣営",
      "第4王子陣営",
      "第3王子陣営",
      "第11王子陣営",
      "第10王子陣営",
      "第2王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 411,
      "hideInSafeMode": false
    },
    "displayOrder": 49
  },
  {
    "id": "event-0052",
    "title": "第２回念能力講習会が中断する",
    "summary": "第２回念能力講習会が中断する",
    "detail": "ワブルの秘密が暴露",
    "image": {
      "src": "images/timeline/event-0052.png",
      "alt": "第14王子が継承戦に参加していないと気づく講習会参加者たち",
      "caption": ""
    },
    "episode": {
      "number": 412,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "09:15",
      "timeLabel": "9:15",
      "orderInDay": 4,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "第２回念能力講習会",
      "中断",
      "ワブルの秘密",
      "1014号室"
    ],
    "relatedPersonIds": [
      14
    ],
    "relatedForces": [
      "第14王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 412,
      "hideInSafeMode": true
    },
    "displayOrder": 50
  },
  {
    "id": "event-0053",
    "title": "ワブルの秘密が判明する",
    "summary": "ワブルの秘密が判明する",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0053.png",
      "alt": "目を見開く人物の顔",
      "caption": ""
    },
    "episode": {
      "number": 412,
      "order": 2
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": "14:15",
      "timeLabel": "14:15",
      "orderInDay": 7,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "王室",
    "tags": [
      "ワブル",
      "秘密",
      "1014号室"
    ],
    "relatedPersonIds": [
      14
    ],
    "relatedForces": [
      "第14王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 412,
      "hideInSafeMode": true
    },
    "displayOrder": 40
  },
  {
    "id": "event-0054",
    "title": "第２回念能力講習会が再開する",
    "summary": "第２回念能力講習会が再開する",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0054.png",
      "alt": "再開した第2回念能力講習会の参加者たち",
      "caption": ""
    },
    "episode": {
      "number": 412,
      "order": 3
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "10:00",
      "timeLabel": "10:00",
      "orderInDay": 5,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "念能力",
    "tags": [
      "第２回念能力講習会",
      "再開",
      "1014号室"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 412,
      "hideInSafeMode": false
    },
    "displayOrder": 51
  },
  {
    "id": "event-0055",
    "title": "ビヨンドとクレオパトロが会う",
    "summary": "ビヨンドとクレオパトロが会う",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0055.png",
      "alt": "ビヨンドと会うクレオパトロ",
      "caption": ""
    },
    "episode": {
      "number": 412,
      "order": 4
    },
    "voyage": {
      "day": 10,
      "dayCertainty": "confirmed",
      "time": null,
      "timeLabel": "未明",
      "orderInDay": 8,
      "orderCertainty": "confirmed",
      "chronologyNote": "正確な時刻は不明。提示順に基づき配置"
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "交渉",
    "tags": [
      "ビヨンド",
      "クレオパトロ"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 412,
      "hideInSafeMode": false
    },
    "displayOrder": 41
  },
  {
    "id": "event-0056",
    "title": "ハルケンブルグの棺が納められる",
    "summary": "ハルケンブルグの棺が納められる",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0056.png",
      "alt": "特殊戒厳令発令前に配置された複数の棺",
      "caption": ""
    },
    "episode": {
      "number": 413,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "13:45",
      "timeLabel": "13:45",
      "orderInDay": 8,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "死亡・離脱",
    "tags": [
      "棺"
    ],
    "relatedPersonIds": [
      9
    ],
    "relatedForces": [
      "第9王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 413,
      "hideInSafeMode": true
    },
    "displayOrder": 54
  },
  {
    "id": "event-0057",
    "title": "ベンジャミンがTSK-17発症",
    "summary": "ベンジャミンがTSK-17発症",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0057.png",
      "alt": "TSK-17への感染を疑うベンジャミン",
      "caption": ""
    },
    "episode": {
      "number": 413,
      "order": 2
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "14:00",
      "timeLabel": "14:00",
      "orderInDay": 10,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "",
      "certainty": "unknown"
    },
    "primaryType": "その他",
    "tags": [
      "TSK-17",
      "発症"
    ],
    "relatedPersonIds": [
      1
    ],
    "relatedForces": [
      "第1王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 413,
      "hideInSafeMode": true
    },
    "displayOrder": 56
  },
  {
    "id": "event-0058",
    "title": "カンジドルとリッジが接敵",
    "summary": "カンジドルとリッジが接敵",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0058.png",
      "alt": "倒れた人物を挟んで対峙するカンジドルとリッジ",
      "caption": ""
    },
    "episode": {
      "number": 414,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "14:10",
      "timeLabel": "14:10",
      "orderInDay": 11,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1007号室",
      "certainty": "confirmed"
    },
    "primaryType": "戦闘",
    "tags": [
      "接敵",
      "1007号室"
    ],
    "relatedPersonIds": [
      113,
      712
    ],
    "relatedForces": [
      "第1王子陣営",
      "第7王子陣営"
    ],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 414,
      "hideInSafeMode": false
    },
    "displayOrder": 57
  },
  {
    "id": "event-0059",
    "title": "オイト王妃がヨロズヤで手紙を送る",
    "summary": "オイト王妃がヨロズヤで手紙を送る",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0059.png",
      "alt": "ヨロズヤで手紙を送るオイト王妃",
      "caption": ""
    },
    "episode": {
      "number": 415,
      "order": 1
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "13:50",
      "timeLabel": "13:50",
      "orderInDay": 9,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "王室",
    "tags": [
      "オイト王妃",
      "ヨロズヤ",
      "手紙",
      "1014号室"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 415,
      "hideInSafeMode": false
    },
    "displayOrder": 55
  },
  {
    "id": "event-0060",
    "title": "オイト王妃に恩赦が下る",
    "summary": "オイト王妃に恩赦が下る",
    "detail": "",
    "image": {
      "src": "images/timeline/event-0060.png",
      "alt": "1014号室で恩赦について説明する人物",
      "caption": ""
    },
    "episode": {
      "number": 415,
      "order": 2
    },
    "voyage": {
      "day": 12,
      "dayCertainty": "confirmed",
      "time": "14:35",
      "timeLabel": "14:35",
      "orderInDay": 13,
      "orderCertainty": "confirmed",
      "chronologyNote": ""
    },
    "location": {
      "tier": null,
      "place": "1014号室",
      "certainty": "confirmed"
    },
    "primaryType": "王室",
    "tags": [
      "オイト王妃",
      "恩赦",
      "1014号室"
    ],
    "relatedPersonIds": [],
    "relatedForces": [],
    "occurrenceCertainty": "confirmed",
    "spoiler": {
      "visibleFromEpisode": 415,
      "hideInSafeMode": false
    },
    "displayOrder": 59
  }

];
