// 유틸리티 함수들
export const utils = {
    // 디바운스 함수
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 스로틀 함수
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // 로컬 스토리지 헬퍼
    storage: {
        set: (key, value) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error('로컬 스토리지 저장 실패:', e);
            }
        },
        
        get: (key) => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('로컬 스토리지 읽기 실패:', e);
                return null;
            }
        },
        
        remove: (key) => {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.error('로컬 스토리지 삭제 실패:', e);
            }
        }
    },
    
    // DOM 요소 생성 헬퍼
    createElement: (tag, className = '', textContent = '') => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    },
    
    // 이벤트 리스너 추가 헬퍼
    addEventListeners: (elements, event, handler) => {
        if (Array.isArray(elements)) {
            elements.forEach(el => el.addEventListener(event, handler));
        } else {
            elements.addEventListener(event, handler);
        }
    },
    
    // 클래스 토글 헬퍼
    toggleClass: (element, className) => {
        element.classList.toggle(className);
    },
    
    // 요소 숨기기/보이기
    toggleVisibility: (element, show = true) => {
        element.style.display = show ? 'block' : 'none';
    }
};
