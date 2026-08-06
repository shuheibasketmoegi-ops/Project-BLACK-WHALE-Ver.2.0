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
    description: "第1王子ベンジャミンの私設兵。",
    image: "images/第1王子/102.png",
    nenAbility: {
      name: "虚空拳（エアブロウ）",
      description: "片手から何らかの強力な遠距離攻撃を放つとみられる能力。発動前にクラピカに奪われたため、詳しい効果は不明。"
    }
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
    monitoring: { targets: ["第12王子陣営", "第9王子陣営"], active: true },
    nenAbility: {
      name: "表裏一体（タックルシールド）",
      description: "攻撃と防御を兼ね備えた戦闘向けの念能力。具体的な効果や発動条件、念系統は不明。"
    }
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
    monitoring: { targets: ["第5王子陣営"], active: false }
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
    monitorFor: ["第2王子陣営"],
    nenAbility: {
      name: "裏窓の鳥（シークレットウィンドウ）",
      description: "3種類の鳥型念獣を操る諜報用の念能力。作中で判明している「ミミズク」は、対象者に触れることで取り憑き、対象の言動をテレパシーで術者へ伝える。ミミズクは術者にしか見えず、残る2種類の能力は不明。"
    }
  },
  {
    id: 108,
    name: "ヒュリコフ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "生存",
    description: "第1王子ベンジャミンの私設兵。念能力者を見抜く観察眼を持ち、念講習にも関わる。",
    image: "images/第1王子/108.png",
    nenAbility: {
      name: "鋼の錬金術師（コンボマスター）",
      description: "標的のそばに一定時間いることで、その念能力の詳細を読み取る特質系能力。解析した能力を破壊、または補強・補助するための武具を錬成できる。能力の影響が大きいほど解析と錬成に時間がかかり、その最中は「発」を使用できない。錬成を中断すると、進行時間はリセットされる。"
    }
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
    monitoring: { targets: ["第8王子陣営", "第5王子陣営"], active: true },
    nenAbility: {
      name: "異邦人（プレデター）",
      description: "対象の念能力を観察・分析し、その能力の「天敵」となる念獣を体内で育てて具現化する能力。能力を未知の状態から正確に推測するほど強力になり、対象の念能力を捕食・無力化できる。一方、既知の能力や単純な強化系・放出系には相性が悪く、捕食後は48時間念を使用できない。"
    }
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
    monitorFor: ["第9王子陣営"],
    nenAbility: {
      name: "遊戯王（カルドセプト）",
      description: "カード状の盾を展開し、受けた念能力をカード化して入手する防御型の操作系能力とみられる。発動時にはあらかじめ自分自身を操作し、他者から操作されることを防ぐ。詳しい発動条件やカード化後の効果は不明。"
    }
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
    monitoring: { targets: ["第11王子陣営", "第8王子陣営"], active: false },
    nenAbility: {
      name: "殺人を無罪にする方法（スタンドバイミー）",
      description: "虫型念獣「虫射球（ニードルボール）」を標的に取り憑かせ、一定の潜伏期間を経て殺害する暗殺能力。発動中は標的を術者の半径20メートル以内に留める必要がある。念能力者には虫射球を認識・除去される可能性があり、一度除去されると同じ標的には二度と使用できない。念系統は不明。"
    }
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
    name: "チヤマシ",
    subName: "ベンジャミン私設兵（王立軍）",
    force: "第1王子陣営",
    category: "私設兵",
    status: "不明",
    description: "第1王子ベンジャミンの私設兵。",
    image: "images/第1王子/114.png",
    monitoring: { targets: ["第10王子陣営"], active: false },
    nenAbility: {
      name: "蝿の王（ムテキング）",
      description: "志願者に触れ続けた時間と同じ間、対象を無敵状態にする操作系・半強制型能力。無敵時間の終了後、対象はその100倍の時間、強制的な「絶」状態となり、解除直後に無効化した全攻撃の3分の1相当のダメージを受ける。複数の能力者による相互協力型の攻撃は無効化できない。"
    }
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
    image: …13884 tokens truncated…s: "生存",
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
