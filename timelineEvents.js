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
    title: "ブラック・ホエール号出航",
    summary: "ブラック・ホエール号出航",
    detail: "",
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
    summary: "ウッディ死亡",
    detail: "",
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
    title: "王子たちの守護霊獣が発現",
    summary: "王子たちの守護霊獣が発現",
    detail: "",
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
    relatedPersonIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    relatedForces: [
      "第1王子陣営", "第2王子陣営", "第3王子陣営", "第4王子陣営",
      "第5王子陣営", "第6王子陣営", "第7王子陣営", "第8王子陣営",
      "第9王子陣営", "第10王子陣営", "第11王子陣営", "第12王子陣営",
      "第13王子陣営", "第14王子陣営"
    ],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 360, hideInSafeMode: false },
    displayOrder: 3
  },
  {
    id: "event-0004",
    title: "1014号室の警護が2人になる",
    summary: "1014号室の警護が2人になる",
    detail: "",
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
    title: "1014号室にビンセントが襲撃",
    summary: "1014号室にビンセントが襲撃",
    detail: "クラピカの絶対時間（エンペラータイム）開始。1秒につき1時間寿命が縮まる。",
    episode: { number: 364, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（昼）",
      orderInDay: 5,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
    },
    location: {
      tier: null,
      place: "1014号室",
      certainty: "confirmed"
    },
    primaryType: "戦闘",
    tags: ["襲撃", "絶対時間", "エンペラータイム", "1014号室"],
    relatedPersonIds: [102, 1401],
    relatedForces: ["第1王子陣営", "第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 364, hideInSafeMode: false },
    displayOrder: 5
  },
  {
    id: "event-0006",
    title: "クラピカがチョウライと面会",
    summary: "クラピカがチョウライと面会",
    detail: "",
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
    title: "ツェリードニヒが念修行を開始する。",
    summary: "ツェリードニヒが念修行を開始する。",
    detail: "",
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
      place: "1004号室",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["念修行", "1004号室"],
    relatedPersonIds: [4],
    relatedForces: ["第4王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 366, hideInSafeMode: false },
    displayOrder: 7
  },
  {
    id: "event-0008",
    title: "第5王子陣営マオールが1014号室に入室",
    summary: "第5王子陣営マオールが1014号室に入室",
    detail: "",
    episode: { number: 367, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（夕）",
      orderInDay: 8,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
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
    summary: "モモゼ暗殺",
    detail: "絶対時間（エンペラータイム）3時間経過し、クラピカ失神",
    episode: { number: 368, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（夕）",
      orderInDay: 9,
      orderCertainty: "confirmed",
      chronologyNote: "正確な時刻は不明。提示順に基づき配置"
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
    title: "クラピカが失神から目覚める",
    summary: "クラピカが失神から目覚める",
    detail: "絶対時間（エンペラータイム）12時間経過",
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
    title: "第１回念能力講習会",
    summary: "第１回念能力講習会",
    detail: "",
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
    title: "\"11人いる！（サイレントマジョリティー）\"発動",
    summary: "\"11人いる！（サイレントマジョリティー）\"発動",
    detail: "バリゲン死亡",
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
  }
];
