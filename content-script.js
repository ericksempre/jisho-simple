(() => {
    const KANJI_INFOS = {
        '一': {
            onYomi: [
                'イチ',
                'イツ',
            ],
            kunYomi: [
                'ひと',
                'ひと.つ',
            ],
            gakunen: '小1',
        },
        '亜': {
            onYomi: [
                'ア',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '哀': {
            onYomi: [
                'アイ',
            ],
            kunYomi: [
                'あわ.れ',
                'あわ.れむ',
            ],
            gakunen: '中',
        },
        '挨': {
            onYomi: [
                'アイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '愛': {
            onYomi: [
                'アイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '曖': {
            onYomi: [
                'アイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '悪': {
            onYomi: [
                'アク',
                'オ',
            ],
            kunYomi: [
                'わる.い',
            ],
            gakunen: '小3',
        },
        '握': {
            onYomi: [
                'アク',
            ],
            kunYomi: [
                'にぎ.る',
            ],
            gakunen: '中',
        },
        '圧': {
            onYomi: [
                'アツ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '扱': {
            onYomi: [],
            kunYomi: [
                'あつか.う',
            ],
            gakunen: '中',
        },
        '宛': {
            onYomi: [],
            kunYomi: [
                'あ.てる',
            ],
            gakunen: '中',
        },
        '嵐': {
            onYomi: [],
            kunYomi: [
                'あらし',
            ],
            gakunen: '中',
        },
        '安': {
            onYomi: [
                'アン',
            ],
            kunYomi: [
                'やす.い',
            ],
            gakunen: '小3',
        },
        '案': {
            onYomi: [
                'アン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '暗': {
            onYomi: [
                'アン',
            ],
            kunYomi: [
                'くら.い',
            ],
            gakunen: '小3',
        },
        '以': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '衣': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'ころも',
            ],
            gakunen: '小4',
        },
        '位': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'くらい',
            ],
            gakunen: '小4',
        },
        '囲': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'かこ.む',
                'かこ.う',
            ],
            gakunen: '小5',
        },
        '医': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '依': {
            onYomi: [
                'イ',
                '*エ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '委': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'ゆだ.ねる',
            ],
            gakunen: '小3',
        },
        '威': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '為': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '畏': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'おそ.れる',
            ],
            gakunen: '中',
        },
        '胃': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '尉': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '異': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'こと',
            ],
            gakunen: '小6',
        },
        '移': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'うつ.る',
                'うつ.す',
            ],
            gakunen: '小5',
        },
        '萎': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'な.える',
            ],
            gakunen: '中',
        },
        '偉': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'えら.い',
            ],
            gakunen: '中',
        },
        '椅': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '彙': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '意': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '違': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'ちが.う',
                'ちが.える',
            ],
            gakunen: '中',
        },
        '維': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '慰': {
            onYomi: [
                'イ',
            ],
            kunYomi: [
                'なぐさ.める',
                'なぐさ.む',
            ],
            gakunen: '中',
        },
        '遺': {
            onYomi: [
                'イ',
                '*ユイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '緯': {
            onYomi: [
                'イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '域': {
            onYomi: [
                'イキ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '育': {
            onYomi: [
                'イク',
            ],
            kunYomi: [
                'そだ.つ',
                'そだ.てる',
                'はぐく.む',
            ],
            gakunen: '小3',
        },
        '壱': {
            onYomi: [
                'イチ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '逸': {
            onYomi: [
                'イツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '茨': {
            onYomi: [],
            kunYomi: [
                'いばら',
            ],
            gakunen: '小4',
        },
        '芋': {
            onYomi: [],
            kunYomi: [
                'いも',
            ],
            gakunen: '中',
        },
        '引': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'ひ.く',
                'ひ.ける',
            ],
            gakunen: '小2',
        },
        '印': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'しるし',
            ],
            gakunen: '小4',
        },
        '因': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'よ.る',
            ],
            gakunen: '小5',
        },
        '咽': {
            onYomi: [
                'イン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '姻': {
            onYomi: [
                'イン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '員': {
            onYomi: [
                'イン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '院': {
            onYomi: [
                'イン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '淫': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'みだ.ら',
            ],
            gakunen: '中',
        },
        '陰': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'かげ',
                'かげ.る',
            ],
            gakunen: '中',
        },
        '飲': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'の.む',
            ],
            gakunen: '小3',
        },
        '隠': {
            onYomi: [
                'イン',
            ],
            kunYomi: [
                'かく.す',
                'かく.れる',
            ],
            gakunen: '中',
        },
        '韻': {
            onYomi: [
                'イン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '右': {
            onYomi: [
                'ウ',
                'ユウ',
            ],
            kunYomi: [
                'みぎ',
            ],
            gakunen: '小1',
        },
        '宇': {
            onYomi: [
                'ウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '羽': {
            onYomi: [
                'ウ',
            ],
            kunYomi: [
                'は',
                'はね',
            ],
            gakunen: '小2',
        },
        '雨': {
            onYomi: [
                'ウ',
            ],
            kunYomi: [
                'あめ',
                '*あま',
            ],
            gakunen: '小1',
        },
        '唄': {
            onYomi: [],
            kunYomi: [
                '*うた',
            ],
            gakunen: '中',
        },
        '鬱': {
            onYomi: [
                'ウツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '畝': {
            onYomi: [],
            kunYomi: [
                'うね',
            ],
            gakunen: '中',
        },
        '浦': {
            onYomi: [],
            kunYomi: [
                'うら',
            ],
            gakunen: '中',
        },
        '運': {
            onYomi: [
                'ウン',
            ],
            kunYomi: [
                'はこ.ぶ',
            ],
            gakunen: '小3',
        },
        '雲': {
            onYomi: [
                'ウン',
            ],
            kunYomi: [
                'くも',
            ],
            gakunen: '小2',
        },
        '永': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'なが.い',
            ],
            gakunen: '小5',
        },
        '泳': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'およ.ぐ',
            ],
            gakunen: '小3',
        },
        '英': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '映': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'うつ.る',
                'うつ.す',
                'は.える',
            ],
            gakunen: '小6',
        },
        '栄': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'さか.える',
                'は.え',
                'は.える',
            ],
            gakunen: '小4',
        },
        '営': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'いとな.む',
            ],
            gakunen: '小5',
        },
        '詠': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'よ.む',
            ],
            gakunen: '中',
        },
        '影': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'かげ',
            ],
            gakunen: '中',
        },
        '鋭': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [
                'するど.い',
            ],
            gakunen: '中',
        },
        '衛': {
            onYomi: [
                'エイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '易': {
            onYomi: [
                'エキ',
                'イ',
            ],
            kunYomi: [
                'やさ.しい',
            ],
            gakunen: '小5',
        },
        '疫': {
            onYomi: [
                'エキ',
                '*ヤク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '益': {
            onYomi: [
                'エキ',
                '*ヤク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '液': {
            onYomi: [
                'エキ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '駅': {
            onYomi: [
                'エキ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '悦': {
            onYomi: [
                'エツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '越': {
            onYomi: [
                'エツ',
            ],
            kunYomi: [
                'こ.す',
                'こ.える',
            ],
            gakunen: '中',
        },
        '謁': {
            onYomi: [
                'エツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '閲': {
            onYomi: [
                'エツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '円': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'まる.い',
            ],
            gakunen: '小1',
        },
        '延': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'の.びる',
                'の.べる',
                'の.ばす',
            ],
            gakunen: '小6',
        },
        '沿': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'そ.う',
            ],
            gakunen: '小6',
        },
        '炎': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'ほのお',
            ],
            gakunen: '中',
        },
        '怨': {
            onYomi: [
                'エン',
                'オン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '宴': {
            onYomi: [
                'エン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '媛': {
            onYomi: [
                'エン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '援': {
            onYomi: [
                'エン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '園': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'その',
            ],
            gakunen: '小2',
        },
        '煙': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'けむ.る',
                'けむり',
                'けむ.い',
            ],
            gakunen: '中',
        },
        '猿': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'さる',
            ],
            gakunen: '中',
        },
        '遠': {
            onYomi: [
                'エン',
                '*オン',
            ],
            kunYomi: [
                'とお.い',
            ],
            gakunen: '小2',
        },
        '鉛': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'なまり',
            ],
            gakunen: '中',
        },
        '塩': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'しお',
            ],
            gakunen: '小4',
        },
        '演': {
            onYomi: [
                'エン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '縁': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'ふち',
            ],
            gakunen: '中',
        },
        '艶': {
            onYomi: [
                'エン',
            ],
            kunYomi: [
                'つや',
            ],
            gakunen: '中',
        },
        '汚': {
            onYomi: [
                'オ',
            ],
            kunYomi: [
                'けが.す',
                'けが.れる',
                'けが.らわしい',
                'よご.す',
                'よご.れる',
                'きたな.い',
            ],
            gakunen: '中',
        },
        '王': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '小1',
        },
        '凹': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '央': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '応': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'こた.える',
            ],
            gakunen: '小5',
        },
        '往': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '押': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'お.す',
                'お.さえる',
            ],
            gakunen: '中',
        },
        '旺': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '欧': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '殴': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'なぐ.る',
            ],
            gakunen: '中',
        },
        '桜': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'さくら',
            ],
            gakunen: '小5',
        },
        '翁': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '奥': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'おく',
            ],
            gakunen: '中',
        },
        '横': {
            onYomi: [
                'オウ',
            ],
            kunYomi: [
                'よこ',
            ],
            gakunen: '小3',
        },
        '岡': {
            onYomi: [],
            kunYomi: [
                'おか',
            ],
            gakunen: '小4',
        },
        '屋': {
            onYomi: [
                'オク',
            ],
            kunYomi: [
                'や',
            ],
            gakunen: '小3',
        },
        '億': {
            onYomi: [
                'オク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '憶': {
            onYomi: [
                'オク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '臆': {
            onYomi: [
                'オク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '虞': {
            onYomi: [],
            kunYomi: [
                'おそれ',
            ],
            gakunen: '中',
        },
        '乙': {
            onYomi: [
                'オツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '俺': {
            onYomi: [],
            kunYomi: [
                'おれ',
            ],
            gakunen: '中',
        },
        '卸': {
            onYomi: [],
            kunYomi: [
                'おろ.す',
                'おろし',
            ],
            gakunen: '中',
        },
        '音': {
            onYomi: [
                'オン',
                'イン',
            ],
            kunYomi: [
                'おと',
                'ね',
            ],
            gakunen: '小1',
        },
        '恩': {
            onYomi: [
                'オン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '温': {
            onYomi: [
                'オン',
            ],
            kunYomi: [
                'あたた.か',
                'あたた.かい',
                'あたた.まる',
                'あたた.める',
            ],
            gakunen: '小3',
        },
        '穏': {
            onYomi: [
                'オン',
            ],
            kunYomi: [
                'おだ.やか',
            ],
            gakunen: '中',
        },
        '下': {
            onYomi: [
                'カ',
                'ゲ',
            ],
            kunYomi: [
                'した',
                'しも',
                'もと',
                'さ.げる',
                'さ.がる',
                'くだ.る',
                'くだ.す',
                'くだ.さる',
                'お.ろす',
                'お.りる',
            ],
            gakunen: '小1',
        },
        '化': {
            onYomi: [
                'カ',
                'ケ',
            ],
            kunYomi: [
                'ば.ける',
                'ば.かす',
            ],
            gakunen: '小3',
        },
        '火': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'ひ',
                '*ほ',
            ],
            gakunen: '小1',
        },
        '加': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'くわ.える',
                'くわ.わる',
            ],
            gakunen: '小4',
        },
        '可': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '仮': {
            onYomi: [
                'カ',
                '*ケ',
            ],
            kunYomi: [
                'かり',
            ],
            gakunen: '小5',
        },
        '何': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'なに',
                '*なん',
            ],
            gakunen: '小2',
        },
        '花': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'はな',
            ],
            gakunen: '小1',
        },
        '佳': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '価': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'あたい',
            ],
            gakunen: '小5',
        },
        '果': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'は.たす',
                'は.てる',
                'は.て',
            ],
            gakunen: '小4',
        },
        '河': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'かわ',
            ],
            gakunen: '小5',
        },
        '苛': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '科': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '架': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'か.ける',
                'か.かる',
            ],
            gakunen: '中',
        },
        '夏': {
            onYomi: [
                'カ',
                '*ゲ',
            ],
            kunYomi: [
                'なつ',
            ],
            gakunen: '小2',
        },
        '家': {
            onYomi: [
                'カ',
                'ケ',
            ],
            kunYomi: [
                'いえ',
                'や',
            ],
            gakunen: '小2',
        },
        '荷': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'に',
            ],
            gakunen: '小3',
        },
        '華': {
            onYomi: [
                'カ',
                '*ケ',
            ],
            kunYomi: [
                'はな',
            ],
            gakunen: '中',
        },
        '菓': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '貨': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '渦': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'うず',
            ],
            gakunen: '中',
        },
        '過': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'す.ぎる',
                'す.ごす',
                'あやま.つ',
                'あやま.ち',
            ],
            gakunen: '小5',
        },
        '嫁': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'よめ',
                'とつ.ぐ',
            ],
            gakunen: '中',
        },
        '暇': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'ひま',
            ],
            gakunen: '中',
        },
        '禍': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '靴': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'くつ',
            ],
            gakunen: '中',
        },
        '寡': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '歌': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'うた',
                'うた.う',
            ],
            gakunen: '小2',
        },
        '箇': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '稼': {
            onYomi: [
                'カ',
            ],
            kunYomi: [
                'かせ.ぐ',
            ],
            gakunen: '中',
        },
        '課': {
            onYomi: [
                'カ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '蚊': {
            onYomi: [],
            kunYomi: [
                'か',
            ],
            gakunen: '中',
        },
        '牙': {
            onYomi: [
                'ガ',
                '*ゲ',
            ],
            kunYomi: [
                'きば',
            ],
            gakunen: '中',
        },
        '瓦': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [
                'かわら',
            ],
            gakunen: '中',
        },
        '我': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [
                'われ',
                'わ',
            ],
            gakunen: '小6',
        },
        '画': {
            onYomi: [
                'ガ',
                'カク',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '芽': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [
                'め',
            ],
            gakunen: '小4',
        },
        '賀': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '雅': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '餓': {
            onYomi: [
                'ガ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '介': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '回': {
            onYomi: [
                'カイ',
                '*エ',
            ],
            kunYomi: [
                'まわ.る',
                'まわ.す',
            ],
            gakunen: '小2',
        },
        '灰': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'はい',
            ],
            gakunen: '小6',
        },
        '会': {
            onYomi: [
                'カイ',
                'エ',
            ],
            kunYomi: [
                'あ.う',
            ],
            gakunen: '小2',
        },
        '快': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'こころよ.い',
            ],
            gakunen: '小5',
        },
        '戒': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'いまし.める',
            ],
            gakunen: '中',
        },
        '改': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'あらた.める',
                'あらた.まる',
            ],
            gakunen: '小4',
        },
        '怪': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'あや.しい',
                'あや.しむ',
            ],
            gakunen: '中',
        },
        '拐': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '悔': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'く.いる',
                'く.やむ',
                'くや.しい',
            ],
            gakunen: '中',
        },
        '海': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'うみ',
            ],
            gakunen: '小2',
        },
        '界': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '皆': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'みな',
            ],
            gakunen: '中',
        },
        '械': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '絵': {
            onYomi: [
                'カイ',
                'エ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '開': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'ひら.く',
                'ひら.ける',
                'あ.く',
                'あ.ける',
            ],
            gakunen: '小3',
        },
        '階': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '塊': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'かたまり',
            ],
            gakunen: '中',
        },
        '楷': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '解': {
            onYomi: [
                'カイ',
                'ゲ',
            ],
            kunYomi: [
                'と.く',
                'と.かす',
                'と.ける',
            ],
            gakunen: '小5',
        },
        '潰': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'つぶ.す',
                'つぶ.れる',
            ],
            gakunen: '中',
        },
        '壊': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'こわ.す',
                'こわ.れる',
            ],
            gakunen: '中',
        },
        '懐': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [
                'ふところ',
                'なつ.かしい',
                'なつ.かしむ',
                'なつ.く',
                'なつ.ける',
            ],
            gakunen: '中',
        },
        '諧': {
            onYomi: [
                'カイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '貝': {
            onYomi: [],
            kunYomi: [
                'かい',
            ],
            gakunen: '小1',
        },
        '外': {
            onYomi: [
                'ガイ',
                'ゲ',
            ],
            kunYomi: [
                'そと',
                'ほか',
                'はず.す',
                'はず.れる',
            ],
            gakunen: '小2',
        },
        '劾': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '害': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '崖': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [
                'がけ',
            ],
            gakunen: '中',
        },
        '涯': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '街': {
            onYomi: [
                'ガイ',
                '*カイ',
            ],
            kunYomi: [
                'まち',
            ],
            gakunen: '小4',
        },
        '慨': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '蓋': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [
                'ふた',
            ],
            gakunen: '中',
        },
        '該': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '概': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '骸': {
            onYomi: [
                'ガイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '垣': {
            onYomi: [],
            kunYomi: [
                'かき',
            ],
            gakunen: '中',
        },
        '柿': {
            onYomi: [],
            kunYomi: [
                'かき',
            ],
            gakunen: '中',
        },
        '各': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'おのおの',
            ],
            gakunen: '小4',
        },
        '角': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'かど',
                'つの',
            ],
            gakunen: '小2',
        },
        '拡': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '革': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'かわ',
            ],
            gakunen: '小6',
        },
        '格': {
            onYomi: [
                'カク',
                '*コウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '核': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '殻': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'から',
            ],
            gakunen: '中',
        },
        '郭': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '覚': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'おぼ.える',
                'さ.ます',
                'さ.める',
            ],
            gakunen: '小4',
        },
        '較': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '隔': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'へだ.てる',
                'へだ.たる',
            ],
            gakunen: '中',
        },
        '閣': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '確': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'たし.か',
                'たし.かめる',
            ],
            gakunen: '小5',
        },
        '獲': {
            onYomi: [
                'カク',
            ],
            kunYomi: [
                'え.る',
            ],
            gakunen: '中',
        },
        '嚇': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '穫': {
            onYomi: [
                'カク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '学': {
            onYomi: [
                'ガク',
            ],
            kunYomi: [
                'まな.ぶ',
            ],
            gakunen: '小1',
        },
        '岳': {
            onYomi: [
                'ガク',
            ],
            kunYomi: [
                'たけ',
            ],
            gakunen: '中',
        },
        '楽': {
            onYomi: [
                'ガク',
                'ラク',
            ],
            kunYomi: [
                'たの.しい',
                'たの.しむ',
            ],
            gakunen: '小2',
        },
        '額': {
            onYomi: [
                'ガク',
            ],
            kunYomi: [
                'ひたい',
            ],
            gakunen: '小5',
        },
        '顎': {
            onYomi: [
                'ガク',
            ],
            kunYomi: [
                'あご',
            ],
            gakunen: '中',
        },
        '掛': {
            onYomi: [],
            kunYomi: [
                'か.ける',
                'か.かる',
                'かかり',
            ],
            gakunen: '中',
        },
        '潟': {
            onYomi: [],
            kunYomi: [
                'かた',
            ],
            gakunen: '小4',
        },
        '括': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '活': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '喝': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '渇': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [
                'かわ.く',
            ],
            gakunen: '中',
        },
        '割': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [
                'わ.る',
                'わり',
                'わ.れる',
                'さ.く',
            ],
            gakunen: '小6',
        },
        '葛': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [
                'くず',
            ],
            gakunen: '中',
        },
        '滑': {
            onYomi: [
                'カツ',
                'コツ',
            ],
            kunYomi: [
                'すべ.る',
                'なめ.らか',
            ],
            gakunen: '中',
        },
        '褐': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '轄': {
            onYomi: [
                'カツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '且': {
            onYomi: [],
            kunYomi: [
                'か.つ',
            ],
            gakunen: '中',
        },
        '株': {
            onYomi: [],
            kunYomi: [
                'かぶ',
            ],
            gakunen: '小6',
        },
        '釜': {
            onYomi: [],
            kunYomi: [
                'かま',
            ],
            gakunen: '中',
        },
        '鎌': {
            onYomi: [],
            kunYomi: [
                'かま',
            ],
            gakunen: '中',
        },
        '刈': {
            onYomi: [],
            kunYomi: [
                'か.る',
            ],
            gakunen: '中',
        },
        '干': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'ほ.す',
                'ひ.る',
            ],
            gakunen: '小6',
        },
        '刊': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '甘': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'あま.い',
                'あま.える',
                'あま.やかす',
            ],
            gakunen: '中',
        },
        '汗': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'あせ',
            ],
            gakunen: '中',
        },
        '缶': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '完': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '肝': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'きも',
            ],
            gakunen: '中',
        },
        '官': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '冠': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'かんむり',
            ],
            gakunen: '中',
        },
        '巻': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'ま.く',
                'まき',
            ],
            gakunen: '小6',
        },
        '看': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '陥': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'おちい.る',
                'おとしい.れる',
            ],
            gakunen: '中',
        },
        '乾': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'かわ.く',
                'かわ.かす',
            ],
            gakunen: '中',
        },
        '勘': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '患': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'わずら.う',
            ],
            gakunen: '中',
        },
        '貫': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'つらぬ.く',
            ],
            gakunen: '中',
        },
        '寒': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'さむ.い',
            ],
            gakunen: '小3',
        },
        '喚': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '堪': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'た.える',
            ],
            gakunen: '中',
        },
        '換': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'か.える',
                'か.わる',
            ],
            gakunen: '中',
        },
        '敢': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '棺': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '款': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '間': {
            onYomi: [
                'カン',
                'ケン',
            ],
            kunYomi: [
                'あいだ',
                'ま',
            ],
            gakunen: '小2',
        },
        '閑': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '勧': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'すす.める',
            ],
            gakunen: '中',
        },
        '寛': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '幹': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'みき',
            ],
            gakunen: '小5',
        },
        '感': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '漢': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '慣': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'な.れる',
                'な.らす',
            ],
            gakunen: '小5',
        },
        '管': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'くだ',
            ],
            gakunen: '小4',
        },
        '関': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'せき',
                'かか.わる',
            ],
            gakunen: '小4',
        },
        '歓': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '監': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '緩': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'ゆる.い',
                'ゆる.やか',
                'ゆる.む',
                'ゆる.める',
            ],
            gakunen: '中',
        },
        '憾': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '還': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '館': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'やかた',
            ],
            gakunen: '小3',
        },
        '環': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '簡': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '観': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '韓': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '艦': {
            onYomi: [
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鑑': {
            onYomi: [
                'カン',
            ],
            kunYomi: [
                'かんが.みる',
            ],
            gakunen: '中',
        },
        '丸': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'まる',
                'まる.い',
                'まる.める',
            ],
            gakunen: '小2',
        },
        '含': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'ふく.む',
                'ふく.める',
            ],
            gakunen: '中',
        },
        '岸': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'きし',
            ],
            gakunen: '小3',
        },
        '岩': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'いわ',
            ],
            gakunen: '小2',
        },
        '玩': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '眼': {
            onYomi: [
                'ガン',
                '*ゲン',
            ],
            kunYomi: [
                'まなこ',
            ],
            gakunen: '小5',
        },
        '頑': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '顔': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'かお',
            ],
            gakunen: '小2',
        },
        '願': {
            onYomi: [
                'ガン',
            ],
            kunYomi: [
                'ねが.う',
            ],
            gakunen: '小4',
        },
        '企': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'くわだ.てる',
            ],
            gakunen: '中',
        },
        '伎': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '危': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'あぶ.ない',
                'あや.うい',
                'あや.ぶむ',
            ],
            gakunen: '小6',
        },
        '机': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'つくえ',
            ],
            gakunen: '小6',
        },
        '気': {
            onYomi: [
                'キ',
                'ケ',
            ],
            kunYomi: [],
            gakunen: '小1',
        },
        '岐': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '希': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '忌': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'い.む',
                'い.まわしい',
            ],
            gakunen: '中',
        },
        '汽': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '奇': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '祈': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'いの.る',
            ],
            gakunen: '中',
        },
        '季': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '紀': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '軌': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '既': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'すで.に',
            ],
            gakunen: '中',
        },
        '記': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'しる.す',
            ],
            gakunen: '小2',
        },
        '起': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'お.きる',
                'お.こる',
                'お.こす',
            ],
            gakunen: '小3',
        },
        '飢': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'う.える',
            ],
            gakunen: '中',
        },
        '鬼': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'おに',
            ],
            gakunen: '中',
        },
        '帰': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'かえ.る',
                'かえ.す',
            ],
            gakunen: '小2',
        },
        '基': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'もと',
                'もとい',
            ],
            gakunen: '小5',
        },
        '寄': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'よ.る',
                'よ.せる',
            ],
            gakunen: '小5',
        },
        '規': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '亀': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'かめ',
            ],
            gakunen: '中',
        },
        '喜': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'よろこ.ぶ',
            ],
            gakunen: '小5',
        },
        '幾': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'いく',
            ],
            gakunen: '中',
        },
        '揮': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '期': {
            onYomi: [
                'キ',
                '*ゴ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '棋': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '貴': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'たっと.い',
                'とうと.い',
                'たっと.ぶ',
                'とうと.ぶ',
            ],
            gakunen: '小6',
        },
        '棄': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '毀': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '旗': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'はた',
            ],
            gakunen: '小4',
        },
        '器': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'うつわ',
            ],
            gakunen: '小4',
        },
        '畿': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '輝': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'かがや.く',
            ],
            gakunen: '中',
        },
        '機': {
            onYomi: [
                'キ',
            ],
            kunYomi: [
                'はた',
            ],
            gakunen: '小4',
        },
        '騎': {
            onYomi: [
                'キ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '技': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [
                'わざ',
            ],
            gakunen: '小5',
        },
        '宜': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '偽': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [
                'いつわ.る',
                'にせ',
            ],
            gakunen: '中',
        },
        '欺': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [
                'あざむ.く',
            ],
            gakunen: '中',
        },
        '義': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '疑': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [
                'うたが.う',
            ],
            gakunen: '小6',
        },
        '儀': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '戯': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [
                'たわむ.れる',
            ],
            gakunen: '中',
        },
        '擬': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '犠': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '議': {
            onYomi: [
                'ギ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '菊': {
            onYomi: [
                'キク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '吉': {
            onYomi: [
                'キチ',
                'キツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '喫': {
            onYomi: [
                'キツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '詰': {
            onYomi: [
                'キツ',
            ],
            kunYomi: [
                'つ.める',
                'つ.まる',
                'つ.む',
            ],
            gakunen: '中',
        },
        '却': {
            onYomi: [
                'キャク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '客': {
            onYomi: [
                'キャク',
                'カク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '脚': {
            onYomi: [
                'キャク',
                '*キャ',
            ],
            kunYomi: [
                'あし',
            ],
            gakunen: '中',
        },
        '逆': {
            onYomi: [
                'ギャク',
            ],
            kunYomi: [
                'さか',
                'さか.らう',
            ],
            gakunen: '小5',
        },
        '虐': {
            onYomi: [
                'ギャク',
            ],
            kunYomi: [
                'しいた.げる',
            ],
            gakunen: '中',
        },
        '九': {
            onYomi: [
                'キュウ',
                'ク',
            ],
            kunYomi: [
                'ここの',
                'ここの.つ',
            ],
            gakunen: '小1',
        },
        '久': {
            onYomi: [
                'キュウ',
                '*ク',
            ],
            kunYomi: [
                'ひさ.しい',
            ],
            gakunen: '小5',
        },
        '及': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'およ.ぶ',
                'およ.び',
                'およ.ぼす',
            ],
            gakunen: '中',
        },
        '弓': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'ゆみ',
            ],
            gakunen: '小2',
        },
        '丘': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'おか',
            ],
            gakunen: '中',
        },
        '旧': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '休': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'やす.む',
                'やす.まる',
                'やす.める',
            ],
            gakunen: '小1',
        },
        '吸': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'す.う',
            ],
            gakunen: '小6',
        },
        '朽': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'く.ちる',
            ],
            gakunen: '中',
        },
        '臼': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'うす',
            ],
            gakunen: '中',
        },
        '求': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'もと.める',
            ],
            gakunen: '小4',
        },
        '究': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'きわ.める',
            ],
            gakunen: '小3',
        },
        '泣': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'な.く',
            ],
            gakunen: '小4',
        },
        '急': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'いそ.ぐ',
            ],
            gakunen: '小3',
        },
        '級': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '糾': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '宮': {
            onYomi: [
                'キュウ',
                'グウ',
                '*ク',
            ],
            kunYomi: [
                'みや',
            ],
            gakunen: '小3',
        },
        '救': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'すく.う',
            ],
            gakunen: '小5',
        },
        '球': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'たま',
            ],
            gakunen: '小3',
        },
        '給': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '嗅': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'か.ぐ',
            ],
            gakunen: '中',
        },
        '窮': {
            onYomi: [
                'キュウ',
            ],
            kunYomi: [
                'きわ.める',
                'きわ.まる',
            ],
            gakunen: '中',
        },
        '牛': {
            onYomi: [
                'ギュウ',
            ],
            kunYomi: [
                'うし',
            ],
            gakunen: '小2',
        },
        '去': {
            onYomi: [
                'キョ',
                'コ',
            ],
            kunYomi: [
                'さ.る',
            ],
            gakunen: '小3',
        },
        '巨': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '居': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [
                'い.る',
            ],
            gakunen: '小5',
        },
        '拒': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [
                'こば.む',
            ],
            gakunen: '中',
        },
        '拠': {
            onYomi: [
                'キョ',
                'コ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '挙': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [
                'あ.げる',
                'あ.がる',
            ],
            gakunen: '小4',
        },
        '虚': {
            onYomi: [
                'キョ',
                '*コ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '許': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [
                'ゆる.す',
            ],
            gakunen: '小5',
        },
        '距': {
            onYomi: [
                'キョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '魚': {
            onYomi: [
                'ギョ',
            ],
            kunYomi: [
                'うお',
                'さかな',
            ],
            gakunen: '小2',
        },
        '御': {
            onYomi: [
                'ギョ',
                'ゴ',
            ],
            kunYomi: [
                'おん',
            ],
            gakunen: '中',
        },
        '漁': {
            onYomi: [
                'ギョ',
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '凶': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '共': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'とも',
            ],
            gakunen: '小4',
        },
        '叫': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'さけ.ぶ',
            ],
            gakunen: '中',
        },
        '狂': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'くる.う',
                'くる.おしい',
            ],
            gakunen: '中',
        },
        '京': {
            onYomi: [
                'キョウ',
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '享': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '供': {
            onYomi: [
                'キョウ',
                '*ク',
            ],
            kunYomi: [
                'そな.える',
                'とも',
            ],
            gakunen: '小6',
        },
        '協': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '況': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '峡': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '挟': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'はさ.む',
                'はさ.まる',
            ],
            gakunen: '中',
        },
        '狭': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'せま.い',
                'せば.める',
                'せば.まる',
            ],
            gakunen: '中',
        },
        '恐': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'おそ.れる',
                'おそ.ろしい',
            ],
            gakunen: '中',
        },
        '恭': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'うやうや.しい',
            ],
            gakunen: '中',
        },
        '胸': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'むね',
                '*むな',
            ],
            gakunen: '小6',
        },
        '脅': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'おびや.かす',
                'おど.す',
                'おど.かす',
            ],
            gakunen: '中',
        },
        '強': {
            onYomi: [
                'キョウ',
                'ゴウ',
            ],
            kunYomi: [
                'つよ.い',
                'つよ.まる',
                'つよ.める',
                'し.いる',
            ],
            gakunen: '小2',
        },
        '教': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'おし.える',
                'おそ.わる',
            ],
            gakunen: '小2',
        },
        '郷': {
            onYomi: [
                'キョウ',
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '境': {
            onYomi: [
                'キョウ',
                '*ケイ',
            ],
            kunYomi: [
                'さかい',
            ],
            gakunen: '小5',
        },
        '橋': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'はし',
            ],
            gakunen: '小3',
        },
        '矯': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'た.める',
            ],
            gakunen: '中',
        },
        '鏡': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'かがみ',
            ],
            gakunen: '小4',
        },
        '競': {
            onYomi: [
                'キョウ',
                'ケイ',
            ],
            kunYomi: [
                'きそ.う',
                'せ.る',
            ],
            gakunen: '小4',
        },
        '響': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'ひび.く',
            ],
            gakunen: '中',
        },
        '驚': {
            onYomi: [
                'キョウ',
            ],
            kunYomi: [
                'おどろ.く',
                'おどろ.かす',
            ],
            gakunen: '中',
        },
        '仰': {
            onYomi: [
                'ギョウ',
                '*コウ',
            ],
            kunYomi: [
                'あお.ぐ',
                'おお.せ',
            ],
            gakunen: '中',
        },
        '暁': {
            onYomi: [
                'ギョウ',
            ],
            kunYomi: [
                'あかつき',
            ],
            gakunen: '中',
        },
        '業': {
            onYomi: [
                'ギョウ',
                'ゴウ',
            ],
            kunYomi: [
                'わざ',
            ],
            gakunen: '小3',
        },
        '凝': {
            onYomi: [
                'ギョウ',
            ],
            kunYomi: [
                'こ.る',
                'こ.らす',
            ],
            gakunen: '中',
        },
        '曲': {
            onYomi: [
                'キョク',
            ],
            kunYomi: [
                'ま.がる',
                'ま.げる',
            ],
            gakunen: '小3',
        },
        '局': {
            onYomi: [
                'キョク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '極': {
            onYomi: [
                'キョク',
                'ゴク',
            ],
            kunYomi: [
                'きわ.める',
                'きわ.まる',
                'きわ.み',
            ],
            gakunen: '小4',
        },
        '玉': {
            onYomi: [
                'ギョク',
            ],
            kunYomi: [
                'たま',
            ],
            gakunen: '小1',
        },
        '巾': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '斤': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '均': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '近': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'ちか.い',
            ],
            gakunen: '小2',
        },
        '金': {
            onYomi: [
                'キン',
                'コン',
            ],
            kunYomi: [
                'かね',
                '*かな',
            ],
            gakunen: '小1',
        },
        '菌': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '勤': {
            onYomi: [
                'キン',
                '*ゴン',
            ],
            kunYomi: [
                'つと.める',
                'つと.まる',
            ],
            gakunen: '小6',
        },
        '琴': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'こと',
            ],
            gakunen: '中',
        },
        '筋': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'すじ',
            ],
            gakunen: '小6',
        },
        '僅': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'わず.か',
            ],
            gakunen: '中',
        },
        '禁': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '緊': {
            onYomi: [
                'キン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '錦': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'にしき',
            ],
            gakunen: '中',
        },
        '謹': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'つつし.む',
            ],
            gakunen: '中',
        },
        '襟': {
            onYomi: [
                'キン',
            ],
            kunYomi: [
                'えり',
            ],
            gakunen: '中',
        },
        '吟': {
            onYomi: [
                'ギン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '銀': {
            onYomi: [
                'ギン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '区': {
            onYomi: [
                'ク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '句': {
            onYomi: [
                'ク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '苦': {
            onYomi: [
                'ク',
            ],
            kunYomi: [
                'くる.しい',
                'くる.しむ',
                'くる.しめる',
                'にが.い',
                'にが.る',
            ],
            gakunen: '小3',
        },
        '駆': {
            onYomi: [
                'ク',
            ],
            kunYomi: [
                'か.ける',
                'か.る',
            ],
            gakunen: '中',
        },
        '具': {
            onYomi: [
                'グ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '惧': {
            onYomi: [
                'グ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '愚': {
            onYomi: [
                'グ',
            ],
            kunYomi: [
                'おろ.か',
            ],
            gakunen: '中',
        },
        '空': {
            onYomi: [
                'クウ',
            ],
            kunYomi: [
                'そら',
                'あ.く',
                'あ.ける',
                'から',
            ],
            gakunen: '小1',
        },
        '偶': {
            onYomi: [
                'グウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '遇': {
            onYomi: [
                'グウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '隅': {
            onYomi: [
                'グウ',
            ],
            kunYomi: [
                'すみ',
            ],
            gakunen: '中',
        },
        '串': {
            onYomi: [],
            kunYomi: [
                'くし',
            ],
            gakunen: '中',
        },
        '屈': {
            onYomi: [
                'クツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '掘': {
            onYomi: [
                'クツ',
            ],
            kunYomi: [
                'ほ.る',
            ],
            gakunen: '中',
        },
        '窟': {
            onYomi: [
                'クツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '熊': {
            onYomi: [],
            kunYomi: [
                'くま',
            ],
            gakunen: '小4',
        },
        '繰': {
            onYomi: [],
            kunYomi: [
                'く.る',
            ],
            gakunen: '中',
        },
        '君': {
            onYomi: [
                'クン',
            ],
            kunYomi: [
                'きみ',
            ],
            gakunen: '小3',
        },
        '訓': {
            onYomi: [
                'クン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '勲': {
            onYomi: [
                'クン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '薫': {
            onYomi: [
                'クン',
            ],
            kunYomi: [
                'かお.る',
            ],
            gakunen: '中',
        },
        '軍': {
            onYomi: [
                'グン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '郡': {
            onYomi: [
                'グン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '群': {
            onYomi: [
                'グン',
            ],
            kunYomi: [
                'む.れる',
                'む.れ',
                '*むら',
            ],
            gakunen: '小4',
        },
        '兄': {
            onYomi: [
                'ケイ',
                '*キョウ',
            ],
            kunYomi: [
                'あに',
            ],
            gakunen: '小2',
        },
        '刑': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '形': {
            onYomi: [
                'ケイ',
                'ギョウ',
            ],
            kunYomi: [
                'かた',
                'かたち',
            ],
            gakunen: '小2',
        },
        '系': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '径': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '茎': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'くき',
            ],
            gakunen: '中',
        },
        '係': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'かか.る',
                'かかり',
            ],
            gakunen: '小3',
        },
        '型': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'かた',
            ],
            gakunen: '小5',
        },
        '契': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'ちぎ.る',
            ],
            gakunen: '中',
        },
        '計': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'はか.る',
                'はか.らう',
            ],
            gakunen: '小2',
        },
        '恵': {
            onYomi: [
                'ケイ',
                'エ',
            ],
            kunYomi: [
                'めぐ.む',
            ],
            gakunen: '中',
        },
        '啓': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '掲': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'かか.げる',
            ],
            gakunen: '中',
        },
        '渓': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '経': {
            onYomi: [
                'ケイ',
                'キョウ',
            ],
            kunYomi: [
                'へ.る',
            ],
            gakunen: '小5',
        },
        '蛍': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'ほたる',
            ],
            gakunen: '中',
        },
        '敬': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'うやま.う',
            ],
            gakunen: '小6',
        },
        '景': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '軽': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'かる.い',
                'かろ.やか',
            ],
            gakunen: '小3',
        },
        '傾': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'かたむ.く',
                'かたむ.ける',
            ],
            gakunen: '中',
        },
        '携': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'たずさ.える',
                'たずさ.わる',
            ],
            gakunen: '中',
        },
        '継': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'つ.ぐ',
            ],
            gakunen: '中',
        },
        '詣': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'もう.でる',
            ],
            gakunen: '中',
        },
        '慶': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '憬': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '稽': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '憩': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'いこ.い',
                'いこ.う',
            ],
            gakunen: '中',
        },
        '警': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '鶏': {
            onYomi: [
                'ケイ',
            ],
            kunYomi: [
                'にわとり',
            ],
            gakunen: '中',
        },
        '芸': {
            onYomi: [
                'ゲイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '迎': {
            onYomi: [
                'ゲイ',
            ],
            kunYomi: [
                'むか.える',
            ],
            gakunen: '中',
        },
        '鯨': {
            onYomi: [
                'ゲイ',
            ],
            kunYomi: [
                'くじら',
            ],
            gakunen: '中',
        },
        '隙': {
            onYomi: [
                'ゲキ',
            ],
            kunYomi: [
                'すき',
            ],
            gakunen: '中',
        },
        '劇': {
            onYomi: [
                'ゲキ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '撃': {
            onYomi: [
                'ゲキ',
            ],
            kunYomi: [
                'う.つ',
            ],
            gakunen: '中',
        },
        '激': {
            onYomi: [
                'ゲキ',
            ],
            kunYomi: [
                'はげ.しい',
            ],
            gakunen: '小6',
        },
        '桁': {
            onYomi: [],
            kunYomi: [
                'けた',
            ],
            gakunen: '中',
        },
        '欠': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'か.ける',
                'か.く',
            ],
            gakunen: '小4',
        },
        '穴': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'あな',
            ],
            gakunen: '小6',
        },
        '血': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'ち',
            ],
            gakunen: '小3',
        },
        '決': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'き.める',
                'き.まる',
            ],
            gakunen: '小3',
        },
        '結': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'むす.ぶ',
                'ゆ.う',
                'ゆ.わえる',
            ],
            gakunen: '小4',
        },
        '傑': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '潔': {
            onYomi: [
                'ケツ',
            ],
            kunYomi: [
                'いさぎよ.い',
            ],
            gakunen: '小5',
        },
        '月': {
            onYomi: [
                'ゲツ',
                'ガツ',
            ],
            kunYomi: [
                'つき',
            ],
            gakunen: '小1',
        },
        '犬': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'いぬ',
            ],
            gakunen: '小1',
        },
        '件': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '見': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'み.る',
                'み.える',
                'み.せる',
            ],
            gakunen: '小1',
        },
        '券': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '肩': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'かた',
            ],
            gakunen: '中',
        },
        '建': {
            onYomi: [
                'ケン',
                '*コン',
            ],
            kunYomi: [
                'た.てる',
                'た.つ',
            ],
            gakunen: '小4',
        },
        '研': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'と.ぐ',
            ],
            gakunen: '小3',
        },
        '県': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '倹': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '兼': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'か.ねる',
            ],
            gakunen: '中',
        },
        '剣': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'つるぎ',
            ],
            gakunen: '中',
        },
        '拳': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'こぶし',
            ],
            gakunen: '中',
        },
        '軒': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'のき',
            ],
            gakunen: '中',
        },
        '健': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'すこ.やか',
            ],
            gakunen: '小4',
        },
        '険': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'けわ.しい',
            ],
            gakunen: '小5',
        },
        '圏': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '堅': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'かた.い',
            ],
            gakunen: '中',
        },
        '検': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '嫌': {
            onYomi: [
                'ケン',
                '*ゲン',
            ],
            kunYomi: [
                'きら.う',
                'いや',
            ],
            gakunen: '中',
        },
        '献': {
            onYomi: [
                'ケン',
                '*コン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '絹': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'きぬ',
            ],
            gakunen: '小6',
        },
        '遣': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'つか.う',
                'つか.わす',
            ],
            gakunen: '中',
        },
        '権': {
            onYomi: [
                'ケン',
                '*ゴン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '憲': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '賢': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'かしこ.い',
            ],
            gakunen: '中',
        },
        '謙': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鍵': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'かぎ',
            ],
            gakunen: '中',
        },
        '繭': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [
                'まゆ',
            ],
            gakunen: '中',
        },
        '顕': {
            onYomi: [
                'ケン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '験': {
            onYomi: [
                'ケン',
                '*ゲン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '懸': {
            onYomi: [
                'ケン',
                '*ケ',
            ],
            kunYomi: [
                'か.ける',
                'か.かる',
            ],
            gakunen: '中',
        },
        '元': {
            onYomi: [
                'ゲン',
                'ガン',
            ],
            kunYomi: [
                'もと',
            ],
            gakunen: '小2',
        },
        '幻': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'まぼろし',
            ],
            gakunen: '中',
        },
        '玄': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '言': {
            onYomi: [
                'ゲン',
                'ゴン',
            ],
            kunYomi: [
                'い.う',
                'こと',
            ],
            gakunen: '小2',
        },
        '弦': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'つる',
            ],
            gakunen: '中',
        },
        '限': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'かぎ.る',
            ],
            gakunen: '小5',
        },
        '原': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'はら',
            ],
            gakunen: '小2',
        },
        '現': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'あらわ.れる',
                'あらわ.す',
            ],
            gakunen: '小5',
        },
        '舷': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '減': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'へ.る',
                'へ.らす',
            ],
            gakunen: '小5',
        },
        '源': {
            onYomi: [
                'ゲン',
            ],
            kunYomi: [
                'みなもと',
            ],
            gakunen: '小6',
        },
        '厳': {
            onYomi: [
                'ゲン',
                '*ゴン',
            ],
            kunYomi: [
                'おごそ.か',
                'きび.しい',
            ],
            gakunen: '小6',
        },
        '己': {
            onYomi: [
                'コ',
                'キ',
            ],
            kunYomi: [
                'おのれ',
            ],
            gakunen: '小6',
        },
        '戸': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'と',
            ],
            gakunen: '小2',
        },
        '古': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'ふる.い',
                'ふる.す',
            ],
            gakunen: '小2',
        },
        '呼': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'よ.ぶ',
            ],
            gakunen: '小6',
        },
        '固': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'かた.める',
                'かた.まる',
                'かた.い',
            ],
            gakunen: '小4',
        },
        '股': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'また',
            ],
            gakunen: '中',
        },
        '虎': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'とら',
            ],
            gakunen: '中',
        },
        '孤': {
            onYomi: [
                'コ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '弧': {
            onYomi: [
                'コ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '故': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'ゆえ',
            ],
            gakunen: '小5',
        },
        '枯': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'か.れる',
                'か.らす',
            ],
            gakunen: '中',
        },
        '個': {
            onYomi: [
                'コ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '庫': {
            onYomi: [
                'コ',
                '*ク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '湖': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'みずうみ',
            ],
            gakunen: '小3',
        },
        '雇': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'やと.う',
            ],
            gakunen: '中',
        },
        '誇': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'ほこ.る',
            ],
            gakunen: '中',
        },
        '鼓': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'つづみ',
            ],
            gakunen: '中',
        },
        '錮': {
            onYomi: [
                'コ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '顧': {
            onYomi: [
                'コ',
            ],
            kunYomi: [
                'かえり.みる',
            ],
            gakunen: '中',
        },
        '五': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [
                'いつ',
                'いつ.つ',
            ],
            gakunen: '小1',
        },
        '互': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [
                'たが.い',
            ],
            gakunen: '中',
        },
        '午': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '呉': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '後': {
            onYomi: [
                'ゴ',
                'コウ',
            ],
            kunYomi: [
                'のち',
                'うし.ろ',
                'あと',
                'おく.れる',
            ],
            gakunen: '小2',
        },
        '娯': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '悟': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [
                'さと.る',
            ],
            gakunen: '中',
        },
        '碁': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '語': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [
                'かた.る',
                'かた.らう',
            ],
            gakunen: '小2',
        },
        '誤': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [
                'あやま.る',
            ],
            gakunen: '小6',
        },
        '護': {
            onYomi: [
                'ゴ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '口': {
            onYomi: [
                'コウ',
                'ク',
            ],
            kunYomi: [
                'くち',
            ],
            gakunen: '小1',
        },
        '工': {
            onYomi: [
                'コウ',
                'ク',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '公': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'おおやけ',
            ],
            gakunen: '小2',
        },
        '勾': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '孔': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '功': {
            onYomi: [
                'コウ',
                '*ク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '巧': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'たく.み',
            ],
            gakunen: '中',
        },
        '広': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'ひろ.い',
                'ひろ.まる',
                'ひろ.める',
                'ひろ.がる',
                'ひろ.げる',
            ],
            gakunen: '小2',
        },
        '甲': {
            onYomi: [
                'コウ',
                'カン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '交': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'まじ.わる',
                'まじ.える',
                'ま.じる',
                'ま.ざる',
                'ま.ぜる',
                'か.う',
                'か.わす',
            ],
            gakunen: '小2',
        },
        '光': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'ひか.る',
                'ひかり',
            ],
            gakunen: '小2',
        },
        '向': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'む.く',
                'む.ける',
                'む.かう',
                'む.こう',
            ],
            gakunen: '小3',
        },
        '后': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '好': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'この.む',
                'す.く',
            ],
            gakunen: '小4',
        },
        '江': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'え',
            ],
            gakunen: '中',
        },
        '考': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'かんが.える',
            ],
            gakunen: '小2',
        },
        '行': {
            onYomi: [
                'コウ',
                'ギョウ',
                '*アン',
            ],
            kunYomi: [
                'い.く',
                'ゆ.く',
                'おこな.う',
            ],
            gakunen: '小2',
        },
        '坑': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '孝': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '抗': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '攻': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'せ.める',
            ],
            gakunen: '中',
        },
        '更': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'さら',
                'ふ.ける',
                'ふ.かす',
            ],
            gakunen: '中',
        },
        '効': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'き.く',
            ],
            gakunen: '小5',
        },
        '幸': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'さいわ.い',
                'さち',
                'しあわ.せ',
            ],
            gakunen: '小3',
        },
        '拘': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '肯': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '侯': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '厚': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'あつ.い',
            ],
            gakunen: '小5',
        },
        '恒': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '洪': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '皇': {
            onYomi: [
                'コウ',
                'オウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '紅': {
            onYomi: [
                'コウ',
                '*ク',
            ],
            kunYomi: [
                'べに',
                'くれない',
            ],
            gakunen: '小6',
        },
        '荒': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'あら.い',
                'あ.れる',
                'あ.らす',
            ],
            gakunen: '中',
        },
        '郊': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '香': {
            onYomi: [
                'コウ',
                '*キョウ',
            ],
            kunYomi: [
                'か',
                'かお.り',
                'かお.る',
            ],
            gakunen: '小4',
        },
        '候': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'そうろう',
            ],
            gakunen: '小4',
        },
        '校': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小1',
        },
        '耕': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'たがや.す',
            ],
            gakunen: '小5',
        },
        '航': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '貢': {
            onYomi: [
                'コウ',
                '*ク',
            ],
            kunYomi: [
                'みつ.ぐ',
            ],
            gakunen: '中',
        },
        '降': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'お.りる',
                'お.ろす',
                'ふ.る',
            ],
            gakunen: '小6',
        },
        '高': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'たか.い',
                'たか',
                'たか.まる',
                'たか.める',
            ],
            gakunen: '小2',
        },
        '康': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '控': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'ひか.える',
            ],
            gakunen: '中',
        },
        '梗': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '黄': {
            onYomi: [
                'コウ',
                'オウ',
            ],
            kunYomi: [
                'き',
                '*こ',
            ],
            gakunen: '小2',
        },
        '喉': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'のど',
            ],
            gakunen: '中',
        },
        '慌': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'あわ.てる',
                'あわ.ただしい',
            ],
            gakunen: '中',
        },
        '港': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'みなと',
            ],
            gakunen: '小3',
        },
        '硬': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'かた.い',
            ],
            gakunen: '中',
        },
        '絞': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'しぼ.る',
                'し.める',
                'し.まる',
            ],
            gakunen: '中',
        },
        '項': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '溝': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'みぞ',
            ],
            gakunen: '中',
        },
        '鉱': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '構': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'かま.える',
                'かま.う',
            ],
            gakunen: '小5',
        },
        '綱': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'つな',
            ],
            gakunen: '中',
        },
        '酵': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '稿': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '興': {
            onYomi: [
                'コウ',
                'キョウ',
            ],
            kunYomi: [
                'おこ.る',
                'おこ.す',
            ],
            gakunen: '小5',
        },
        '衡': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鋼': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [
                'はがね',
            ],
            gakunen: '小6',
        },
        '講': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '購': {
            onYomi: [
                'コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '乞': {
            onYomi: [],
            kunYomi: [
                'こ.う',
            ],
            gakunen: '中',
        },
        '号': {
            onYomi: [
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '合': {
            onYomi: [
                'ゴウ',
                'ガッ',
                '*カッ',
            ],
            kunYomi: [
                'あ.う',
                'あ.わす',
                'あ.わせる',
            ],
            gakunen: '小2',
        },
        '拷': {
            onYomi: [
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '剛': {
            onYomi: [
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '傲': {
            onYomi: [
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '豪': {
            onYomi: [
                'ゴウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '克': {
            onYomi: [
                'コク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '告': {
            onYomi: [
                'コク',
            ],
            kunYomi: [
                'つ.げる',
            ],
            gakunen: '小5',
        },
        '谷': {
            onYomi: [
                'コク',
            ],
            kunYomi: [
                'たに',
            ],
            gakunen: '小2',
        },
        '刻': {
            onYomi: [
                'コク',
            ],
            kunYomi: [
                'きざ.む',
            ],
            gakunen: '小6',
        },
        '国': {
            onYomi: [
                'コク',
            ],
            kunYomi: [
                'くに',
            ],
            gakunen: '小2',
        },
        '黒': {
            onYomi: [
                'コク',
            ],
            kunYomi: [
                'くろ',
                'くろ.い',
            ],
            gakunen: '小2',
        },
        '穀': {
            onYomi: [
                'コク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '酷': {
            onYomi: [
                'コク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '獄': {
            onYomi: [
                'ゴク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '骨': {
            onYomi: [
                'コツ',
            ],
            kunYomi: [
                'ほね',
            ],
            gakunen: '小6',
        },
        '駒': {
            onYomi: [],
            kunYomi: [
                'こま',
            ],
            gakunen: '中',
        },
        '込': {
            onYomi: [],
            kunYomi: [
                'こ.む',
                'こ.める',
            ],
            gakunen: '中',
        },
        '頃': {
            onYomi: [],
            kunYomi: [
                'ころ',
            ],
            gakunen: '中',
        },
        '今': {
            onYomi: [
                'コン',
                'キン',
            ],
            kunYomi: [
                'いま',
            ],
            gakunen: '小2',
        },
        '困': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'こま.る',
            ],
            gakunen: '小6',
        },
        '昆': {
            onYomi: [
                'コン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '恨': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'うら.む',
                'うら.めしい',
            ],
            gakunen: '中',
        },
        '根': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'ね',
            ],
            gakunen: '小3',
        },
        '婚': {
            onYomi: [
                'コン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '混': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'ま.じる',
                'ま.ざる',
                'ま.ぜる',
                'こ.む',
            ],
            gakunen: '小5',
        },
        '痕': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'あと',
            ],
            gakunen: '中',
        },
        '紺': {
            onYomi: [
                'コン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '魂': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'たましい',
            ],
            gakunen: '中',
        },
        '墾': {
            onYomi: [
                'コン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '懇': {
            onYomi: [
                'コン',
            ],
            kunYomi: [
                'ねんご.ろ',
            ],
            gakunen: '中',
        },
        '左': {
            onYomi: [
                'サ',
            ],
            kunYomi: [
                'ひだり',
            ],
            gakunen: '小1',
        },
        '佐': {
            onYomi: [
                'サ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '沙': {
            onYomi: [
                'サ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '査': {
            onYomi: [
                'サ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '砂': {
            onYomi: [
                'サ',
                'シャ',
            ],
            kunYomi: [
                'すな',
            ],
            gakunen: '小6',
        },
        '唆': {
            onYomi: [
                'サ',
            ],
            kunYomi: [
                'そそのか.す',
            ],
            gakunen: '中',
        },
        '差': {
            onYomi: [
                'サ',
            ],
            kunYomi: [
                'さ.す',
            ],
            gakunen: '小4',
        },
        '詐': {
            onYomi: [
                'サ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鎖': {
            onYomi: [
                'サ',
            ],
            kunYomi: [
                'くさり',
            ],
            gakunen: '中',
        },
        '座': {
            onYomi: [
                'ザ',
            ],
            kunYomi: [
                'すわ.る',
            ],
            gakunen: '小6',
        },
        '挫': {
            onYomi: [
                'ザ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '才': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '再': {
            onYomi: [
                'サイ',
                '*サ',
            ],
            kunYomi: [
                'ふたた.び',
            ],
            gakunen: '小5',
        },
        '災': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'わざわ.い',
            ],
            gakunen: '小5',
        },
        '妻': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'つま',
            ],
            gakunen: '小5',
        },
        '采': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '砕': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'くだ.く',
                'くだ.ける',
            ],
            gakunen: '中',
        },
        '宰': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '栽': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '彩': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'いろど.る',
            ],
            gakunen: '中',
        },
        '採': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'と.る',
            ],
            gakunen: '小5',
        },
        '済': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'す.む',
                'す.ます',
            ],
            gakunen: '小6',
        },
        '祭': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'まつ.る',
                'まつ.り',
            ],
            gakunen: '小3',
        },
        '斎': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '細': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'ほそ.い',
                'ほそ.る',
                'こま.か',
                'こま.かい',
            ],
            gakunen: '小2',
        },
        '菜': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'な',
            ],
            gakunen: '小4',
        },
        '最': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'もっと.も',
            ],
            gakunen: '小4',
        },
        '裁': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'た.つ',
                'さば.く',
            ],
            gakunen: '小6',
        },
        '債': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '催': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'もよお.す',
            ],
            gakunen: '中',
        },
        '塞': {
            onYomi: [
                'サイ',
                'ソク',
            ],
            kunYomi: [
                'ふさ.ぐ',
                'ふさ.がる',
            ],
            gakunen: '中',
        },
        '歳': {
            onYomi: [
                'サイ',
                '*セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '載': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'の.せる',
                'の.る',
            ],
            gakunen: '中',
        },
        '際': {
            onYomi: [
                'サイ',
            ],
            kunYomi: [
                'きわ',
            ],
            gakunen: '小5',
        },
        '埼': {
            onYomi: [],
            kunYomi: [
                'さい',
            ],
            gakunen: '小4',
        },
        '在': {
            onYomi: [
                'ザイ',
            ],
            kunYomi: [
                'あ.る',
            ],
            gakunen: '小5',
        },
        '材': {
            onYomi: [
                'ザイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '剤': {
            onYomi: [
                'ザイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '財': {
            onYomi: [
                'ザイ',
                '*サイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '罪': {
            onYomi: [
                'ザイ',
            ],
            kunYomi: [
                'つみ',
            ],
            gakunen: '小5',
        },
        '崎': {
            onYomi: [],
            kunYomi: [
                'さき',
            ],
            gakunen: '小4',
        },
        '作': {
            onYomi: [
                'サク',
                'サ',
            ],
            kunYomi: [
                'つく.る',
            ],
            gakunen: '小2',
        },
        '削': {
            onYomi: [
                'サク',
            ],
            kunYomi: [
                'けず.る',
            ],
            gakunen: '中',
        },
        '昨': {
            onYomi: [
                'サク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '柵': {
            onYomi: [
                'サク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '索': {
            onYomi: [
                'サク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '策': {
            onYomi: [
                'サク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '酢': {
            onYomi: [
                'サク',
                'ス',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '搾': {
            onYomi: [
                'サク',
            ],
            kunYomi: [
                'しぼ.る',
            ],
            gakunen: '中',
        },
        '錯': {
            onYomi: [
                'サク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '咲': {
            onYomi: [],
            kunYomi: [
                'さ.く',
            ],
            gakunen: '中',
        },
        '冊': {
            onYomi: [
                'サツ',
                'サク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '札': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [
                'ふだ',
            ],
            gakunen: '小4',
        },
        '刷': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [
                'す.る',
            ],
            gakunen: '小4',
        },
        '刹': {
            onYomi: [
                'サツ',
                'セツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '拶': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '殺': {
            onYomi: [
                'サツ',
                '*サイ',
                '*セツ',
            ],
            kunYomi: [
                'ころ.す',
            ],
            gakunen: '小5',
        },
        '察': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '撮': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [
                'と.る',
            ],
            gakunen: '中',
        },
        '擦': {
            onYomi: [
                'サツ',
            ],
            kunYomi: [
                'す.る',
                'す.れる',
            ],
            gakunen: '中',
        },
        '雑': {
            onYomi: [
                'ザツ',
                'ゾウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '皿': {
            onYomi: [],
            kunYomi: [
                'さら',
            ],
            gakunen: '小3',
        },
        '三': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'み',
                'み.つ',
                'みっ.つ',
            ],
            gakunen: '小1',
        },
        '山': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'やま',
            ],
            gakunen: '小1',
        },
        '参': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'まい.る',
            ],
            gakunen: '小4',
        },
        '桟': {
            onYomi: [
                'サン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '蚕': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'かいこ',
            ],
            gakunen: '小6',
        },
        '惨': {
            onYomi: [
                'サン',
                'ザン',
            ],
            kunYomi: [
                'みじ.め',
            ],
            gakunen: '中',
        },
        '産': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'う.む',
                'う.まれる',
                'うぶ',
            ],
            gakunen: '小4',
        },
        '傘': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'かさ',
            ],
            gakunen: '中',
        },
        '散': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'ち.る',
                'ち.らす',
                'ち.らかす',
                'ち.らかる',
            ],
            gakunen: '小4',
        },
        '算': {
            onYomi: [
                'サン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '酸': {
            onYomi: [
                'サン',
            ],
            kunYomi: [
                'す.い',
            ],
            gakunen: '小5',
        },
        '賛': {
            onYomi: [
                'サン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '残': {
            onYomi: [
                'ザン',
            ],
            kunYomi: [
                'のこ.る',
                'のこ.す',
            ],
            gakunen: '小4',
        },
        '斬': {
            onYomi: [
                'ザン',
            ],
            kunYomi: [
                'き.る',
            ],
            gakunen: '中',
        },
        '暫': {
            onYomi: [
                'ザン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '士': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '子': {
            onYomi: [
                'シ',
                'ス',
            ],
            kunYomi: [
                'こ',
            ],
            gakunen: '小1',
        },
        '支': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'ささ.える',
            ],
            gakunen: '小5',
        },
        '止': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'と.まる',
                'と.める',
            ],
            gakunen: '小2',
        },
        '氏': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'うじ',
            ],
            gakunen: '小4',
        },
        '仕': {
            onYomi: [
                'シ',
                '*ジ',
            ],
            kunYomi: [
                'つか.える',
            ],
            gakunen: '小3',
        },
        '史': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '司': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '四': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'よ',
                'よ.つ',
                'よっ.つ',
                'よん',
            ],
            gakunen: '小1',
        },
        '市': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'いち',
            ],
            gakunen: '小2',
        },
        '矢': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'や',
            ],
            gakunen: '小2',
        },
        '旨': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'むね',
            ],
            gakunen: '中',
        },
        '死': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'し.ぬ',
            ],
            gakunen: '小3',
        },
        '糸': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'いと',
            ],
            gakunen: '小1',
        },
        '至': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'いた.る',
            ],
            gakunen: '小6',
        },
        '伺': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'うかが.う',
            ],
            gakunen: '中',
        },
        '志': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'こころざ.す',
                'こころざし',
            ],
            gakunen: '小5',
        },
        '私': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'わたくし',
                'わたし',
            ],
            gakunen: '小6',
        },
        '使': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'つか.う',
            ],
            gakunen: '小3',
        },
        '刺': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'さ.す',
                'さ.さる',
            ],
            gakunen: '中',
        },
        '始': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'はじ.める',
                'はじ.まる',
            ],
            gakunen: '小3',
        },
        '姉': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'あね',
            ],
            gakunen: '小2',
        },
        '枝': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'えだ',
            ],
            gakunen: '小5',
        },
        '祉': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '肢': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '姿': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'すがた',
            ],
            gakunen: '小6',
        },
        '思': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'おも.う',
            ],
            gakunen: '小2',
        },
        '指': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'ゆび',
                'さ.す',
            ],
            gakunen: '小3',
        },
        '施': {
            onYomi: [
                'シ',
                'セ',
            ],
            kunYomi: [
                'ほどこ.す',
            ],
            gakunen: '中',
        },
        '師': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '恣': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '紙': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'かみ',
            ],
            gakunen: '小2',
        },
        '脂': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'あぶら',
            ],
            gakunen: '中',
        },
        '視': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '紫': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'むらさき',
            ],
            gakunen: '中',
        },
        '詞': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '歯': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'は',
            ],
            gakunen: '小3',
        },
        '嗣': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '試': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'こころ.みる',
                'ため.す',
            ],
            gakunen: '小4',
        },
        '詩': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '資': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '飼': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'か.う',
            ],
            gakunen: '小5',
        },
        '誌': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '雌': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'め',
                'めす',
            ],
            gakunen: '中',
        },
        '摯': {
            onYomi: [
                'シ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '賜': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'たまわ.る',
            ],
            gakunen: '中',
        },
        '諮': {
            onYomi: [
                'シ',
            ],
            kunYomi: [
                'はか.る',
            ],
            gakunen: '中',
        },
        '示': {
            onYomi: [
                'ジ',
                'シ',
            ],
            kunYomi: [
                'しめ.す',
            ],
            gakunen: '小5',
        },
        '字': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'あざ',
            ],
            gakunen: '小1',
        },
        '寺': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'てら',
            ],
            gakunen: '小2',
        },
        '次': {
            onYomi: [
                'ジ',
                'シ',
            ],
            kunYomi: [
                'つ.ぐ',
                'つぎ',
            ],
            gakunen: '小3',
        },
        '耳': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'みみ',
            ],
            gakunen: '小1',
        },
        '自': {
            onYomi: [
                'ジ',
                'シ',
            ],
            kunYomi: [
                'みずか.ら',
            ],
            gakunen: '小2',
        },
        '似': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'に.る',
            ],
            gakunen: '小5',
        },
        '児': {
            onYomi: [
                'ジ',
                '*ニ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '事': {
            onYomi: [
                'ジ',
                '*ズ',
            ],
            kunYomi: [
                'こと',
            ],
            gakunen: '小3',
        },
        '侍': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'さむらい',
            ],
            gakunen: '中',
        },
        '治': {
            onYomi: [
                'ジ',
                'チ',
            ],
            kunYomi: [
                'おさ.める',
                'おさ.まる',
                'なお.る',
                'なお.す',
            ],
            gakunen: '小4',
        },
        '持': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'も.つ',
            ],
            gakunen: '小3',
        },
        '時': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'とき',
            ],
            gakunen: '小2',
        },
        '滋': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '慈': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'いつく.しむ',
            ],
            gakunen: '中',
        },
        '辞': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'や.める',
            ],
            gakunen: '小4',
        },
        '磁': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '餌': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [
                'えさ',
                'え',
            ],
            gakunen: '中',
        },
        '璽': {
            onYomi: [
                'ジ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鹿': {
            onYomi: [],
            kunYomi: [
                'しか',
                '*か',
            ],
            gakunen: '小4',
        },
        '式': {
            onYomi: [
                'シキ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '識': {
            onYomi: [
                'シキ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '軸': {
            onYomi: [
                'ジク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '七': {
            onYomi: [
                'シチ',
            ],
            kunYomi: [
                'なな',
                'なな.つ',
                '*なの',
            ],
            gakunen: '小1',
        },
        '叱': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [
                'しか.る',
            ],
            gakunen: '中',
        },
        '失': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [
                'うしな.う',
            ],
            gakunen: '小4',
        },
        '室': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [
                'むろ',
            ],
            gakunen: '小2',
        },
        '疾': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '執': {
            onYomi: [
                'シツ',
                'シュウ',
            ],
            kunYomi: [
                'と.る',
            ],
            gakunen: '中',
        },
        '湿': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [
                'しめ.る',
                'しめ.す',
            ],
            gakunen: '中',
        },
        '嫉': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '漆': {
            onYomi: [
                'シツ',
            ],
            kunYomi: [
                'うるし',
            ],
            gakunen: '中',
        },
        '質': {
            onYomi: [
                'シツ',
                'シチ',
                '*チ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '実': {
            onYomi: [
                'ジツ',
            ],
            kunYomi: [
                'み',
                'みの.る',
            ],
            gakunen: '小3',
        },
        '芝': {
            onYomi: [],
            kunYomi: [
                'しば',
            ],
            gakunen: '中',
        },
        '写': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'うつ.す',
                'うつ.る',
            ],
            gakunen: '小3',
        },
        '社': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'やしろ',
            ],
            gakunen: '小2',
        },
        '車': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'くるま',
            ],
            gakunen: '小1',
        },
        '舎': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '者': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'もの',
            ],
            gakunen: '小3',
        },
        '射': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'い.る',
            ],
            gakunen: '小6',
        },
        '捨': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'す.てる',
            ],
            gakunen: '小6',
        },
        '赦': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '斜': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'なな.め',
            ],
            gakunen: '中',
        },
        '煮': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'に.る',
                'に.える',
                'に.やす',
            ],
            gakunen: '中',
        },
        '遮': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'さえぎ.る',
            ],
            gakunen: '中',
        },
        '謝': {
            onYomi: [
                'シャ',
            ],
            kunYomi: [
                'あやま.る',
            ],
            gakunen: '小5',
        },
        '邪': {
            onYomi: [
                'ジャ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '蛇': {
            onYomi: [
                'ジャ',
                'ダ',
            ],
            kunYomi: [
                'へび',
            ],
            gakunen: '中',
        },
        '勺': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [],
            gakunen: '小8',
        },
        '尺': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '借': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [
                'か.りる',
            ],
            gakunen: '小4',
        },
        '酌': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [
                'く.む',
            ],
            gakunen: '中',
        },
        '釈': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '爵': {
            onYomi: [
                'シャク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '若': {
            onYomi: [
                'ジャク',
                '*ニャク',
            ],
            kunYomi: [
                'わか.い',
                'も.しくは',
            ],
            gakunen: '小6',
        },
        '弱': {
            onYomi: [
                'ジャク',
            ],
            kunYomi: [
                'よわ.い',
                'よわ.る',
                'よわ.まる',
                'よわ.める',
            ],
            gakunen: '小2',
        },
        '寂': {
            onYomi: [
                'ジャク',
                '*セキ',
            ],
            kunYomi: [
                'さび',
                'さび.しい',
                'さび.れる',
            ],
            gakunen: '中',
        },
        '手': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'て',
                '*た',
            ],
            gakunen: '小1',
        },
        '主': {
            onYomi: [
                'シュ',
                '*ス',
            ],
            kunYomi: [
                'ぬし',
                'おも',
            ],
            gakunen: '小3',
        },
        '守': {
            onYomi: [
                'シュ',
                '*ス',
            ],
            kunYomi: [
                'まも.る',
                'も.り',
            ],
            gakunen: '小3',
        },
        '朱': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '取': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'と.る',
            ],
            gakunen: '小3',
        },
        '狩': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'か.る',
                'か.り',
            ],
            gakunen: '中',
        },
        '首': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'くび',
            ],
            gakunen: '小2',
        },
        '殊': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'こと',
            ],
            gakunen: '中',
        },
        '珠': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '酒': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'さけ',
                '*さか',
            ],
            gakunen: '小3',
        },
        '腫': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'は.れる',
                'は.らす',
            ],
            gakunen: '中',
        },
        '種': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'たね',
            ],
            gakunen: '小4',
        },
        '趣': {
            onYomi: [
                'シュ',
            ],
            kunYomi: [
                'おもむき',
            ],
            gakunen: '中',
        },
        '寿': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [
                'ことぶき',
            ],
            gakunen: '中',
        },
        '受': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [
                'う.ける',
                'う.かる',
            ],
            gakunen: '小3',
        },
        '呪': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [
                'のろ.う',
            ],
            gakunen: '中',
        },
        '授': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [
                'さず.ける',
                'さず.かる',
            ],
            gakunen: '小5',
        },
        '需': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '儒': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '樹': {
            onYomi: [
                'ジュ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '収': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'おさ.める',
                'おさ.まる',
            ],
            gakunen: '小6',
        },
        '囚': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '州': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'す',
            ],
            gakunen: '小3',
        },
        '舟': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'ふね',
                '*ふな',
            ],
            gakunen: '中',
        },
        '秀': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'ひい.でる',
            ],
            gakunen: '中',
        },
        '周': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'まわ.り',
            ],
            gakunen: '小4',
        },
        '宗': {
            onYomi: [
                'シュウ',
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '拾': {
            onYomi: [
                'シュウ',
                'ジュウ',
            ],
            kunYomi: [
                'ひろ.う',
            ],
            gakunen: '小3',
        },
        '秋': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'あき',
            ],
            gakunen: '小2',
        },
        '臭': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'くさ.い',
                'にお.う',
            ],
            gakunen: '中',
        },
        '修': {
            onYomi: [
                'シュウ',
                '*シュ',
            ],
            kunYomi: [
                'おさ.める',
                'おさ.まる',
            ],
            gakunen: '小5',
        },
        '袖': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'そで',
            ],
            gakunen: '中',
        },
        '終': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'お.わる',
                'お.える',
            ],
            gakunen: '小3',
        },
        '羞': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '習': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'なら.う',
            ],
            gakunen: '小3',
        },
        '週': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '就': {
            onYomi: [
                'シュウ',
                '*ジュ',
            ],
            kunYomi: [
                'つ.く',
                'つ.ける',
            ],
            gakunen: '小6',
        },
        '衆': {
            onYomi: [
                'シュウ',
                '*シュ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '集': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'あつ.まる',
                'あつ.める',
                'つど.う',
            ],
            gakunen: '小3',
        },
        '愁': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'うれ.える',
                'うれ.い',
            ],
            gakunen: '中',
        },
        '酬': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '醜': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'みにく.い',
            ],
            gakunen: '中',
        },
        '蹴': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'け.る',
            ],
            gakunen: '中',
        },
        '襲': {
            onYomi: [
                'シュウ',
            ],
            kunYomi: [
                'おそ.う',
            ],
            gakunen: '中',
        },
        '十': {
            onYomi: [
                'ジュウ',
                'ジッ',
            ],
            kunYomi: [
                'とお',
                'と',
            ],
            gakunen: '小1',
        },
        '汁': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'しる',
            ],
            gakunen: '中',
        },
        '充': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'あ.てる',
            ],
            gakunen: '中',
        },
        '住': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'す.む',
                'す.まう',
            ],
            gakunen: '小3',
        },
        '柔': {
            onYomi: [
                'ジュウ',
                'ニュウ',
            ],
            kunYomi: [
                'やわ.らか',
                'やわ.らかい',
            ],
            gakunen: '中',
        },
        '重': {
            onYomi: [
                'ジュウ',
                'チョウ',
            ],
            kunYomi: [
                'え',
                'おも.い',
                'かさ.ねる',
                'かさ.なる',
            ],
            gakunen: '小3',
        },
        '従': {
            onYomi: [
                'ジュウ',
                '*ショウ',
                '*ジュ',
            ],
            kunYomi: [
                'したが.う',
                'したが.える',
            ],
            gakunen: '小6',
        },
        '渋': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'しぶ',
                'しぶ.い',
                'しぶ.る',
            ],
            gakunen: '中',
        },
        '銃': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '獣': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'けもの',
            ],
            gakunen: '中',
        },
        '縦': {
            onYomi: [
                'ジュウ',
            ],
            kunYomi: [
                'たて',
            ],
            gakunen: '小6',
        },
        '叔': {
            onYomi: [
                'シュク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '祝': {
            onYomi: [
                'シュク',
                '*シュウ',
            ],
            kunYomi: [
                'いわ.う',
            ],
            gakunen: '小4',
        },
        '宿': {
            onYomi: [
                'シュク',
            ],
            kunYomi: [
                'やど',
                'やど.る',
                'やど.す',
            ],
            gakunen: '小3',
        },
        '淑': {
            onYomi: [
                'シュク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '粛': {
            onYomi: [
                'シュク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '縮': {
            onYomi: [
                'シュク',
            ],
            kunYomi: [
                'ちぢ.む',
                'ちぢ.まる',
                'ちぢ.める',
                'ちぢ.れる',
                'ちぢ.らす',
            ],
            gakunen: '小6',
        },
        '塾': {
            onYomi: [
                'ジュク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '熟': {
            onYomi: [
                'ジュク',
            ],
            kunYomi: [
                'う.れる',
            ],
            gakunen: '小6',
        },
        '出': {
            onYomi: [
                'シュツ',
                '*スイ',
            ],
            kunYomi: [
                'で.る',
                'だ.す',
            ],
            gakunen: '小1',
        },
        '述': {
            onYomi: [
                'ジュツ',
            ],
            kunYomi: [
                'の.べる',
            ],
            gakunen: '小5',
        },
        '術': {
            onYomi: [
                'ジュツ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '俊': {
            onYomi: [
                'シュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '春': {
            onYomi: [
                'シュン',
            ],
            kunYomi: [
                'はる',
            ],
            gakunen: '小2',
        },
        '瞬': {
            onYomi: [
                'シュン',
            ],
            kunYomi: [
                'またた.く',
            ],
            gakunen: '中',
        },
        '旬': {
            onYomi: [
                'ジュン',
                '*シュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '巡': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [
                'めぐ.る',
            ],
            gakunen: '中',
        },
        '盾': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [
                'たて',
            ],
            gakunen: '中',
        },
        '准': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '殉': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '純': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '循': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '順': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '準': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '潤': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [
                'うるお.う',
                'うるお.す',
                'うる.む',
            ],
            gakunen: '中',
        },
        '遵': {
            onYomi: [
                'ジュン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '処': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '初': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [
                'はじ.め',
                'はじ.めて',
                'はつ',
                'うい',
                'そ.める',
            ],
            gakunen: '小4',
        },
        '所': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [
                'ところ',
            ],
            gakunen: '小3',
        },
        '書': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [
                'か.く',
            ],
            gakunen: '小2',
        },
        '庶': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '暑': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [
                'あつ.い',
            ],
            gakunen: '小3',
        },
        '署': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '緒': {
            onYomi: [
                'ショ',
                '*チョ',
            ],
            kunYomi: [
                'お',
            ],
            gakunen: '中',
        },
        '諸': {
            onYomi: [
                'ショ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '女': {
            onYomi: [
                'ジョ',
                'ニョ',
                '*ニョウ',
            ],
            kunYomi: [
                'おんな',
                'め',
            ],
            gakunen: '小1',
        },
        '如': {
            onYomi: [
                'ジョ',
                'ニョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '助': {
            onYomi: [
                'ジョ',
            ],
            kunYomi: [
                'たす.ける',
                'たす.かる',
                'すけ',
            ],
            gakunen: '小3',
        },
        '序': {
            onYomi: [
                'ジョ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '叙': {
            onYomi: [
                'ジョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '徐': {
            onYomi: [
                'ジョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '除': {
            onYomi: [
                'ジョ',
                '*ジ',
            ],
            kunYomi: [
                'のぞ.く',
            ],
            gakunen: '小6',
        },
        '小': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'ちい.さい',
                'こ',
                'お',
            ],
            gakunen: '小1',
        },
        '升': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'ます',
            ],
            gakunen: '中',
        },
        '少': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'すく.ない',
                'すこ.し',
            ],
            gakunen: '小2',
        },
        '召': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'め.す',
            ],
            gakunen: '中',
        },
        '匠': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '床': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'とこ',
                'ゆか',
            ],
            gakunen: '中',
        },
        '抄': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '肖': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '尚': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '招': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'まね.く',
            ],
            gakunen: '小5',
        },
        '承': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'うけたまわ.る',
            ],
            gakunen: '小6',
        },
        '昇': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'のぼ.る',
            ],
            gakunen: '中',
        },
        '松': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'まつ',
            ],
            gakunen: '小4',
        },
        '沼': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'ぬま',
            ],
            gakunen: '中',
        },
        '昭': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '宵': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'よい',
            ],
            gakunen: '中',
        },
        '将': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '消': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'き.える',
                'け.す',
            ],
            gakunen: '小3',
        },
        '症': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '祥': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '称': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '笑': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'わら.う',
                'え.む',
            ],
            gakunen: '小4',
        },
        '唱': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'とな.える',
            ],
            gakunen: '小4',
        },
        '商': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'あきな.う',
            ],
            gakunen: '小3',
        },
        '渉': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '章': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '紹': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '訟': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '勝': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'か.つ',
                'まさ.る',
            ],
            gakunen: '小3',
        },
        '掌': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '晶': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '焼': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'や.く',
                'や.ける',
            ],
            gakunen: '小4',
        },
        '焦': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'こ.げる',
                'こ.がす',
                'こ.がれる',
                'あせ.る',
            ],
            gakunen: '中',
        },
        '硝': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '粧': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '詔': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'みことのり',
            ],
            gakunen: '中',
        },
        '証': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '象': {
            onYomi: [
                'ショウ',
                'ゾウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '傷': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'きず',
                'いた.む',
                'いた.める',
            ],
            gakunen: '小6',
        },
        '奨': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '照': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'て.る',
                'て.らす',
                'て.れる',
            ],
            gakunen: '小4',
        },
        '詳': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'くわ.しい',
            ],
            gakunen: '中',
        },
        '彰': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '障': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'さわ.る',
            ],
            gakunen: '小6',
        },
        '憧': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'あこが.れる',
            ],
            gakunen: '中',
        },
        '衝': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '賞': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '償': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'つぐな.う',
            ],
            gakunen: '中',
        },
        '礁': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鐘': {
            onYomi: [
                'ショウ',
            ],
            kunYomi: [
                'かね',
            ],
            gakunen: '中',
        },
        '上': {
            onYomi: [
                'ジョウ',
                '*ショウ',
            ],
            kunYomi: [
                'うえ',
                '*うわ',
                'かみ',
                'あ.げる',
                'あ.がる',
                'のぼ.る',
                'のぼ.せる',
                'のぼ.す',
            ],
            gakunen: '小1',
        },
        '丈': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'たけ',
            ],
            gakunen: '中',
        },
        '冗': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '条': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '状': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '乗': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'の.る',
                'の.せる',
            ],
            gakunen: '小3',
        },
        '城': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'しろ',
            ],
            gakunen: '小4',
        },
        '浄': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '剰': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '常': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'つね',
                'とこ',
            ],
            gakunen: '小5',
        },
        '情': {
            onYomi: [
                'ジョウ',
                '*セイ',
            ],
            kunYomi: [
                'なさ.け',
            ],
            gakunen: '小5',
        },
        '場': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'ば',
            ],
            gakunen: '小2',
        },
        '畳': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'たた.む',
                'たたみ',
            ],
            gakunen: '中',
        },
        '蒸': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'む.す',
                'む.れる',
                'む.らす',
            ],
            gakunen: '小6',
        },
        '縄': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'なわ',
            ],
            gakunen: '小4',
        },
        '壌': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '嬢': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '錠': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '譲': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'ゆず.る',
            ],
            gakunen: '中',
        },
        '醸': {
            onYomi: [
                'ジョウ',
            ],
            kunYomi: [
                'かも.す',
            ],
            gakunen: '中',
        },
        '色': {
            onYomi: [
                'ショク',
                'シキ',
            ],
            kunYomi: [
                'いろ',
            ],
            gakunen: '小2',
        },
        '拭': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [
                'ふ.く',
                'ぬぐ.う',
            ],
            gakunen: '中',
        },
        '食': {
            onYomi: [
                'ショク',
                '*ジキ',
            ],
            kunYomi: [
                'く.う',
                'く.らう',
                'た.べる',
            ],
            gakunen: '小2',
        },
        '植': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [
                'う.える',
                'う.わる',
            ],
            gakunen: '小3',
        },
        '殖': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [
                'ふ.える',
                'ふ.やす',
            ],
            gakunen: '中',
        },
        '飾': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [
                'かざ.る',
            ],
            gakunen: '中',
        },
        '触': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [
                'ふ.れる',
                'さわ.る',
            ],
            gakunen: '中',
        },
        '嘱': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '織': {
            onYomi: [
                'ショク',
                'シキ',
            ],
            kunYomi: [
                'お.る',
            ],
            gakunen: '小5',
        },
        '職': {
            onYomi: [
                'ショク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '辱': {
            onYomi: [
                'ジョク',
            ],
            kunYomi: [
                'はずかし.める',
            ],
            gakunen: '中',
        },
        '尻': {
            onYomi: [],
            kunYomi: [
                'しり',
            ],
            gakunen: '中',
        },
        '心': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'こころ',
            ],
            gakunen: '小2',
        },
        '申': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'もう.す',
            ],
            gakunen: '小3',
        },
        '伸': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'の.びる',
                'の.ばす',
                'の.べる',
            ],
            gakunen: '中',
        },
        '臣': {
            onYomi: [
                'シン',
                'ジン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '芯': {
            onYomi: [
                'シン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '身': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'み',
            ],
            gakunen: '小3',
        },
        '辛': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'から.い',
            ],
            gakunen: '中',
        },
        '侵': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'おか.す',
            ],
            gakunen: '中',
        },
        '信': {
            onYomi: [
                'シン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '津': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'つ',
            ],
            gakunen: '中',
        },
        '神': {
            onYomi: [
                'シン',
                'ジン',
            ],
            kunYomi: [
                'かみ',
                '*かん',
                '*こう',
            ],
            gakunen: '小3',
        },
        '唇': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'くちびる',
            ],
            gakunen: '中',
        },
        '娠': {
            onYomi: [
                'シン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '振': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ふ.る',
                'ふ.るう',
                'ふ.れる',
            ],
            gakunen: '中',
        },
        '浸': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ひた.す',
                'ひた.る',
            ],
            gakunen: '中',
        },
        '真': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ま',
            ],
            gakunen: '小3',
        },
        '針': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'はり',
            ],
            gakunen: '小6',
        },
        '深': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ふか.い',
                'ふか.まる',
                'ふか.める',
            ],
            gakunen: '小3',
        },
        '紳': {
            onYomi: [
                'シン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '進': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'すす.む',
                'すす.める',
            ],
            gakunen: '小3',
        },
        '森': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'もり',
            ],
            gakunen: '小1',
        },
        '診': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'み.る',
            ],
            gakunen: '中',
        },
        '寝': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ね.る',
                'ね.かす',
            ],
            gakunen: '中',
        },
        '慎': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'つつし.む',
            ],
            gakunen: '中',
        },
        '新': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'あたら.しい',
                'あら.た',
                'にい',
            ],
            gakunen: '小2',
        },
        '審': {
            onYomi: [
                'シン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '震': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'ふる.う',
                'ふる.える',
            ],
            gakunen: '中',
        },
        '薪': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'たきぎ',
            ],
            gakunen: '中',
        },
        '親': {
            onYomi: [
                'シン',
            ],
            kunYomi: [
                'おや',
                'した.しい',
                'した.しむ',
            ],
            gakunen: '小2',
        },
        '人': {
            onYomi: [
                'ジン',
                'ニン',
            ],
            kunYomi: [
                'ひと',
            ],
            gakunen: '小1',
        },
        '刃': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [
                'は',
            ],
            gakunen: '中',
        },
        '仁': {
            onYomi: [
                'ジン',
                '*ニ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '尽': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [
                'つ.くす',
                'つ.きる',
                'つ.かす',
            ],
            gakunen: '中',
        },
        '迅': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '甚': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [
                'はなは.だ',
                'はなは.だしい',
            ],
            gakunen: '中',
        },
        '陣': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '尋': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [
                'たず.ねる',
            ],
            gakunen: '中',
        },
        '腎': {
            onYomi: [
                'ジン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '須': {
            onYomi: [
                'ス',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '図': {
            onYomi: [
                'ズ',
                'ト',
            ],
            kunYomi: [
                'はか.る',
            ],
            gakunen: '小2',
        },
        '水': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'みず',
            ],
            gakunen: '小1',
        },
        '吹': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'ふ.く',
            ],
            gakunen: '中',
        },
        '垂': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'た.れる',
                'た.らす',
            ],
            gakunen: '小6',
        },
        '炊': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'た.く',
            ],
            gakunen: '中',
        },
        '帥': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '粋': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'いき',
            ],
            gakunen: '中',
        },
        '衰': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'おとろ.える',
            ],
            gakunen: '中',
        },
        '推': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'お.す',
            ],
            gakunen: '小6',
        },
        '酔': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'よ.う',
            ],
            gakunen: '中',
        },
        '遂': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'と.げる',
            ],
            gakunen: '中',
        },
        '睡': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '穂': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'ほ',
            ],
            gakunen: '中',
        },
        '錘': {
            onYomi: [
                'スイ',
            ],
            kunYomi: [
                'つむ',
            ],
            gakunen: '小8',
        },
        '随': {
            onYomi: [
                'ズイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '髄': {
            onYomi: [
                'ズイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '枢': {
            onYomi: [
                'スウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '崇': {
            onYomi: [
                'スウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '数': {
            onYomi: [
                'スウ',
                '*ス',
            ],
            kunYomi: [
                'かず',
                'かぞ.える',
            ],
            gakunen: '小2',
        },
        '据': {
            onYomi: [],
            kunYomi: [
                'す.える',
                'す.わる',
            ],
            gakunen: '中',
        },
        '杉': {
            onYomi: [],
            kunYomi: [
                'すぎ',
            ],
            gakunen: '中',
        },
        '裾': {
            onYomi: [],
            kunYomi: [
                'すそ',
            ],
            gakunen: '中',
        },
        '寸': {
            onYomi: [
                'スン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '瀬': {
            onYomi: [],
            kunYomi: [
                'せ',
            ],
            gakunen: '中',
        },
        '是': {
            onYomi: [
                'ゼ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '井': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'い',
            ],
            gakunen: '小4',
        },
        '世': {
            onYomi: [
                'セイ',
                'セ',
            ],
            kunYomi: [
                'よ',
            ],
            gakunen: '小3',
        },
        '正': {
            onYomi: [
                'セイ',
                'ショウ',
            ],
            kunYomi: [
                'ただ.しい',
                'ただ.す',
                'まさ',
            ],
            gakunen: '小1',
        },
        '生': {
            onYomi: [
                'セイ',
                'ショウ',
            ],
            kunYomi: [
                'い.きる',
                'い.かす',
                'い.ける',
                'う.まれる',
                'う.む',
                'お.う',
                'は.える',
                'は.やす',
                'き',
                'なま',
            ],
            gakunen: '小1',
        },
        '成': {
            onYomi: [
                'セイ',
                '*ジョウ',
            ],
            kunYomi: [
                'な.る',
                'な.す',
            ],
            gakunen: '小4',
        },
        '西': {
            onYomi: [
                'セイ',
                'サイ',
            ],
            kunYomi: [
                'にし',
            ],
            gakunen: '小2',
        },
        '声': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'こえ',
                '*こわ',
            ],
            gakunen: '小2',
        },
        '制': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '姓': {
            onYomi: [
                'セイ',
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '征': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '性': {
            onYomi: [
                'セイ',
                'ショウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '青': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'あお',
                'あお.い',
            ],
            gakunen: '小1',
        },
        '斉': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '政': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'まつりごと',
            ],
            gakunen: '小5',
        },
        '星': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'ほし',
            ],
            gakunen: '小2',
        },
        '牲': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '省': {
            onYomi: [
                'セイ',
                'ショウ',
            ],
            kunYomi: [
                'かえり.みる',
                'はぶ.く',
            ],
            gakunen: '小4',
        },
        '凄': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '逝': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'ゆ.く',
                'い.く',
            ],
            gakunen: '中',
        },
        '清': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [
                'きよ.い',
                'きよ.まる',
                'きよ.める',
            ],
            gakunen: '小4',
        },
        '盛': {
            onYomi: [
                'セイ',
                '*ジョウ',
            ],
            kunYomi: [
                'も.る',
                'さか.る',
                'さか.ん',
            ],
            gakunen: '小6',
        },
        '婿': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'むこ',
            ],
            gakunen: '中',
        },
        '晴': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'は.れる',
                'は.らす',
            ],
            gakunen: '小2',
        },
        '勢': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'いきお.い',
            ],
            gakunen: '小5',
        },
        '聖': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '誠': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'まこと',
            ],
            gakunen: '小6',
        },
        '精': {
            onYomi: [
                'セイ',
                '*ショウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '製': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '誓': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'ちか.う',
            ],
            gakunen: '中',
        },
        '静': {
            onYomi: [
                'セイ',
                '*ジョウ',
            ],
            kunYomi: [
                'しず',
                'しず.か',
                'しず.まる',
                'しず.める',
            ],
            gakunen: '小4',
        },
        '請': {
            onYomi: [
                'セイ',
                '*シン',
            ],
            kunYomi: [
                'こ.う',
                'う.ける',
            ],
            gakunen: '中',
        },
        '整': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [
                'ととの.える',
                'ととの.う',
            ],
            gakunen: '小3',
        },
        '醒': {
            onYomi: [
                'セイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '税': {
            onYomi: [
                'ゼイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '夕': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [
                'ゆう',
            ],
            gakunen: '小1',
        },
        '斥': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '石': {
            onYomi: [
                'セキ',
                '*シャク',
                '*コク',
            ],
            kunYomi: [
                'いし',
            ],
            gakunen: '小1',
        },
        '赤': {
            onYomi: [
                'セキ',
                '*シャク',
            ],
            kunYomi: [
                'あか',
                'あか.い',
                'あか.らむ',
                'あか.らめる',
            ],
            gakunen: '小1',
        },
        '昔': {
            onYomi: [
                'セキ',
                '*シャク',
            ],
            kunYomi: [
                'むかし',
            ],
            gakunen: '小3',
        },
        '析': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '席': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '脊': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '隻': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '惜': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [
                'お.しい',
                'お.しむ',
            ],
            gakunen: '中',
        },
        '戚': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '責': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [
                'せ.める',
            ],
            gakunen: '小5',
        },
        '跡': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [
                'あと',
            ],
            gakunen: '中',
        },
        '積': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [
                'つ.む',
                'つ.もる',
            ],
            gakunen: '小4',
        },
        '績': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '籍': {
            onYomi: [
                'セキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '切': {
            onYomi: [
                'セツ',
                '*サイ',
            ],
            kunYomi: [
                'き.る',
                'き.れる',
            ],
            gakunen: '小2',
        },
        '折': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [
                'お.る',
                'おり',
                'お.れる',
            ],
            gakunen: '小4',
        },
        '拙': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [
                'つたな.い',
            ],
            gakunen: '中',
        },
        '窃': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '接': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [
                'つ.ぐ',
            ],
            gakunen: '小5',
        },
        '設': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [
                'もう.ける',
            ],
            gakunen: '小5',
        },
        '雪': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [
                'ゆき',
            ],
            gakunen: '小2',
        },
        '摂': {
            onYomi: [
                'セツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '節': {
            onYomi: [
                'セツ',
                '*セチ',
            ],
            kunYomi: [
                'ふし',
            ],
            gakunen: '小4',
        },
        '説': {
            onYomi: [
                'セツ',
                '*ゼイ',
            ],
            kunYomi: [
                'と.く',
            ],
            gakunen: '小4',
        },
        '舌': {
            onYomi: [
                'ゼツ',
            ],
            kunYomi: [
                'した',
            ],
            gakunen: '小6',
        },
        '絶': {
            onYomi: [
                'ゼツ',
            ],
            kunYomi: [
                'た.える',
                'た.やす',
                'た.つ',
            ],
            gakunen: '小5',
        },
        '千': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'ち',
            ],
            gakunen: '小1',
        },
        '川': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'かわ',
            ],
            gakunen: '小1',
        },
        '仙': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '占': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'し.める',
                'うらな.う',
            ],
            gakunen: '中',
        },
        '先': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'さき',
            ],
            gakunen: '小1',
        },
        '宣': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '専': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'もっぱ.ら',
            ],
            gakunen: '小6',
        },
        '泉': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'いずみ',
            ],
            gakunen: '小6',
        },
        '浅': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'あさ.い',
            ],
            gakunen: '小4',
        },
        '洗': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'あら.う',
            ],
            gakunen: '小6',
        },
        '染': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'そ.める',
                'そ.まる',
                'し.みる',
                'し.み',
            ],
            gakunen: '小6',
        },
        '扇': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'おうぎ',
            ],
            gakunen: '中',
        },
        '栓': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '旋': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '船': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'ふね',
                '*ふな',
            ],
            gakunen: '小2',
        },
        '戦': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'いくさ',
                'たたか.う',
            ],
            gakunen: '小4',
        },
        '煎': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'い.る',
            ],
            gakunen: '中',
        },
        '羨': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'うらや.む',
                'うらや.ましい',
            ],
            gakunen: '中',
        },
        '腺': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '詮': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '践': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '箋': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '銭': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'ぜに',
            ],
            gakunen: '小6',
        },
        '銑': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '小8',
        },
        '潜': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'ひそ.む',
                'もぐ.る',
            ],
            gakunen: '中',
        },
        '線': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '遷': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '選': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'えら.ぶ',
            ],
            gakunen: '小4',
        },
        '薦': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'すす.める',
            ],
            gakunen: '中',
        },
        '繊': {
            onYomi: [
                'セン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鮮': {
            onYomi: [
                'セン',
            ],
            kunYomi: [
                'あざ.やか',
            ],
            gakunen: '中',
        },
        '全': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [
                'まった.く',
                'すべ.て',
            ],
            gakunen: '小3',
        },
        '前': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [
                'まえ',
            ],
            gakunen: '小2',
        },
        '善': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [
                'よ.い',
            ],
            gakunen: '小6',
        },
        '然': {
            onYomi: [
                'ゼン',
                'ネン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '禅': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '漸': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '膳': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '繕': {
            onYomi: [
                'ゼン',
            ],
            kunYomi: [
                'つくろ.う',
            ],
            gakunen: '中',
        },
        '狙': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'ねら.う',
            ],
            gakunen: '中',
        },
        '阻': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'はば.む',
            ],
            gakunen: '中',
        },
        '祖': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '租': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '素': {
            onYomi: [
                'ソ',
                'ス',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '措': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '粗': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'あら.い',
            ],
            gakunen: '中',
        },
        '組': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'く.む',
                'くみ',
            ],
            gakunen: '小2',
        },
        '疎': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'うと.い',
                'うと.む',
            ],
            gakunen: '中',
        },
        '訴': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'うった.える',
            ],
            gakunen: '中',
        },
        '塑': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '遡': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'さかのぼ.る',
            ],
            gakunen: '中',
        },
        '礎': {
            onYomi: [
                'ソ',
            ],
            kunYomi: [
                'いしずえ',
            ],
            gakunen: '中',
        },
        '双': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'ふた',
            ],
            gakunen: '中',
        },
        '壮': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '早': {
            onYomi: [
                'ソウ',
                '*サッ',
            ],
            kunYomi: [
                'はや.い',
                'はや.まる',
                'はや.める',
            ],
            gakunen: '小1',
        },
        '争': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'あらそ.う',
            ],
            gakunen: '小4',
        },
        '走': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'はし.る',
            ],
            gakunen: '小2',
        },
        '奏': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'かな.でる',
            ],
            gakunen: '小6',
        },
        '相': {
            onYomi: [
                'ソウ',
                'ショウ',
            ],
            kunYomi: [
                'あい',
            ],
            gakunen: '小3',
        },
        '荘': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '草': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'くさ',
            ],
            gakunen: '小1',
        },
        '送': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'おく.る',
            ],
            gakunen: '小3',
        },
        '倉': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'くら',
            ],
            gakunen: '小4',
        },
        '捜': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'さが.す',
            ],
            gakunen: '中',
        },
        '挿': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'さ.す',
            ],
            gakunen: '中',
        },
        '桑': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'くわ',
            ],
            gakunen: '中',
        },
        '巣': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'す',
            ],
            gakunen: '小4',
        },
        '掃': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'は.く',
            ],
            gakunen: '中',
        },
        '曹': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '曽': {
            onYomi: [
                'ソウ',
                '*ゾ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '爽': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'さわ.やか',
            ],
            gakunen: '中',
        },
        '窓': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'まど',
            ],
            gakunen: '小6',
        },
        '創': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'つく.る',
            ],
            gakunen: '小6',
        },
        '喪': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'も',
            ],
            gakunen: '中',
        },
        '痩': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'や.せる',
            ],
            gakunen: '中',
        },
        '葬': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'ほうむ.る',
            ],
            gakunen: '中',
        },
        '装': {
            onYomi: [
                'ソウ',
                'ショウ',
            ],
            kunYomi: [
                'よそお.う',
            ],
            gakunen: '小6',
        },
        '僧': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '想': {
            onYomi: [
                'ソウ',
                '*ソ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '層': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '総': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '遭': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'あ.う',
            ],
            gakunen: '中',
        },
        '槽': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '踪': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '操': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'みさお',
                'あやつ.る',
            ],
            gakunen: '小6',
        },
        '燥': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '霜': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'しも',
            ],
            gakunen: '中',
        },
        '騒': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'さわ.ぐ',
            ],
            gakunen: '中',
        },
        '藻': {
            onYomi: [
                'ソウ',
            ],
            kunYomi: [
                'も',
            ],
            gakunen: '中',
        },
        '造': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [
                'つく.る',
            ],
            gakunen: '小5',
        },
        '像': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '増': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [
                'ま.す',
                'ふ.える',
                'ふ.やす',
            ],
            gakunen: '小5',
        },
        '憎': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [
                'にく.む',
                'にく.い',
                'にく.らしい',
                'にく.しみ',
            ],
            gakunen: '中',
        },
        '蔵': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [
                'くら',
            ],
            gakunen: '小6',
        },
        '贈': {
            onYomi: [
                'ゾウ',
                '*ソウ',
            ],
            kunYomi: [
                'おく.る',
            ],
            gakunen: '中',
        },
        '臓': {
            onYomi: [
                'ゾウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '即': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '束': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'たば',
            ],
            gakunen: '小4',
        },
        '足': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'あし',
                'た.りる',
                'た.る',
                'た.す',
            ],
            gakunen: '小1',
        },
        '促': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'うなが.す',
            ],
            gakunen: '中',
        },
        '則': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '息': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'いき',
            ],
            gakunen: '小3',
        },
        '捉': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'とら.える',
            ],
            gakunen: '中',
        },
        '速': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'はや.い',
                'はや.める',
                'はや.まる',
                'すみ.やか',
            ],
            gakunen: '小3',
        },
        '側': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'がわ',
            ],
            gakunen: '小4',
        },
        '測': {
            onYomi: [
                'ソク',
            ],
            kunYomi: [
                'はか.る',
            ],
            gakunen: '小5',
        },
        '俗': {
            onYomi: [
                'ゾク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '族': {
            onYomi: [
                'ゾク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '属': {
            onYomi: [
                'ゾク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '賊': {
            onYomi: [
                'ゾク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '続': {
            onYomi: [
                'ゾク',
            ],
            kunYomi: [
                'つづ.く',
                'つづ.ける',
            ],
            gakunen: '小4',
        },
        '卒': {
            onYomi: [
                'ソツ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '率': {
            onYomi: [
                'ソツ',
                'リツ',
            ],
            kunYomi: [
                'ひき.いる',
            ],
            gakunen: '小5',
        },
        '存': {
            onYomi: [
                'ソン',
                'ゾン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '村': {
            onYomi: [
                'ソン',
            ],
            kunYomi: [
                'むら',
            ],
            gakunen: '小1',
        },
        '孫': {
            onYomi: [
                'ソン',
            ],
            kunYomi: [
                'まご',
            ],
            gakunen: '小4',
        },
        '尊': {
            onYomi: [
                'ソン',
            ],
            kunYomi: [
                'たっと.い',
                'とうと.い',
                'たっと.ぶ',
                'とうと.ぶ',
            ],
            gakunen: '小6',
        },
        '損': {
            onYomi: [
                'ソン',
            ],
            kunYomi: [
                'そこ.なう',
                'そこ.ねる',
            ],
            gakunen: '小5',
        },
        '遜': {
            onYomi: [
                'ソン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '他': {
            onYomi: [
                'タ',
            ],
            kunYomi: [
                'ほか',
            ],
            gakunen: '小3',
        },
        '多': {
            onYomi: [
                'タ',
            ],
            kunYomi: [
                'おお.い',
            ],
            gakunen: '小2',
        },
        '汰': {
            onYomi: [
                'タ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '打': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [
                'う.つ',
            ],
            gakunen: '小3',
        },
        '妥': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '唾': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [
                'つば',
            ],
            gakunen: '中',
        },
        '堕': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '惰': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '駄': {
            onYomi: [
                'ダ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '太': {
            onYomi: [
                'タイ',
                'タ',
            ],
            kunYomi: [
                'ふと.い',
                'ふと.る',
            ],
            gakunen: '小2',
        },
        '対': {
            onYomi: [
                'タイ',
                'ツイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '体': {
            onYomi: [
                'タイ',
                'テイ',
            ],
            kunYomi: [
                'からだ',
            ],
            gakunen: '小2',
        },
        '耐': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'た.える',
            ],
            gakunen: '中',
        },
        '待': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'ま.つ',
            ],
            gakunen: '小3',
        },
        '怠': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'おこた.る',
                'なま.ける',
            ],
            gakunen: '中',
        },
        '胎': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '退': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'しりぞ.く',
                'しりぞ.ける',
            ],
            gakunen: '小6',
        },
        '帯': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'お.びる',
                'おび',
            ],
            gakunen: '小4',
        },
        '泰': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '堆': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '袋': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'ふくろ',
            ],
            gakunen: '中',
        },
        '逮': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '替': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'か.える',
                'か.わる',
            ],
            gakunen: '中',
        },
        '貸': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'か.す',
            ],
            gakunen: '小5',
        },
        '隊': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '滞': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [
                'とどこお.る',
            ],
            gakunen: '中',
        },
        '態': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '戴': {
            onYomi: [
                'タイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '大': {
            onYomi: [
                'ダイ',
                'タイ',
            ],
            kunYomi: [
                'おお',
                'おお.きい',
                'おお.いに',
            ],
            gakunen: '小1',
        },
        '代': {
            onYomi: [
                'ダイ',
                'タイ',
            ],
            kunYomi: [
                'か.わる',
                'か.える',
                'よ',
                'しろ',
            ],
            gakunen: '小3',
        },
        '台': {
            onYomi: [
                'ダイ',
                'タイ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '第': {
            onYomi: [
                'ダイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '題': {
            onYomi: [
                'ダイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '滝': {
            onYomi: [],
            kunYomi: [
                'たき',
            ],
            gakunen: '中',
        },
        '宅': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '択': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '沢': {
            onYomi: [
                'タク',
            ],
            kunYomi: [
                'さわ',
            ],
            gakunen: '中',
        },
        '卓': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '拓': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '託': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '濯': {
            onYomi: [
                'タク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '諾': {
            onYomi: [
                'ダク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '濁': {
            onYomi: [
                'ダク',
            ],
            kunYomi: [
                'にご.る',
                'にご.す',
            ],
            gakunen: '中',
        },
        '但': {
            onYomi: [],
            kunYomi: [
                'ただ.し',
            ],
            gakunen: '中',
        },
        '達': {
            onYomi: [
                'タツ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '脱': {
            onYomi: [
                'ダツ',
            ],
            kunYomi: [
                'ぬ.ぐ',
                'ぬ.げる',
            ],
            gakunen: '中',
        },
        '奪': {
            onYomi: [
                'ダツ',
            ],
            kunYomi: [
                'うば.う',
            ],
            gakunen: '中',
        },
        '棚': {
            onYomi: [],
            kunYomi: [
                'たな',
            ],
            gakunen: '中',
        },
        '誰': {
            onYomi: [],
            kunYomi: [
                'だれ',
            ],
            gakunen: '中',
        },
        '丹': {
            onYomi: [
                'タン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '旦': {
            onYomi: [
                'タン',
                'ダン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '担': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'かつ.ぐ',
                'にな.う',
            ],
            gakunen: '小6',
        },
        '単': {
            onYomi: [
                'タン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '炭': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'すみ',
            ],
            gakunen: '小3',
        },
        '胆': {
            onYomi: [
                'タン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '探': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'さぐ.る',
                'さが.す',
            ],
            gakunen: '小6',
        },
        '淡': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'あわ.い',
            ],
            gakunen: '中',
        },
        '短': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'みじか.い',
            ],
            gakunen: '小3',
        },
        '嘆': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'なげ.く',
                'なげ.かわしい',
            ],
            gakunen: '中',
        },
        '端': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'はし',
                'は',
                'はた',
            ],
            gakunen: '中',
        },
        '綻': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'ほころ.びる',
            ],
            gakunen: '中',
        },
        '誕': {
            onYomi: [
                'タン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '鍛': {
            onYomi: [
                'タン',
            ],
            kunYomi: [
                'きた.える',
            ],
            gakunen: '中',
        },
        '団': {
            onYomi: [
                'ダン',
                '*トン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '男': {
            onYomi: [
                'ダン',
                'ナン',
            ],
            kunYomi: [
                'おとこ',
            ],
            gakunen: '小1',
        },
        '段': {
            onYomi: [
                'ダン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '断': {
            onYomi: [
                'ダン',
            ],
            kunYomi: [
                'た.つ',
                'ことわ.る',
            ],
            gakunen: '小5',
        },
        '弾': {
            onYomi: [
                'ダン',
            ],
            kunYomi: [
                'ひ.く',
                'はず.む',
                'たま',
            ],
            gakunen: '中',
        },
        '暖': {
            onYomi: [
                'ダン',
            ],
            kunYomi: [
                'あたた.か',
                'あたた.かい',
                'あたた.まる',
                'あたた.める',
            ],
            gakunen: '小6',
        },
        '談': {
            onYomi: [
                'ダン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '壇': {
            onYomi: [
                'ダン',
                '*タン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '地': {
            onYomi: [
                'チ',
                'ジ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '池': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'いけ',
            ],
            gakunen: '小2',
        },
        '知': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'し.る',
            ],
            gakunen: '小2',
        },
        '値': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'ね',
                'あたい',
            ],
            gakunen: '小6',
        },
        '恥': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'は.じる',
                'はじ',
                'は.じらう',
                'は.ずかしい',
            ],
            gakunen: '中',
        },
        '致': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'いた.す',
            ],
            gakunen: '中',
        },
        '遅': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'おく.れる',
                'おく.らす',
                'おそ.い',
            ],
            gakunen: '中',
        },
        '痴': {
            onYomi: [
                'チ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '稚': {
            onYomi: [
                'チ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '置': {
            onYomi: [
                'チ',
            ],
            kunYomi: [
                'お.く',
            ],
            gakunen: '小4',
        },
        '緻': {
            onYomi: [
                'チ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '竹': {
            onYomi: [
                'チク',
            ],
            kunYomi: [
                'たけ',
            ],
            gakunen: '小1',
        },
        '畜': {
            onYomi: [
                'チク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '逐': {
            onYomi: [
                'チク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '蓄': {
            onYomi: [
                'チク',
            ],
            kunYomi: [
                'たくわ.える',
            ],
            gakunen: '中',
        },
        '築': {
            onYomi: [
                'チク',
            ],
            kunYomi: [
                'きず.く',
            ],
            gakunen: '小5',
        },
        '秩': {
            onYomi: [
                'チツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '窒': {
            onYomi: [
                'チツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '茶': {
            onYomi: [
                'チャ',
                'サ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '着': {
            onYomi: [
                'チャク',
                '*ジャク',
            ],
            kunYomi: [
                'き.る',
                'き.せる',
                'つ.く',
                'つ.ける',
            ],
            gakunen: '小3',
        },
        '嫡': {
            onYomi: [
                'チャク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '中': {
            onYomi: [
                'チュウ',
                '*ジュウ',
            ],
            kunYomi: [
                'なか',
            ],
            gakunen: '小1',
        },
        '仲': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'なか',
            ],
            gakunen: '小4',
        },
        '虫': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'むし',
            ],
            gakunen: '小1',
        },
        '沖': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'おき',
            ],
            gakunen: '小4',
        },
        '宙': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '忠': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '抽': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '注': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'そそ.ぐ',
            ],
            gakunen: '小3',
        },
        '昼': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'ひる',
            ],
            gakunen: '小2',
        },
        '柱': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'はしら',
            ],
            gakunen: '小3',
        },
        '衷': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '酎': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鋳': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [
                'い.る',
            ],
            gakunen: '中',
        },
        '駐': {
            onYomi: [
                'チュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '著': {
            onYomi: [
                'チョ',
            ],
            kunYomi: [
                'あらわ.す',
                'いちじる.しい',
            ],
            gakunen: '小6',
        },
        '貯': {
            onYomi: [
                'チョ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '丁': {
            onYomi: [
                'チョウ',
                'テイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '弔': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'とむら.う',
            ],
            gakunen: '中',
        },
        '庁': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '兆': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'きざ.す',
                'きざ.し',
            ],
            gakunen: '小4',
        },
        '町': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'まち',
            ],
            gakunen: '小1',
        },
        '長': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'なが.い',
            ],
            gakunen: '小2',
        },
        '挑': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'いど.む',
            ],
            gakunen: '中',
        },
        '帳': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '張': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'は.る',
            ],
            gakunen: '小5',
        },
        '彫': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'ほ.る',
            ],
            gakunen: '中',
        },
        '眺': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'なが.める',
            ],
            gakunen: '中',
        },
        '釣': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'つ.る',
            ],
            gakunen: '中',
        },
        '頂': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'いただ.く',
                'いただき',
            ],
            gakunen: '小6',
        },
        '鳥': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'とり',
            ],
            gakunen: '小2',
        },
        '朝': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'あさ',
            ],
            gakunen: '小2',
        },
        '脹': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [],
            gakunen: '小8',
        },
        '貼': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'は.る',
            ],
            gakunen: '中',
        },
        '超': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'こ.える',
                'こ.す',
            ],
            gakunen: '中',
        },
        '腸': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '跳': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'は.ねる',
                'と.ぶ',
            ],
            gakunen: '中',
        },
        '徴': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '嘲': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'あざけ.る',
            ],
            gakunen: '中',
        },
        '潮': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'しお',
            ],
            gakunen: '小6',
        },
        '澄': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'す.む',
                'す.ます',
            ],
            gakunen: '中',
        },
        '調': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'しら.べる',
                'ととの.う',
                'ととの.える',
            ],
            gakunen: '小3',
        },
        '聴': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'き.く',
            ],
            gakunen: '中',
        },
        '懲': {
            onYomi: [
                'チョウ',
            ],
            kunYomi: [
                'こ.りる',
                'こ.らす',
                'こ.らしめる',
            ],
            gakunen: '中',
        },
        '直': {
            onYomi: [
                'チョク',
                'ジキ',
            ],
            kunYomi: [
                'ただ.ちに',
                'なお.す',
                'なお.る',
            ],
            gakunen: '小2',
        },
        '勅': {
            onYomi: [
                'チョク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '捗': {
            onYomi: [
                'チョク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '沈': {
            onYomi: [
                'チン',
            ],
            kunYomi: [
                'しず.む',
                'しず.める',
            ],
            gakunen: '中',
        },
        '珍': {
            onYomi: [
                'チン',
            ],
            kunYomi: [
                'めずら.しい',
            ],
            gakunen: '中',
        },
        '朕': {
            onYomi: [
                'チン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '陳': {
            onYomi: [
                'チン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '賃': {
            onYomi: [
                'チン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '鎮': {
            onYomi: [
                'チン',
            ],
            kunYomi: [
                'しず.める',
                'しず.まる',
            ],
            gakunen: '中',
        },
        '追': {
            onYomi: [
                'ツイ',
            ],
            kunYomi: [
                'お.う',
            ],
            gakunen: '小3',
        },
        '椎': {
            onYomi: [
                'ツイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '墜': {
            onYomi: [
                'ツイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '通': {
            onYomi: [
                'ツウ',
                '*ツ',
            ],
            kunYomi: [
                'とお.る',
                'とお.す',
                'かよ.う',
            ],
            gakunen: '小2',
        },
        '痛': {
            onYomi: [
                'ツウ',
            ],
            kunYomi: [
                'いた.い',
                'いた.む',
                'いた.める',
            ],
            gakunen: '小6',
        },
        '塚': {
            onYomi: [],
            kunYomi: [
                'つか',
            ],
            gakunen: '中',
        },
        '漬': {
            onYomi: [],
            kunYomi: [
                'つ.ける',
                'つ.かる',
            ],
            gakunen: '中',
        },
        '坪': {
            onYomi: [],
            kunYomi: [
                'つぼ',
            ],
            gakunen: '中',
        },
        '爪': {
            onYomi: [],
            kunYomi: [
                'つめ',
                '*つま',
            ],
            gakunen: '中',
        },
        '鶴': {
            onYomi: [],
            kunYomi: [
                'つる',
            ],
            gakunen: '中',
        },
        '低': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'ひく.い',
                'ひく.める',
                'ひく.まる',
            ],
            gakunen: '小4',
        },
        '呈': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '廷': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '弟': {
            onYomi: [
                'テイ',
                '*ダイ',
                '*デ',
            ],
            kunYomi: [
                'おとうと',
            ],
            gakunen: '小2',
        },
        '定': {
            onYomi: [
                'テイ',
                'ジョウ',
            ],
            kunYomi: [
                'さだ.める',
                'さだ.まる',
                'さだ.か',
            ],
            gakunen: '小3',
        },
        '底': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'そこ',
            ],
            gakunen: '小4',
        },
        '抵': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '邸': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '亭': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '貞': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '帝': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '訂': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '庭': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'にわ',
            ],
            gakunen: '小3',
        },
        '逓': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '停': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '偵': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '堤': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'つつみ',
            ],
            gakunen: '中',
        },
        '提': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'さ.げる',
            ],
            gakunen: '小5',
        },
        '程': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'ほど',
            ],
            gakunen: '小5',
        },
        '艇': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '締': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'し.まる',
                'し.める',
            ],
            gakunen: '中',
        },
        '諦': {
            onYomi: [
                'テイ',
            ],
            kunYomi: [
                'あきら.める',
            ],
            gakunen: '中',
        },
        '泥': {
            onYomi: [
                'デイ',
            ],
            kunYomi: [
                'どろ',
            ],
            gakunen: '中',
        },
        '的': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [
                'まと',
            ],
            gakunen: '小4',
        },
        '笛': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [
                'ふえ',
            ],
            gakunen: '小3',
        },
        '摘': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [
                'つ.む',
            ],
            gakunen: '中',
        },
        '滴': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [
                'しずく',
                'したた.る',
            ],
            gakunen: '中',
        },
        '適': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '敵': {
            onYomi: [
                'テキ',
            ],
            kunYomi: [
                'かたき',
            ],
            gakunen: '小6',
        },
        '溺': {
            onYomi: [
                'デキ',
            ],
            kunYomi: [
                'おぼ.れる',
            ],
            gakunen: '中',
        },
        '迭': {
            onYomi: [
                'テツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '哲': {
            onYomi: [
                'テツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鉄': {
            onYomi: [
                'テツ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '徹': {
            onYomi: [
                'テツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '撤': {
            onYomi: [
                'テツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '天': {
            onYomi: [
                'テン',
            ],
            kunYomi: [
                'あめ',
                '*あま',
            ],
            gakunen: '小1',
        },
        '典': {
            onYomi: [
                'テン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '店': {
            onYomi: [
                'テン',
            ],
            kunYomi: [
                'みせ',
            ],
            gakunen: '小2',
        },
        '点': {
            onYomi: [
                'テン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '展': {
            onYomi: [
                'テン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '添': {
            onYomi: [
                'テン',
            ],
            kunYomi: [
                'そ.える',
                'そ.う',
            ],
            gakunen: '中',
        },
        '転': {
            onYomi: [
                'テン',
            ],
            kunYomi: [
                'ころ.がる',
                'ころ.げる',
                'ころ.がす',
                'ころ.ぶ',
            ],
            gakunen: '小3',
        },
        '塡': {
            onYomi: [
                'テン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '田': {
            onYomi: [
                'デン',
            ],
            kunYomi: [
                'た',
            ],
            gakunen: '小1',
        },
        '伝': {
            onYomi: [
                'デン',
            ],
            kunYomi: [
                'つた.わる',
                'つた.える',
                'つた.う',
            ],
            gakunen: '小4',
        },
        '殿': {
            onYomi: [
                'デン',
                'テン',
            ],
            kunYomi: [
                'との',
                'どの',
            ],
            gakunen: '中',
        },
        '電': {
            onYomi: [
                'デン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '斗': {
            onYomi: [
                'ト',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '吐': {
            onYomi: [
                'ト',
            ],
            kunYomi: [
                'は.く',
            ],
            gakunen: '中',
        },
        '妬': {
            onYomi: [
                'ト',
            ],
            kunYomi: [
                'ねた.む',
            ],
            gakunen: '中',
        },
        '徒': {
            onYomi: [
                'ト',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '途': {
            onYomi: [
                'ト',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '都': {
            onYomi: [
                'ト',
                'ツ',
            ],
            kunYomi: [
                'みやこ',
            ],
            gakunen: '小3',
        },
        '渡': {
            onYomi: [
                'ト',
            ],
            kunYomi: [
                'わた.る',
                'わた.す',
            ],
            gakunen: '中',
        },
        '塗': {
            onYomi: [
                'ト',
            ],
            kunYomi: [
                'ぬ.る',
            ],
            gakunen: '中',
        },
        '賭': {
            onYomi: [
                'ト',
            ],
            kunYomi: [
                'か.ける',
            ],
            gakunen: '中',
        },
        '土': {
            onYomi: [
                'ド',
                'ト',
            ],
            kunYomi: [
                'つち',
            ],
            gakunen: '小1',
        },
        '奴': {
            onYomi: [
                'ド',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '努': {
            onYomi: [
                'ド',
            ],
            kunYomi: [
                'つと.める',
            ],
            gakunen: '小4',
        },
        '度': {
            onYomi: [
                'ド',
                '*ト',
                '*タク',
            ],
            kunYomi: [
                'たび',
            ],
            gakunen: '小3',
        },
        '怒': {
            onYomi: [
                'ド',
            ],
            kunYomi: [
                'いか.る',
                'おこ.る',
            ],
            gakunen: '中',
        },
        '刀': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'かたな',
            ],
            gakunen: '小2',
        },
        '冬': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ふゆ',
            ],
            gakunen: '小2',
        },
        '灯': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ひ',
            ],
            gakunen: '小4',
        },
        '当': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'あ.たる',
                'あ.てる',
            ],
            gakunen: '小2',
        },
        '投': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'な.げる',
            ],
            gakunen: '小3',
        },
        '豆': {
            onYomi: [
                'トウ',
                '*ズ',
            ],
            kunYomi: [
                'まめ',
            ],
            gakunen: '小3',
        },
        '東': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ひがし',
            ],
            gakunen: '小2',
        },
        '到': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '逃': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'に.げる',
                'に.がす',
                'のが.す',
                'のが.れる',
            ],
            gakunen: '中',
        },
        '倒': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'たお.れる',
                'たお.す',
            ],
            gakunen: '中',
        },
        '凍': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'こお.る',
                'こご.える',
            ],
            gakunen: '中',
        },
        '唐': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'から',
            ],
            gakunen: '中',
        },
        '島': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'しま',
            ],
            gakunen: '小3',
        },
        '桃': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'もも',
            ],
            gakunen: '中',
        },
        '討': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'う.つ',
            ],
            gakunen: '小6',
        },
        '透': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'す.く',
                'す.かす',
                'す.ける',
            ],
            gakunen: '中',
        },
        '党': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '悼': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'いた.む',
            ],
            gakunen: '中',
        },
        '盗': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ぬす.む',
            ],
            gakunen: '中',
        },
        '陶': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '塔': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '搭': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '棟': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'むね',
                '*むな',
            ],
            gakunen: '中',
        },
        '湯': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ゆ',
            ],
            gakunen: '小3',
        },
        '痘': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '登': {
            onYomi: [
                'トウ',
                'ト',
            ],
            kunYomi: [
                'のぼ.る',
            ],
            gakunen: '小3',
        },
        '答': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'こた.える',
                'こた.え',
            ],
            gakunen: '小2',
        },
        '等': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ひと.しい',
            ],
            gakunen: '小3',
        },
        '筒': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'つつ',
            ],
            gakunen: '中',
        },
        '統': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'す.べる',
            ],
            gakunen: '小5',
        },
        '稲': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'いね',
                '*いな',
            ],
            gakunen: '中',
        },
        '踏': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ふ.む',
                'ふ.まえる',
            ],
            gakunen: '中',
        },
        '糖': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '頭': {
            onYomi: [
                'トウ',
                'ズ',
                '*ト',
            ],
            kunYomi: [
                'あたま',
                'かしら',
            ],
            gakunen: '小2',
        },
        '謄': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '藤': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'ふじ',
            ],
            gakunen: '中',
        },
        '闘': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [
                'たたか.う',
            ],
            gakunen: '中',
        },
        '騰': {
            onYomi: [
                'トウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '同': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'おな.じ',
            ],
            gakunen: '小2',
        },
        '洞': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'ほら',
            ],
            gakunen: '中',
        },
        '胴': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '動': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'うご.く',
                'うご.かす',
            ],
            gakunen: '小3',
        },
        '堂': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '童': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'わらべ',
            ],
            gakunen: '小3',
        },
        '道': {
            onYomi: [
                'ドウ',
                '*トウ',
            ],
            kunYomi: [
                'みち',
            ],
            gakunen: '小2',
        },
        '働': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'はたら.く',
            ],
            gakunen: '小4',
        },
        '銅': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '導': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'みちび.く',
            ],
            gakunen: '小5',
        },
        '瞳': {
            onYomi: [
                'ドウ',
            ],
            kunYomi: [
                'ひとみ',
            ],
            gakunen: '中',
        },
        '峠': {
            onYomi: [],
            kunYomi: [
                'とうげ',
            ],
            gakunen: '中',
        },
        '匿': {
            onYomi: [
                'トク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '特': {
            onYomi: [
                'トク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '得': {
            onYomi: [
                'トク',
            ],
            kunYomi: [
                'え.る',
                'う.る',
            ],
            gakunen: '小5',
        },
        '督': {
            onYomi: [
                'トク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '徳': {
            onYomi: [
                'トク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '篤': {
            onYomi: [
                'トク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '毒': {
            onYomi: [
                'ドク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '独': {
            onYomi: [
                'ドク',
            ],
            kunYomi: [
                'ひと.り',
            ],
            gakunen: '小5',
        },
        '読': {
            onYomi: [
                'ドク',
                'トク',
                '*トウ',
            ],
            kunYomi: [
                'よ.む',
            ],
            gakunen: '小2',
        },
        '栃': {
            onYomi: [],
            kunYomi: [
                'とち',
            ],
            gakunen: '小4',
        },
        '凸': {
            onYomi: [
                'トツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '突': {
            onYomi: [
                'トツ',
            ],
            kunYomi: [
                'つ.く',
            ],
            gakunen: '中',
        },
        '届': {
            onYomi: [],
            kunYomi: [
                'とど.ける',
                'とど.く',
            ],
            gakunen: '小6',
        },
        '屯': {
            onYomi: [
                'トン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '豚': {
            onYomi: [
                'トン',
            ],
            kunYomi: [
                'ぶた',
            ],
            gakunen: '中',
        },
        '頓': {
            onYomi: [
                'トン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '貪': {
            onYomi: [
                'ドン',
            ],
            kunYomi: [
                'むさぼ.る',
            ],
            gakunen: '中',
        },
        '鈍': {
            onYomi: [
                'ドン',
            ],
            kunYomi: [
                'にぶ.い',
                'にぶ.る',
            ],
            gakunen: '中',
        },
        '曇': {
            onYomi: [
                'ドン',
            ],
            kunYomi: [
                'くも.る',
            ],
            gakunen: '中',
        },
        '丼': {
            onYomi: [],
            kunYomi: [
                'どんぶり',
                '*どん',
            ],
            gakunen: '中',
        },
        '那': {
            onYomi: [
                'ナ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '奈': {
            onYomi: [
                'ナ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '内': {
            onYomi: [
                'ナイ',
                '*ダイ',
            ],
            kunYomi: [
                'うち',
            ],
            gakunen: '小2',
        },
        '梨': {
            onYomi: [],
            kunYomi: [
                'なし',
            ],
            gakunen: '小4',
        },
        '謎': {
            onYomi: [],
            kunYomi: [
                'なぞ',
            ],
            gakunen: '中',
        },
        '鍋': {
            onYomi: [],
            kunYomi: [
                'なべ',
            ],
            gakunen: '中',
        },
        '南': {
            onYomi: [
                'ナン',
                '*ナ',
            ],
            kunYomi: [
                'みなみ',
            ],
            gakunen: '小2',
        },
        '軟': {
            onYomi: [
                'ナン',
            ],
            kunYomi: [
                'やわ.らか',
                'やわ.らかい',
            ],
            gakunen: '中',
        },
        '難': {
            onYomi: [
                'ナン',
            ],
            kunYomi: [
                'かた.い',
                'むずか.しい',
            ],
            gakunen: '小6',
        },
        '二': {
            onYomi: [
                'ニ',
            ],
            kunYomi: [
                'ふた',
                'ふた.つ',
            ],
            gakunen: '小1',
        },
        '尼': {
            onYomi: [
                'ニ',
            ],
            kunYomi: [
                'あま',
            ],
            gakunen: '中',
        },
        '弐': {
            onYomi: [
                'ニ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '匂': {
            onYomi: [],
            kunYomi: [
                'にお.う',
            ],
            gakunen: '中',
        },
        '肉': {
            onYomi: [
                'ニク',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '虹': {
            onYomi: [],
            kunYomi: [
                'にじ',
            ],
            gakunen: '中',
        },
        '日': {
            onYomi: [
                'ニチ',
                'ジツ',
            ],
            kunYomi: [
                'ひ',
                'か',
            ],
            gakunen: '小1',
        },
        '入': {
            onYomi: [
                'ニュウ',
            ],
            kunYomi: [
                'い.る',
                'い.れる',
                'はい.る',
            ],
            gakunen: '小1',
        },
        '乳': {
            onYomi: [
                'ニュウ',
            ],
            kunYomi: [
                'ちち',
                'ち',
            ],
            gakunen: '小6',
        },
        '尿': {
            onYomi: [
                'ニョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '任': {
            onYomi: [
                'ニン',
            ],
            kunYomi: [
                'まか.せる',
                'まか.す',
            ],
            gakunen: '小5',
        },
        '妊': {
            onYomi: [
                'ニン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '忍': {
            onYomi: [
                'ニン',
            ],
            kunYomi: [
                'しの.ぶ',
                'しの.ばせる',
            ],
            gakunen: '中',
        },
        '認': {
            onYomi: [
                'ニン',
            ],
            kunYomi: [
                'みと.める',
            ],
            gakunen: '小6',
        },
        '寧': {
            onYomi: [
                'ネイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '熱': {
            onYomi: [
                'ネツ',
            ],
            kunYomi: [
                'あつ.い',
            ],
            gakunen: '小4',
        },
        '年': {
            onYomi: [
                'ネン',
            ],
            kunYomi: [
                'とし',
            ],
            gakunen: '小1',
        },
        '念': {
            onYomi: [
                'ネン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '捻': {
            onYomi: [
                'ネン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '粘': {
            onYomi: [
                'ネン',
            ],
            kunYomi: [
                'ねば.る',
            ],
            gakunen: '中',
        },
        '燃': {
            onYomi: [
                'ネン',
            ],
            kunYomi: [
                'も.える',
                'も.やす',
                'も.す',
            ],
            gakunen: '小5',
        },
        '悩': {
            onYomi: [
                'ノウ',
            ],
            kunYomi: [
                'なや.む',
                'なや.ます',
            ],
            gakunen: '中',
        },
        '納': {
            onYomi: [
                'ノウ',
                '*ナッ',
                '*ナ',
                '*ナン',
                '*トウ',
            ],
            kunYomi: [
                'おさ.める',
                'おさ.まる',
            ],
            gakunen: '小6',
        },
        '能': {
            onYomi: [
                'ノウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '脳': {
            onYomi: [
                'ノウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '農': {
            onYomi: [
                'ノウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '濃': {
            onYomi: [
                'ノウ',
            ],
            kunYomi: [
                'こ.い',
            ],
            gakunen: '中',
        },
        '把': {
            onYomi: [
                'ハ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '波': {
            onYomi: [
                'ハ',
            ],
            kunYomi: [
                'なみ',
            ],
            gakunen: '小3',
        },
        '派': {
            onYomi: [
                'ハ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '破': {
            onYomi: [
                'ハ',
            ],
            kunYomi: [
                'やぶ.る',
                'やぶ.れる',
            ],
            gakunen: '小5',
        },
        '覇': {
            onYomi: [
                'ハ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '馬': {
            onYomi: [
                'バ',
            ],
            kunYomi: [
                'うま',
                '*ま',
            ],
            gakunen: '小2',
        },
        '婆': {
            onYomi: [
                'バ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '罵': {
            onYomi: [
                'バ',
            ],
            kunYomi: [
                'ののし.る',
            ],
            gakunen: '中',
        },
        '拝': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'おが.む',
            ],
            gakunen: '小6',
        },
        '杯': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'さかずき',
            ],
            gakunen: '中',
        },
        '背': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'せ',
                'せい',
                'そむ.く',
                'そむ.ける',
            ],
            gakunen: '小6',
        },
        '肺': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '俳': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '配': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'くば.る',
            ],
            gakunen: '小3',
        },
        '排': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '敗': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'やぶ.れる',
            ],
            gakunen: '小4',
        },
        '廃': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [
                'すた.れる',
                'すた.る',
            ],
            gakunen: '中',
        },
        '輩': {
            onYomi: [
                'ハイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '売': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [
                'う.る',
                'う.れる',
            ],
            gakunen: '小2',
        },
        '倍': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '梅': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [
                'うめ',
            ],
            gakunen: '小4',
        },
        '培': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [
                'つちか.う',
            ],
            gakunen: '中',
        },
        '陪': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '媒': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '買': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [
                'か.う',
            ],
            gakunen: '小2',
        },
        '賠': {
            onYomi: [
                'バイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '白': {
            onYomi: [
                'ハク',
                'ビャク',
            ],
            kunYomi: [
                'しろ',
                '*しら',
                'しろ.い',
            ],
            gakunen: '小1',
        },
        '伯': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '拍': {
            onYomi: [
                'ハク',
                '*ヒョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '泊': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [
                'と.まる',
                'と.める',
            ],
            gakunen: '中',
        },
        '迫': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [
                'せま.る',
            ],
            gakunen: '中',
        },
        '剝': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [
                'は.がす',
                'は.ぐ',
                'は.がれる',
                'は.げる',
            ],
            gakunen: '中',
        },
        '舶': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '博': {
            onYomi: [
                'ハク',
                '*バク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '薄': {
            onYomi: [
                'ハク',
            ],
            kunYomi: [
                'うす.い',
                'うす.める',
                'うす.まる',
                'うす.らぐ',
                'うす.れる',
            ],
            gakunen: '中',
        },
        '麦': {
            onYomi: [
                'バク',
            ],
            kunYomi: [
                'むぎ',
            ],
            gakunen: '小2',
        },
        '漠': {
            onYomi: [
                'バク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '縛': {
            onYomi: [
                'バク',
            ],
            kunYomi: [
                'しば.る',
            ],
            gakunen: '中',
        },
        '爆': {
            onYomi: [
                'バク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '箱': {
            onYomi: [],
            kunYomi: [
                'はこ',
            ],
            gakunen: '小3',
        },
        '箸': {
            onYomi: [],
            kunYomi: [
                'はし',
            ],
            gakunen: '中',
        },
        '畑': {
            onYomi: [],
            kunYomi: [
                'はた',
                'はたけ',
            ],
            gakunen: '小3',
        },
        '肌': {
            onYomi: [],
            kunYomi: [
                'はだ',
            ],
            gakunen: '中',
        },
        '八': {
            onYomi: [
                'ハチ',
            ],
            kunYomi: [
                'や',
                'や.つ',
                'やっ.つ',
                '*よう',
            ],
            gakunen: '小1',
        },
        '鉢': {
            onYomi: [
                'ハチ',
                '*ハツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '発': {
            onYomi: [
                'ハツ',
                'ホツ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '髪': {
            onYomi: [
                'ハツ',
            ],
            kunYomi: [
                'かみ',
            ],
            gakunen: '中',
        },
        '伐': {
            onYomi: [
                'バツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '抜': {
            onYomi: [
                'バツ',
            ],
            kunYomi: [
                'ぬ.く',
                'ぬ.ける',
                'ぬ.かす',
                'ぬ.かる',
            ],
            gakunen: '中',
        },
        '罰': {
            onYomi: [
                'バツ',
                'バチ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '閥': {
            onYomi: [
                'バツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '反': {
            onYomi: [
                'ハン',
                '*ホン',
                '*タン',
            ],
            kunYomi: [
                'そ.る',
                'そ.らす',
            ],
            gakunen: '小3',
        },
        '半': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [
                'なか.ば',
            ],
            gakunen: '小2',
        },
        '氾': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '犯': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [
                'おか.す',
            ],
            gakunen: '小5',
        },
        '帆': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [
                'ほ',
            ],
            gakunen: '中',
        },
        '汎': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '伴': {
            onYomi: [
                'ハン',
                'バン',
            ],
            kunYomi: [
                'ともな.う',
            ],
            gakunen: '中',
        },
        '判': {
            onYomi: [
                'ハン',
                'バン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '坂': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [
                'さか',
            ],
            gakunen: '小3',
        },
        '阪': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '板': {
            onYomi: [
                'ハン',
                'バン',
            ],
            kunYomi: [
                'いた',
            ],
            gakunen: '小3',
        },
        '版': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '班': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '畔': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '般': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '販': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '斑': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '飯': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [
                'めし',
            ],
            gakunen: '小4',
        },
        '搬': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '煩': {
            onYomi: [
                'ハン',
                '*ボン',
            ],
            kunYomi: [
                'わずら.う',
                'わずら.わす',
            ],
            gakunen: '中',
        },
        '頒': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '範': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '繁': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '藩': {
            onYomi: [
                'ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '晩': {
            onYomi: [
                'バン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '番': {
            onYomi: [
                'バン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '蛮': {
            onYomi: [
                'バン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '盤': {
            onYomi: [
                'バン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '比': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'くら.べる',
            ],
            gakunen: '小5',
        },
        '皮': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'かわ',
            ],
            gakunen: '小3',
        },
        '妃': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '否': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'いな',
            ],
            gakunen: '小6',
        },
        '批': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '彼': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'かれ',
                '*かの',
            ],
            gakunen: '中',
        },
        '披': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '肥': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'こ.える',
                'こえ',
                'こ.やす',
                'こ.やし',
            ],
            gakunen: '小5',
        },
        '非': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '卑': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'いや.しい',
                'いや.しむ',
                'いや.しめる',
            ],
            gakunen: '中',
        },
        '飛': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'と.ぶ',
                'と.ばす',
            ],
            gakunen: '小4',
        },
        '疲': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'つか.れる',
            ],
            gakunen: '中',
        },
        '秘': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'ひ.める',
            ],
            gakunen: '小6',
        },
        '被': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'こうむ.る',
            ],
            gakunen: '中',
        },
        '悲': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'かな.しい',
                'かな.しむ',
            ],
            gakunen: '小3',
        },
        '扉': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'とびら',
            ],
            gakunen: '中',
        },
        '費': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'つい.やす',
                'つい.える',
            ],
            gakunen: '小5',
        },
        '碑': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '罷': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '避': {
            onYomi: [
                'ヒ',
            ],
            kunYomi: [
                'さ.ける',
            ],
            gakunen: '中',
        },
        '尾': {
            onYomi: [
                'ビ',
            ],
            kunYomi: [
                'お',
            ],
            gakunen: '中',
        },
        '眉': {
            onYomi: [
                'ビ',
                '*ミ',
            ],
            kunYomi: [
                'まゆ',
            ],
            gakunen: '中',
        },
        '美': {
            onYomi: [
                'ビ',
            ],
            kunYomi: [
                'うつく.しい',
            ],
            gakunen: '小3',
        },
        '備': {
            onYomi: [
                'ビ',
            ],
            kunYomi: [
                'そな.える',
                'そな.わる',
            ],
            gakunen: '小5',
        },
        '微': {
            onYomi: [
                'ビ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鼻': {
            onYomi: [
                'ビ',
            ],
            kunYomi: [
                'はな',
            ],
            gakunen: '小3',
        },
        '膝': {
            onYomi: [],
            kunYomi: [
                'ひざ',
            ],
            gakunen: '中',
        },
        '肘': {
            onYomi: [],
            kunYomi: [
                'ひじ',
            ],
            gakunen: '中',
        },
        '匹': {
            onYomi: [
                'ヒツ',
            ],
            kunYomi: [
                'ひき',
            ],
            gakunen: '中',
        },
        '必': {
            onYomi: [
                'ヒツ',
            ],
            kunYomi: [
                'かなら.ず',
            ],
            gakunen: '小4',
        },
        '泌': {
            onYomi: [
                'ヒツ',
                'ヒ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '筆': {
            onYomi: [
                'ヒツ',
            ],
            kunYomi: [
                'ふで',
            ],
            gakunen: '小3',
        },
        '姫': {
            onYomi: [],
            kunYomi: [
                'ひめ',
            ],
            gakunen: '中',
        },
        '百': {
            onYomi: [
                'ヒャク',
            ],
            kunYomi: [],
            gakunen: '小1',
        },
        '氷': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [
                'こおり',
                'ひ',
            ],
            gakunen: '小3',
        },
        '表': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [
                'おもて',
                'あらわ.す',
                'あらわ.れる',
            ],
            gakunen: '小3',
        },
        '俵': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [
                'たわら',
            ],
            gakunen: '小6',
        },
        '票': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '評': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '漂': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [
                'ただよ.う',
            ],
            gakunen: '中',
        },
        '標': {
            onYomi: [
                'ヒョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '苗': {
            onYomi: [
                'ビョウ',
            ],
            kunYomi: [
                'なえ',
                '*なわ',
            ],
            gakunen: '中',
        },
        '秒': {
            onYomi: [
                'ビョウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '病': {
            onYomi: [
                'ビョウ',
                '*ヘイ',
            ],
            kunYomi: [
                'や.む',
                'やまい',
            ],
            gakunen: '小3',
        },
        '描': {
            onYomi: [
                'ビョウ',
            ],
            kunYomi: [
                'えが.く',
                'か.く',
            ],
            gakunen: '中',
        },
        '猫': {
            onYomi: [
                'ビョウ',
            ],
            kunYomi: [
                'ねこ',
            ],
            gakunen: '中',
        },
        '品': {
            onYomi: [
                'ヒン',
            ],
            kunYomi: [
                'しな',
            ],
            gakunen: '小3',
        },
        '浜': {
            onYomi: [
                'ヒン',
            ],
            kunYomi: [
                'はま',
            ],
            gakunen: '中',
        },
        '貧': {
            onYomi: [
                'ヒン',
                'ビン',
            ],
            kunYomi: [
                'まず.しい',
            ],
            gakunen: '小5',
        },
        '賓': {
            onYomi: [
                'ヒン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '頻': {
            onYomi: [
                'ヒン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '敏': {
            onYomi: [
                'ビン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '瓶': {
            onYomi: [
                'ビン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '不': {
            onYomi: [
                'フ',
                'ブ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '夫': {
            onYomi: [
                'フ',
                '*フウ',
            ],
            kunYomi: [
                'おっと',
            ],
            gakunen: '小4',
        },
        '父': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'ちち',
            ],
            gakunen: '小2',
        },
        '付': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'つ.ける',
                'つ.く',
            ],
            gakunen: '小4',
        },
        '布': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'ぬの',
            ],
            gakunen: '小5',
        },
        '扶': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '府': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '怖': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'こわ.い',
            ],
            gakunen: '中',
        },
        '阜': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '附': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '訃': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '負': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'ま.ける',
                'ま.かす',
                'お.う',
            ],
            gakunen: '小3',
        },
        '赴': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'おもむ.く',
            ],
            gakunen: '中',
        },
        '浮': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'う.く',
                'う.かれる',
                'う.かぶ',
                'う.かべる',
            ],
            gakunen: '中',
        },
        '婦': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '符': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '富': {
            onYomi: [
                'フ',
                '*フウ',
            ],
            kunYomi: [
                'と.む',
                'とみ',
            ],
            gakunen: '小4',
        },
        '普': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '腐': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'くさ.る',
                'くさ.れる',
                'くさ.らす',
            ],
            gakunen: '中',
        },
        '敷': {
            onYomi: [
                'フ',
            ],
            kunYomi: [
                'し.く',
            ],
            gakunen: '中',
        },
        '膚': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '賦': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '譜': {
            onYomi: [
                'フ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '侮': {
            onYomi: [
                'ブ',
            ],
            kunYomi: [
                'あなど.る',
            ],
            gakunen: '中',
        },
        '武': {
            onYomi: [
                'ブ',
                'ム',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '部': {
            onYomi: [
                'ブ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '舞': {
            onYomi: [
                'ブ',
            ],
            kunYomi: [
                'ま.う',
                'まい',
            ],
            gakunen: '中',
        },
        '封': {
            onYomi: [
                'フウ',
                'ホウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '風': {
            onYomi: [
                'フウ',
                '*フ',
            ],
            kunYomi: [
                'かぜ',
                '*かざ',
            ],
            gakunen: '小2',
        },
        '伏': {
            onYomi: [
                'フク',
            ],
            kunYomi: [
                'ふ.せる',
                'ふ.す',
            ],
            gakunen: '中',
        },
        '服': {
            onYomi: [
                'フク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '副': {
            onYomi: [
                'フク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '幅': {
            onYomi: [
                'フク',
            ],
            kunYomi: [
                'はば',
            ],
            gakunen: '中',
        },
        '復': {
            onYomi: [
                'フク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '福': {
            onYomi: [
                'フク',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '腹': {
            onYomi: [
                'フク',
            ],
            kunYomi: [
                'はら',
            ],
            gakunen: '小6',
        },
        '複': {
            onYomi: [
                'フク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '覆': {
            onYomi: [
                'フク',
            ],
            kunYomi: [
                'おお.う',
                'くつがえ.す',
                'くつがえ.る',
            ],
            gakunen: '中',
        },
        '払': {
            onYomi: [
                'フツ',
            ],
            kunYomi: [
                'はら.う',
            ],
            gakunen: '中',
        },
        '沸': {
            onYomi: [
                'フツ',
            ],
            kunYomi: [
                'わ.く',
                'わ.かす',
            ],
            gakunen: '中',
        },
        '仏': {
            onYomi: [
                'ブツ',
            ],
            kunYomi: [
                'ほとけ',
            ],
            gakunen: '小5',
        },
        '物': {
            onYomi: [
                'ブツ',
                'モツ',
            ],
            kunYomi: [
                'もの',
            ],
            gakunen: '小3',
        },
        '粉': {
            onYomi: [
                'フン',
            ],
            kunYomi: [
                'こ',
                'こな',
            ],
            gakunen: '小5',
        },
        '紛': {
            onYomi: [
                'フン',
            ],
            kunYomi: [
                'まぎ.れる',
                'まぎ.らす',
                'まぎ.らわす',
                'まぎ.らわしい',
            ],
            gakunen: '中',
        },
        '雰': {
            onYomi: [
                'フン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '噴': {
            onYomi: [
                'フン',
            ],
            kunYomi: [
                'ふ.く',
            ],
            gakunen: '中',
        },
        '墳': {
            onYomi: [
                'フン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '憤': {
            onYomi: [
                'フン',
            ],
            kunYomi: [
                'いきどお.る',
            ],
            gakunen: '中',
        },
        '奮': {
            onYomi: [
                'フン',
            ],
            kunYomi: [
                'ふる.う',
            ],
            gakunen: '小6',
        },
        '分': {
            onYomi: [
                'ブン',
                'フン',
                'ブ',
            ],
            kunYomi: [
                'わ.ける',
                'わ.かれる',
                'わ.かる',
                'わ.かつ',
            ],
            gakunen: '小2',
        },
        '文': {
            onYomi: [
                'ブン',
                'モン',
            ],
            kunYomi: [
                'ふみ',
            ],
            gakunen: '小1',
        },
        '聞': {
            onYomi: [
                'ブン',
                'モン',
            ],
            kunYomi: [
                'き.く',
                'き.こえる',
            ],
            gakunen: '小2',
        },
        '丙': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '平': {
            onYomi: [
                'ヘイ',
                'ビョウ',
            ],
            kunYomi: [
                'たい.ら',
                'ひら',
            ],
            gakunen: '小3',
        },
        '兵': {
            onYomi: [
                'ヘイ',
                'ヒョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '併': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [
                'あわ.せる',
            ],
            gakunen: '中',
        },
        '並': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [
                'なみ',
                'なら.べる',
                'なら.ぶ',
                'なら.びに',
            ],
            gakunen: '小6',
        },
        '柄': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [
                'がら',
                'え',
            ],
            gakunen: '中',
        },
        '陛': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '閉': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [
                'と.じる',
                'と.ざす',
                'し.める',
                'し.まる',
            ],
            gakunen: '小6',
        },
        '塀': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '幣': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '弊': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '蔽': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '餅': {
            onYomi: [
                'ヘイ',
            ],
            kunYomi: [
                'もち',
            ],
            gakunen: '中',
        },
        '米': {
            onYomi: [
                'ベイ',
                'マイ',
            ],
            kunYomi: [
                'こめ',
            ],
            gakunen: '小2',
        },
        '壁': {
            onYomi: [
                'ヘキ',
            ],
            kunYomi: [
                'かべ',
            ],
            gakunen: '中',
        },
        '璧': {
            onYomi: [
                'ヘキ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '癖': {
            onYomi: [
                'ヘキ',
            ],
            kunYomi: [
                'くせ',
            ],
            gakunen: '中',
        },
        '別': {
            onYomi: [
                'ベツ',
            ],
            kunYomi: [
                'わか.れる',
            ],
            gakunen: '小4',
        },
        '蔑': {
            onYomi: [
                'ベツ',
            ],
            kunYomi: [
                'さげす.む',
            ],
            gakunen: '中',
        },
        '片': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'かた',
            ],
            gakunen: '小6',
        },
        '辺': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'あた.り',
                'べ',
            ],
            gakunen: '小4',
        },
        '返': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'かえ.す',
                'かえ.る',
            ],
            gakunen: '小3',
        },
        '変': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'か.わる',
                'か.える',
            ],
            gakunen: '小4',
        },
        '偏': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'かたよ.る',
            ],
            gakunen: '中',
        },
        '遍': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '編': {
            onYomi: [
                'ヘン',
            ],
            kunYomi: [
                'あ.む',
            ],
            gakunen: '小5',
        },
        '弁': {
            onYomi: [
                'ベン',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '便': {
            onYomi: [
                'ベン',
                'ビン',
            ],
            kunYomi: [
                'たよ.り',
            ],
            gakunen: '小4',
        },
        '勉': {
            onYomi: [
                'ベン',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '歩': {
            onYomi: [
                'ホ',
                'ブ',
                '*フ',
            ],
            kunYomi: [
                'ある.く',
                'あゆ.む',
            ],
            gakunen: '小2',
        },
        '保': {
            onYomi: [
                'ホ',
            ],
            kunYomi: [
                'たも.つ',
            ],
            gakunen: '小5',
        },
        '哺': {
            onYomi: [
                'ホ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '捕': {
            onYomi: [
                'ホ',
            ],
            kunYomi: [
                'と.らえる',
                'と.らわれる',
                'と.る',
                'つか.まえる',
                'つか.まる',
            ],
            gakunen: '中',
        },
        '補': {
            onYomi: [
                'ホ',
            ],
            kunYomi: [
                'おぎな.う',
            ],
            gakunen: '小6',
        },
        '舗': {
            onYomi: [
                'ホ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '母': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [
                'はは',
            ],
            gakunen: '小2',
        },
        '募': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [
                'つの.る',
            ],
            gakunen: '中',
        },
        '墓': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [
                'はか',
            ],
            gakunen: '小5',
        },
        '慕': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [
                'した.う',
            ],
            gakunen: '中',
        },
        '暮': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [
                'く.れる',
                'く.らす',
            ],
            gakunen: '小6',
        },
        '簿': {
            onYomi: [
                'ボ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '方': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'かた',
            ],
            gakunen: '小2',
        },
        '包': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'つつ.む',
            ],
            gakunen: '小4',
        },
        '芳': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'かんば.しい',
            ],
            gakunen: '中',
        },
        '邦': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '奉': {
            onYomi: [
                'ホウ',
                '*ブ',
            ],
            kunYomi: [
                'たてまつ.る',
            ],
            gakunen: '中',
        },
        '宝': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'たから',
            ],
            gakunen: '小6',
        },
        '抱': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'だ.く',
                'いだ.く',
                'かか.える',
            ],
            gakunen: '中',
        },
        '放': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'はな.す',
                'はな.つ',
                'はな.れる',
                'ほう.る',
            ],
            gakunen: '小3',
        },
        '法': {
            onYomi: [
                'ホウ',
                '*ハッ',
                '*ホッ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '泡': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'あわ',
            ],
            gakunen: '中',
        },
        '胞': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '俸': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '倣': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'なら.う',
            ],
            gakunen: '中',
        },
        '峰': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'みね',
            ],
            gakunen: '中',
        },
        '砲': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '崩': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'くず.れる',
                'くず.す',
            ],
            gakunen: '中',
        },
        '訪': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'おとず.れる',
                'たず.ねる',
            ],
            gakunen: '小6',
        },
        '報': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'むく.いる',
            ],
            gakunen: '小5',
        },
        '蜂': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'はち',
            ],
            gakunen: '中',
        },
        '豊': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'ゆた.か',
            ],
            gakunen: '小5',
        },
        '飽': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'あ.きる',
                'あ.かす',
            ],
            gakunen: '中',
        },
        '褒': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'ほ.める',
            ],
            gakunen: '中',
        },
        '縫': {
            onYomi: [
                'ホウ',
            ],
            kunYomi: [
                'ぬ.う',
            ],
            gakunen: '中',
        },
        '亡': {
            onYomi: [
                'ボウ',
                '*モウ',
            ],
            kunYomi: [
                'な.い',
            ],
            gakunen: '小6',
        },
        '乏': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'とぼ.しい',
            ],
            gakunen: '中',
        },
        '忙': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'いそが.しい',
            ],
            gakunen: '中',
        },
        '坊': {
            onYomi: [
                'ボウ',
                '*ボッ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '妨': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'さまた.げる',
            ],
            gakunen: '中',
        },
        '忘': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'わす.れる',
            ],
            gakunen: '小6',
        },
        '防': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'ふせ.ぐ',
            ],
            gakunen: '小5',
        },
        '房': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'ふさ',
            ],
            gakunen: '中',
        },
        '肪': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '某': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '冒': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'おか.す',
            ],
            gakunen: '中',
        },
        '剖': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '紡': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'つむ.ぐ',
            ],
            gakunen: '中',
        },
        '望': {
            onYomi: [
                'ボウ',
                'モウ',
            ],
            kunYomi: [
                'のぞ.む',
            ],
            gakunen: '小4',
        },
        '傍': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'かたわ.ら',
            ],
            gakunen: '中',
        },
        '帽': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '棒': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '貿': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '貌': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '暴': {
            onYomi: [
                'ボウ',
                '*バク',
            ],
            kunYomi: [
                'あば.く',
                'あば.れる',
            ],
            gakunen: '小5',
        },
        '膨': {
            onYomi: [
                'ボウ',
            ],
            kunYomi: [
                'ふく.らむ',
                'ふく.れる',
            ],
            gakunen: '中',
        },
        '謀': {
            onYomi: [
                'ボウ',
                '*ム',
            ],
            kunYomi: [
                'はか.る',
            ],
            gakunen: '中',
        },
        '頰': {
            onYomi: [],
            kunYomi: [
                'ほお',
            ],
            gakunen: '中',
        },
        '北': {
            onYomi: [
                'ホク',
            ],
            kunYomi: [
                'きた',
            ],
            gakunen: '小2',
        },
        '木': {
            onYomi: [
                'ボク',
                'モク',
            ],
            kunYomi: [
                'き',
                '*こ',
            ],
            gakunen: '小1',
        },
        '朴': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '牧': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [
                'まき',
            ],
            gakunen: '小4',
        },
        '睦': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '僕': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '墨': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [
                'すみ',
            ],
            gakunen: '中',
        },
        '撲': {
            onYomi: [
                'ボク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '没': {
            onYomi: [
                'ボツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '勃': {
            onYomi: [
                'ボツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '堀': {
            onYomi: [],
            kunYomi: [
                'ほり',
            ],
            gakunen: '中',
        },
        '本': {
            onYomi: [
                'ホン',
            ],
            kunYomi: [
                'もと',
            ],
            gakunen: '小1',
        },
        '奔': {
            onYomi: [
                'ホン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '翻': {
            onYomi: [
                'ホン',
            ],
            kunYomi: [
                'ひるがえ.る',
                'ひるがえ.す',
            ],
            gakunen: '中',
        },
        '凡': {
            onYomi: [
                'ボン',
                '*ハン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '盆': {
            onYomi: [
                'ボン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '麻': {
            onYomi: [
                'マ',
            ],
            kunYomi: [
                'あさ',
            ],
            gakunen: '中',
        },
        '摩': {
            onYomi: [
                'マ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '磨': {
            onYomi: [
                'マ',
            ],
            kunYomi: [
                'みが.く',
            ],
            gakunen: '中',
        },
        '魔': {
            onYomi: [
                'マ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '毎': {
            onYomi: [
                'マイ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '妹': {
            onYomi: [
                'マイ',
            ],
            kunYomi: [
                'いもうと',
            ],
            gakunen: '小2',
        },
        '枚': {
            onYomi: [
                'マイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '昧': {
            onYomi: [
                'マイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '埋': {
            onYomi: [
                'マイ',
            ],
            kunYomi: [
                'う.める',
                'う.まる',
                'う.もれる',
            ],
            gakunen: '中',
        },
        '幕': {
            onYomi: [
                'マク',
                'バク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '膜': {
            onYomi: [
                'マク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '枕': {
            onYomi: [],
            kunYomi: [
                'まくら',
            ],
            gakunen: '中',
        },
        '又': {
            onYomi: [],
            kunYomi: [
                'また',
            ],
            gakunen: '中',
        },
        '末': {
            onYomi: [
                'マツ',
                'バツ',
            ],
            kunYomi: [
                'すえ',
            ],
            gakunen: '小4',
        },
        '抹': {
            onYomi: [
                'マツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '万': {
            onYomi: [
                'マン',
                'バン',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '満': {
            onYomi: [
                'マン',
            ],
            kunYomi: [
                'み.ちる',
                'み.たす',
            ],
            gakunen: '小4',
        },
        '慢': {
            onYomi: [
                'マン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '漫': {
            onYomi: [
                'マン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '未': {
            onYomi: [
                'ミ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '味': {
            onYomi: [
                'ミ',
            ],
            kunYomi: [
                'あじ',
                'あじ.わう',
            ],
            gakunen: '小3',
        },
        '魅': {
            onYomi: [
                'ミ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '岬': {
            onYomi: [],
            kunYomi: [
                'みさき',
            ],
            gakunen: '中',
        },
        '密': {
            onYomi: [
                'ミツ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '蜜': {
            onYomi: [
                'ミツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '脈': {
            onYomi: [
                'ミャク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '妙': {
            onYomi: [
                'ミョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '民': {
            onYomi: [
                'ミン',
            ],
            kunYomi: [
                'たみ',
            ],
            gakunen: '小4',
        },
        '眠': {
            onYomi: [
                'ミン',
            ],
            kunYomi: [
                'ねむ.る',
                'ねむ.い',
            ],
            gakunen: '中',
        },
        '矛': {
            onYomi: [
                'ム',
            ],
            kunYomi: [
                'ほこ',
            ],
            gakunen: '中',
        },
        '務': {
            onYomi: [
                'ム',
            ],
            kunYomi: [
                'つと.める',
                'つと.まる',
            ],
            gakunen: '小5',
        },
        '無': {
            onYomi: [
                'ム',
                'ブ',
            ],
            kunYomi: [
                'な.い',
            ],
            gakunen: '小4',
        },
        '夢': {
            onYomi: [
                'ム',
            ],
            kunYomi: [
                'ゆめ',
            ],
            gakunen: '小5',
        },
        '霧': {
            onYomi: [
                'ム',
            ],
            kunYomi: [
                'きり',
            ],
            gakunen: '中',
        },
        '娘': {
            onYomi: [],
            kunYomi: [
                'むすめ',
            ],
            gakunen: '中',
        },
        '名': {
            onYomi: [
                'メイ',
                'ミョウ',
            ],
            kunYomi: [
                'な',
            ],
            gakunen: '小1',
        },
        '命': {
            onYomi: [
                'メイ',
                'ミョウ',
            ],
            kunYomi: [
                'いのち',
            ],
            gakunen: '小3',
        },
        '明': {
            onYomi: [
                'メイ',
                'ミョウ',
            ],
            kunYomi: [
                'あ.かり',
                'あか.るい',
                'あか.るむ',
                'あか.らむ',
                'あき.らか',
                'あ.ける',
                'あ.く',
                'あ.くる',
                'あ.かす',
            ],
            gakunen: '小2',
        },
        '迷': {
            onYomi: [
                'メイ',
            ],
            kunYomi: [
                'まよ.う',
            ],
            gakunen: '小5',
        },
        '冥': {
            onYomi: [
                'メイ',
                'ミョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '盟': {
            onYomi: [
                'メイ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '銘': {
            onYomi: [
                'メイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '鳴': {
            onYomi: [
                'メイ',
            ],
            kunYomi: [
                'な.く',
                'な.る',
                'な.らす',
            ],
            gakunen: '小2',
        },
        '滅': {
            onYomi: [
                'メツ',
            ],
            kunYomi: [
                'ほろ.びる',
                'ほろ.ぼす',
            ],
            gakunen: '中',
        },
        '免': {
            onYomi: [
                'メン',
            ],
            kunYomi: [
                'まぬか.れる',
            ],
            gakunen: '中',
        },
        '面': {
            onYomi: [
                'メン',
            ],
            kunYomi: [
                'おも',
                'おもて',
                'つら',
            ],
            gakunen: '小3',
        },
        '綿': {
            onYomi: [
                'メン',
            ],
            kunYomi: [
                'わた',
            ],
            gakunen: '小5',
        },
        '麺': {
            onYomi: [
                'メン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '茂': {
            onYomi: [
                'モ',
            ],
            kunYomi: [
                'しげ.る',
            ],
            gakunen: '中',
        },
        '模': {
            onYomi: [
                'モ',
                'ボ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '毛': {
            onYomi: [
                'モウ',
            ],
            kunYomi: [
                'け',
            ],
            gakunen: '小2',
        },
        '妄': {
            onYomi: [
                'モウ',
                'ボウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '盲': {
            onYomi: [
                'モウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '耗': {
            onYomi: [
                'モウ',
                '*コウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '猛': {
            onYomi: [
                'モウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '網': {
            onYomi: [
                'モウ',
            ],
            kunYomi: [
                'あみ',
            ],
            gakunen: '中',
        },
        '目': {
            onYomi: [
                'モク',
                '*ボク',
            ],
            kunYomi: [
                'め',
                '*ま',
            ],
            gakunen: '小1',
        },
        '黙': {
            onYomi: [
                'モク',
            ],
            kunYomi: [
                'だま.る',
            ],
            gakunen: '中',
        },
        '門': {
            onYomi: [
                'モン',
            ],
            kunYomi: [
                'かど',
            ],
            gakunen: '小2',
        },
        '紋': {
            onYomi: [
                'モン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '問': {
            onYomi: [
                'モン',
            ],
            kunYomi: [
                'と.う',
                'と.い',
                '*とん',
            ],
            gakunen: '小3',
        },
        '匁': {
            onYomi: [],
            kunYomi: [
                'もんめ',
            ],
            gakunen: '小8',
        },
        '冶': {
            onYomi: [
                'ヤ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '夜': {
            onYomi: [
                'ヤ',
            ],
            kunYomi: [
                'よ',
                'よる',
            ],
            gakunen: '小2',
        },
        '野': {
            onYomi: [
                'ヤ',
            ],
            kunYomi: [
                'の',
            ],
            gakunen: '小2',
        },
        '弥': {
            onYomi: [],
            kunYomi: [
                'や',
            ],
            gakunen: '中',
        },
        '厄': {
            onYomi: [
                'ヤク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '役': {
            onYomi: [
                'ヤク',
                'エキ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '約': {
            onYomi: [
                'ヤク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '訳': {
            onYomi: [
                'ヤク',
            ],
            kunYomi: [
                'わけ',
            ],
            gakunen: '小6',
        },
        '薬': {
            onYomi: [
                'ヤク',
            ],
            kunYomi: [
                'くすり',
            ],
            gakunen: '小3',
        },
        '躍': {
            onYomi: [
                'ヤク',
            ],
            kunYomi: [
                'おど.る',
            ],
            gakunen: '中',
        },
        '闇': {
            onYomi: [],
            kunYomi: [
                'やみ',
            ],
            gakunen: '中',
        },
        '由': {
            onYomi: [
                'ユ',
                'ユウ',
                '*ユイ',
            ],
            kunYomi: [
                'よし',
            ],
            gakunen: '小3',
        },
        '油': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [
                'あぶら',
            ],
            gakunen: '小3',
        },
        '喩': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '愉': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '諭': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [
                'さと.す',
            ],
            gakunen: '中',
        },
        '輸': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '癒': {
            onYomi: [
                'ユ',
            ],
            kunYomi: [
                'い.える',
                'い.やす',
            ],
            gakunen: '中',
        },
        '唯': {
            onYomi: [
                'ユイ',
                '*イ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '友': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'とも',
            ],
            gakunen: '小2',
        },
        '有': {
            onYomi: [
                'ユウ',
                'ウ',
            ],
            kunYomi: [
                'あ.る',
            ],
            gakunen: '小3',
        },
        '勇': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'いさ.む',
            ],
            gakunen: '小4',
        },
        '幽': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '悠': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '郵': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '湧': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'わ.く',
            ],
            gakunen: '中',
        },
        '猶': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '裕': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '遊': {
            onYomi: [
                'ユウ',
                '*ユ',
            ],
            kunYomi: [
                'あそ.ぶ',
            ],
            gakunen: '小3',
        },
        '雄': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'お',
                'おす',
            ],
            gakunen: '中',
        },
        '誘': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'さそ.う',
            ],
            gakunen: '中',
        },
        '憂': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'うれ.える',
                'うれ.い',
                'う.い',
            ],
            gakunen: '中',
        },
        '融': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '優': {
            onYomi: [
                'ユウ',
            ],
            kunYomi: [
                'やさ.しい',
                'すぐ.れる',
            ],
            gakunen: '小6',
        },
        '与': {
            onYomi: [
                'ヨ',
            ],
            kunYomi: [
                'あた.える',
            ],
            gakunen: '中',
        },
        '予': {
            onYomi: [
                'ヨ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '余': {
            onYomi: [
                'ヨ',
            ],
            kunYomi: [
                'あま.る',
                'あま.す',
            ],
            gakunen: '小5',
        },
        '誉': {
            onYomi: [
                'ヨ',
            ],
            kunYomi: [
                'ほま.れ',
            ],
            gakunen: '中',
        },
        '預': {
            onYomi: [
                'ヨ',
            ],
            kunYomi: [
                'あず.ける',
                'あず.かる',
            ],
            gakunen: '小6',
        },
        '幼': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'おさな.い',
            ],
            gakunen: '小6',
        },
        '用': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'もち.いる',
            ],
            gakunen: '小2',
        },
        '羊': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'ひつじ',
            ],
            gakunen: '小3',
        },
        '妖': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'あや.しい',
            ],
            gakunen: '中',
        },
        '洋': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '要': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'かなめ',
                'い.る',
            ],
            gakunen: '小4',
        },
        '容': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '庸': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '揚': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'あ.げる',
                'あ.がる',
            ],
            gakunen: '中',
        },
        '揺': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'ゆ.れる',
                'ゆ.る',
                'ゆ.らぐ',
                'ゆ.るぐ',
                'ゆ.する',
                'ゆ.さぶる',
                'ゆ.すぶる',
            ],
            gakunen: '中',
        },
        '葉': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'は',
            ],
            gakunen: '小3',
        },
        '陽': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '溶': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'と.ける',
                'と.かす',
                'と.く',
            ],
            gakunen: '中',
        },
        '腰': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'こし',
            ],
            gakunen: '中',
        },
        '様': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'さま',
            ],
            gakunen: '小3',
        },
        '瘍': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '踊': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'おど.る',
                'おど.り',
            ],
            gakunen: '中',
        },
        '窯': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'かま',
            ],
            gakunen: '中',
        },
        '養': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'やしな.う',
            ],
            gakunen: '小4',
        },
        '擁': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '謡': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [
                'うたい',
                'うた.う',
            ],
            gakunen: '中',
        },
        '曜': {
            onYomi: [
                'ヨウ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '抑': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [
                'おさ.える',
            ],
            gakunen: '中',
        },
        '沃': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '浴': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [
                'あ.びる',
                'あ.びせる',
            ],
            gakunen: '小4',
        },
        '欲': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [
                'ほっ.する',
                'ほ.しい',
            ],
            gakunen: '小6',
        },
        '翌': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '翼': {
            onYomi: [
                'ヨク',
            ],
            kunYomi: [
                'つばさ',
            ],
            gakunen: '中',
        },
        '拉': {
            onYomi: [
                'ラ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '裸': {
            onYomi: [
                'ラ',
            ],
            kunYomi: [
                'はだか',
            ],
            gakunen: '中',
        },
        '羅': {
            onYomi: [
                'ラ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '来': {
            onYomi: [
                'ライ',
            ],
            kunYomi: [
                'く.る',
                'きた.る',
                'きた.す',
            ],
            gakunen: '小2',
        },
        '雷': {
            onYomi: [
                'ライ',
            ],
            kunYomi: [
                'かみなり',
            ],
            gakunen: '中',
        },
        '頼': {
            onYomi: [
                'ライ',
            ],
            kunYomi: [
                'たの.む',
                'たの.もしい',
                'たよ.る',
            ],
            gakunen: '中',
        },
        '絡': {
            onYomi: [
                'ラク',
            ],
            kunYomi: [
                'から.む',
                'から.まる',
                'から.める',
            ],
            gakunen: '中',
        },
        '落': {
            onYomi: [
                'ラク',
            ],
            kunYomi: [
                'お.ちる',
                'お.とす',
            ],
            gakunen: '小3',
        },
        '酪': {
            onYomi: [
                'ラク',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '辣': {
            onYomi: [
                'ラツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '乱': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [
                'みだ.れる',
                'みだ.す',
            ],
            gakunen: '小6',
        },
        '卵': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [
                'たまご',
            ],
            gakunen: '小6',
        },
        '覧': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '濫': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '藍': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [
                'あい',
            ],
            gakunen: '中',
        },
        '欄': {
            onYomi: [
                'ラン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '吏': {
            onYomi: [
                'リ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '利': {
            onYomi: [
                'リ',
            ],
            kunYomi: [
                'き.く',
            ],
            gakunen: '小4',
        },
        '里': {
            onYomi: [
                'リ',
            ],
            kunYomi: [
                'さと',
            ],
            gakunen: '小2',
        },
        '理': {
            onYomi: [
                'リ',
            ],
            kunYomi: [],
            gakunen: '小2',
        },
        '痢': {
            onYomi: [
                'リ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '裏': {
            onYomi: [
                'リ',
            ],
            kunYomi: [
                'うら',
            ],
            gakunen: '小6',
        },
        '履': {
            onYomi: [
                'リ',
            ],
            kunYomi: [
                'は.く',
            ],
            gakunen: '中',
        },
        '璃': {
            onYomi: [
                'リ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '離': {
            onYomi: [
                'リ',
            ],
            kunYomi: [
                'はな.れる',
                'はな.す',
            ],
            gakunen: '中',
        },
        '陸': {
            onYomi: [
                'リク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '立': {
            onYomi: [
                'リツ',
                '*リュウ',
            ],
            kunYomi: [
                'た.つ',
                'た.てる',
            ],
            gakunen: '小1',
        },
        '律': {
            onYomi: [
                'リツ',
                '*リチ',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '慄': {
            onYomi: [
                'リツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '略': {
            onYomi: [
                'リャク',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '柳': {
            onYomi: [
                'リュウ',
            ],
            kunYomi: [
                'やなぎ',
            ],
            gakunen: '中',
        },
        '流': {
            onYomi: [
                'リュウ',
                '*ル',
            ],
            kunYomi: [
                'なが.れる',
                'なが.す',
            ],
            gakunen: '小3',
        },
        '留': {
            onYomi: [
                'リュウ',
                '*ル',
            ],
            kunYomi: [
                'と.める',
                'と.まる',
            ],
            gakunen: '小5',
        },
        '竜': {
            onYomi: [
                'リュウ',
            ],
            kunYomi: [
                'たつ',
            ],
            gakunen: '中',
        },
        '粒': {
            onYomi: [
                'リュウ',
            ],
            kunYomi: [
                'つぶ',
            ],
            gakunen: '中',
        },
        '隆': {
            onYomi: [
                'リュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '硫': {
            onYomi: [
                'リュウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '侶': {
            onYomi: [
                'リョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '旅': {
            onYomi: [
                'リョ',
            ],
            kunYomi: [
                'たび',
            ],
            gakunen: '小3',
        },
        '虜': {
            onYomi: [
                'リョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '慮': {
            onYomi: [
                'リョ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '了': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '両': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '良': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [
                'よ.い',
            ],
            gakunen: '小4',
        },
        '料': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '涼': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [
                'すず.しい',
                'すず.む',
            ],
            gakunen: '中',
        },
        '猟': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '陵': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [
                'みささぎ',
            ],
            gakunen: '中',
        },
        '量': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [
                'はか.る',
            ],
            gakunen: '小4',
        },
        '僚': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '領': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '寮': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '療': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '瞭': {
            onYomi: [
                'リョウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '糧': {
            onYomi: [
                'リョウ',
                '*ロウ',
            ],
            kunYomi: [
                'かて',
            ],
            gakunen: '中',
        },
        '力': {
            onYomi: [
                'リョク',
                'リキ',
            ],
            kunYomi: [
                'ちから',
            ],
            gakunen: '小1',
        },
        '緑': {
            onYomi: [
                'リョク',
                '*ロク',
            ],
            kunYomi: [
                'みどり',
            ],
            gakunen: '小3',
        },
        '林': {
            onYomi: [
                'リン',
            ],
            kunYomi: [
                'はやし',
            ],
            gakunen: '小1',
        },
        '厘': {
            onYomi: [
                'リン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '倫': {
            onYomi: [
                'リン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '輪': {
            onYomi: [
                'リン',
            ],
            kunYomi: [
                'わ',
            ],
            gakunen: '小4',
        },
        '隣': {
            onYomi: [
                'リン',
            ],
            kunYomi: [
                'とな.る',
                'となり',
            ],
            gakunen: '中',
        },
        '臨': {
            onYomi: [
                'リン',
            ],
            kunYomi: [
                'のぞ.む',
            ],
            gakunen: '小6',
        },
        '瑠': {
            onYomi: [
                'ル',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '涙': {
            onYomi: [
                'ルイ',
            ],
            kunYomi: [
                'なみだ',
            ],
            gakunen: '中',
        },
        '累': {
            onYomi: [
                'ルイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '塁': {
            onYomi: [
                'ルイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '類': {
            onYomi: [
                'ルイ',
            ],
            kunYomi: [
                'たぐ.い',
            ],
            gakunen: '小4',
        },
        '令': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '礼': {
            onYomi: [
                'レイ',
                'ライ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '冷': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [
                'つめ.たい',
                'ひ.える',
                'ひ.や',
                'ひ.やす',
                'ひ.やかす',
                'さ.める',
                'さ.ます',
            ],
            gakunen: '小4',
        },
        '励': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [
                'はげ.む',
                'はげ.ます',
            ],
            gakunen: '中',
        },
        '戻': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [
                'もど.す',
                'もど.る',
            ],
            gakunen: '中',
        },
        '例': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [
                'たと.える',
            ],
            gakunen: '小4',
        },
        '鈴': {
            onYomi: [
                'レイ',
                'リン',
            ],
            kunYomi: [
                'すず',
            ],
            gakunen: '中',
        },
        '零': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '霊': {
            onYomi: [
                'レイ',
                'リョウ',
            ],
            kunYomi: [
                'たま',
            ],
            gakunen: '中',
        },
        '隷': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '齢': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '麗': {
            onYomi: [
                'レイ',
            ],
            kunYomi: [
                'うるわ.しい',
            ],
            gakunen: '中',
        },
        '暦': {
            onYomi: [
                'レキ',
            ],
            kunYomi: [
                'こよみ',
            ],
            gakunen: '中',
        },
        '歴': {
            onYomi: [
                'レキ',
            ],
            kunYomi: [],
            gakunen: '小5',
        },
        '列': {
            onYomi: [
                'レツ',
            ],
            kunYomi: [],
            gakunen: '小3',
        },
        '劣': {
            onYomi: [
                'レツ',
            ],
            kunYomi: [
                'おと.る',
            ],
            gakunen: '中',
        },
        '烈': {
            onYomi: [
                'レツ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '裂': {
            onYomi: [
                'レツ',
            ],
            kunYomi: [
                'さ.く',
                'さ.ける',
            ],
            gakunen: '中',
        },
        '恋': {
            onYomi: [
                'レン',
            ],
            kunYomi: [
                'こ.う',
                'こい',
                'こい.しい',
            ],
            gakunen: '中',
        },
        '連': {
            onYomi: [
                'レン',
            ],
            kunYomi: [
                'つら.なる',
                'つら.ねる',
                'つ.れる',
            ],
            gakunen: '小4',
        },
        '廉': {
            onYomi: [
                'レン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '練': {
            onYomi: [
                'レン',
            ],
            kunYomi: [
                'ね.る',
            ],
            gakunen: '小3',
        },
        '錬': {
            onYomi: [
                'レン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '呂': {
            onYomi: [
                'ロ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '炉': {
            onYomi: [
                'ロ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '賂': {
            onYomi: [
                'ロ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '路': {
            onYomi: [
                'ロ',
            ],
            kunYomi: [
                'じ',
            ],
            gakunen: '小3',
        },
        '露': {
            onYomi: [
                'ロ',
                '*ロウ',
            ],
            kunYomi: [
                'つゆ',
            ],
            gakunen: '中',
        },
        '老': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [
                'お.いる',
                'ふ.ける',
            ],
            gakunen: '小4',
        },
        '労': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '弄': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [
                'もてあそ.ぶ',
            ],
            gakunen: '中',
        },
        '郎': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '朗': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [
                'ほが.らか',
            ],
            gakunen: '小6',
        },
        '浪': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '廊': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '楼': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [],
            gakunen: '中',
        },
        '漏': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [
                'も.る',
                'も.れる',
                'も.らす',
            ],
            gakunen: '中',
        },
        '籠': {
            onYomi: [
                'ロウ',
            ],
            kunYomi: [
                'かご',
                'こ.もる',
            ],
            gakunen: '中',
        },
        '六': {
            onYomi: [
                'ロク',
            ],
            kunYomi: [
                'む',
                'む.つ',
                'むっ.つ',
                '*むい',
            ],
            gakunen: '小1',
        },
        '録': {
            onYomi: [
                'ロク',
            ],
            kunYomi: [],
            gakunen: '小4',
        },
        '麓': {
            onYomi: [
                'ロク',
            ],
            kunYomi: [
                'ふもと',
            ],
            gakunen: '中',
        },
        '論': {
            onYomi: [
                'ロン',
            ],
            kunYomi: [],
            gakunen: '小6',
        },
        '和': {
            onYomi: [
                'ワ',
                '*オ',
            ],
            kunYomi: [
                'やわ.らぐ',
                'やわ.らげる',
                'なご.む',
                'なご.やか',
            ],
            gakunen: '小3',
        },
        '話': {
            onYomi: [
                'ワ',
            ],
            kunYomi: [
                'はな.す',
                'はなし',
            ],
            gakunen: '小2',
        },
        '賄': {
            onYomi: [
                'ワイ',
            ],
            kunYomi: [
                'まかな.う',
            ],
            gakunen: '中',
        },
        '脇': {
            onYomi: [],
            kunYomi: [
                'わき',
            ],
            gakunen: '中',
        },
        '惑': {
            onYomi: [
                'ワク',
            ],
            kunYomi: [
                'まど.う',
            ],
            gakunen: '中',
        },
        '枠': {
            onYomi: [],
            kunYomi: [
                'わく',
            ],
            gakunen: '中',
        },
        '湾': {
            onYomi: [
                'ワン',
            ],
            kunYomi: [],
            gakunen: '中',
        },
    }

    removeAllElementsWithClass('concept_light-tag'); // Tags like 'common word', 'jlpt n5', 'wanikani level 8'
    removeAllElementsWithClass('concept_audio');
    removeAllElementsWithClass('kioku-bookmark_link');
    removeAllElementsWithClass('names_block');
    removeAllElementsWithClass('ornament'); // Some red icon that separetes the content from the footer
    removeAllElementsWithClass('kanji-details__stroke_count'); // Strokes count
    removeAllElementsWithClass('extra_info'); // Dictionary indices, classifications, codepoints
    removeAllElementsWithClass('jlpt'); // JLPT level
    removeAllElementsWithClass('frequency'); // X of 2500 most used kanji in newspapers
    removeAllElementsWithClass('inline_copyright'); // Origin of the example sentence, e.g. "Tatoeba"
    removeAllElementsWithId('other_dictionaries');
    removeAllElementsWithId('speech_button');
    removeElementBySelector('body > header > div.small-8.columns'); // headers (Forum, About, Log in / Sign up)
    removeElementBySelector('#page_container > div > div > article > h3');
    removeElementBySelector('#page_container > div > div > article > p');
    removeElementBySelector('#result_area > div > div:nth-child(2) > div.small-12.large-2.columns'); // Stroke order GIF
    removeElementBySelector('#result_area > div > div:nth-child(2) > div.small-12.large-10.columns'); // Stroke order step by step images
    removeElementBySelector('#result_area > div > div:nth-child(3) > div.small-12.large-10.columns > div > div > div.row.kanji-details--section'); // translations
    removeElementBySelector('body > footer');
    removeAllSentenceFurigana();

    if (isSentencesBlockOnSideAsSecondaryInformation()) {
        removeAllElementsWithClass('sentences_block');
    }

    handleAllKanjiEntries(KANJI_INFOS);
})();

function removeAllElementsWithClass(className) {
    className = className.trim().replaceAll(' ', '.');
    document.querySelectorAll('.' + className)?.forEach(e => e.remove());
}

function removeAllElementsWithId(id) {
    document.querySelectorAll('#' + id)?.forEach(e => e.remove());
}

function removeElementBySelector(querySelector) {
    document.querySelectorAll(querySelector)?.forEach(e => e.remove());
}

function isSentencesBlockOnSideAsSecondaryInformation() {
    return document.querySelector('#secondary > div.sentences_block')?.parentNode?.className === 'large-4 columns search-secondary_column';
}

function getCurrentKanji(kanjiEntryElement) {
    return kanjiEntryElement?.querySelector("div.literal_block > span > a")?.textContent;
}

function removeReadingElement(element) {
    element?.parentNode?.removeChild(element);
}

function getAllKunYomiElements(kanjiEntryElement) {
    return kanjiEntryElement.querySelectorAll("div.kun.readings > span.japanese_gothic");
}

function getAllOnYomiElements(kanjiEntryElement) {
    return kanjiEntryElement.querySelectorAll("div.on.readings > span.japanese_gothic");
}

function isJouyougaiKunReading(kanjiInfos, currentKanji, reading) {
    const isJouyougay = !kanjiInfos[currentKanji]?.kunYomi.includes(reading) && !kanjiInfos[currentKanji]?.kunYomi.includes('*' + reading);
    return isJouyougay;
}

function isJouyougaiOnReading(kanjiInfos, currentKanji, reading) {
    const isJouyougay = !kanjiInfos[currentKanji]?.onYomi.includes(reading) && !kanjiInfos[currentKanji]?.onYomi.includes('*' + reading);
    return isJouyougay;
}

function isKoukouLevelKunReading(kanjiInfos, currentKanji, reading) {
    return kanjiInfos[currentKanji]?.kunYomi.includes('*' + reading);
}

function isKoukouLevelOnReading(kanjiInfos, currentKanji, reading) {
    return kanjiInfos[currentKanji]?.onYomi.includes('*' + reading);
}

function removeAllNonKanaCharsExceptDot(reading) {
    let readingWithOnlyKanaCharacters = '';
    for (let letter of reading) {
        if (isHiragana(letter) || isKatakana(letter) || letter === '.') {
            readingWithOnlyKanaCharacters += letter;
        }
    }
    return readingWithOnlyKanaCharacters;
}

function isHiragana(letter) {
    const unicodeOfFirstHiragana = "ぁ".charCodeAt(0);
    const unicodeOfLastHiragana = "ゖ".charCodeAt(0);
    const unicode = letter?.charCodeAt(0);
    return unicode >= unicodeOfFirstHiragana && unicode <= unicodeOfLastHiragana;
}

function isKatakana(letter) {
    const unicodeOfFirstKatakana = "ァ".charCodeAt(0);
    const unicodeOfLastKatana = "ヺ".charCodeAt(0);
    const unicode = letter?.charCodeAt(0);
    return unicode >= unicodeOfFirstKatakana && unicode <= unicodeOfLastKatana;
}

function reduceOpacity(element) {
    element.style.opacity = "0.2";
}

function isJouyougaiKanji(kanjiInfos, kanji) {
    return !(kanji in kanjiInfos);
}

function handleAllKanjiEntries(kanjiInfos) {
    document.querySelectorAll(".kanji_light_content")?.forEach(kanjiEntryElement => {
        const currentKanji = getCurrentKanji(kanjiEntryElement);

        if (isJouyougaiKanji(kanjiInfos, currentKanji)) {
            reduceOpacity(getElementContainingTheKanjiCharacter(kanjiEntryElement));
            reduceOpacityOfAllReadings(kanjiEntryElement);
            return;
        }
        replaceExtraInfosToJustKanjiGradeInfo(kanjiEntryElement, kanjiInfos, currentKanji);
        removeNonJouyouKunReadings(kanjiEntryElement, kanjiInfos, currentKanji);
        removeNonJouyouOnReadings(kanjiEntryElement, kanjiInfos, currentKanji);
        removeEmptyReadingsElement(kanjiEntryElement);
        removeTrailingCommaInReadings(kanjiEntryElement);
    });
}

function getElementContainingTheKanjiCharacter(kanjiEntryElement) {
    return kanjiEntryElement.querySelector("div.literal_block > span > a");
}

function reduceOpacityOfAllReadings(kanjiEntryElement) {
    kanjiEntryElement.querySelectorAll(".japanese_gothic ").forEach(readingSpanElement => {
        reduceOpacity(readingSpanElement);
    })
}

function replaceExtraInfosToJustKanjiGradeInfo(kanjiEntryElement, kanjiInfos, currentKanji) {
    const extraInfosElement = kanjiEntryElement.querySelector(`div.info.clearfix`)
    extraInfosElement.textContent = kanjiInfos[currentKanji].gakunen;
    extraInfosElement.style.marginLeft = '23%';
}

function removeNonJouyouKunReadings(kanjiEntryElement, kanjiInfos, currentKanji) {
    getAllKunYomiElements(kanjiEntryElement).forEach(kunYomiSpan => {
        const reading = removeAllNonKanaCharsExceptDot(kunYomiSpan.textContent);
        if (isJouyougaiKunReading(kanjiInfos, currentKanji, reading)) {
            removeReadingElement(kunYomiSpan);
        }
        if (isKoukouLevelKunReading(kanjiInfos, currentKanji, reading)) {
            reduceOpacity(kunYomiSpan);
        }
    })
}

function removeNonJouyouOnReadings(kanjiEntryElement, kanjiInfos, currentKanji) {
    getAllOnYomiElements(kanjiEntryElement).forEach(onYomiSpan => {
        const reading = removeAllNonKanaCharsExceptDot(onYomiSpan.textContent);
        if (isJouyougaiOnReading(kanjiInfos, currentKanji, reading)) {
            removeReadingElement(onYomiSpan);
        }
        if (isKoukouLevelOnReading(kanjiInfos, currentKanji, reading)) {
            reduceOpacity(onYomiSpan);
        }
    })
}

function removeEmptyReadingsElement(kanjiEntryElement) {
    const kunReadinsDiv = kanjiEntryElement?.querySelector("div.kun.readings");
    const onReadingsDiv = kanjiEntryElement?.querySelector("div.on.readings");
    if (kunReadinsDiv?.querySelectorAll(".japanese_gothic ")?.length === 0) {
        kunReadinsDiv.parentNode?.removeChild(kunReadinsDiv);
    }
    if (onReadingsDiv?.querySelectorAll(".japanese_gothic ")?.length === 0) {
        onReadingsDiv.parentNode?.removeChild(onReadingsDiv);
    }
}

function removeTrailingCommaInReadings(kanjiEntryElement) {
    const allKunReadings = kanjiEntryElement.querySelectorAll("div.kun.readings > span.japanese_gothic");
    const allOnReadings = kanjiEntryElement.querySelectorAll("div.on.readings > span.japanese_gothic");

    const lastKunReadingSpan = allKunReadings[allKunReadings.length - 1];
    const lastOnReadingSpan = allOnReadings[allOnReadings.length - 1];

    if (lastKunReadingSpan) {
        lastKunReadingSpan.innerHTML = lastKunReadingSpan.innerHTML.replace('、 ', '');
    }

    if (lastOnReadingSpan) {
        lastOnReadingSpan.innerHTML = lastOnReadingSpan.innerHTML.replace('、 ', '');
    }
}

function removeAllSentenceFurigana() {
    if (window.location.href.includes('sentences')) {
        removeAllElementsWithClass('furigana');
    }
}