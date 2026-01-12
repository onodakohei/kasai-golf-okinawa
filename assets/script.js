// パスワード保護設定
const SITE_PASSWORD = 'okinawa2024'; // ここでパスワードを変更できます

// パスワード保護機能
(function() {
    // セッションストレージで認証状態を確認
    const isAuthenticated = sessionStorage.getItem('siteAuthenticated') === 'true';
    
    if (!isAuthenticated) {
        // 認証されていない場合、パスワードモーダルを表示
        document.body.style.overflow = 'hidden';
        const modal = document.getElementById('passwordModal');
        if (modal) {
            modal.style.display = 'flex';
            
            // パスワード入力フォームの処理
            const passwordForm = document.getElementById('passwordForm');
            const passwordInput = document.getElementById('passwordInput');
            const passwordError = document.getElementById('passwordError');
            
            passwordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const enteredPassword = passwordInput.value;
                
                if (enteredPassword === SITE_PASSWORD) {
                    // パスワードが正しい場合
                    sessionStorage.setItem('siteAuthenticated', 'true');
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    
                    // サイトコンテンツを表示
                    document.body.style.opacity = '1';
                } else {
                    // パスワードが間違っている場合
                    passwordError.textContent = 'パスワードが正しくありません。';
                    passwordInput.value = '';
                    passwordInput.focus();
                }
            });
            
            // 入力フィールドにフォーカス
            passwordInput.focus();
        }
    } else {
        // 既に認証されている場合、モーダルを非表示
        const modal = document.getElementById('passwordModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
})();

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ヘッダーのスクロール時のスタイル変更
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// テーブルの行ホバーエフェクト強化
document.querySelectorAll('.featured-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#E0F7FA';
        this.style.transition = 'background-color 0.3s';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// フェードインアニメーション（スクロール時）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .course-card, .news-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ハンバーガーメニューの開閉
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニューリンクをクリックしたらメニューを閉じる
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

