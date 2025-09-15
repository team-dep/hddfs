// 현대면세점 실제 네비게이션 데이터
export const navigationData = {
    // 유틸리티 네비게이션 데이터
    utilityNav: [
        { text: '로그인', href: '#', isActive: false },
        { text: '회원가입', href: '#', isActive: false },
        { text: '고객센터', href: '#', isActive: false },
        { text: '지점안내', href: '#', isActive: false },
        { text: '주문가능시간', href: '#', isActive: false }
    ],

    mainNav: [
        { name: '세일', href: '/sale' },
        { name: '베스트', href: '/best' },
        { name: '혜택', href: '/benefit' },
        { name: '브랜드 행사', href: '/brand-event' },
        { name: '3시간전샵', href: '/3hour-shop' },
        { name: '신상품', href: '/new' },
        { name: '스페셜오더', href: '/special-order' },
        { name: '아울렛', href: '/outlet' }
    ],
    
    // 현대면세점 실제 카테고리 구조
    categories: [
        {
            id: 'ctg-0001',
            name: '스킨케어',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0001',
            isActive: true,
            subCategories: [
                {
                    id: '000101',
                    name: '기초케어',
                    href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=000101',
                    isActive: true,
                    items: [
                        { name: '스킨/토너', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010101' },
                        { name: '에센스', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010102' },
                        { name: '크림', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010103' },
                        { name: '로션', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010104' },
                        { name: '페이스오일', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010105' },
                        { name: '미스트', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010106' },
                        { name: '기초케어세트', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010107' },
                        { name: '스페셜케어', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010108' }
                    ]
                },
                {
                    id: '000102',
                    name: '선케어',
                    href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=000102',
                    items: [
                        { name: '선크림/선젤', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010201' },
                        { name: '선스프레이/선스틱', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010202' },
                        { name: '선팩트', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010203' }
                    ]
                },
                {
                    id: '000103',
                    name: '클렌징',
                    href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=000103',
                    items: [
                        { name: '클렌징오일', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010301' },
                        { name: '클렌징크림', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010302' },
                        { name: '클렌징티슈', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010306' },
                        { name: '립/아이 리무버', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010303' },
                        { name: '클렌징폼', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010304' },
                        { name: '스크럽/필링', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00010305' }
                    ]
                }
            ]
        },
        {
            id: 'ctg-0002',
            name: '메이크업',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0002',
            subCategories: [
                {
                    id: '000201',
                    name: '페이스',
                    href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=000201',
                    items: [
                        { name: '베이스', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020101' },
                        { name: '프라이머', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020102' },
                        { name: 'BB크림/CC크림', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020103' },
                        { name: '파운데이션', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020104' },
                        { name: '컨실러', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020105' },
                        { name: '쿠션팩트', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020106' },
                        { name: '파우더팩트', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020107' },
                        { name: '블러셔/셰딩/하이라이터', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00020108' }
                    ]
                }
            ]
        },
        {
            id: 'ctg-0003',
            name: '향수/헤어/바디',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0003',
            subCategories: [
                {
                    id: '000301',
                    name: '향수',
                    href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=000301',
                    items: [
                        { name: '여성향수', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00030101' },
                        { name: '남성향수', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00030102' },
                        { name: '고체향수', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00030103' },
                        { name: '세트제품/미니어처', href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=00030104' }
                    ]
                }
            ]
        },
        {
            id: 'ctg-0004',
            name: '가방/지갑',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0004'
        },
        {
            id: 'ctg-0005',
            name: '시계/쥬얼리',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0005'
        },
        {
            id: 'ctg-0007',
            name: '패션/잡화',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0007'
        },
        {
            id: 'ctg-0013',
            name: '스포츠/레저',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0013'
        },
        {
            id: 'ctg-0008',
            name: '전자/리빙',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0008'
        },
        {
            id: 'ctg-0009',
            name: '식품',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0009'
        },
        {
            id: 'ctg-0010',
            name: '유아동',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0010'
        },
        {
            id: 'ctg-0011',
            name: 'K-브랜드',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0011'
        },
        {
            id: 'ctg-0014',
            name: '주류',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0014'
        },
        {
            id: 'ctg-0012',
            name: 'Adult (19)',
            href: 'https://www.hddfs.com/shop/dm/ctg/category.do?goosCtgId=0012'
        }
    ],
    
    // 주요서비스
    services: [
        { name: '세일', href: '/shop/op/sale/saleShop.do', class: 'quick-link__sale' },
        { name: '베스트', href: '/shop/dm/best/monthly.do', class: 'quick-link__best' },
        { name: '혜택', href: '/event/op/evnt/evntShop.do', class: 'quick-link__benefit' },
        { name: '브랜드 행사', href: '/event/op/spex/spexShop.do', class: 'quick-link__promotion' },
        { name: '3시간전샵', href: 'https://www.hddfs.com/shop/dm/specialMain.do?spclMenuSeq=91', class: 'quick-link__coupon' },
        { name: '신상품', href: '/shop/dm/new/newShop.do', class: 'quick-link__new' },
        { name: '스페셜오더', href: '/shop/or/spord/main.do', class: 'quick-link__special' },
        { name: '아울렛', href: 'https://www.hddfs.com/event/op/spex/dtlSpex.do?spexId=0003846', class: 'quick-link__h-cos' }
    ],
    
    // 쇼룸 상품
    showroom: [
        {
            brand: 'H.ACC FACE',
            info: 'EYEWEAR AR FITTING SERVICE',
            href: 'https://www.hddfs.com/event/op/spex/dtlSpex.do?spexId=0003415',
            image: 'https://cdn.hddfs.com/files/dm/20250711/afd7ae43_202507111655086780.jpg?sf=webp&RS=320x240'
        },
        {
            brand: '유통기한 임박 화장품 특가',
            info: '최대할인 65%~',
            href: 'https://www.hddfs.com/event/op/spex/dtlSpex.do?spexId=0003747',
            image: 'https://cdn.hddfs.com/files/dm/20250225/9b882942_202502251448212480.jpg?sf=webp&RS=320x240'
        },
        {
            brand: '오늘은 특별한 날이니까요',
            info: 'C.H.EERS To You',
            href: 'https://www.hddfs.com/shop/dm/bran/brand.do?onlnBranCd=003201&redrUrl=N',
            image: 'https://cdn.hddfs.com/files/dm/20230630/9a1a3cd5_202306300928432600.jpg?sf=webp&RS=320x240'
        }
    ],
    
    mobileMenu: {
        mainNav: [
            { name: '세일', href: '/sale' },
            { name: '베스트', href: '/best' },
            { name: '혜택', href: '/benefit' },
            { name: '브랜드 행사', href: '/brand-event' },
            { name: '3시간전샵', href: '/3hour-shop' },
            { name: '신상품', href: '/new' },
            { name: '스페셜오더', href: '/special-order' },
            { name: '아울렛', href: '/outlet' }
        ],
        categoryNav: [
            { name: '스킨케어', href: '/skincare' },
            { name: '메이크업', href: '/makeup' },
            { name: '향수/헤어/바디', href: '/fragrance' },
            { name: '가방/지갑', href: '/bags' },
            { name: '시계/쥬얼리', href: '/watches' },
            { name: '패션/잡화', href: '/fashion' },
            { name: '스포츠/레저', href: '/sports' },
            { name: '전자/리빙', href: '/electronics' },
            { name: '식품', href: '/food' },
            { name: '유아동', href: '/kids' },
            { name: 'K-브랜드', href: '/k-brand' },
            { name: '주류', href: '/liquor' },
            { name: 'Adult (19)', href: '/adult' }
        ]
    },
    
    userActions: [
        { name: '로그인', href: '/login', type: 'link' },
        { name: '회원가입', href: '/signup', type: 'link' },
        { name: '고객센터', href: '/customer-service', type: 'link' },
        { name: '지점안내', href: '/store-info', type: 'link' }
    ]
};