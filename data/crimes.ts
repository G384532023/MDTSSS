import { Crime } from '../types';

export const crimes: Crime[] = [
  // 強盗系
  {
    id: 'robbery_assist',
    name: '強盗ほう助',
    fine: 0,
    detention: 0,
    description: '以下、強盗と同様の罪状となる',
    details: '強盗の罪状に準じる',
    category: 'robbery'
  },
  {
    id: 'boosting',
    name: '無人強盗（ブースティング）',
    fine: 150000,
    detention: 10,
    description: '車両の不正な改造や転売を目的とした盗難行為',
    details: '対応：チェイス、受注可能人数：犯人最大2名 警察0名',
    category: 'robbery',
    maxCriminals: 2,
    minPolice: 0
  },
  {
    id: 'convenience_store',
    name: 'コンビニ強盗',
    fine: 200000,
    fineWithoutGoods: 700000,
    detention: 10,
    description: 'コンビニエンスストアを対象とした強盗行為',
    details: '対応：チェイス、受注可能人数：犯人1名／PD2名以上',
    category: 'robbery',
    maxCriminals: 1,
    minPolice: 2
  },
  {
    id: 'fleeca_bank',
    name: 'フリーカ銀行強盗',
    fine: 500000,
    fineWithoutGoods: 3500000,
    detention: 10,
    description: 'フリーカ銀行を対象とした強盗行為',
    details: '対応：チェイス、受注可能人数：犯人1名／PD4名以上',
    category: 'robbery',
    maxCriminals: 1,
    minPolice: 4
  },
  {
    id: 'motel',
    name: 'モーテル強盗',
    fine: 400000,
    detention: 15,
    description: 'モーテルを対象とした強盗行為',
    details: '対応：殲滅戦、受注可能人数：犯人2名／PD5名以上、使用可能武器：ハンドガンのみ（PDも）',
    category: 'robbery',
    maxCriminals: 2,
    minPolice: 5,
    specialRules: ['ハンドガンのみ使用可']
  },
  {
    id: 'plasma_kart',
    name: 'プラズマカート強盗',
    fine: 500000,
    detention: 10,
    description: 'カートレース形式の特殊強盗',
    details: '対応：特殊、受注可能人数：犯人2名／PD2名以上、1位3p 2位2p 3位1p 4位0p',
    category: 'robbery',
    maxCriminals: 2,
    minPolice: 2,
    specialRules: ['battlemode固定', 'ラップ数3固定', '排気量200cc固定']
  },
  {
    id: 'plasma_tron',
    name: 'プラズマトロン強盗',
    fine: 500000,
    detention: 10,
    description: 'トロン形式の特殊強盗',
    details: '対応：特殊、受注可能人数：犯人3名／PD3名以上、2ポイント先取制',
    category: 'robbery',
    maxCriminals: 3,
    minPolice: 3,
    specialRules: ['3vs3', '6人プレイマップ固定', 'ラウンド数3固定']
  },
  {
    id: 'plasma_game',
    name: 'プラズマゲーム強盗',
    fine: 500000,
    detention: 10,
    description: '自由選択ゲーム形式の特殊強盗',
    details: '対応：特殊、受注可能人数：犯人3名／PD3名以上、2ポイント先取制',
    category: 'robbery',
    maxCriminals: 3,
    minPolice: 3,
    specialRules: ['マップ自由', 'ゲームモード自由', 'ラウンド数3固定']
  },
  {
    id: 'vangelico',
    name: 'ヴァンジェリコ宝石店強盗',
    fine: 250000,
    fineWithoutGoods: 2250000,
    detention: 15,
    description: '宝石店を対象とした強盗行為',
    details: '対応：チェイス、受注可能人数：犯人1名／PD7名以上',
    category: 'robbery',
    maxCriminals: 1,
    minPolice: 7
  },
  {
    id: 'train',
    name: 'トレイン強盗',
    fine: 1000000,
    detention: 15,
    description: '列車を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人4名／PD6名以上',
    category: 'robbery',
    maxCriminals: 4,
    minPolice: 6
  },
  {
    id: 'bobcat',
    name: 'ボブキャット強盗',
    fine: 1000000,
    detention: 15,
    description: 'ボブキャット施設を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人4名／PD6名以上',
    category: 'robbery',
    maxCriminals: 4,
    minPolice: 6
  },
  {
    id: 'airport',
    name: '空港強盗',
    fine: 1000000,
    detention: 15,
    description: '空港を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人5名／PD7名以上',
    category: 'robbery',
    maxCriminals: 5,
    minPolice: 7
  },
  {
    id: 'cruise_ship',
    name: '客船強盗',
    fine: 1000000,
    detention: 15,
    description: '客船を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人4名／PD7名以上',
    category: 'robbery',
    maxCriminals: 4,
    minPolice: 7
  },
  {
    id: 'artifact',
    name: 'アーティファクト強盗',
    fine: 1000000,
    detention: 15,
    description: 'アーティファクトを対象とした強盗行為',
    details: '対応：殲滅戦、受注可能人数：犯人8名／PD10名以上',
    category: 'robbery',
    maxCriminals: 8,
    minPolice: 10
  },
  {
    id: 'pacific_bank',
    name: 'パシフィック銀行強盗',
    fine: 1000000,
    detention: 15,
    description: 'パシフィック銀行を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人7名／PD10名以上',
    category: 'robbery',
    maxCriminals: 7,
    minPolice: 10
  },
  {
    id: 'aircraft_carrier',
    name: '空母強盗',
    fine: 1000000,
    detention: 15,
    description: '空母を対象とした強盗行為',
    details: '対応：銃撃戦（途中で隙を見て逃走可）、受注可能人数：犯人8名／PD12名以上',
    category: 'robbery',
    maxCriminals: 8,
    minPolice: 12
  },

  // 殺人系
  {
    id: 'assault',
    name: '暴行罪',
    fine: 50000,
    detention: 10,
    description: '他の市民に攻撃を行い、死亡まで至らなかった場合',
    details: '暴行罪の詳細',
    category: 'murder'
  },
  // ... 他の殺人系犯罪を追加 ...

  // 軽犯罪
  {
    id: 'speeding',
    name: 'スピード違反',
    fine: 30000,
    detention: 0,
    description: '制限速度超過（一般道120km/h、高速200km/h）',
    details: '発生時の状況に応じて罰金が加算',
    category: 'minor'
  },
  // ... 他の軽犯罪を追加 ...

  // 薬物系
  {
    id: 'drug_possession',
    name: '違法薬物所持罪',
    fine: 200000,
    detention: 0,
    description: 'Corocodile、違法なモルヒネの所持',
    details: '手荷物確認時に所持していた場合に該当',
    category: 'drug'
  },
  // ... 他の薬物系犯罪を追加 ...
];