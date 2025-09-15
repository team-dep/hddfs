import { utils } from '../utils.js';

// 브랜드 카드 데이터
export const brandData = [
    {
        id: 'byredo',
        name: 'BYREDO',
        image: 'images/byredo_benefit_prd.png',
        alt: '바이레도 혜택 상품',
        benefits: [
            {
                title: 'Benefit 1',
                description: '현데이 단독 혜택 : 전 구매 고객 2ml 미니어쳐 증정'
            },
            {
                title: 'Benefit 2',
                description: '대한항공 콜라보 혜택 : $255 이상 구매 시 바이레도 베스트 향 KIT 증정'
            }
        ]
    },
    {
        id: 'moutai',
        name: 'MAOTAI',
        image: 'images/moutai_benefit_prd2.png',
        alt: '마오타이 혜택 상품',
        benefits: [
            {
                title: 'Benefit 1',
                description: '인기상품 구매 시 사용 가능 마오타이 전용 쿠폰 지급'
            },
            {
                title: 'Benefit 2',
                description: '마오타이 1병 구매 시 사은품 증정 (2가지)'
            }
        ]
    },
    {
        id: 'sk2',
        name: 'SK-II',
        image: 'images/sk2_benefit_prd.png',
        alt: 'SK2 혜택 상품',
        benefits: [
            {
                title: 'Benefit 1',
                description: '인기상품 구매 시 4종 에센셜 키트 증정'
            }
        ]
    },
    {
        id: 'sony',
        name: 'SONY',
        image: 'images/sony_benefit_coupon.png',
        alt: '소니 혜택 쿠폰',
        benefits: [
            {
                title: 'Benefit 1',
                description: '$200 이상 구매 시 사용 가능 SONY 전용 $25 쿠폰 지급'
            }
        ]
    }
];

// 핫딜 데이터
export const hotdealData = Array.from({ length: 12 }, (_, index) => ({
    id: `hotdeal_${index + 1}`,
    image: `images/relay_${index + 1}.png`,
    alt: `릴레이 핫딜 ${index + 1}`
}));

export class BrandCard {
    constructor(data) {
        this.data = data;
        this.element = this.createCard();
    }
    
    createCard = () => {
        const card = utils.createElement('article', 'brand-card');
        
        card.innerHTML = `
            <div class="brand-image">
                <img src="${this.data.image}" alt="${this.data.alt}" class="brand-img">
            </div>
            <div class="brand-content">
                <h3 class="brand-name">${this.data.name}</h3>
                <div class="brand-benefits">
                    ${this.data.benefits.map(benefit => `
                        <div class="benefit-item">
                            <strong class="benefit-title">${benefit.title}</strong>
                            <p class="benefit-desc">${benefit.description}</p>
                        </div>
                    `).join('')}
                </div>
                <button class="brand-btn" data-brand="${this.data.id}">바로가기</button>
            </div>
        `;
        
        this.setupEventListeners(card);
        return card;
    }
    
    setupEventListeners = (card) => {
        const brandBtn = card.querySelector('.brand-btn');
        brandBtn.addEventListener('click', () => {
            console.log('브랜드 페이지 이동:', this.data.name);
            alert(`${this.data.name} 브랜드 페이지로 이동합니다.`);
        });
    }
}

export class HotdealCard {
    constructor(data) {
        this.data = data;
        this.element = this.createCard();
    }
    
    createCard = () => {
        const card = utils.createElement('div', 'hotdeal-item');
        
        card.innerHTML = `
            <img src="${this.data.image}" alt="${this.data.alt}" class="hotdeal-img">
        `;
        
        card.addEventListener('click', () => {
            console.log('핫딜 상품 클릭');
            alert('핫딜 상품 상세 페이지로 이동합니다.');
        });
        
        return card;
    }
}

export class CardManager {
    constructor() {
        this.brandCards = [];
        this.hotdealCards = [];
        this.init();
    }
    
    init = () => {
        this.renderBrandCards();
        this.renderHotdealCards();
    }
    
    renderBrandCards = () => {
        const brandGrid = document.querySelector('.brand-grid');
        if (!brandGrid) return;
        
        // 기존 카드들 제거
        brandGrid.innerHTML = '';
        
        // 새로운 카드들 생성
        this.brandCards = brandData.map(data => new BrandCard(data));
        this.brandCards.forEach(card => {
            brandGrid.appendChild(card.element);
        });
    }
    
    renderHotdealCards = () => {
        const hotdealGrid = document.querySelector('.hotdeal-grid');
        if (!hotdealGrid) return;
        
        // 기존 카드들 제거
        hotdealGrid.innerHTML = '';
        
        // 새로운 카드들 생성
        this.hotdealCards = hotdealData.map(data => new HotdealCard(data));
        this.hotdealCards.forEach(card => {
            hotdealGrid.appendChild(card.element);
        });
    }
}
