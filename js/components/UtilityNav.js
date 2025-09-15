import { navigationData } from '../data/navigationData.js';

export class UtilityNav {
    constructor() {
        this.utilityData = navigationData.utilityNav;
    }

    init() {
        console.log('UtilityNav 초기화 시작');
        this.utilityNav = document.querySelector('.utility-nav');
        console.log('utilityNav 요소:', this.utilityNav);
        console.log('utilityData:', this.utilityData);
        this.renderUtilityNav();
    }

    renderUtilityNav() {
        console.log('renderUtilityNav 호출');
        console.log('utilityNav 요소 존재:', !!this.utilityNav);
        
        if (!this.utilityNav) {
            console.error('utilityNav 요소를 찾을 수 없습니다');
            return;
        }

        const html = this.utilityData.map(item => `
            <a href="${item.href}" class="utility-link ${item.isActive ? 'active' : ''}">
                ${item.text}
            </a>
        `).join('');
        
        console.log('생성된 HTML:', html);
        this.utilityNav.innerHTML = html;
        console.log('utilityNav innerHTML 설정 완료');
    }

    updateUtilityNav(newData) {
        this.utilityData = newData;
        this.renderUtilityNav();
    }

    addUtilityItem(item) {
        this.utilityData.push(item);
        this.renderUtilityNav();
    }

    removeUtilityItem(index) {
        this.utilityData.splice(index, 1);
        this.renderUtilityNav();
    }
}
