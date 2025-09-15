import { utils } from '../utils.js';

// 혜택 데이터
export const benefitData = {
    honey: {
        title: '매일 12시, 19시 참여 가능 <strong>선착순 H.oney 100명</strong>',
        info: [
            { label: '참여 기준', value: 'ID당 1일 1회' },
            { label: '참여 대상', value: '온라인몰 내국인(KOR)회원' },
            { label: '행사 기간', value: '2025.09.18 ~ 10.10' },
            { label: '사용 기간', value: '지급일로부터 3일' }
        ],
        timeSlots: [
            {
                title: '매일 12시선착순 50명',
                description: 'H.oney 온라인용 10만원 이상 구매 시 50,000원',
                buttonText: '초특가 반값 혜택 받기'
            },
            {
                title: '매일 19시선착순 50명',
                description: 'H.oney 온라인용 10만원 이상 구매 시 50,000원',
                buttonText: '초특가 반값 혜택 받기'
            }
        ]
    },
    allDay: {
        title: '매일 다운로드 및 사용 가능 <strong>All Day H.oney 최대 16.2만원</strong>',
        info: [
            { label: '참여 기준', value: 'ID당 1일 1회' },
            { label: '참여 대상', value: '온라인몰 내국인(KOR)회원' },
            { label: '사용 기간', value: '지급 당일 23:59' }
        ],
        discountTiers: [
            { amount: '10만원 이상 구매 시', discount: '5,000원' },
            { amount: '20만원 이상 구매 시', discount: '10,000원' },
            { amount: '30만원 이상 구매 시', discount: '15,000원' },
            { amount: '60만원 이상 구매 시', discount: '30,000원' },
            { amount: '80만원 이상 구매 시', discount: '42,000원' },
            { amount: '100만원 이상 구매 시', discount: '60,000원' }
        ],
        buttonText: 'H.oney 온라인용 최대 162,000원추가 할인혜택 받기'
    }
};

// 유의사항 데이터
export const noticeData = [
    {
        title: '[H.oney 공통 유의사항]',
        items: [
            'H.oney 는 당사 및 브랜드 정책에 따라 일부 브랜드 및 55% 이상 할인 상품에는 적용되지 않습니다.',
            'H.oney 금액 및 사용 조건은 당사 및 브랜드 정책에 의해 사전 고지 없이 변경될 수 있습니다.',
            '본 이벤트를 통해 지급받은 All Day H.oney는 주문번호당 1개만 사용 가능합니다.'
        ]
    },
    {
        title: '[선착순 H.oney 유의사항]',
        items: [
            '본 이벤트는 PC 웹 및 모바일에서 동시에 진행되며, ID 당 기간 내 1회 참여 가능합니다.',
            '본 이벤트를 통해 지급받은 12시/19시 선착순 H.oney는 주문번호당 1개만 사용 가능합니다.'
        ]
    },
    {
        title: '[All Day H.oney 유의사항]',
        items: [
            '본 이벤트는 PC 웹 및 모바일에서 동시에 진행되며, ID 당 1일 1회 참여 가능합니다.',
            '본 이벤트를 통해 지급받은 All Day H.oney는 주문번호당 1개만 사용 가능합니다.'
        ]
    }
];

export class Benefits {
    constructor() {
        this.benefitBtns = document.querySelectorAll('.benefit-btn');
        this.init();
    }
    
    init = () => {
        this.setupEventListeners();
    }
    
    setupEventListeners = () => {
        utils.addEventListeners(this.benefitBtns, 'click', this.handleBenefitClick);
    }
    
    handleBenefitClick = (e) => {
        const benefitType = e.target.textContent.trim();
        console.log('혜택 신청:', benefitType);
        
        // 로그인 체크 (실제로는 서버에서 확인)
        const isLoggedIn = false; // 임시값
        
        if (!isLoggedIn) {
            // H.Point 모달 열기
            const modalManager = window.modalManager;
            if (modalManager) {
                modalManager.openModal('hpointModal');
            }
        } else {
            alert(`${benefitType} 혜택을 신청했습니다!`);
        }
    }
}

export class BenefitsRenderer {
    constructor() {
        this.init();
    }
    
    init = () => {
        this.renderHoneyBenefits();
        this.renderAllDayBenefits();
        this.renderNotices();
    }
    
    renderHoneyBenefits = () => {
        const honeyCard = document.querySelector('.honey-card');
        if (!honeyCard) return;
        
        const data = benefitData.honey;
        
        // 제목 업데이트
        const title = honeyCard.querySelector('.benefit-title');
        if (title) {
            title.innerHTML = data.title;
        }
        
        // 정보 업데이트
        const infoContainer = honeyCard.querySelector('.benefit-info');
        if (infoContainer) {
            infoContainer.innerHTML = data.info.map(item => `
                <div class="info-item">
                    <span class="info-label">${item.label}</span>
                    <span class="info-value">${item.value}</span>
                </div>
            `).join('');
        }
        
        // 시간대 슬롯 업데이트
        const contentContainer = honeyCard.querySelector('.benefit-content');
        if (contentContainer) {
            contentContainer.innerHTML = data.timeSlots.map(slot => `
                <div class="time-slot">
                    <div class="time-header">
                        <h4 class="time-title">${slot.title}</h4>
                    </div>
                    <div class="time-content">
                        <p class="time-description">${slot.description}</p>
                        <button class="benefit-btn">${slot.buttonText}</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    renderAllDayBenefits = () => {
        const allDayCard = document.querySelector('.all-day-card');
        if (!allDayCard) return;
        
        const data = benefitData.allDay;
        
        // 제목 업데이트
        const title = allDayCard.querySelector('.benefit-title');
        if (title) {
            title.innerHTML = data.title;
        }
        
        // 정보 업데이트
        const infoContainer = allDayCard.querySelector('.benefit-info');
        if (infoContainer) {
            infoContainer.innerHTML = data.info.map(item => `
                <div class="info-item">
                    <span class="info-label">${item.label}</span>
                    <span class="info-value">${item.value}</span>
                </div>
            `).join('');
        }
        
        // 할인 티어 업데이트
        const tiersContainer = allDayCard.querySelector('.discount-tiers');
        if (tiersContainer) {
            tiersContainer.innerHTML = data.discountTiers.map(tier => `
                <div class="tier-item">
                    <span class="tier-amount">${tier.amount}</span>
                    <strong class="tier-discount">${tier.discount}</strong>
                </div>
            `).join('');
        }
        
        // 버튼 업데이트
        const button = allDayCard.querySelector('.benefit-btn.primary');
        if (button) {
            button.textContent = data.buttonText;
        }
    }
    
    renderNotices = () => {
        const noticeSection = document.querySelector('.notice-section');
        if (!noticeSection) return;
        
        const content = noticeSection.querySelector('.notice-content');
        if (content) {
            content.innerHTML = noticeData.map(group => `
                <div class="notice-group">
                    <h5 class="notice-subtitle">${group.title}</h5>
                    <ul class="notice-list">
                        ${group.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }
    }
}
