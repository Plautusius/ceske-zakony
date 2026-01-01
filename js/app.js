// ===== Data: Czech Laws 2025 =====
const lawsData = [
    {
        id: 1,
        number: "23/2025",
        title: "Zákon o elektronických komunikacích",
        type: "zakon",
        category: "technicke",
        published: "2025-01-15",
        effective: "2025-07-01",
        description: "Zákon upravuje podmínky pro poskytování služeb elektronických komunikací, práva a povinnosti podnikatelů v elektronických komunikacích a práva uživatelů těchto služeb.",
        keywords: ["elektronické komunikace", "telekomunikace", "internet", "digitalizace"]
    },
    {
        id: 2,
        number: "31/2025",
        title: "Zákon o digitalizaci finančního trhu",
        type: "zakon",
        category: "finance",
        published: "2025-02-01",
        effective: "2025-02-15",
        description: "Zákon stanoví pravidla pro digitální finanční služby, kryptoaktiva a regulaci fintech společností v České republice.",
        keywords: ["finance", "digitalizace", "kryptoměny", "fintech"]
    },
    {
        id: 3,
        number: "34/2025",
        title: "Zákon o Národní rozvojové bance",
        type: "zakon",
        category: "finance",
        published: "2025-02-10",
        effective: "2025-02-19",
        description: "Zákon zřizuje Národní rozvojovou banku a stanoví její působnost při podpoře investic a rozvoje podnikání v ČR.",
        keywords: ["banka", "rozvoj", "investice", "podnikání"]
    },
    {
        id: 4,
        number: "38/2025",
        title: "Zákon, kterým se mění zákon o sociálních službách",
        type: "zakon",
        category: "socialni",
        published: "2025-02-20",
        effective: "2025-03-01",
        description: "Novela zákona o sociálních službách přináší změny v poskytování a financování sociálních služeb.",
        keywords: ["sociální služby", "péče", "zdravotnictví"]
    },
    {
        id: 5,
        number: "52/2025",
        title: "Zákon, kterým se mění zákon o vysokých školách",
        type: "zakon",
        category: "vzdelavani",
        published: "2025-02-25",
        effective: "2025-03-01",
        description: "Novela upravuje podmínky akreditace studijních programů a financování vysokých škol.",
        keywords: ["vysoké školy", "vzdělávání", "akreditace"]
    },
    {
        id: 6,
        number: "77/2025",
        title: "Zákon, kterým se mění zákon o veřejném ochránci práv",
        type: "zakon",
        category: "spravedlnost",
        published: "2025-03-15",
        effective: "2025-07-01",
        description: "Rozšíření pravomocí veřejného ochránce práv a posílení ochrany základních práv občanů.",
        keywords: ["ombudsman", "ochrana práv", "lidská práva"]
    },
    {
        id: 7,
        number: "78/2025",
        title: "Zákon o potírání domácího násilí",
        type: "zakon",
        category: "spravedlnost",
        published: "2025-03-15",
        effective: "2025-07-01",
        description: "Komplexní zákon upravující prevenci a potírání domácího násilí, včetně posílení ochrany obětí.",
        keywords: ["domácí násilí", "ochrana obětí", "prevence"]
    },
    {
        id: 8,
        number: "119/2025",
        title: "Zákon, kterým se mění zákon o České televizi a o Českém rozhlasu",
        type: "zakon",
        category: "media",
        published: "2025-04-10",
        effective: "2025-05-01",
        description: "Změny ve struktuře a financování veřejnoprávních médií.",
        keywords: ["ČT", "ČRo", "média", "veřejnoprávní"]
    },
    {
        id: 9,
        number: "151/2025",
        title: "Zákon o dávce státní sociální pomoci",
        type: "zakon",
        category: "socialni",
        published: "2025-05-20",
        effective: "2025-10-01",
        description: "Nový systém dávek státní sociální pomoci pro nízkopříjmové domácnosti.",
        keywords: ["sociální dávky", "pomoc", "sociální politika"]
    },
    {
        id: 10,
        number: "168/2025",
        title: "Zákon o regulaci lobbování",
        type: "zakon",
        category: "spravedlnost",
        published: "2025-06-01",
        effective: "2025-07-01",
        description: "Zákon stanoví pravidla pro transparentní lobbování a registr lobbistů.",
        keywords: ["lobbování", "transparentnost", "politika"]
    },
    {
        id: 11,
        number: "89/2025",
        title: "Vyhláška o ochraně osobních údajů ve zdravotnictví",
        type: "vyhlaska",
        category: "zdravotnictvi",
        published: "2025-03-20",
        effective: "2025-04-01",
        description: "Vyhláška stanoví podrobnosti o nakládání s osobními údaji pacientů a zdravotnickou dokumentací.",
        keywords: ["GDPR", "zdravotnictví", "osobní údaje"]
    },
    {
        id: 12,
        number: "95/2025",
        title: "Nařízení vlády o minimální mzdě",
        type: "narizeni",
        category: "prace",
        published: "2025-03-25",
        effective: "2025-01-01",
        description: "Stanovení výše minimální mzdy a nejnižších úrovní zaručené mzdy pro rok 2025.",
        keywords: ["minimální mzda", "zaručená mzda", "práce"]
    },
    {
        id: 13,
        number: "112/2025",
        title: "Vyhláška o energetickém štítkování budov",
        type: "vyhlaska",
        category: "energie",
        published: "2025-04-05",
        effective: "2025-05-01",
        description: "Nové požadavky na energetickou náročnost budov a povinnost energetických štítků.",
        keywords: ["energie", "budovy", "štítkování", "úspory"]
    },
    {
        id: 14,
        number: "125/2025",
        title: "Nález Ústavního soudu sp. zn. Pl. ÚS 15/24",
        type: "nalez",
        category: "ustavni",
        published: "2025-04-15",
        effective: "2025-04-15",
        description: "Nález Ústavního soudu ve věci zrušení části zákona o elektronických komunikacích.",
        keywords: ["Ústavní soud", "nález", "zrušení"]
    },
    {
        id: 15,
        number: "142/2025",
        title: "Vyhláška o účetnictví pro podnikatele",
        type: "vyhlaska",
        category: "finance",
        published: "2025-05-01",
        effective: "2025-01-01",
        description: "Novelizace účetních předpisů pro podnikatele v souladu s mezinárodními standardy.",
        keywords: ["účetnictví", "podnikatelé", "IFRS"]
    },
    {
        id: 16,
        number: "156/2025",
        title: "Zákon o kybernetické bezpečnosti",
        type: "zakon",
        category: "bezpecnost",
        published: "2025-05-25",
        effective: "2025-09-01",
        description: "Komplexní úprava kybernetické bezpečnosti kritické infrastruktury a digitálních služeb.",
        keywords: ["kybernetická bezpečnost", "IT", "kritická infrastruktura"]
    },
    {
        id: 17,
        number: "178/2025",
        title: "Zákon o podpoře bydlení",
        type: "zakon",
        category: "bydleni",
        published: "2025-06-15",
        effective: "2025-09-01",
        description: "Zákon o státní podpoře bydlení včetně dotačních programů pro mladé rodiny.",
        keywords: ["bydlení", "dotace", "podpora"]
    },
    {
        id: 18,
        number: "185/2025",
        title: "Nařízení vlády o ochraně zemědělské půdy",
        type: "narizeni",
        category: "zemedelstvi",
        published: "2025-06-20",
        effective: "2025-08-01",
        description: "Zpřísnění podmínek pro vynětí zemědělské půdy ze zemědělského půdního fondu.",
        keywords: ["zemědělství", "půda", "ochrana"]
    },
    {
        id: 19,
        number: "201/2025",
        title: "Zákon o oběhovém hospodářství",
        type: "zakon",
        category: "zivotni_prostredi",
        published: "2025-07-01",
        effective: "2025-01-01",
        description: "Zákon stanoví pravidla pro třídění, recyklaci a opětovné využití odpadů.",
        keywords: ["odpady", "recyklace", "ekologie"]
    },
    {
        id: 20,
        number: "215/2025",
        title: "Vyhláška o technických požadavcích na stavby",
        type: "vyhlaska",
        category: "stavebnictvi",
        published: "2025-07-15",
        effective: "2025-10-01",
        description: "Aktualizace technických norem pro výstavbu bytových a nebytových budov.",
        keywords: ["stavby", "normy", "stavebnictví"]
    },
    {
        id: 21,
        number: "228/2025",
        title: "Zákon o digitálních službách veřejné správy",
        type: "zakon",
        category: "verejna_sprava",
        published: "2025-08-01",
        effective: "2025-01-01",
        description: "Rozšíření digitálních služeb státní správy a povinná elektronická komunikace s úřady.",
        keywords: ["digitalizace", "eGovernment", "úřady"]
    },
    {
        id: 22,
        number: "245/2025",
        title: "Nařízení vlády o pracovní době řidičů",
        type: "narizeni",
        category: "doprava",
        published: "2025-08-20",
        effective: "2025-10-01",
        description: "Úprava pracovní doby a povinných přestávek řidičů nákladní a osobní dopravy.",
        keywords: ["doprava", "řidiči", "pracovní doba"]
    },
    {
        id: 23,
        number: "267/2025",
        title: "Zákon o podpoře elektromobility",
        type: "zakon",
        category: "doprava",
        published: "2025-09-05",
        effective: "2025-01-01",
        description: "Dotační program a daňové úlevy pro nákup elektromobilů a budování nabíjecí infrastruktury.",
        keywords: ["elektromobily", "dotace", "doprava"]
    },
    {
        id: 24,
        number: "289/2025",
        title: "Vyhláška o požadavcích na potraviny",
        type: "vyhlaska",
        category: "zdravotnictvi",
        published: "2025-09-25",
        effective: "2025-12-01",
        description: "Nové hygienické a jakostní požadavky na výrobu a distribuci potravin.",
        keywords: ["potraviny", "hygiena", "kvalita"]
    },
    {
        id: 25,
        number: "312/2025",
        title: "Zákon o změně daňových zákonů",
        type: "zakon",
        category: "dane",
        published: "2025-10-15",
        effective: "2025-01-01",
        description: "Komplexní daňová reforma včetně změn v dani z příjmů fyzických a právnických osob.",
        keywords: ["daně", "reforma", "příjmy"]
    },
    {
        id: 26,
        number: "335/2025",
        title: "Zákon o veřejných zakázkách",
        type: "zakon",
        category: "verejna_sprava",
        published: "2025-11-01",
        effective: "2025-01-01",
        description: "Novelizace zákona o veřejných zakázkách s důrazem na transparentnost a elektronizaci.",
        keywords: ["veřejné zakázky", "soutěže", "transparentnost"]
    },
    {
        id: 27,
        number: "358/2025",
        title: "Vyhláška o vzdělávání zdravotnických pracovníků",
        type: "vyhlaska",
        category: "zdravotnictvi",
        published: "2025-11-20",
        effective: "2025-01-01",
        description: "Nové požadavky na vzdělávání a celoživotní vzdělávání lékařů a zdravotních sester.",
        keywords: ["zdravotnictví", "vzdělávání", "lékaři"]
    },
    {
        id: 28,
        number: "375/2025",
        title: "Zákon o státním rozpočtu na rok 2026",
        type: "zakon",
        category: "finance",
        published: "2025-12-01",
        effective: "2025-01-01",
        description: "Zákon o státním rozpočtu České republiky na rok 2026.",
        keywords: ["rozpočet", "státní finance", "výdaje"]
    },
    {
        id: 29,
        number: "412/2025",
        title: "Vyhláška o bezpečnostních pravidlech pro cloud computing",
        type: "vyhlaska",
        category: "bezpecnost",
        published: "2025-09-26",
        effective: "2025-12-01",
        description: "Bezpečnostní pravidla pro orgány veřejné správy využívající služby poskytovatelů cloud computingu.",
        keywords: ["cloud", "bezpečnost", "veřejná správa"]
    },
    {
        id: 30,
        number: "425/2025",
        title: "Nařízení vlády o zvýšení důchodů",
        type: "narizeni",
        category: "socialni",
        published: "2025-12-10",
        effective: "2025-01-01",
        description: "Valorizace důchodů a stanovení výše základní výměry důchodu pro rok 2026.",
        keywords: ["důchody", "valorizace", "sociální zabezpečení"]
    }
];

