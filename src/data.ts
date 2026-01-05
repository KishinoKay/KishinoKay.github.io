// src/data.ts
import type { Work, Skill, Experience, LinkType } from './types';

// 1. 作品データ
export const worksData: Work[] = [
    {
        id: "map",
        title: "デジタル2D-3D構内マップ",
        summary: "龍谷大学キャンパス内の迷子問題を解決するためのWebアプリ。",
        images: ["/images/PRMap/postaer.png", "/images/PRMap/happyou.png", "/images/PRMap/image.png", "/images/PRMap/2025-10-12 035845.png", "/images/PRMap/2025-10-12 035112.png"],
        video: null,
        links: [
            {label: "アプリを開く",url: "https://r-navi.math.ryukoku.ac.jp/", type: "other" as LinkType },
            {url: "https://github.com/0xygen123/PR_Frontend", type: "github" as LinkType },
            {url: "https://oil-bobcat-321.notion.site/2D-3D-2c09a84f9a5d80f5b1ecd651267f4405?source=copy_link", type: "notion" as LinkType }
        ],
        details: {
        overview: "大学のプロジェクトリサーチ科目で、龍谷大学キャンパス内の迷子問題を解決するためのWebアプリを開発。",
        devPeriod: "3ヶ月",
        teamSize: "6人",
        techStack: "Unity, React, Vite, TypeScript, Tailwind CSS, FastAPI, Ubuntu Server, Blender, GitHub",
        role: "プロジェクトマネジメント、3Dモデリング、進捗管理",
        techPoints: [
            "UnityとReactのWebGL連携",
            "2D/3Dマップ切替と経路探索",
            "GPS誤差補正、シームレスなUI/UX設計",
            "サーバー自前構築とデプロイ"
        ],
        commitment: [
            "Notionで仕様・スケジュール管理、チームのコミュニケーション促進",
            "NavMesh生成や3Dモデルの最適化",
            "メンバーの課題解決をサポートし、全体の進行を調整"
        ]
        }
    },
    {
        id: "kansaiup",
        title: "KANSAIUP (ハッカソン開発)",
        summary: "実在都市モデルを使った3Dアスレチックゲーム（KC3Hack 2025）。",
        images: ["/images/profile.jpg"],
        video: "https://www.youtube.com/embed/D4d2Q8z6aSA?si=oucsI7N2TbInVAJM",
        links: [
            {url: "https://github.com/kc3hack/2025_21", type: "github" as LinkType },
            {url: "https://youtu.be/D4d2Q8z6aSA?si=oucsI7N2TbInVAJM", type: "youtube" as LinkType }
        ],
        details: {
        overview: "KC3Hack 2025（関西情報系学生団体交流会主催）で、実在都市モデルを使った3Dアスレチックゲームを開発。",
        devPeriod: "7日間",
        teamSize: "3人",
        techStack: "Unity, Photon Unity Networking 2, ChatGPT API, GitHub",
        role: "プロジェクト管理、企画・レベルデザイン、仕様策定・ドキュメント化",
        techPoints: [
            "PLATEAU都市モデルによる没入感の演出",
            "オンラインマルチプレイ実装",
            "AIによる関西解説（ChatGPT API連携）"
        ],
        commitment: [
            "リスク管理とタスク分担の徹底",
            "短期間での高品質なアウトプット",
            "教育的要素とゲーム性の両立"
        ]
        }
    },
    {
        id: "shikou",
        title: "嗜好一致度測定アプリ (個人開発)",
        summary: "ユーザーの嗜好と特定個人の嗜好データ群との一致度を予測・可視化するアプリ。",
        images: ["/images/profile.jpg"],
        video: "https://www.youtube.com/embed/ohMR_FIygZo?si=x6WeM34CzFDTJI6R",
        links: [
            {url: "https://github.com/KishinoKay/DOMINATORN", type: "github" as LinkType },
            {url: "https://youtu.be/ohMR_FIygZo", type: "youtube" as LinkType }
        ],
        details: {
        overview: "ユーザーの入力データと特定の個人が持つ多数の嗜好データを比較し、k-近傍法（k-NN）を用いて総合的な嗜好一致度を算出します。",
        devPeriod: "1週間",
        teamSize: "個人開発",
        techStack: "Python, Flet, SQLite",
        role: "企画、設計、実装、UIデザイン、テストまで全工程",
        techPoints: [
            "機械学習アルゴリズム「k-近傍法（k-NN）」を応用",
            "色相計算に独自の「円環距離」を導入",
            "Fletによるクロスプラットフォーム対応"
        ],
        commitment: [
            "データ特性に合わせたアルゴリズムの改良",
            "学術知識の実践力",
            "日本語情報が少ない技術の公式ドキュメント解読"
        ]
        }
    },
    {
        id: "papers",
        title: "Papers-Please_feat-RYUKOKU-",
        summary: "「Papers, Please」風のゲームシステムをUnityで再現したオリジナル作品。",
        images: ["/images/Papers-Please_feat-RYUKOKU-/2025-10-12 034402.png", "/images/Papers-Please_feat-RYUKOKU-/2025-12-06 023647.png"],
        video: null,
        links: [{url: "https://github.com/KishinoKay/Papers-Please_feat-RYUKOKU-", type: "github" as LinkType }],
        details: {
        overview: "「Papers, Please」風のゲームシステムをUnityで再現し、龍谷大学の要素を盛り込んだオリジナル作品。",
        devPeriod: "1ヶ月",
        teamSize: "4人",
        techStack: "Unity, C#, GitHub",
        role: "ゲームシステム設計、UI/UX設計、主要スクリプト実装、仕様書作成",
        techPoints: [
            "複数シーン構成によるゲーム進行管理",
            "ScriptableObjectやJSONによるデータ管理"
        ],
        commitment: [
            "大学オリジナル要素の追加と世界観の再現",
            "仕様書・設計書を整備し、共同開発の効率化"
        ]
        }
    },
    {
        id: "handson-adventure",
        title: "Hands-on Adventure",
        summary: "「じゃんけん」をテーマにした、ゲーム初心者でも直感的に遊べる2Dアクションゲーム。",
        images: ["/images/janken/2026-01-06 002429.png", "/images/janken/2026-01-06 002848.png"],
        video: null,
        links: [
            {url: "https://github.com/KishinoKay/JankenGame", type: "github" as LinkType }
        ],
        details: {
        overview: "「誰もが知っているルール（じゃんけん）」を題材にすることで、ゲーム特有の「お約束」を知らない初心者でも直感的に楽しめるアクションゲームを開発。チーム開発の経験を活かし、初めて個人で本格的な制作を行った作品です。",
        devPeriod: "2週間 (約50時間)",
        teamSize: "個人開発",
        techStack: "Unity, C#",
        role: "企画、設計、プログラミング、UIデザイン (個人制作)",
        techPoints: [
            "シーン遷移時のスムージング処理など、プレイ中の違和感を排除する工夫",
            "じゃんけんの相性を活用したギミック実装（グーで岩を破壊など）",
            "水中や空中ステージにおける敵の挙動制御（上下左右からの追尾など）"
        ],
        commitment: [
            "ゲーム初心者への親切さを重視したチュートリアル設計",
            "複雑な操作を排除し、直感的なUI/UXを実現",
            "個人制作として企画から実装までを一貫して完遂"
        ]
        }
    },
    {
        id: "minutes-app",
        title: "議事録文字起こしアプリ (製作途中)",
        summary: "動画・音声データをWhisperで文字起こしし、Gemini APIで要約・清書するWebアプリ。",
        images: [],
        video: null,
        links: [
            {url: "https://github.com/KishinoKay/minutes_app", type: "github" as LinkType }
        ],
        details: {
        overview: "授業の録音や議事録整理の効率化を目指し、ReactによるWebアプリ開発の学習を兼ねて制作中。動画・音声ファイルを読み込み、ローカルのWhisperモデルで文字起こしを行った後、Gemini APIを活用して文章の清書や要約を生成します。",
        devPeriod: "1ヶ月〜",
        teamSize: "個人開発",
        techStack: "React, Vite, TypeScript, Python, OpenAI Whisper, Gemini API, CSS",
        role: "企画、設計、実装",
        techPoints: [
            "ReactフロントエンドとPythonスクリプトの連携処理",
            "ローカルAI(Whisper)とクラウドAPI(Gemini)のハイブリッド構成",
            "テキストファイルやPDFへのドキュメント出力機能"
        ],
        commitment: [
            "自身の課題（授業・議事録整理）を解決する実用的なツールの作成",
            "ライブラリに頼らないCSSによるスタイリングの実践",
            "モダンなフロントエンド技術（React/Vite）の習得"
        ]
        }
    },
    {
        id: "spy-shogi",
        title: "間諜将棋 (製作途中)",
        summary: "奪われた駒が「間諜」として裏切る、疑心暗鬼の心理戦将棋。",
        images: [],
        video: null,
        links: [
            {url: "https://github.com/sora0627/Spy-Shogi", type: "github" as LinkType }
        ],
        details: {
        overview: "企業のOpenカンパニーで出会った学生3名による共同開発プロジェクト。初対面のメンバーとの本格的なゲーム開発を通じて、技術力向上とチーム開発の経験値を高めることを目的としています。現在はUnityを用いてプロトタイプを開発中で、通常の将棋に「間諜（スパイ）」の要素を加えた心理戦システムの実装を進めています。",
        devPeriod: "1ヶ月〜 (プロトタイプ開発中)",
        teamSize: "3人",
        techStack: "Unity, C#",
        role: "プロトタイプ開発、持ち駒（駒台）管理ロジックの実装",
        techPoints: [
            "持ち駒（駒台）にある間諜駒の状態管理と識別処理",
            "「間諜」指定による隠匿情報の管理ロジック",
            "相手ターンへの「即時割り込み（寝返り）」処理の実装",
            "特殊ルール（二歩・行き所のない駒の無視）の例外処理"
        ],
        commitment: [
            "初対面のメンバーとの連携によるチームビルディング経験",
            "「いつ裏切るか」という心理的駆け引きのゲームシステム化",
            "複雑な状態遷移（持ち駒→盤上→裏切り）を含むロジック構築"
        ]
        }
    }
];

