// 메인 애플리케이션 파일
import { ModalManager } from './components/Modal.js';
import { TabManager } from './components/Tabs.js';
import { Search } from './components/Search.js';
import { CardManager } from './components/Cards.js';
import { Benefits, BenefitsRenderer } from './components/Benefits.js';
import { Navigation, TopBanner } from './components/Navigation.js';
import { HamburgerMenu, DropdownMenu, MobileMenu } from './components/HamburgerMenu.js';
import { NavigationRenderer } from './components/NavigationRenderer.js';
import { Breadcrumb } from './components/Breadcrumb.js';
import { UtilityNav } from './components/UtilityNav.js';
import { utils } from './utils.js';

class App {
    constructor() {
        this.modalManager = null;
        this.tabManager = null;
        this.search = null;
        this.cardManager = null;
        this.benefits = null;
        this.benefitsRenderer = null;
        this.navigation = null;
        this.topBanner = null;
        this.hamburgerMenu = null;
        this.dropdownMenu = null;
        this.mobileMenu = null;
        this.navigationRenderer = null;
        this.breadcrumb = null;
        this.utilityNav = null;
        
        this.init();
    }
    
    init = () => {
        // DOM이 로드된 후 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.initializeComponents);
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents = () => {
        try {
            // 컴포넌트들 초기화
            this.modalManager = new ModalManager();
            this.tabManager = new TabManager();
            this.search = new Search();
            this.cardManager = new CardManager();
            this.benefits = new Benefits();
            this.benefitsRenderer = new BenefitsRenderer();
            this.navigation = new Navigation();
            this.topBanner = new TopBanner();
            this.hamburgerMenu = new HamburgerMenu();
            this.dropdownMenu = new DropdownMenu();
            this.mobileMenu = new MobileMenu();
            this.navigationRenderer = new NavigationRenderer();
            this.breadcrumb = new Breadcrumb();
            this.utilityNav = new UtilityNav();
            
            // 전역에서 접근 가능하도록 설정
            window.modalManager = this.modalManager;
            window.tabManager = this.tabManager;
            window.search = this.search;
            window.cardManager = this.cardManager;
            window.benefits = this.benefits;
            window.navigation = this.navigation;
            window.hamburgerMenu = this.hamburgerMenu;
            window.dropdownMenu = this.dropdownMenu;
            window.mobileMenu = this.mobileMenu;
            window.navigationRenderer = this.navigationRenderer;
            window.breadcrumb = this.breadcrumb;
            
            // Initialize components
            this.breadcrumb.init();
            this.utilityNav.init();
            
            // 이벤트 리스너 설정
            this.setupGlobalEventListeners();
            
            // 페이지 로드 완료 후 실행
            this.onPageLoad();
            
            console.log('현대면세점 랜딩 페이지가 로드되었습니다.');
            
        } catch (error) {
            console.error('애플리케이션 초기화 중 오류 발생:', error);
        }
    }
    
    setupGlobalEventListeners = () => {
        // 윈도우 리사이즈 이벤트
        window.addEventListener('resize', utils.debounce(() => {
            if (this.navigation) {
                this.navigation.handleResize();
            }
        }, 250));
        
        // 페이지 언로드 이벤트
        window.addEventListener('beforeunload', this.onPageUnload);
        
        // 키보드 이벤트
        document.addEventListener('keydown', this.handleGlobalKeydown);
    }
    
    handleGlobalKeydown = (e) => {
        // ESC 키로 모든 모달 닫기
        if (e.key === 'Escape' && this.modalManager) {
            this.modalManager.closeAllModals();
        }
        
        // Ctrl + K로 검색 포커스
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    }
    
    onPageLoad = () => {
        // 페이지 로드 애니메이션
        document.body.classList.add('loaded');
        
        // 메인 이벤트 배너 페이드인 효과
        this.animateMainBanner();
        
        // 카드 호버 효과 설정
        this.setupCardHoverEffects();
        
        // 이미지 lazy loading 설정
        this.setupLazyLoading();
    }
    
    animateMainBanner = () => {
        const eventBanner = document.querySelector('.main-event-banner');
        if (eventBanner) {
            eventBanner.style.opacity = '0';
            eventBanner.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                eventBanner.style.transition = 'all 0.8s ease';
                eventBanner.style.opacity = '1';
                eventBanner.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    setupCardHoverEffects = () => {
        const cards = document.querySelectorAll('.brand-card, .benefit-card, .hotdeal-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    setupLazyLoading = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        if (images.length > 0) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    onPageUnload = () => {
        // 페이지 언로드 시 정리 작업
        console.log('페이지를 떠납니다.');
    }
    
    // 공개 메서드들
    getModalManager = () => this.modalManager;
    getTabManager = () => this.tabManager;
    getSearch = () => this.search;
    getCardManager = () => this.cardManager;
    getBenefits = () => this.benefits;
    getNavigation = () => this.navigation;
    getHamburgerMenu = () => this.hamburgerMenu;
    getDropdownMenu = () => this.dropdownMenu;
    getMobileMenu = () => this.mobileMenu;
    getNavigationRenderer = () => this.navigationRenderer;
}

// 애플리케이션 시작
const app = new App();

// 전역에서 접근 가능하도록 설정
window.app = app;

export default app;