// ===== App State =====
let currentFilter = 'all';
let currentSort = 'newest';
let searchQuery = '';
let displayedLaws = 10;

// ===== DOM Elements =====
const lawsGrid = document.getElementById('lawsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterTags = document.querySelectorAll('.filter-tag');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const modal = document.getElementById('lawModal');
const modalClose = document.getElementById('modalClose');

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== Filter & Sort Laws =====
function getFilteredLaws() {
    let filtered = [...lawsData];

    // Apply category filter
    if (currentFilter !== 'all') {
        const typeMap = {
            'zakony': 'zakon',
            'vyhlasky': 'vyhlaska',
            'narizeni': 'narizeni',
            'nalezy': 'nalez'
        };
        filtered = filtered.filter(law => law.type === typeMap[currentFilter]);
    }

    // Apply search
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(law =>
            law.title.toLowerCase().includes(query) ||
            law.number.toLowerCase().includes(query) ||
            law.description.toLowerCase().includes(query) ||
            law.keywords.some(k => k.toLowerCase().includes(query))
        );
    }

    // Apply sort
    switch (currentSort) {
        case 'newest':
            filtered.sort((a, b) => new Date(b.published) - new Date(a.published));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.published) - new Date(b.published));
            break;
        case 'number':
            filtered.sort((a, b) => {
                const numA = parseInt(a.number.split('/')[0]);
                const numB = parseInt(b.number.split('/')[0]);
                return numA - numB;
            });
            break;
        case 'effective':
            filtered.sort((a, b) => new Date(a.effective) - new Date(b.effective));
            break;
    }

    return filtered;
}

