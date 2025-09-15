import { utils } from '../utils.js';

export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeBtns = this.modal?.querySelectorAll('.modal-close, .btn-secondary');
        this.init();
    }
    
    init = () => {
        if (!this.modal) return;
        
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        // 닫기 버튼들
        utils.addEventListeners(this.closeBtns, 'click', this.close);
        
        // 배경 클릭시 닫기
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }
    
    open = () => {
        if (this.modal) {
            this.modal.classList.add('active');
            this.modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }
    
    close = () => {
        if (this.modal) {
            this.modal.classList.remove('active');
            this.modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    }
    
    isOpen = () => {
        return this.modal?.classList.contains('active') || false;
    }
}

// 모달 매니저
export class ModalManager {
    constructor() {
        this.modals = new Map();
        this.init();
    }
    
    init = () => {
        // 모든 모달 초기화
        const modalElements = document.querySelectorAll('.modal');
        modalElements.forEach(modal => {
            const modalId = modal.id;
            this.modals.set(modalId, new Modal(modalId));
        });
    }
    
    getModal = (modalId) => {
        return this.modals.get(modalId);
    }
    
    openModal = (modalId) => {
        const modal = this.getModal(modalId);
        if (modal) {
            modal.open();
        }
    }
    
    closeModal = (modalId) => {
        const modal = this.getModal(modalId);
        if (modal) {
            modal.close();
        }
    }
    
    closeAllModals = () => {
        this.modals.forEach(modal => modal.close());
    }
}
