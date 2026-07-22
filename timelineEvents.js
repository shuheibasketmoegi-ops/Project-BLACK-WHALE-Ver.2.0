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
    summary: "ブラック・ホエール号が新大陸へ向けて出航する。",
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
      place: "ブラック・ホエール号",
      certainty: "confirmed"
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
    title: "王子たちの念獣発現",
    summary: "壺中卵の儀によって、王子たちの守護霊獣が発現する。",
    detail: "",
    episode: { number: 361, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "14:00",
      timeLabel: "14:00",
      orderInDay: 2,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: "第1層",
      place: "王子居住区",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["王子", "守護霊獣", "壺中卵の儀"],
    relatedPersonIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    relatedForces: [
      "第1王子陣営", "第2王子陣営", "第3王子陣営", "第4王子陣営",
      "第5王子陣営", "第6王子陣営", "第7王子陣営", "第8王子陣営",
      "第9王子陣営", "第10王子陣営", "第11王子陣営", "第12王子陣営",
      "第13王子陣営", "第14王子陣営"
    ],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 361, hideInSafeMode: true },
    displayOrder: 2
  },
  {
    id: "event-0003",
    title: "クラピカとチョウライが面会",
    summary: "クラピカが第3王子チョウライと面会する。",
    detail: "",
    episode: { number: 366, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: "16:00",
      timeLabel: "16:00",
      orderInDay: 3,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: "第1層",
      place: "第3王子居住区",
      certainty: "confirmed"
    },
    primaryType: "交渉",
    tags: ["面会", "王子陣営"],
    relatedPersonIds: [1401, 3],
    relatedForces: ["第14王子陣営", "第3王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 366, hideInSafeMode: true },
    displayOrder: 3
  },
  {
    id: "event-0004",
    title: "モモゼ暗殺",
    summary: "第12王子モモゼが居住区内で暗殺される。",
    detail: "",
    episode: { number: 368, order: 1 },
    voyage: {
      day: 1,
      dayCertainty: "confirmed",
      time: null,
      timeLabel: "未明（夜）",
      orderInDay: 4,
      orderCertainty: "estimated",
      chronologyNote: "正確な時刻は不明。1日目の夜に発生した出来事として配置"
    },
    location: {
      tier: "第1層",
      place: "第12王子居住区",
      certainty: "confirmed"
    },
    primaryType: "死亡・離脱",
    tags: ["暗殺", "王子", "死亡"],
    relatedPersonIds: [12],
    relatedForces: ["第12王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 368, hideInSafeMode: true },
    displayOrder: 4
  },
  {
    id: "event-0005",
    title: "第1回念能力講習会",
    summary: "クラピカによる第1回念能力講習会が開始される。",
    detail: "",
    episode: { number: 369, order: 1 },
    voyage: {
      day: 2,
      dayCertainty: "confirmed",
      time: "09:00",
      timeLabel: "9:00",
      orderInDay: 1,
      orderCertainty: "confirmed",
      chronologyNote: ""
    },
    location: {
      tier: "第1層",
      place: "第14王子居住区",
      certainty: "confirmed"
    },
    primaryType: "念能力",
    tags: ["念能力講習会", "ハンター", "王子陣営"],
    relatedPersonIds: [1401],
    relatedForces: ["第14王子陣営"],
    occurrenceCertainty: "confirmed",
    spoiler: { visibleFromEpisode: 369, hideInSafeMode: true },
    displayOrder: 5
  }
];