// ===== Render Laws =====
function renderLaws() {
    const filtered = getFilteredLaws();
    const toShow = filtered.slice(0, displayedLaws);

    loading.style.display = 'none';

    if (filtered.length === 0) {
        lawsGrid.innerHTML = '';
        noResults.style.display = 'block';
        loadMoreBtn.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    loadMoreBtn.style.display = displayedLaws < filtered.length ? 'block' : 'none';

    lawsGrid.innerHTML = toShow.map(law => createLawCard(law)).join('');

    // Add click handlers
    document.querySelectorAll('.law-card').forEach(card => {
        card.addEventListener('click', () => {
            const lawId = parseInt(card.dataset.id);
            openLawModal(lawId);
        });
    });
}

function createLawCard(law) {
    const typeLabels = {
        'zakon': 'Zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení vlády',
        'nalez': 'Nález ÚS'
    };

    const categoryLabels = {
        'technicke': 'Technické',
        'finance': 'Finance',
        'socialni': 'Sociální',
        'vzdelavani': 'Vzdělávání',
        'spravedlnost': 'Spravedlnost',
        'media': 'Média',
        'zdravotnictvi': 'Zdravotnictví',
        'prace': 'Práce',
        'energie': 'Energie',
        'ustavni': 'Ústavní',
        'bezpecnost': 'Bezpečnost',
        'bydleni': 'Bydlení',
        'zemedelstvi': 'Zemědělství',
        'zivotni_prostredi': 'Životní prostředí',
        'stavebnictvi': 'Stavebnictví',
        'verejna_sprava': 'Veřejná správa',
        'doprava': 'Doprava',
        'dane': 'Daně'
    };

    const effectiveDate = new Date(law.effective);
    const publishedDate = new Date(law.published);
    const now = new Date();
    const isEffective = effectiveDate <= now;

    return `
        <article class="law-card" data-id="${law.id}">
            <div class="law-header">
                <span class="law-number">${law.number} Sb.</span>
                <span class="law-type">${typeLabels[law.type]}</span>
            </div>
            <h3 class="law-title">${law.title}</h3>
            <div class="law-meta">
                <span class="law-meta-item">
                    📅 ${formatDate(publishedDate)}
                </span>
                <span class="law-meta-item">
                    ${isEffective ? '✅' : '⏳'} Účinnost: ${formatDate(effectiveDate)}
                </span>
            </div>
            <div class="law-tags">
                <span class="law-tag">${categoryLabels[law.category] || law.category}</span>
            </div>
        </article>
    `;
}

function formatDate(date) {
    return date.toLocaleDateString('cs-CZ', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });
}

