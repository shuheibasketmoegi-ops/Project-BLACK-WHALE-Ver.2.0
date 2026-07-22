/*
  キャラクターデータの説明

  id:
    キャラごとの一意のIDです。
    他のキャラと被らないようにしてください。

  name:
    表示するキャラクター名です。

  subName:
    補足名です。
    王子番号、役職、念能力名、別名などを入れる想定です。

  force:
    所属勢力です。
    例：「第1王子陣営」「第14王子陣営」など。

  category:
    分類です。
    例：「王子」「王妃」「私設兵」「ハンター」「従事者」など。

  status:
    状態です。
    例：「生存」「死亡」「不明」など。

  description:
    キャラクターの説明文です。
    あとから自分用メモを追加していく場所として使えます。

  image:
    画像ファイルのパスを入れます。
    例："images/benjamin.png"
    今回は画像をあとから入れる前提なので、すべて空欄にしています。
*/

const characters = [
  {
    id: 1,
    name: "ベンジャミン",
    subName: "第1王子",
    force: "第1王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第1王子。軍事力を背景にした強硬派で、私設兵を各王子のもとへ派遣している。",
    image: "images/第1王子/1.png",

mother: {
  name: "ウンマ",
  title: "第1王妃",
  image: "images/王妃/01.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "",
  image: "images/第1王子/1x.png"
},

nenAbility: {
  name: "星を継ぐもの（ベンジャミンバトン）",
  description: "自身に忠誠を誓う私設兵の死後、その能力を継承する念能力。"
}
  },

  {
    id: 101,
    name: "バルサミルコ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。王立軍に所属するベンジャミン陣営の中心人物のひとり。",
    image: "images/第1王子/101.png"
  },
  {
    id: 102,
    name: "ビンセント",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第1王子ベンジャミンの私設兵。第14王子ワブル陣営に配置される。",
    image: "images/第1王子/102.png"
  },
  {
    id: 103,
    name: "バビマイナ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。第14王子ワブル陣営の監視役として配置されている。",
    image: "images/第1王子/103.png",
  monitorFor: ["第14王子陣営"]
  },
  {
    id: 104,
    name: "コベントバ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/104.png",
  monitorFor: ["第3王子陣営"]
  },
  {
    id: 105,
    name: "ビクト",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/105.png",
  monitorFor: ["第12王子陣営"]
  },
  {
    id: 106,
    name: "ブッチ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/106.png",
  monitorFor: ["第5王子陣営"]
  },
  {
    id: 107,
    name: "ムッセ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第1王子ベンジャミンの私設兵。第2王子カミーラの監視役として配置される。",
    image: "images/第1王子/107.png",
  monitorFor: ["第2王子陣営"]
  },
  {
    id: 108,
    name: "ヒュリコフ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。念能力者を見抜く観察眼を持ち、念講習にも関わる。",
    image: "images/第1王子/108.png"
  },
  {
    id: 109,
    name: "オラーウ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/109.png",
  monitorFor: ["第6王子陣営"]
  },
  {
    id: 110,
    name: "リハン",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。慎重な分析を得意とする念能力者。",
    image: "images/第1王子/110.png",
  monitorFor: ["第8王子陣営"]
  },
  {
    id: 111,
    name: "シカク",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/111.png",
  monitorFor: ["第9王子陣営"]
  },
  {
    id: 112,
    name: "ウショウヒ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/112.png",
  monitorFor: ["第11王子陣営"]
  },
  {
    id: 113,
    name: "カンジドル",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。ベンジャミン陣営に属する王立軍兵士。",
    image: "images/第1王子/113.png",
  monitorFor: ["第7王子陣営"]
  },
  {
    id: 114,
    name: "不明1",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第1王子ベンジャミンの私設兵。名前・詳細は未入力。",
    image: "images/第1王子/114.png",
  monitorFor: ["第10王子陣営"]
  },
  {
    id: 115,
    name: "サクエーレ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第1王子ベンジャミンの私設兵。名前・詳細は未入力。",
    image: "images/第1王子/115.png",
  monitorFor: ["第13王子陣営"]
  },

  {
    id: 2,
    name: "カミーラ",
    subName: "第2王子",
    force: "第2王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第2王子。自信家で苛烈な性格。ベンジャミンとは王位を巡って強く対立している。",
    image: "images/第2王子/2.png",

mother: {
  name: "ドゥアズル",
  title: "第2王妃",
  image: "images/王妃/02.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "",
  image: "images/第2王子/2x.png"
},

nenAbility: {
  name: "百万回生きた猫（ネコノナマエ）",
  description: "自身を殺した相手の命を奪い、その生命力によって自身を蘇生するカウンター型の念能力。"
}
  },

  {
    id: 201,
    name: "モスワナ",
    subName: "第1王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第1王子ベンジャミンの呪詛を担当する。",
    image: "images/第2王子/201.png"
  },
  {
    id: 202,
    name: "バケット",
    subName: "第3王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第3王子チョウライの呪詛を担当する。",
    image: "images/第2王子/202.png"
  },
  {
    id: 203,
    name: "ヒニョーリ",
    subName: "第4王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第4王子ツェリードニヒの呪詛を担当する。",
    image: "images/第2王子/203.png"
  },
  {
    id: 204,
    name: "ブルベーナ",
    subName: "第6王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第6王子タイソンの呪詛を担当する。",
    image: "images/第2王子/204.png"
  },
  {
    id: 205,
    name: "カコ",
    subName: "第9王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第9王子ハルケンブルグの呪詛を担当する。",
    image: "images/第2王子/205.png"
  },
  {
    id: 206,
    name: "ターラー",
    subName: "第13王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第13王子マラヤームの呪詛を担当する。",
    image: "images/第2王子/206.png"
  },
  {
    id: 207,
    name: "サラヘル",
    subName: "第14王子呪詛担当",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。第14王子ワブルの呪詛を担当する。",
    image: "images/第2王子/207.png"
  },
  {
    id: 208,
    name: "ウマンマ",
    subName: "除念師",
    force: "第2王子陣営",
    category: "従事者",
    status: "生存",
    description: "第2王子カミーラ陣営の従事者。除念師としての役割を持つ。",
    image: "images/第2王子/208.png"
  },
  {
    id: 209,
    name: "ヌクオコン",
    subName: "第8王子呪詛担当",
    force: "第2王子陣営",
    category: "従事者",
    status: "生存",
    description: "第2王子カミーラ陣営の従事者。第8王子サレサレの呪詛を担当する。",
    image: "images/第2王子/209.png"
  },
  {
    id: 210,
    name: "カビッチ",
    subName: "第12王子呪詛担当",
    force: "第2王子陣営",
    category: "従事者",
    status: "生存",
    description: "第2王子カミーラ陣営の従事者。第12王子モモゼの呪詛を担当する。",
    image: "images/第2王子/210.png"
  },
  {
    id: 211,
    name: "フカタキ",
    subName: "執事長",
    force: "第2王子陣営",
    category: "従事者",
    status: "生存",
    description: "第2王子カミーラ陣営の従事者。執事長を務める。",
    image: "images/第2王子/211.png"
  },
  {
    id: 212,
    name: "不明1",
    subName: "カミーラ陣営従事者",
    force: "第2王子陣営",
    category: "従事者",
    status: "不明",
    description: "第2王子カミーラ陣営の従事者。名前・詳細は未入力。",
    image: "images/第2王子/212.png"
  },
  {
    id: 213,
    name: "不明2",
    subName: "カミーラ陣営従事者",
    force: "第2王子陣営",
    category: "従事者",
    status: "不明",
    description: "第2王子カミーラ陣営の従事者。名前・詳細は未入力。",
    image: "images/第2王子/213.png"
  },
  {
    id: 214,
    name: "不明3",
    subName: "カミーラ陣営従事者",
    force: "第2王子陣営",
    category: "従事者",
    status: "不明",
    description: "第2王子カミーラ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 215,
    name: "ジダル",
    subName: "第5王子呪詛担当／準協会員",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。準協会員として第5王子ツベッパの呪詛を担当する。",
    image: "images/第2王子/215.png"
  },
  {
    id: 216,
    name: "リサムセッタ",
    subName: "第7王子呪詛担当／準協会員",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。準協会員として第7王子ルズールスの呪詛を担当する。",
    image: "images/第2王子/216.png"
  },
  {
    id: 217,
    name: "モズベ",
    subName: "第10王子呪詛担当／準協会員",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。準協会員として第10王子カチョウの呪詛を担当する。",
    image: "images/第2王子/217.png"
  },
  {
    id: 218,
    name: "メシュシ",
    subName: "第11王子呪詛担当／準協会員",
    force: "第2王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第2王子カミーラの私設兵。準協会員として第11王子フウゲツの呪詛を担当する。",
    image: "images/第2王子/218.png"
  },
  {
    id: 219,
    name: "不明4",
    subName: "準協会員",
    force: "第2王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第2王子カミーラの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 3,
    name: "チョウライ",
    subName: "第3王子",
    force: "第3王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第3王子。マフィア組織との関係も持ち、王位継承戦において独自の立場を取る。",
    image: "images/第3王子/3.png",

mother: {
  name: "トウチョウレイ",
  title: "第3王妃",
  image: "images/王妃/03.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "",
  image: "images/第3王子/3x.png"
},

  },

  {
    id: "021",
    name: "スラッカ",
    subName: "第2王妃兵（監視）",
    force: "第3王子陣営",
    category: "監視",
    status: "生存",
    description: "第2王妃ドゥアズル所属の王妃兵。第3王子チョウライ陣営の監視を担当する。",
    image: "images/第3王子/021.png"
  },
  {
    id: 301,
    name: "サカタ",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第3王子チョウライの私設兵。チョウライ陣営に属する兵士。",
    image: "images/第3王子/301.png"
  },
  {
    id: 302,
    name: "ハシトウ",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第3王子チョウライの私設兵。チョウライ陣営に属する兵士。",
    image: "images/第3王子/302.png"
  },
  {
    id: 303,
    name: "テンフトリ",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第3王子チョウライの私設兵。チョウライ陣営に属する兵士。",
    image: "images/第3王子/303.png"
  },
  {
    id: 304,
    name: "不明1",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/304.png"
  },
  {
    id: 305,
    name: "不明2",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/305.png"
  },
  {
    id: 306,
    name: "不明3",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/306.png"
  },
  {
    id: 307,
    name: "不明4",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/307.png"
  },
  {
    id: 308,
    name: "不明5",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/308.png"
  },
  {
    id: 309,
    name: "不明6",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/309.png"
  },
  {
    id: 310,
    name: "不明7",
    subName: "チョウライ私設兵",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。名前・詳細は未入力。",
    image: "images/第3王子/310.png"
  },
  {
    id: 311,
    name: "不明8",
    subName: "チョウライ陣営従事者",
    force: "第3王子陣営",
    category: "従事者",
    status: "不明",
    description: "第3王子チョウライ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 312,
    name: "不明9",
    subName: "チョウライ陣営従事者",
    force: "第3王子陣営",
    category: "従事者",
    status: "不明",
    description: "第3王子チョウライ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 313,
    name: "不明10",
    subName: "チョウライ陣営従事者",
    force: "第3王子陣営",
    category: "従事者",
    status: "不明",
    description: "第3王子チョウライ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 314,
    name: "不明11",
    subName: "チョウライ私設兵（準協会）",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 315,
    name: "不明12",
    subName: "チョウライ私設兵（準協会）",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 316,
    name: "不明13",
    subName: "チョウライ私設兵（準協会）",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 317,
    name: "不明14",
    subName: "チョウライ私設兵（準協会）",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 318,
    name: "不明15",
    subName: "チョウライ私設兵（準協会）",
    force: "第3王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第3王子チョウライの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 4,
    name: "ツェリードニヒ",
    subName: "第4王子",
    force: "第4王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第4王子。高い知性と異常性を併せ持つ危険人物。念の習得も急速に進めている。",
    image: "images/第4王子/4.png",

mother: {
  name: "ウンマ",
  title: "第1王妃",
  image: "images/王妃/01.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "対象の嘘や敵意に反応し、段階的に異変を与えるとみられる寄生型の念獣。詳細な能力は未確定。",
  image: "images/第4王子/4x.png"
},

nenAbility: {
  name: "不明",
  description: "絶の状態で目を閉じることで10秒先の未来を体験し、その後の現実を改変するように行動できる念能力。"
}
  },

  {
    id: 401,
    name: "テータ",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第4王子ツェリードニヒの私設兵。念の指導役としてツェリードニヒに関わる。",
    image: "images/第4王子/401.png"
  },
  {
    id: 402,
    name: "サルコフ",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第4王子ツェリードニヒの私設兵。テータとともにツェリードニヒの念習得に関わる。",
    image: "images/第4王子/402.png"
  },
  {
    id: 403,
    name: "ミュハン",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第4王子ツェリードニヒの私設兵。ツェリードニヒ陣営に属する兵士。",
    image: "images/第4王子/403.png"
  },
  {
    id: 404,
    name: "ダンジン",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第4王子ツェリードニヒの私設兵。ツェリードニヒ陣営に属する兵士。",
    image: "images/第4王子/404.png"
  },
  {
    id: 405,
    name: "ヴァンダイン",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第4王子ツェリードニヒの私設兵。ツェリードニヒ陣営に属する兵士。",
    image: "images/第4王子/405.png"
  },
  {
    id: 406,
    name: "不明1",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。名前・詳細は未入力。",
    image: "images/第4王子/406.png"
  },
  {
    id: 407,
    name: "不明2",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。名前・詳細は未入力。",
    image: "images/第4王子/407.png"
  },
  {
    id: 408,
    name: "不明3",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。名前・詳細は未入力。",
    image: "images/第4王子/408.png"
  },
  {
    id: 409,
    name: "不明4",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。名前・詳細は未入力。",
    image: "images/第4王子/409.png"
  },
  {
    id: 410,
    name: "不明5",
    subName: "ツェリードニヒ私設兵",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 411,
    name: "不明6",
    subName: "ツェリードニヒ陣営従事者",
    force: "第4王子陣営",
    category: "従事者",
    status: "不明",
    description: "第4王子ツェリードニヒ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 412,
    name: "不明7",
    subName: "ツェリードニヒ陣営従事者",
    force: "第4王子陣営",
    category: "従事者",
    status: "不明",
    description: "第4王子ツェリードニヒ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 413,
    name: "不明8",
    subName: "ツェリードニヒ陣営従事者",
    force: "第4王子陣営",
    category: "従事者",
    status: "不明",
    description: "第4王子ツェリードニヒ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 414,
    name: "不明9",
    subName: "ツェリードニヒ陣営従事者",
    force: "第4王子陣営",
    category: "従事者",
    status: "不明",
    description: "第4王子ツェリードニヒ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 415,
    name: "不明10",
    subName: "ツェリードニヒ陣営従事者",
    force: "第4王子陣営",
    category: "従事者",
    status: "不明",
    description: "第4王子ツェリードニヒ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 416,
    name: "不明11",
    subName: "ツェリードニヒ私設兵（準協会員）",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 417,
    name: "不明12",
    subName: "ツェリードニヒ私設兵（準協会員）",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 418,
    name: "不明13",
    subName: "ツェリードニヒ私設兵（準協会員）",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 419,
    name: "不明14",
    subName: "ツェリードニヒ私設兵（準協会員）",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 420,
    name: "不明15",
    subName: "ツェリードニヒ私設兵（準協会員）",
    force: "第4王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第4王子ツェリードニヒの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 5,
    name: "ツベッパ",
    subName: "第5王子",
    force: "第5王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第5王子。合理的で研究者肌の人物。王位継承戦ではクラピカとの協力関係を模索する。",
    image: "images/第5王子/5.png",

mother: {
  name: "ドゥアズル",
  title: "第2王妃",
  image: "images/王妃/02.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "体内で様々な効果を持つ薬品を生成する能力を持つとみられる念獣。能力発動には協力者が必要。",
  image: "images/第5王子/5x.png"
}
  },

  {
    id: 501,
    name: "マオール",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第5王子ツベッパの私設兵。ツベッパ陣営に属する兵士。",
    image: "images/第5王子/501.png"
  },
  {
    id: 502,
    name: "ロンギ",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第5王子ツベッパの私設兵。ツベッパ陣営に属する兵士。",
    image: "images/第5王子/502.png"
  },
  {
    id: 503,
    name: "不明1",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/第5王子/503.png"
  },
  {
    id: 504,
    name: "不明2",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/第5王子/504.png"
  },
  {
    id: 505,
    name: "不明3",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 506,
    name: "不明4",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 507,
    name: "不明5",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 508,
    name: "不明6",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 509,
    name: "不明7",
    subName: "ツベッパ私設兵",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 510,
    name: "不明8",
    subName: "ツベッパ陣営従事者",
    force: "第5王子陣営",
    category: "従事者",
    status: "不明",
    description: "第5王子ツベッパ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 511,
    name: "不明9",
    subName: "ツベッパ陣営従事者",
    force: "第5王子陣営",
    category: "従事者",
    status: "不明",
    description: "第5王子ツベッパ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 512,
    name: "不明10",
    subName: "ツベッパ陣営従事者",
    force: "第5王子陣営",
    category: "従事者",
    status: "不明",
    description: "第5王子ツベッパ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 513,
    name: "不明11",
    subName: "ツベッパ陣営従事者",
    force: "第5王子陣営",
    category: "従事者",
    status: "不明",
    description: "第5王子ツベッパ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 514,
    name: "不明12",
    subName: "ツベッパ陣営従事者",
    force: "第5王子陣営",
    category: "従事者",
    status: "不明",
    description: "第5王子ツベッパ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 515,
    name: "不明13",
    subName: "ツベッパ私設兵（準協会員）",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 516,
    name: "不明14",
    subName: "ツベッパ私設兵（準協会員）",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 517,
    name: "不明15",
    subName: "ツベッパ私設兵（準協会員）",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 518,
    name: "不明16",
    subName: "ツベッパ私設兵（準協会員）",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 519,
    name: "不明17",
    subName: "ツベッパ私設兵（準協会員）",
    force: "第5王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第5王子ツベッパの私設兵。準協会員。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 6,
    name: "タイソン",
    subName: "第6王子",
    force: "第6王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第6王子。愛や幸福を重視する独特の思想を持ち、信奉者のような従者たちに囲まれている。",
    image: "images/第6王子/6.png",

mother: {
  name: "カットローノ",
  title: "第4王妃",
  image: "images/王妃/04.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "教典に触れた者からオーラを集め、幸福感と信奉心を与える念獣。禁忌を破ると罰が下る。",
  image: "images/第6王子/6x.png"
}
  },

  {
    id: "022",
    name: "不明1",
    subName: "第2王妃兵（監視）",
    force: "第6王子陣営",
    category: "監視",
    status: "不明",
    description: "第6王子タイソン陣営を監視する第2王妃所属の王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "031",
    name: "不明2",
    subName: "第3王妃兵（監視）",
    force: "第6王子陣営",
    category: "監視",
    status: "不明",
    description: "第6王子タイソン陣営を監視する第3王妃所属の王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 601,
    name: "不明3",
    subName: "タイソン私設兵",
    force: "第6王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第6王子タイソンの私設兵。名前・詳細は未入力。",
    image: "images/第6王子/601.png"
  },
  {
    id: 602,
    name: "不明4",
    subName: "タイソン私設兵",
    force: "第6王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第6王子タイソンの私設兵。名前・詳細は未入力。",
    image: "images/第6王子/602.png"
  },
  {
    id: 603,
    name: "不明5",
    subName: "タイソン私設兵",
    force: "第6王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第6王子タイソンの私設兵。名前・詳細は未入力。",
    image: "images/第6王子/603.png"
  },
  {
    id: 604,
    name: "不明6",
    subName: "タイソン私設兵",
    force: "第6王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第6王子タイソンの私設兵。名前・詳細は未入力。",
    image: "images/第6王子/604.png"
  },
  {
    id: 605,
    name: "不明7",
    subName: "タイソン私設兵",
    force: "第6王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第6王子タイソンの私設兵。名前・詳細は未入力。",
    image: "images/第6王子/605.png"
  },
  {
    id: 606,
    name: "イズナビ",
    subName: "ハンター",
    force: "第6王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第6王子タイソン陣営に関わるハンター。王位継承戦に護衛として参加する。",
    image: "images/第6王子/606.png"
  },
  {
    id: 607,
    name: "ジュリアーノ",
    subName: "協専ハンター",
    force: "第6王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第6王子タイソン陣営に関わる協専ハンター。タイソン陣営の護衛を担当する。",
    image: "images/第6王子/607.png"
  },
  {
    id: 608,
    name: "マドウィッグ",
    subName: "タイソン陣営従事者",
    force: "第6王子陣営",
    category: "従事者",
    status: "生存",
    description: "第6王子タイソン陣営の従事者。タイソン陣営に仕える人物。",
    image: "images/第6王子/608.png"
  },
  {
    id: 609,
    name: "ヒマンセ",
    subName: "タイソン陣営従事者",
    force: "第6王子陣営",
    category: "従事者",
    status: "生存",
    description: "第6王子タイソン陣営の従事者。タイソン陣営に仕える人物。",
    image: "images/第6王子/609.png"
  },
  {
    id: 610,
    name: "ヒュウガ",
    subName: "タイソン陣営従事者",
    force: "第6王子陣営",
    category: "従事者",
    status: "生存",
    description: "第6王子タイソン陣営の従事者。タイソン陣営に仕える人物。",
    image: "images/第6王子/610.png"
  },
  {
    id: 611,
    name: "エンゼール",
    subName: "タイソン陣営従事者",
    force: "第6王子陣営",
    category: "従事者",
    status: "生存",
    description: "第6王子タイソン陣営の従事者。タイソン陣営に仕える人物。",
    image: "images/第6王子/611.png"
  },
  {
    id: 612,
    name: "不明8",
    subName: "タイソン陣営従事者",
    force: "第6王子陣営",
    category: "従事者",
    status: "不明",
    description: "第6王子タイソン陣営の従事者。名前・詳細は未入力。",
    image: "images/第6王子/612.png"
  },

  {
    id: 7,
    name: "ルズールス",
    subName: "第7王子",
    force: "第7王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第7王子。マイペースで享楽的な雰囲気を持つ王子。継承戦では慎重に状況を見ている。",
    image: "images/第7王子/7.png",

mother: {
  name: "ドゥアズル",
  title: "第2王妃",
  image: "images/王妃/02.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "対象の欲望に応じたものを餌として具現化し、満たされた瞬間に罠を発動する念獣。",
  image: "images/第7王子/7x.png"
}
  },

  {
    id: 701,
    name: "サトビ",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/701.png"
  },
  {
    id: 702,
    name: "ハピエッチ",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/702.png"
  },
  {
    id: 703,
    name: "ファムール",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/703.png"
  },
  {
    id: 704,
    name: "ライス",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/704.png"
  },
  {
    id: 705,
    name: "オデッサ",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/705.png"
  },
  {
    id: 706,
    name: "ガドー",
    subName: "第2王妃兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールス陣営に属する第2王妃兵。",
    image: "images/第7王子/706.png"
  },
  {
    id: 707,
    name: "マクネ",
    subName: "ルズールス私設兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールスの私設兵。ルズールス陣営に属する兵士。",
    image: "images/第7王子/707.png"
  },
  {
    id: 708,
    name: "バラーテ",
    subName: "ルズールス私設兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第7王子ルズールスの私設兵。ルズールス陣営に属する兵士。",
    image: "images/x.png"
  },
  {
    id: 709,
    name: "不明1",
    subName: "ルズールス私設兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第7王子ルズールスの私設兵。名前・詳細は未入力。",
    image: "images/第7王子/709.png"
  },
  {
    id: 710,
    name: "不明2",
    subName: "ルズールス私設兵",
    force: "第7王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第7王子ルズールスの私設兵。名前・詳細は未入力。",
    image: "images/第7王子/710.png"
  },
  {
    id: 711,
    name: "バショウ",
    subName: "ハンター",
    force: "第7王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第7王子ルズールス陣営の護衛として王位継承戦に参加するハンター。",
    image: "images/第7王子/711.png"
  },
  {
    id: 712,
    name: "リッジ",
    subName: "協専ハンター",
    force: "第7王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第7王子ルズールス陣営に関わる協専ハンター。",
    image: "images/第7王子/712.png"
  },
  {
    id: 713,
    name: "スカルト",
    subName: "協専ハンター",
    force: "第7王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第7王子ルズールス陣営に関わる協専ハンター。",
    image: "images/第7王子/713.png"
  },
  {
    id: 714,
    name: "不明3",
    subName: "ルズールス陣営従事者",
    force: "第7王子陣営",
    category: "従事者",
    status: "不明",
    description: "第7王子ルズールス陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 8,
    name: "サレサレ",
    subName: "第8王子",
    force: "第8王子陣営",
    category: "王子",
    status: "死亡",
    description: "カキン帝国第8王子。享楽的な性格で、継承戦への危機感は薄かった。",
    image: "images/第8王子/8.png",

mother: {
  name: "スィンコスィンコ",
  title: "第5王妃",
  image: "images/王妃/05.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "無数の口から煙を放ち、吸い込んだ者のサレサレへの好感度を高める拡散型の念獣。",
  image: "images/第8王子/8x.png"
}
  },

  {
    id: "023",
    name: "不明1",
    subName: "第2王妃兵",
    force: "第8王子陣営",
    category: "監視",
    status: "不明",
    description: "第8王子サレサレ陣営を監視する第2王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "032",
    name: "コロアプデ",
    subName: "第3王妃兵",
    force: "第8王子陣営",
    category: "監視",
    status: "生存",
    description: "第8王子サレサレ陣営を監視する第3王妃兵。",
    image: "images/第8王子/032.png"
  },
  {
    id: "041",
    name: "不明2",
    subName: "第4王妃兵",
    force: "第8王子陣営",
    category: "監視",
    status: "不明",
    description: "第8王子サレサレ陣営を監視する第4王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 801,
    name: "ムシャホ",
    subName: "第2王妃兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第8王子サレサレ陣営に属する第2王妃兵。",
    image: "images/第8王子/801.png"
  },
  {
    id: 802,
    name: "不明3",
    subName: "第2王妃兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレ陣営に属する第2王妃兵。名前・詳細は未入力。",
    image: "images/第8王子/802.png"
  },
  {
    id: 803,
    name: "不明4",
    subName: "第2王妃兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレ陣営に属する第2王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 804,
    name: "不明5",
    subName: "サレサレ私設兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレの私設兵。名前・詳細は未入力。",
    image: "images/第8王子/804.png"
  },
  {
    id: 805,
    name: "不明6",
    subName: "サレサレ私設兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレの私設兵。名前・詳細は未入力。",
    image: "images/第8王子/805.png"
  },
  {
    id: 806,
    name: "不明7",
    subName: "サレサレ私設兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレの私設兵。名前・詳細は未入力。",
    image: "images/第8王子/806.png"
  },
  {
    id: 807,
    name: "不明8",
    subName: "サレサレ私設兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレの私設兵。名前・詳細は未入力。",
    image: "images/第8王子/807.png"
  },
  {
    id: 808,
    name: "不明9",
    subName: "サレサレ私設兵",
    force: "第8王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第8王子サレサレの私設兵。名前・詳細は未入力。",
    image: "images/第8王子/808.png"
  },
  {
    id: 809,
    name: "不明10",
    subName: "サレサレ陣営従事者",
    force: "第8王子陣営",
    category: "従事者",
    status: "不明",
    description: "第8王子サレサレ陣営の従事者。名前・詳細は未入力。",
    image: "images/第8王子/809.png"
  },
  {
    id: 810,
    name: "不明11",
    subName: "サレサレ陣営従事者",
    force: "第8王子陣営",
    category: "従事者",
    status: "不明",
    description: "第8王子サレサレ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 811,
    name: "不明12",
    subName: "サレサレ陣営従事者",
    force: "第8王子陣営",
    category: "従事者",
    status: "不明",
    description: "第8王子サレサレ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },

  {
    id: 9,
    name: "ハルケンブルグ",
    subName: "第9王子",
    force: "第9王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第9王子。王制や継承戦そのものに批判的な理想主義者。支持者との結束が強い。",
    image: "images/第9王子/9.png",

mother: {
  name: "ドゥアズル",
  title: "第2王妃",
  image: "images/王妃/02.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "賛同者に羽根の印を刻み、同じ意志を持つ者が集うほど集団のオーラを増幅する念獣。",
  image: "images/第9王子/9x.png"
}
  },

  {
    id: 901,
    name: "シェジュール",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第9王子ハルケンブルグの私設兵。ハルケンブルグ陣営に属する兵士。",
    image: "images/第9王子/901.png"
  },
  {
    id: 902,
    name: "ユヒライ",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第9王子ハルケンブルグの私設兵。ハルケンブルグ陣営に属する兵士。",
    image: "images/第9王子/902.png"
  },
  {
    id: 903,
    name: "スミドリ",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第9王子ハルケンブルグの私設兵。ハルケンブルグ陣営に属する兵士。",
    image: "images/第9王子/903.png"
  },
  {
    id: 904,
    name: "不明1",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/904.png"
  },
  {
    id: 905,
    name: "不明2",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/905.png"
  },
  {
    id: 906,
    name: "不明3",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/906.png"
  },
  {
    id: 907,
    name: "不明4",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/907.png"
  },
  {
    id: 908,
    name: "不明5",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/908.png"
  },
  {
    id: 909,
    name: "不明6",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/909.png"
  },
  {
    id: 910,
    name: "不明7",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/910.png"
  },
  {
    id: 911,
    name: "不明8",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/911.png"
  },
  {
    id: 912,
    name: "不明9",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/912.png"
  },
  {
    id: 913,
    name: "不明10",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/913.png"
  },
  {
    id: 914,
    name: "不明11",
    subName: "ハルケンブルグ私設兵",
    force: "第9王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第9王子ハルケンブルグの私設兵。名前・詳細は未入力。",
    image: "images/第9王子/914.png"
  },
  {
    id: 10,
    name: "カチョウ",
    subName: "第10王子",
    force: "第10王子陣営",
    category: "王子",
    status: "死亡",
    description: "カキン帝国第10王子。フウゲツとは双子の姉妹。",
    image: "images/第10王子/10.png",

mother: {
  name: "セイコ",
  title: "第6王妃",
  image: "images/王妃/06.png"
},

guardianSpiritBeast: {
  name: "2人セゾン（キミガイナイ）",
  description: "カチョウかフウゲツのどちらかが死亡した時、死者の姿を取り、残された一方を守る念獣。",
  image: ""
}
  },
  {
    id: "024",
    name: "不明1",
    subName: "第2王妃兵",
    force: "第10王子陣営",
    category: "監視",
    status: "不明",
    description: "第10王子カチョウ陣営を監視する第2王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "033",
    name: "不明2",
    subName: "第3王妃兵",
    force: "第10王子陣営",
    category: "監視",
    status: "不明",
    description: "第10王子カチョウ陣営を監視する第3王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "042",
    name: "不明3",
    subName: "第4王妃兵",
    force: "第10王子陣営",
    category: "監視",
    status: "不明",
    description: "第10王子カチョウ陣営を監視する第4王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "051",
    name: "不明4",
    subName: "第5王妃兵",
    force: "第10王子陣営",
    category: "監視",
    status: "不明",
    description: "第10王子カチョウ陣営を監視する第5王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1001,
    name: "不明5",
    subName: "第6王妃兵",
    force: "第10王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第10王子カチョウ陣営に属する第6王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1002,
    name: "不明6",
    subName: "第6王妃兵",
    force: "第10王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第10王子カチョウ陣営に属する第6王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1003,
    name: "センリツ",
    subName: "ハンター",
    force: "第10王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第10王子カチョウ陣営の護衛として王位継承戦に参加するハンター。",
    image: "images/第10王子/1003.png"
  },
  {
    id: 1004,
    name: "キーニ",
    subName: "協専ハンター",
    force: "第10王子陣営",
    category: "ハンター",
    status: "死亡",
    description: "第10王子カチョウ陣営に関わる協専ハンター。",
    image: "images/第10王子/1004.png"
  },
  {
    id: 1005,
    name: "不明7",
    subName: "協専ハンター",
    force: "第10王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第10王子カチョウ陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1006,
    name: "ロベリー",
    subName: "カチョウ陣営従事者",
    force: "第10王子陣営",
    category: "従事者",
    status: "生存",
    description: "第10王子カチョウ陣営の従事者。カチョウに仕える人物。",
    image: "images/第10王子/1006.png"
  },
  {
    id: 1007,
    name: "ユウリ",
    subName: "カチョウ陣営従事者",
    force: "第10王子陣営",
    category: "従事者",
    status: "生存",
    description: "第10王子カチョウ陣営の従事者。カチョウに仕える人物。",
    image: "images/第10王子/1007.png"
  },
  {
    id: 1008,
    name: "ロッコリー",
    subName: "カチョウ陣営従事者",
    force: "第10王子陣営",
    category: "従事者",
    status: "生存",
    description: "第10王子カチョウ陣営の従事者。カチョウに仕える人物。",
    image: "images/第10王子/1008.png"
  },
  {
    id: 1009,
    name: "リズルラ",
    subName: "カチョウ陣営従事者",
    force: "第10王子陣営",
    category: "従事者",
    status: "生存",
    description: "第10王子カチョウ陣営の従事者。カチョウに仕える人物。",
    image: "images/第10王子/1009.png"
  },
  {
    id: 1010,
    name: "不明8",
    subName: "カチョウ陣営従事者",
    force: "第10王子陣営",
    category: "従事者",
    status: "不明",
    description: "第10王子カチョウ陣営の従事者。名前・詳細は未入力。",
    image: "images/第10王子/1010.png"
  },
  {
    id: 11,
    name: "フウゲツ",
    subName: "第11王子",
    force: "第11王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第11王子。カチョウとは双子の姉妹。気弱だが、姉妹で生き延びようとする意志を持つ。",
    image: "images/第11王子/11.png",

mother: {
  name: "セイコ",
  title: "第6王妃",
  image: "images/王妃/06.png"
},

guardianSpiritBeast: {
  name: "魔法の抜け道（マジカルワーム）",
  description: "扉を出現させ、フウゲツを望む場所へ移動させる念獣。",
  image: "images/第11王子/11x.png"
}
  },
  {
    id: "025",
    name: "不明1",
    subName: "第2王妃兵",
    force: "第11王子陣営",
    category: "監視",
    status: "不明",
    description: "第11王子フウゲツ陣営を監視する第2王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "034",
    name: "不明2",
    subName: "第3王妃兵",
    force: "第11王子陣営",
    category: "監視",
    status: "不明",
    description: "第11王子フウゲツ陣営を監視する第3王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "043",
    name: "不明3",
    subName: "第4王妃兵",
    force: "第11王子陣営",
    category: "監視",
    status: "不明",
    description: "第11王子フウゲツ陣営を監視する第4王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "052",
    name: "不明4",
    subName: "第5王妃兵",
    force: "第11王子陣営",
    category: "監視",
    status: "不明",
    description: "第11王子フウゲツ陣営を監視する第5王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1101,
    name: "リョウジ",
    subName: "第6王妃兵",
    force: "第11王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第11王子フウゲツ陣営に属する第6王妃兵。",
    image: "images/第11王子/1101.png"
  },
  {
    id: 1102,
    name: "バチャエム",
    subName: "第6王妃兵",
    force: "第11王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第11王子フウゲツ陣営に属する第6王妃兵。",
    image: "images/第11王子/1102.png"
  },
  {
    id: 1103,
    name: "イラルディア",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "生存",
    description: "第11王子フウゲツ陣営の従事者。フウゲツに仕える人物。",
    image: "images/第11王子/1103.png"
  },
  {
    id: 1104,
    name: "ラジオラス",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "生存",
    description: "第11王子フウゲツ陣営の従事者。フウゲツに仕える人物。",
    image: "images/第11王子/1104.png"
  },
  {
    id: 1105,
    name: "トネアスタ",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "生存",
    description: "第11王子フウゲツ陣営の従事者。フウゲツに仕える人物。",
    image: "images/第11王子/1105.png"
  },
  {
    id: 1106,
    name: "不明5",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "不明",
    description: "第11王子フウゲツ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1107,
    name: "不明6",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "不明",
    description: "第11王子フウゲツ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1108,
    name: "不明7",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "不明",
    description: "第11王子フウゲツ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1109,
    name: "不明8",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "不明",
    description: "第11王子フウゲツ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1110,
    name: "不明9",
    subName: "フウゲツ陣営従事者",
    force: "第11王子陣営",
    category: "従事者",
    status: "不明",
    description: "第11王子フウゲツ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 12,
    name: "モモゼ",
    subName: "第12王子",
    force: "第12王子陣営",
    category: "王子",
    status: "死亡",
    description: "カキン帝国第12王子。年少の王子のひとり。",
    image: "images/第12王子/12.png",

mother: {
  name: "セヴァンチ",
  title: "第7王妃",
  image: "images/王妃/07.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "対象に問いかけ、条件を満たすと身体の自由を奪って操る操作系の念獣。",
  image: "images/第12王子/12x.png"
}
  },
  {
    id: "026",
    name: "ニペイパー",
    subName: "第2王妃兵",
    force: "第12王子陣営",
    category: "監視",
    status: "生存",
    description: "第12王子モモゼ陣営を監視する第2王妃兵。",
    image: "images/第12王子/026.png"
  },
  {
    id: "035",
    name: "ブラッヂ",
    subName: "第3王妃兵",
    force: "第12王子陣営",
    category: "監視",
    status: "生存",
    description: "第12王子モモゼ陣営を監視する第3王妃兵。",
    image: "images/第12王子/035.png"
  },
  {
    id: "044",
    name: "ラロック",
    subName: "第4王妃兵",
    force: "第12王子陣営",
    category: "監視",
    status: "生存",
    description: "第12王子モモゼ陣営を監視する第4王妃兵。",
    image: "images/第12王子/044.png"
  },
  {
    id: "053",
    name: "タフディー",
    subName: "第5王妃兵",
    force: "第12王子陣営",
    category: "監視",
    status: "生存",
    description: "第12王子モモゼ陣営を監視する第5王妃兵。",
    image: "images/第12王子/053.png"
  },
  {
    id: "061",
    name: "ナゴマム",
    subName: "第6王妃兵",
    force: "第12王子陣営",
    category: "監視",
    status: "生存",
    description: "第12王子モモゼ陣営を監視する第6王妃兵。",
    image: "images/第12王子/061.png"
  },
  {
    id: 1201,
    name: "ウェルゲー",
    subName: "第7王妃兵",
    force: "第12王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第12王子モモゼ陣営に属する第7王妃兵。",
    image: "images/第12王子/1201.png"
  },
  {
    id: 1202,
    name: "ハンゾー",
    subName: "ハンター",
    force: "第12王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第12王子モモゼ陣営の護衛として王位継承戦に参加するハンター。",
    image: "images/第12王子/1202.png"
  },
  {
    id: 1203,
    name: "不明1",
    subName: "協専ハンター",
    force: "第12王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第12王子モモゼ陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1204,
    name: "不明2",
    subName: "協専ハンター",
    force: "第12王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第12王子モモゼ陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1205,
    name: "不明3",
    subName: "協専ハンター",
    force: "第12王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第12王子モモゼ陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1206,
    name: "不明4",
    subName: "協専ハンター",
    force: "第12王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第12王子モモゼ陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1207,
    name: "不明5",
    subName: "モモゼ陣営従事者",
    force: "第12王子陣営",
    category: "従事者",
    status: "不明",
    description: "第12王子モモゼ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1208,
    name: "不明6",
    subName: "モモゼ陣営従事者",
    force: "第12王子陣営",
    category: "従事者",
    status: "不明",
    description: "第12王子モモゼ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1209,
    name: "不明7",
    subName: "モモゼ陣営従事者",
    force: "第12王子陣営",
    category: "従事者",
    status: "不明",
    description: "第12王子モモゼ陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 13,
    name: "マラヤーム",
    subName: "第13王子",
    force: "第13王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第13王子。幼い王子。母セヴァンチや護衛たちに守られている。",
    image: "images/第13王子/13.png",

mother: {
  name: "セヴァンチ",
  title: "第7王妃",
  image: "images/王妃/07.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "龍のような姿を持ち、部屋を隔離する結界を作ったとみられる念獣。能力の全貌は不明。",
  image: "images/第13王子/13x.png"
}
  },
  {
    id: "027",
    name: "不明1",
    subName: "第2王妃兵",
    force: "第13王子陣営",
    category: "監視",
    status: "不明",
    description: "第13王子マラヤーム陣営を監視する第2王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "036",
    name: "不明2",
    subName: "第3王妃兵",
    force: "第13王子陣営",
    category: "監視",
    status: "不明",
    description: "第13王子マラヤーム陣営を監視する第3王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "045",
    name: "不明3",
    subName: "第4王妃兵",
    force: "第13王子陣営",
    category: "監視",
    status: "不明",
    description: "第13王子マラヤーム陣営を監視する第4王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "054",
    name: "不明4",
    subName: "第5王妃兵",
    force: "第13王子陣営",
    category: "監視",
    status: "不明",
    description: "第13王子マラヤーム陣営を監視する第5王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: "062",
    name: "不明5",
    subName: "第6王妃兵",
    force: "第13王子陣営",
    category: "監視",
    status: "不明",
    description: "第13王子マラヤーム陣営を監視する第6王妃兵。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1301,
    name: "バリゲン",
    subName: "第7王妃兵",
    force: "第13王子陣営",
    category: "私設兵",
    status: "死亡",
    description: "第13王子マラヤーム陣営に属する第7王妃兵。王位継承戦の中で死亡する。",
    image: "images/第13王子/1301.png"
  },
  {
    id: 1302,
    name: "ビスケ",
    subName: "ハンター",
    force: "第13王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第13王子マラヤーム陣営の護衛として王位継承戦に参加するハンター。",
    image: "images/第13王子/1302.png"
  },
  {
    id: 1303,
    name: "ベレレインテ",
    subName: "協専ハンター",
    force: "第13王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第13王子マラヤーム陣営に関わる協専ハンター。",
    image: "images/第13王子/1303.png"
  },
  {
    id: 1304,
    name: "不明6",
    subName: "協専ハンター",
    force: "第13王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第13王子マラヤーム陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1305,
    name: "不明7",
    subName: "協専ハンター",
    force: "第13王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第13王子マラヤーム陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1306,
    name: "不明8",
    subName: "協専ハンター",
    force: "第13王子陣営",
    category: "ハンター",
    status: "不明",
    description: "第13王子マラヤーム陣営に関わる協専ハンター。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1307,
    name: "ナイペイ",
    subName: "マラヤーム陣営従事者",
    force: "第13王子陣営",
    category: "従事者",
    status: "生存",
    description: "第13王子マラヤーム陣営の従事者。マラヤームに仕える人物。",
    image: "images/第13王子/1307.png"
  },
  {
    id: 1308,
    name: "不明9",
    subName: "マラヤーム陣営従事者",
    force: "第13王子陣営",
    category: "従事者",
    status: "不明",
    description: "第13王子マラヤーム陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 1309,
    name: "不明10",
    subName: "マラヤーム陣営従事者",
    force: "第13王子陣営",
    category: "従事者",
    status: "不明",
    description: "第13王子マラヤーム陣営の従事者。名前・詳細は未入力。",
    image: "images/x.png"
  },
  {
    id: 14,
    name: "ワブル",
    subName: "第14王子",
    force: "第14王子陣営",
    category: "王子",
    status: "生存",
    description: "カキン帝国第14王子。最年少の赤子の王子。母オイト、クラピカたちに守られている。",
    image: "images/第14王子/14.png",

mother: {
  name: "オイト",
  title: "第8王妃",
  image: "images/王妃/08.png"
},

guardianSpiritBeast: {
  name: "不明",
  description: "",
  image: ""
}
  },
 {
    id: "011",
    name: "ウッディ",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。",
    image: "images/第14王子/011.png"
  },
  {
    id: "028",
    name: "不明1",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/028.png"
  },
  {
    id: "037",
    name: "不明2",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/037.png"
  },
  {
    id: "046",
    name: "不明3",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/046.png"
  },
  {
    id: "055",
    name: "不明4",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/055.png"
  },
  {
    id: "063",
    name: "不明5",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/063.png"
  },
  {
    id: "071",
    name: "不明6",
    subName: "上位王妃兵",
    force: "第14王子陣営",
    category: "監視",
    status: "死亡",
    description: "第14王子ワブル陣営を監視する上位王妃兵。名前・詳細は未入力。",
    image: "images/第14王子/071.png"
  },
  {
    id: 1401,
    name: "クラピカ",
    subName: "ハンター",
    force: "第14王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第14王子ワブル陣営の護衛として王位継承戦に参加するハンター。",
    image: "images/第14王子/1401.png"
  },
  {
    id: 1402,
    name: "ビル",
    subName: "協専ハンター",
    force: "第14王子陣営",
    category: "ハンター",
    status: "生存",
    description: "第14王子ワブル陣営に関わる協専ハンター。クラピカと協力してワブルを守る。",
    image: "images/第14王子/1402.png"
  },
  {
    id: 1403,
    name: "サイールド",
    subName: "協専ハンター",
    force: "第14王子陣営",
    category: "ハンター",
    status: "死亡",
    description: "第14王子ワブル陣営に関わる協専ハンター。",
    image: "images/第14王子/1403.png"
  },
  {
    id: 1404,
    name: "カートン",
    subName: "協専ハンター",
    force: "第14王子陣営",
    category: "ハンター",
    status: "死亡",
    description: "第14王子ワブル陣営に関わる協専ハンター。",
    image: "images/第14王子/1404.png"
  },
  {
    id: 1405,
    name: "シマヌ",
    subName: "ワブル陣営従事者",
    force: "第14王子陣営",
    category: "従事者",
    status: "生存",
    description: "第14王子ワブル陣営の従事者。ワブルとオイトに仕える人物。",
    image: "images/第14王子/1405.png"
  },
  {
    id: 1406,
    name: "サンドラ",
    subName: "ワブル陣営従事者",
    force: "第14王子陣営",
    category: "従事者",
    status: "死亡",
    description: "第14王子ワブル陣営の従事者。",
    image: "images/第14王子/1406.png"
  },
  {
    id: 1407,
    name: "不明6",
    subName: "ワブル陣営従事者",
    force: "第14王子陣営",
    category: "従事者",
    status: "死亡",
    description: "第14王子ワブル陣営の従事者。名前・詳細は未入力。",
    image: "images/第14王子/1407.png"
  },
  {
    id: 1408,
    name: "不明7",
    subName: "ワブル陣営従事者",
    force: "第14王子陣営",
    category: "従事者",
    status: "死亡",
    description: "第14王子ワブル陣営の従事者。名前・詳細は未入力。",
    image: "images/第14王子/1408.png"
  },
  {
    id: "shu-1000",
    name: "オニオール＝ロンポウ",
    subName: "シュウ＝ウ一家組長",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "組長",
    status: "生存",
    description: "カキン帝国三大マフィアの一つ、シュウ＝ウ一家の組長。",
    image: "images/シュウ＝ウ一家/1000.png"
  },
  {
    id: "shu-1001",
    name: "ヒンリギ＝ビガンダフノ",
    subName: "シュウ＝ウ一家若頭",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "幹部",
    status: "生存",
    description: "シュウ＝ウ一家の若頭。組織の実働部隊を率いる幹部。",
    image: "images/シュウ＝ウ一家/1001.png"
  },
  {
    id: "shu-1002",
    name: "ザクロ＝カスタード",
    subName: "シュウ＝ウ一家組員",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "シュウ＝ウ一家に所属する組員。",
    image: "images/シュウ＝ウ一家/1002.png"
  },
  {
    id: "shu-1003",
    name: "リンチ＝フルボッコ",
    subName: "シュウ＝ウ一家組員",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "組員",
    status: "死亡",
    description: "シュウ＝ウ一家に所属する組員。",
    image: "images/シュウ＝ウ一家/1003.png"
  },
  {
    id: "shu-1004",
    name: "ミーシャ＝ハオ",
    subName: "シュウ＝ウ一家組員",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "組員",
    status: "死亡",
    description: "シュウ＝ウ一家に所属する組員。",
    image: "images/シュウ＝ウ一家/1004.png"
  },
  {
    id: "shu-1005",
    name: "コナリー",
    subName: "シュウ＝ウ一家舎弟頭",
    force: "シュウ＝ウ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "シュウ＝ウ一家に所属する舎弟頭。",
    image: "images/シュウ＝ウ一家/1005.png"
  },
  {
    id: "ei-2000",
    name: "モレナ＝プルード",
    subName: "エイ＝イ一家組長",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組長",
    status: "生存",
    description: "カキン帝国三大マフィアの一つ、エイ＝イ一家の組長。",
    image: "images/エイ＝イ一家/2000.png"
  },
  {
    id: "ei-2001",
    name: "ルイーニー",
    subName: "エイ＝イ一家組員",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "死亡",
    description: "エイ＝イ一家に所属する組員。",
    image: "images/エイ＝イ一家/2001.png"
  },
  {
    id: "ei-2002",
    name: "カシュー",
    subName: "エイ＝イ一家組員",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。",
    image: "images/エイ＝イ一家/2002.png"
  },
  {
    id: "ei-2003",
    name: "ペリゴル",
    subName: "エイ＝イ一家組員／私立探偵助手",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。私立探偵助手としての経歴を持つ。",
    image: "images/エイ＝イ一家/2003.png"
  },
  {
    id: "ei-2004",
    name: "不明1",
    subName: "エイ＝イ一家組員",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。名前・詳細は不明。",
    image: "images/エイ＝イ一家/2004.png"
  },
  {
    id: "ei-2005",
    name: "ビレ",
    subName: "エイ＝イ一家組員／ゲームセンター店員",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。ゲームセンター店員。",
    image: "images/エイ＝イ一家/2005.png"
  },
  {
    id: "ei-2006",
    name: "クオロール",
    subName: "エイ＝イ一家組員／整備士",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。整備士。",
    image: "images/エイ＝イ一家/2006.png"
  },
  {
    id: "ei-2007",
    name: "パドイユ",
    subName: "エイ＝イ一家組員／解体工",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "死亡",
    description: "エイ＝イ一家に所属する組員。解体工。",
    image: "images/エイ＝イ一家/2007.png"
  },
  {
    id: "ei-2008",
    name: "デヴェラレス",
    subName: "エイ＝イ一家組員／土建業",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。土建業に従事している。",
    image: "images/エイ＝イ一家/2008.png"
  },
  {
    id: "ei-2009",
    name: "デモン",
    subName: "エイ＝イ一家組員／宅建業",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。宅建業に従事している。",
    image: "images/エイ＝イ一家/2009.png"
  },
  {
    id: "ei-2010",
    name: "ジェラート",
    subName: "エイ＝イ一家組員／プログラマー",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。プログラマー。",
    image: "images/エイ＝イ一家/2010.png"
  },
  {
    id: "ei-2011",
    name: "ボコンテ",
    subName: "エイ＝イ一家組員／夜逃げ・運び屋",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。夜逃げおよび運び屋を生業としている。",
    image: "images/エイ＝イ一家/2011.png"
  },
  {
    id: "ei-2012",
    name: "マトベール",
    subName: "エイ＝イ一家組員／人材派遣・斡旋業",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。人材派遣・斡旋業に従事している。",
    image: "images/エイ＝イ一家/2012.png"
  },
  {
    id: "ei-2013",
    name: "トレベルム",
    subName: "エイ＝イ一家組員／運び屋兼殺し屋",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。運び屋兼殺し屋。",
    image: "images/エイ＝イ一家/2013.png"
  },
  {
    id: "ei-2014",
    name: "モンブラン＝トト",
    subName: "エイ＝イ一家組員／死体処理・飼料製造業",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。死体処理・飼料製造業に従事している。",
    image: "images/エイ＝イ一家/2014.png"
  },
  {
    id: "ei-2015",
    name: "シフォン＝トト",
    subName: "エイ＝イ一家組員／縫製・装飾加工業",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。縫製・装飾加工業に従事している。",
    image: "images/エイ＝イ一家/2015.png"
  },
  {
    id: "ei-2016",
    name: "ソドム",
    subName: "エイ＝イ一家組員／闇医者兼殺し屋",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。闇医者兼殺し屋。",
    image: "images/エイ＝イ一家/2016.png"
  },
  {
    id: "ei-2017",
    name: "オラルジ",
    subName: "エイ＝イ一家組員／廃棄物処理業者",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。廃棄物処理業者。",
    image: "images/エイ＝イ一家/2017.png"
  },
  {
    id: "ei-2018",
    name: "ヨコタニ",
    subName: "エイ＝イ一家組員／悪専弁護士",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。悪専弁護士。",
    image: "images/エイ＝イ一家/2018.png"
  },
  {
    id: "ei-2019",
    name: "ノートル",
    subName: "エイ＝イ一家組員／配管工",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。配管工。",
    image: "images/エイ＝イ一家/2019.png"
  },
  {
    id: "ei-2020",
    name: "スフレ",
    subName: "エイ＝イ一家組員／ハッカー",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。ハッカー。",
    image: "images/エイ＝イ一家/2020.png"
  },
  {
    id: "ei-2021",
    name: "ドッグマン",
    subName: "エイ＝イ一家組員／プロレスラー",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。プロレスラー。",
    image: "images/エイ＝イ一家/2021.png"
  },
  {
    id: "ei-2022",
    name: "不明2",
    subName: "エイ＝イ一家組員",
    force: "エイ＝イ一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "エイ＝イ一家に所属する組員。名前・詳細は不明。",
    image: "images/エイ＝イ一家/2022.png"
  },
  {
    id: "sha-3000",
    name: "ブロッコ＝リー",
    subName: "シャ＝ア一家組長",
    force: "シャ＝ア一家",
    groupType: "マフィア",
    category: "組長",
    status: "生存",
    description: "カキン帝国三大マフィアの一つ、シャ＝ア一家の組長。",
    image: "images/シャ＝ア一家/3000.png"
  },
  {
    id: "sha-3001",
    name: "オウ＝ケンイ",
    subName: "シャ＝ア一家若頭",
    force: "シャ＝ア一家",
    groupType: "マフィア",
    category: "幹部",
    status: "生存",
    description: "シャ＝ア一家の若頭。組織の実働を担う幹部。",
    image: "images/シャ＝ア一家/3001.png"
  },
  {
    id: "sha-3002",
    name: "イットク",
    subName: "シャ＝ア一家副組長",
    force: "シャ＝ア一家",
    groupType: "マフィア",
    category: "幹部",
    status: "生存",
    description: "シャ＝ア一家の副組長。",
    image: "images/シャ＝ア一家/3002.png"
  },
  {
    id: "sha-3003",
    name: "タハオ",
    subName: "シャ＝ア一家組長補佐",
    force: "シャ＝ア一家",
    groupType: "マフィア",
    category: "幹部",
    status: "生存",
    description: "シャ＝ア一家の組長補佐。",
    image: "images/シャ＝ア一家/3003.png"
  },
  {
    id: "sha-3004",
    name: "ツドンケ",
    subName: "シャ＝ア一家舎弟頭",
    force: "シャ＝ア一家",
    groupType: "マフィア",
    category: "組員",
    status: "生存",
    description: "シャ＝ア一家に所属する舎弟頭。",
    image: "images/シャ＝ア一家/3004.png"
  }
];