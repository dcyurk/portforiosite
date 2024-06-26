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
    let mediaQuery = window.matchMedia('screen and (min-width: 1025px)');

    if (this.checked && !mediaQuery.matches) {
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



// ページトップに戻るボタンのスムーズスクロール
document.querySelector('.pagetop').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// キャッチコピーをふわっと表示
// キャッチコピーの要素を取得
const catchCopy = document.getElementById('catchCopy');

// キャッチコピーの各行を分割して配列に格納
const lines = catchCopy.innerHTML.split('<br>');

// キャッチコピーの要素を一度空にする
catchCopy.innerHTML = '';

// ページ読み込み時にアニメーションを実行
window.addEventListener('load', () => {
    // 各行に対してアニメーションを設定
    lines.forEach((line, index) => {
        const div = document.createElement('div');
        div.textContent = line;
        catchCopy.appendChild(div);

        // フェードインとスケールアップのアニメーションを設定
        gsap.fromTo(div, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            delay: index * 0.3,
            duration: 1,
            ease: 'Power3.easeInOut'
        });
    });

    // 最初にキャッチコピーを表示する
    catchCopy.style.display = 'block';
});
