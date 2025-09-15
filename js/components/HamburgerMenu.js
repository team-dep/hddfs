import { utils } from '../utils.js';

export class HamburgerMenu {
    constructor() {
        this.hamburgerBtn = document.querySelector('.hamburger-menu');
        this.mobileMenu = document.querySelector('#mobileMenu');
        this.mobileMenuOverlay = document.querySelector('#mobileMenuOverlay');
        this.mobileMenuClose = document.querySelector('.mobile-menu-close');
        this.categoryNav = document.querySelector('#categoryNavigation');
        this.isOpen = false;
        
        this.init();
    }
    
    init = () => {
        if (!this.hamburgerBtn || !this.mobileMenu) return;
        
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        // 햄버거 버튼 클릭
        this.hamburgerBtn.addEventListener('click', this.toggleMenu);
        
        // 모바일 메뉴 닫기 버튼
        if (this.mobileMenuClose) {
            this.mobileMenuClose.addEventListener('click', this.closeMenu);
        }
        
        // 오버레이 클릭시 닫기
        if (this.mobileMenuOverlay) {
            this.mobileMenuOverlay.addEventListener('click', this.closeMenu);
        }
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // 윈도우 리사이즈시 닫기 (모바일에서만)
        window.addEventListener('resize', utils.debounce(() => {
            if (window.innerWidth > 1024 && this.isOpen) {
                this.closeMenu();
            }
        }, 250));
        
        // 카테고리 네비게이션 링크 클릭 이벤트
        this.setupCategoryNavEvents();
    }
    
    toggleMenu = () => {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu = () => {
        this.isOpen = true;
        this.hamburgerBtn.classList.add('active');
        
        // 카테고리 네비게이션을 다시 찾기 (동적 렌더링 후)
        this.categoryNav = document.querySelector('.category-navigation');
        
        console.log('햄버거 메뉴 열기');
        console.log('카테고리 네비게이션 요소:', this.categoryNav);
        
        // 카테고리 네비게이션 슬라이드 다운 (반응형 없이)
        if (this.categoryNav) {
            console.log('카테고리 네비게이션 활성화');
            this.categoryNav.classList.add('active');
        } else {
            console.log('카테고리 네비게이션 요소를 찾을 수 없습니다');
        }
    }
    
    closeMenu = () => {
        this.isOpen = false;
        this.hamburgerBtn.classList.remove('active');
        
        // 카테고리 네비게이션을 다시 찾기
        this.categoryNav = document.querySelector('.category-navigation');
        
        // 카테고리 네비게이션 닫기
        if (this.categoryNav) {
            this.categoryNav.classList.remove('active');
        }
    }
    
    setupCategoryNavEvents = () => {
        if (!this.categoryNav) return;
        
        const categoryLinks = this.categoryNav.querySelectorAll('.service-link');
        utils.addEventListeners(categoryLinks, 'click', this.handleCategoryClick);
    }
    
    handleCategoryClick = (e) => {
        e.preventDefault();
        const text = e.currentTarget.textContent.trim();
        console.log('카테고리 클릭:', text);
        alert(`${text} 페이지로 이동합니다.`);
        this.closeMenu();
    }
}

export class DropdownMenu {
    constructor() {
        this.dropdowns = document.querySelectorAll('.dropdown');
        this.init();
    }
    
    init = () => {
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        this.dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            if (toggle) {
                // 클릭 이벤트
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleDropdown(dropdown);
                });
                
                // 마우스 호버 이벤트 (데스크톱)
                dropdown.addEventListener('mouseenter', () => {
                    if (window.innerWidth > 1024) {
                        this.openDropdown(dropdown);
                    }
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    if (window.innerWidth > 1024) {
                        this.closeDropdown(dropdown);
                    }
                });
            }
        });
        
        // 다른 곳 클릭시 드롭다운 닫기
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                this.closeAllDropdowns();
            }
        });
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllDropdowns();
            }
        });
    }
    
    toggleDropdown = (dropdown) => {
        if (dropdown.classList.contains('active')) {
            this.closeDropdown(dropdown);
        } else {
            this.closeAllDropdowns();
            this.openDropdown(dropdown);
        }
    }
    
    openDropdown = (dropdown) => {
        dropdown.classList.add('active');
    }
    
    closeDropdown = (dropdown) => {
        dropdown.classList.remove('active');
    }
    
    closeAllDropdowns = () => {
        this.dropdowns.forEach(dropdown => {
            this.closeDropdown(dropdown);
        });
    }
}

export class MobileMenu {
    constructor() {
        this.mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
        this.init();
    }
    
    init = () => {
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        utils.addEventListeners(this.mobileMenuLinks, 'click', this.handleMenuClick);
    }
    
    handleMenuClick = (e) => {
        const link = e.currentTarget;
        const text = link.textContent.trim();
        
        console.log('모바일 메뉴 클릭:', text);
        
        // 실제 페이지 이동 로직
        alert(`${text} 페이지로 이동합니다.`);
        
        // 메뉴 닫기
        const hamburgerMenu = window.hamburgerMenu;
        if (hamburgerMenu) {
            hamburgerMenu.closeMenu();
        }
    }
}
