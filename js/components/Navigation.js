import { utils } from '../utils.js';

export class Navigation {
    constructor() {
        this.header = document.querySelector('.main-header');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.categoryNav = document.querySelector('.category-navigation');
        this.breadcrumb = document.querySelector('.breadcrumb');
        this.init();
    }
    
    init = () => {
        this.setupEventListeners();
        this.setupScrollEffects();
    }
    
    setupEventListeners = () => {
        // 햄버거 메뉴 토글
        if (this.menuToggle && this.categoryNav) {
            this.menuToggle.addEventListener('click', this.toggleMobileMenu);
        }
        
        // 브레드크럼 링크
        const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
        utils.addEventListeners(breadcrumbLinks, 'click', this.handleBreadcrumbClick);
        
        // 네비게이션 링크
        const navLinks = document.querySelectorAll('.nav-link, .service-link, .action-link');
        utils.addEventListeners(navLinks, 'click', this.handleNavClick);
    }
    
    setupScrollEffects = () => {
        let lastScrollY = window.scrollY;
        
        const handleScroll = utils.throttle(() => {
            const currentScrollY = window.scrollY;
            
            if (this.header) {
                if (currentScrollY > 100) {
                    this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                } else {
                    this.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            }
            
            lastScrollY = currentScrollY;
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
    }
    
    toggleMobileMenu = () => {
        if (this.categoryNav) {
            utils.toggleClass(this.categoryNav, 'active');
            utils.toggleClass(this.menuToggle, 'active');
        }
    }
    
    handleBreadcrumbClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        
        if (href.startsWith('#')) {
            this.scrollToSection(href.substring(1));
        } else {
            console.log('브레드크럼 네비게이션:', href);
        }
    }
    
    handleNavClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const text = e.currentTarget.textContent.trim();
        
        console.log('네비게이션 클릭:', text, href);
        
        if (href.startsWith('#')) {
            this.scrollToSection(href.substring(1));
        } else {
            // 실제 페이지 이동 로직
            alert(`${text} 페이지로 이동합니다.`);
        }
    }
    
    scrollToSection = (sectionId) => {
        const targetElement = document.getElementById(sectionId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // 반응형 처리
    handleResize = () => {
        const width = window.innerWidth;
        
        if (width > 768 && this.categoryNav) {
            this.categoryNav.classList.remove('active');
            if (this.menuToggle) {
                this.menuToggle.classList.remove('active');
            }
        }
    }
}

// 상단 알림 배너 컴포넌트
export class TopBanner {
    constructor() {
        this.banner = document.querySelector('.top-notice-banner');
        this.closeBtn = document.querySelector('.close-btn');
        this.init();
    }
    
    init = () => {
        if (!this.banner || !this.closeBtn) return;
        
        this.setupEventListeners();
        this.checkBannerVisibility();
    }
    
    setupEventListeners = () => {
        this.closeBtn.addEventListener('click', this.closeBanner);
    }
    
    closeBanner = () => {
        if (this.banner) {
            this.banner.style.display = 'none';
            // 하루 동안 보지 않기 설정
            utils.storage.set('bannerHidden', Date.now());
        }
    }
    
    checkBannerVisibility = () => {
        const hiddenTime = utils.storage.get('bannerHidden');
        const oneDay = 24 * 60 * 60 * 1000; // 24시간
        
        if (hiddenTime && (Date.now() - hiddenTime) < oneDay) {
            this.closeBanner();
        }
    }
}
