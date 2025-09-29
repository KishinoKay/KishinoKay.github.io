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
    // ...既存のダークモードのコードはそのまま...

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