import { utils } from '../utils.js';

export class Search {
    constructor() {
        this.searchForm = document.querySelector('.search-form');
        this.searchInput = document.querySelector('.search-input');
        this.searchBtn = document.querySelector('.search-btn');
        this.init();
    }
    
    init = () => {
        if (!this.searchForm) return;
        
        this.setupEventListeners();
        this.setupInputValidation();
    }
    
    setupEventListeners = () => {
        this.searchForm.addEventListener('submit', this.handleSubmit);
        this.searchInput.addEventListener('input', this.handleInput);
    }
    
    setupInputValidation = () => {
        if (this.searchInput && this.searchBtn) {
            this.searchBtn.style.opacity = '0.7';
            this.searchBtn.style.pointerEvents = 'none';
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.searchInput.value.trim();
        
        if (searchTerm) {
            this.performSearch(searchTerm);
        }
    }
    
    handleInput = (e) => {
        const value = e.target.value.trim();
        
        if (this.searchBtn) {
            if (value.length > 0) {
                this.searchBtn.style.opacity = '1';
                this.searchBtn.style.pointerEvents = 'auto';
            } else {
                this.searchBtn.style.opacity = '0.7';
                this.searchBtn.style.pointerEvents = 'none';
            }
        }
    }
    
    performSearch = (searchTerm) => {
        console.log('검색어:', searchTerm);
        // 실제 검색 로직 구현
        alert(`"${searchTerm}" 검색 결과를 표시합니다.`);
        
        // 검색 히스토리 저장
        this.saveSearchHistory(searchTerm);
    }
    
    saveSearchHistory = (searchTerm) => {
        const history = utils.storage.get('searchHistory') || [];
        if (!history.includes(searchTerm)) {
            history.unshift(searchTerm);
            history.splice(10); // 최대 10개만 저장
            utils.storage.set('searchHistory', history);
        }
    }
    
    getSearchHistory = () => {
        return utils.storage.get('searchHistory') || [];
    }
}
