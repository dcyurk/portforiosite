'use strict';

// 制作実績カルーセル
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // 画像の表示と非表示を制御
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else if (i === currentIndex) {
                img.classList.remove('active');
                img.classList.add('previous');
            } else {
                img.classList.remove('active', 'previous');
            }
        });
    }

    // 画像を切り替える間隔（ミリ秒）
    const interval = 3000;

    // 画像を自動的に切り替えるタイマー
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }, interval);

    // 最初の画像を表示
    showImage(currentIndex);
});

// ここまで制作実績カルーセル

// トップへ戻るボタン

window.addEventListener('scroll', function () {
    var pagetop = document.querySelector('.pagetop');
    if (window.pageYOffset > 200) {
        pagetop.style.display = 'block';
    } else {
        pagetop.style.display = 'none';
    }
});

// ここまでトップへ戻るボタン


// ローディングアニメーション
// スクロールを無効にする関数
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// スクロールを有効にする関数
function enableScroll() {
    document.body.style.overflow = '';
}

// ページが完全に読み込まれる前にローディングアニメーションを表示する
document.addEventListener("DOMContentLoaded", function () {
    disableScroll(); // ページ読み込み時にスクロールを無効にする
});

// ページが完全に読み込まれた後にローディングアニメーションを非表示にする
window.addEventListener("load", function () {
    document.getElementById('loading-overlay').style.display = 'none';
    enableScroll(); // ローディングアニメーションを非表示にした後にスクロールを有効にする
});




// チェックボックスの状態を監視し、タイトルの色を変更するスクリプト
document.getElementById('menu-btn-check').addEventListener('change', function () {
    let title = document.getElementById('title');
    if (this.checked) {
        title.style.color = 'white';
    } else {
        title.style.color = 'black';
    }
});


// メニューの開閉時に背景の固定を切り替えるスクリプト
document.getElementById('menu-btn-check').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
});