// 2. スキルデータ
export const skillsData: Skill[] = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

// 3. 経験データ
export const experienceData: Experience[] = [
    { date: "2025年度 - 現在", title: "プロジェクトリサーチ", desc: "チームのPMとして「3D構内マップ」を企画・開発。技術選定からタスク管理、3Dモデリングまで幅広く担当。" },
    { date: "2025.02 (7日間)", title: "KC3Hack 2025 学生ハッカソン参加", desc: "3人チームのPMとして企画から参加。リアルな都市モデルとAIを活用した3Dゲームを完成させました。" },
    { date: "大学入学(2023年4月)", title: "龍谷大学 先端理工学部 知能情報メディア課程", desc: "AI・機械学習とXR技術を学習。プログラミング認定同好会Horizon所属" },
    { date: "高校時代(2021年4月〜2022年3月)", title: "SSH 課題研究（化学ゼミ）", desc: "「竹炭による硝酸イオンの吸着」を探究。分光光度計や遠心分離機、恒温槽等の分析機器を用いPPDACサイクルを実践。予想外の実験結果に対し、仮説の再構築や誤差要因の分析を粘り強く行い、科学的なプロセスを体得しました。" , url: "https://oil-bobcat-321.notion.site/SSH-2c09a84f9a5d801bb4acf87dfdcb78aa?source=copy_link", type: "notion" as LinkType , note: "Notionで詳細を見る" },
];

