export class Breadcrumb {
    constructor() {
        this.breadcrumbData = [
            { name: '홈', href: '#', isCurrent: false },
            { name: '혜택', href: '#', isCurrent: false },
            { name: '추석연휴 현데이', href: '#', isCurrent: true }
        ];
        
        this.init();
    }
    
    init = () => {
        this.renderBreadcrumb();
    }
    
    renderBreadcrumb = () => {
        const breadcrumbList = document.querySelector('.breadcrumb-list');
        if (!breadcrumbList) return;
        
        breadcrumbList.innerHTML = this.breadcrumbData.map(item => {
            if (item.isCurrent) {
                return `<li class="breadcrumb-current">${item.name}</li>`;
            } else {
                return `<li><a href="${item.href}" class="breadcrumb-link">${item.name}</a></li>`;
            }
        }).join('');
    }
    
    // 브레드크럼 데이터 업데이트
    updateBreadcrumb = (newData) => {
        this.breadcrumbData = newData;
        this.renderBreadcrumb();
    }
    
    // 브레드크럼 아이템 추가
    addItem = (item) => {
        this.breadcrumbData.push(item);
        this.renderBreadcrumb();
    }
    
    // 브레드크럼 아이템 제거
    removeItem = (index) => {
        this.breadcrumbData.splice(index, 1);
        this.renderBreadcrumb();
    }
}
