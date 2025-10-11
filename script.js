document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // ユーザーの以前の選択を読み込む
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // 選択を保存する
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Swiperの初期化
    const swiper = new Swiper('.swiper', {
        // オプション設定
        loop: true, // 無限ループさせる
        
        // ページネーション（点々）の設定
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // クリックでスライド移動
        },

        // ナビゲーションボタン（矢印）の設定
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// モーダル表示処理
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('work-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.modal-close');

    // モーダルを開くとき
    function openModal() {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    // モーダルを閉じるとき
    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    // 詳細データ（画像や動画も含めてスライダーで表示）
    const workDetails = {
        map: `
            <div class="modal-swiper swiper">
                <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="images/PRMap/image.png" alt="構内マップの画像1"></div>
                                <div class="swiper-slide"><img src="images/PRMap/2025-10-12 035845.png" alt="構内マップの画像2"></div>
                                <div class="swiper-slide"><img src="images/PRMap/2025-10-12 035112.png" alt="構内マップの画像3"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <h2>デジタル2D-3D構内マップ</h2>
            <ul>
                <li><strong>プロジェクト概要</strong><br>
                    大学のプロジェクトリサーチ科目で、龍谷大学キャンパス内の迷子問題を解決するためのWebアプリを開発。
                </li>
                <li><strong>開発概要</strong><br>
                    開発期間：4ヶ月<br>
                    チーム規模：6人<br>
                    開発環境：Unity, React, Vite, TypeScript, Tailwind CSS, FastAPI, Ubuntu Server, Blender, GitHub
                </li>
                <li><strong>担当箇所</strong><br>
                    プロジェクトマネジメント、3Dモデリング、進捗管理
                </li>
                <li><strong>技術的なポイント</strong><br>
                    ・UnityとReactのWebGL連携<br>
                    ・2D/3Dマップ切替と経路探索<br>
                    ・GPS誤差補正、シームレスなUI/UX設計<br>
                    ・サーバー自前構築とデプロイ
                </li>
                <li><strong>こだわりポイント</strong><br>
                    ・Notionで仕様・スケジュール管理、チームのコミュニケーション促進<br>
                    ・NavMesh生成や3Dモデルの最適化<br>
                    ・メンバーの課題解決をサポートし、全体の進行を調整
                </li>
            </ul>
            <div class="work-links">
                <a href="https://github.com/0xygen123/PR_Frontend" target="_blank" rel="noopener noreferrer" class="work-link github"><i class="fa-brands fa-github"></i> Frontend</a>
                <a href="https://github.com/0xygen123/PR_Map" target="_blank" rel="noopener noreferrer" class="work-link github"><i class="fa-brands fa-github"></i> Map</a>
                <a href="https://www.youtube.com/your-pr-video-link" target="_blank" rel="noopener noreferrer" class="work-link youtube"><i class="fa-brands fa-youtube"></i> YouTube</a>
            </div>
        `,
        kansaiup: `
            <div class="modal-swiper swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D4d2Q8z6aSA?si=oucsI7N2TbInVAJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="swiper-slide"><img src="images/profile.jpg" alt="KANSAIUP画像1"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <h2>KANSAIUP (ハッカソン開発)</h2>
            <ul>
                <li><strong>プロジェクト概要</strong><br>
                    KC3Hack 2025（関西情報系学生団体交流会主催）で、実在都市モデルを使った3Dアスレチックゲームを開発。
                </li>
                <li><strong>開発概要</strong><br>
                    開発期間：7日間<br>
                    チーム規模：3人<br>
                    開発環境：Unity, Photon Unity Networking 2, ChatGPT API, GitHub
                </li>
                <li><strong>担当箇所</strong><br>
                    プロジェクト管理、企画・レベルデザイン、仕様策定・ドキュメント化
                </li>
                <li><strong>技術的なポイント</strong><br>
                    ・PLATEAU都市モデルによる没入感の演出<br>
                    ・オンラインマルチプレイ実装<br>
                    ・AIによる関西解説（ChatGPT API連携）
                </li>
                <li><strong>こだわりポイント</strong><br>
                    ・リスク管理とタスク分担の徹底<br>
                    ・短期間での高品質なアウトプット<br>
                    ・教育的要素とゲーム性の両立
                </li>
            </ul>
            <div class="work-links">
                <a href="https://github.com/kc3hack/2025_21" target="_blank" rel="noopener noreferrer" class="work-link github"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="https://youtu.be/D4d2Q8z6aSA?si=oucsI7N2TbInVAJM" target="_blank" rel="noopener noreferrer" class="work-link youtube"><i class="fa-brands fa-youtube"></i> YouTube</a>
            </div>
        `,
        shikou: `
            <div class="modal-swiper swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <iframe src="https://www.youtube.com/embed/ohMR_FIygZo?si=x6WeM34CzFDTJI6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="swiper-slide"><img src="images/profile.jpg" alt="嗜好一致度測定アプリ画像1"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <h2>嗜好一致度測定アプリ (個人開発)</h2>
            <ul>
                <li><strong>プロジェクト概要</strong><br>
                    大学プログラミングサークルの活動で、ユーザー間の嗜好一致度をコサイン類似度で算出・可視化するデスクトップアプリを開発。
                </li>
                <li><strong>開発概要</strong><br>
                    開発期間：1週間<br>
                    チーム規模：個人開発<br>
                    開発環境：Python, Flet, SQLite
                </li>
                <li><strong>担当箇所</strong><br>
                    企画、設計、実装、UIデザイン、テストまで全工程を担当。
                </li>
                <li><strong>技術的なポイント</strong><br>
                    ・ユーザー入力データをベクトル化し、コサイン類似度で一致度を算出<br>
                    ・Flet（Python製UIフレームワーク）によるクロスプラットフォーム対応<br>
                    ・SQLiteによるデータ永続化
                </li>
                <li><strong>こだわりポイント</strong><br>
                    ・日本語情報が少ないFletの公式ドキュメントを徹底的に読み込み、サンプルコードを分解・検証しながら仕様を理解<br>
                    ・シンプルで直感的な操作性を重視したUI設計
                </li>
            </ul>
            <div class="work-links">
                <a href="https://github.com/KishinoKay/DOMINATORN" target="_blank" rel="noopener noreferrer" class="work-link github"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="https://youtu.be/ohMR_FIygZo" target="_blank" rel="noopener noreferrer" class="work-link youtube"><i class="fa-brands fa-youtube"></i> YouTube</a>
            </div>
        `,
        papers: `
            <div class="modal-swiper swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="images/Papers-Please_feat-RYUKOKU-/2025-10-12 034402.png" alt="タイトル画面の画像1"></div>
                    <div class="swiper-slide"><img src="images/profile.jpg" alt="ゲーム本編の画像2"></div>
                    <div class="swiper-slide"><img src="images/profile.jpg" alt="ゲーム本編の画像3"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <h2>Papers-Please_feat-RYUKOKU-</h2>
            <ul>
                <li><strong>プロジェクト概要</strong><br>
                    「Papers, Please」風のゲームシステムをUnityで再現し、龍谷大学の要素を盛り込んだオリジナル作品。
                </li>
                <li><strong>開発概要</strong><br>
                    開発期間：2ヶ月<br>
                    チーム規模：4人<br>
                    開発環境：Unity, C#, GitHub
                </li>
                <li><strong>担当箇所</strong><br>
                    ゲームシステム設計、UI/UX設計、主要スクリプト実装、仕様書作成
                </li>
                <li><strong>技術的なポイント</strong><br>
                    ・複数シーン構成によるゲーム進行管理<br>
                    ・ScriptableObjectやJSONによるデータ管理
                </li>
                <li><strong>こだわりポイント</strong><br>
                    ・大学オリジナル要素の追加と世界観の再現<br>
                    ・プレイヤー体験を意識した演出<br>
                    ・仕様書・設計書を整備し、共同開発の効率化
                </li>
            </ul>
            <div class="work-links">
                <a href="https://github.com/KishinoKay/Papers-Please_feat-RYUKOKU-" target="_blank" rel="noopener noreferrer" class="work-link github"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        `
    };

    // カードクリックでモーダル表示
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', function() {
            const key = card.getAttribute('data-work');
            if (workDetails[key]) {
                modalBody.innerHTML = workDetails[key];
                openModal();
                // モーダル内Swiper初期化
                setTimeout(() => {
                    new Swiper('.modal-swiper', {
                        loop: true,
                        pagination: {
                            el: '.modal-swiper .swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.modal-swiper .swiper-button-next',
                            prevEl: '.modal-swiper .swiper-button-prev',
                        },
                    });
                }, 100);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const detail = btn.previousElementSibling;
            if (detail.classList.contains('collapse')) {
                detail.classList.remove('collapse');
                detail.classList.add('expand');
                btn.textContent = '閉じる';
            } else {
                detail.classList.remove('expand');
                detail.classList.add('collapse');
                btn.textContent = 'もっと見る';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const swipers = document.querySelectorAll('.swiper');
  swipers.forEach(swiperEl => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: {
        delay: 2500, // 2.5秒ごとに自動スライド
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
    });
  });
});