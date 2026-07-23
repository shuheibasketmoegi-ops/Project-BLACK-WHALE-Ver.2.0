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
  }
];