// ===== Modal =====
function openLawModal(lawId) {
    const law = lawsData.find(l => l.id === lawId);
    if (!law) return;

    const typeLabels = {
        'zakon': 'Zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení vlády',
        'nalez': 'Nález ÚS'
    };

    document.getElementById('modalBadge').textContent = typeLabels[law.type];
    document.getElementById('modalTitle').textContent = law.title;

    const effectiveDate = new Date(law.effective);
    const publishedDate = new Date(law.published);
    const now = new Date();
    const isEffective = effectiveDate <= now;

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-info">
            <div class="modal-info-item">
                <div class="modal-info-label">Číslo předpisu</div>
                <div class="modal-info-value">${law.number} Sb.</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Publikováno</div>
                <div class="modal-info-value">${formatDate(publishedDate)}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Účinnost</div>
                <div class="modal-info-value">${formatDate(effectiveDate)} ${isEffective ? '(platný)' : '(dosud neúčinný)'}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Klíčová slova</div>
                <div class="modal-info-value">${law.keywords.join(', ')}</div>
            </div>
        </div>
        <p class="modal-description">${law.description}</p>
    `;

    // Extract year and number for links
    const [num, year] = law.number.split('/');
    const urlNumber = `${num}-${year}`;

    document.getElementById('modalLinkFull').href = `https://www.zakonyprolidi.cz/cs/${year}/${num}`;
    document.getElementById('modalLinkPdf').href = `https://zakony.gov.cz/cs/${urlNumber}-sb`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLawModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
function initEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Filter tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentFilter = tag.dataset.category;
            displayedLaws = 10;
            renderLaws();
        });
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderLaws();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
        displayedLaws += 10;
        renderLaws();
    });

    // Back to top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Modal
    modalClose.addEventListener('click', closeLawModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLawModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLawModal();
    });

    // Footer category links
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.filter;
            // Map category names to filter values
            const categoryMap = {
                'obcanske': 'all',
                'pracovni': 'all',
                'dane': 'all',
                'obchodni': 'all'
            };
            currentFilter = categoryMap[category] || 'all';
            searchQuery = category === 'obcanske' ? 'občan' :
                          category === 'pracovni' ? 'práce' :
                          category === 'dane' ? 'daň' :
                          category === 'obchodni' ? 'obchod' : '';
            searchInput.value = searchQuery;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            displayedLaws = 10;
            renderLaws();
        });
    });
}

function handleSearch() {
    searchQuery = searchInput.value.trim();
    displayedLaws = 10;
    renderLaws();
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();

    // Simulate loading
    setTimeout(() => {
        renderLaws();
    }, 500);
});

// ===== Expose for debugging =====
window.lawsData = lawsData;
