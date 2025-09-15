import { navigationData } from '../data/navigationData.js';
import { utils } from '../utils.js';

export class NavigationRenderer {
    constructor() {
        this.init();
    }
    
    init = () => {
        this.renderMainNavigation();
        this.renderCategoryNavigation();
        this.renderServices();
        this.renderShowroom();
        this.renderMobileMenu();
        this.renderUserActions();
    }
    
    renderMainNavigation = () => {
        const mainNav = document.querySelector('.main-nav');
        if (!mainNav) return;
        
        mainNav.innerHTML = navigationData.mainNav.map(navItem => `
            <li class="main-nav-item">
                <a href="${navItem.href}" class="main-nav-link">${navItem.name}</a>
            </li>
        `).join('');
    }
    
    renderCategoryNavigation = () => {
        const categoryInner = document.querySelector('.gnb-category__inner');
        if (!categoryInner) return;
        
        // 1단계 카테고리 리스트
        const categoryList = navigationData.categories.map((category, index) => `
            <li class="${category.id} ${category.isActive ? 'is-active' : ''}">
                <a href="${category.href}" 
                   id="tab__gnb-category--${index + 1}" 
                   role="tab" 
                   aria-selected="${category.isActive ? 'true' : 'false'}" 
                   aria-controls="tab__gnb-category--${index + 1}" 
                   tabindex="${category.isActive ? '0' : '-1'}">
                    <span>${category.name}</span>
                </a>
            </li>
        `).join('');
        
        // 2단계 서브카테고리들
        const subCategories = navigationData.categories.map((category, categoryIndex) => {
            if (!category.subCategories) return '';
            
            return `
                <ul class="gnb-category--2depth tab-content ${category.isActive ? 'is-active' : ''}" 
                    role="tabpanel" 
                    aria-labelledby="tab__gnb-category--${categoryIndex + 1}">
                    <li class="link-all">
                        <a href="${category.href}">${category.name} 전체보기</a>
                    </li>
                    ${category.subCategories.map((subCategory, subIndex) => `
                        <li class="${subCategory.isActive ? 'is-active' : ''}">
                            <a href="${subCategory.href}" 
                               class="tab__snb-category" 
                               role="tab" 
                               aria-selected="${subCategory.isActive ? 'true' : 'false'}" 
                               aria-controls="tab__snb-category--${categoryIndex}-${subIndex + 1}">
                                <span>${subCategory.name}</span>
                            </a>
                            ${subCategory.items ? `
                                <ul class="gnb-category--3depth tab-content" 
                                    role="tabpanel" 
                                    aria-labelledby="tab__snb-category--${categoryIndex}-${subIndex + 1}">
                                    ${subCategory.items.map(item => `
                                        <li><a href="${item.href}"><span>${item.name}</span></a></li>
                                    `).join('')}
                                </ul>
                            ` : ''}
                        </li>
                    `).join('')}
                </ul>
            `;
        }).join('');
        
        categoryInner.innerHTML = `
            <ul class="gnb-category--list serviceCtgList" role="tablist">
                ${categoryList}
            </ul>
            ${subCategories}
        `;
    }
    
    renderServices = () => {
        const serviceList = document.querySelector('.list-quick-link');
        if (!serviceList) return;
        
        serviceList.innerHTML = navigationData.services.map(service => `
            <li class="${service.class}">
                <a href="${service.href}">${service.name}</a>
            </li>
        `).join('');
    }
    
    renderShowroom = () => {
        const showroomWrapper = document.querySelector('.swiper-wrapper');
        if (!showroomWrapper) return;
        
        showroomWrapper.innerHTML = navigationData.showroom.map((item, index) => `
            <div class="swiper-slide ${index === 0 ? 'swiper-slide-active' : ''}" 
                 style="width: 294px; margin-right: 8px;">
                <div class="product__item">
                    <a href="${item.href}">
                        <div class="product__info--img">
                            <img src="${item.image}" 
                                 data-src="${item.image}" 
                                 alt="${item.brand}" 
                                 class="lazy-loaded ${index === 0 ? 'is-loaded' : ''}">
                        </div>
                        <div class="product__info">
                            <p class="product__brand">${item.brand}</p>
                            <p class="product__brand-info">${item.info}</p>
                        </div>
                    </a>
                </div>
            </div>
        `).join('');
    }
    
    renderMobileMenu = () => {
        const mobileMenuContent = document.querySelector('.mobile-menu-content');
        if (!mobileMenuContent) return;
        
        mobileMenuContent.innerHTML = `
            <div class="mobile-main-nav">
                <ul class="mobile-nav-list">
                    ${navigationData.mobileMenu.mainNav.map(item => `
                        <li class="mobile-nav-item">
                            <a href="${item.href}" class="mobile-nav-link">${item.name}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="mobile-category-nav">
                <h3 class="mobile-category-title">카테고리</h3>
                <ul class="mobile-category-list">
                    ${navigationData.mobileMenu.categoryNav.map(item => `
                        <li class="mobile-category-item">
                            <a href="${item.href}" class="mobile-category-link">${item.name}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    renderUserActions = () => {
        const userActions = document.querySelector('.user-actions');
        if (!userActions) return;
        
        userActions.innerHTML = navigationData.userActions.map(action => `
            <li class="user-action-item">
                <a href="${action.href}" class="user-action-link">${action.name}</a>
            </li>
        `).join('');
    }
    
    // 전체 네비게이션 렌더링 (햄버거 메뉴용)
    renderAll = () => {
        this.renderMainNavigation();
        this.renderCategoryNavigation();
        this.renderServices();
        this.renderShowroom();
        this.renderMobileMenu();
        this.renderUserActions();
    }
}