// 4. 研究データ
export const researchData = {
    lab: {
        name: "藤本研究室 (XR Interface Lab)",
        sub: "龍谷大学 先端理工学部 知能情報メディア課程",
        image: "/images/Study/xr-interaface-lab.png",
        description: `「XRにより、苦手を得意に、得意をもっと得意に、より生きやすく」
    人が社会で生きていくには、学習、仕事、対話など様々なスキルが必要です。しかし、個人の特性と求められるスキルのミスマッチが「生きづらさ」を生むことがあります。
    本研究室では、拡張現実感(AR)とバーチャルリアリティ(VR)技術を用いて、人がスキルを効率的に習得したり、ハンディキャップを技術で補ったりするシステムを研究しています。`,
        links: [
            { label: "研究室サイト", url: "https://yfujimoto.cfbx.jp/", type: "other" as LinkType },
            { label: "大学教員紹介", url: "https://www.rikou.ryukoku.ac.jp/teachers/fujimoto.html", type: "other" as LinkType }
        ]
    },
    personal: {
        theme: "LLMとARを用いた対面対話支援",
        image: "/images/Study/AR-LLM-conversation-support-1024x403.jpg",
        motivation: `あらゆる社会活動の基盤となるコミュニケーション能力を、技術の力でどう拡張できるかに興味がありました。特に、ARという視覚情報提示技術が対人心理に与える影響や、新しい意思疎通の可能性に魅力を感じたことがきっかけです。`,
        goal: `HoloLens等のデバイスと生成AIを連携させ、会話中のトピック提案を行うシステムの実用性を検証することです。特に、システム使用時の「対話の円滑さ」と「違和感」の関係性を明らかにし、自然な対話を阻害しない改善案を策定したいと考えています。`,
        progress: `現在はテーマ検討段階にあり、主にARのインターフェースデザインや対人心理学に関する先行研究の調査を進めています。`,
        links: [
            {
                note: "Notionで詳細を見る",
                url: "https://oil-bobcat-321.notion.site/2bf9a84f9a5d801e86b6f984f39e342a?source=copy_link",
                type: "notion" as LinkType 
            }
        ],
    }
};