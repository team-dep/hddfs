import { utils } from '../utils.js';

export class Tabs {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.tabs = this.container?.querySelectorAll('.search-tab, .event-tab, .currency-item');
        this.init();
    }
    
    init = () => {
        if (!this.container || !this.tabs) return;
        
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        utils.addEventListeners(this.tabs, 'click', this.handleTabClick);
    }
    
    handleTabClick = (e) => {
        const clickedTab = e.currentTarget;
        const tabGroup = clickedTab.closest('.search-tabs, .event-tabs, .currency-select');
        
        if (tabGroup) {
            // 같은 그룹의 다른 탭들 비활성화
            const groupTabs = tabGroup.querySelectorAll('.search-tab, .event-tab, .currency-item');
            groupTabs.forEach(tab => tab.classList.remove('active'));
            
            // 클릭된 탭 활성화
            clickedTab.classList.add('active');
        }
    }
}

// 탭 매니저
export class TabManager {
    constructor() {
        this.tabs = [];
        this.init();
    }
    
    init = () => {
        // 모든 탭 컨테이너 초기화
        const tabSelectors = ['.search-container', '.event-header', '.language-currency'];
        tabSelectors.forEach(selector => {
            const tab = new Tabs(selector);
            if (tab.container) {
                this.tabs.push(tab);
            }
        });
    }
}
