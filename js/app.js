// ===== Czech Laws Portal - Main Application =====
// Data loaded from data/laws-data.js

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Global state
let allLaws = [];
let filteredLaws = [];
let currentFilter = 'all';
let currentSort = 'newest';
let displayCount = 12;

// Initialize application
function initApp() {
    // Combine new and old laws
    allLaws = [
        ...lawsDatabase.newLaws.map(law => ({ ...law, sortDate: law.effective })),
        ...lawsDatabase.oldLaws.map(law => ({ ...law, sortDate: law.effective }))
    ];

    filteredLaws = [...allLaws];

    // Sort by newest first (new laws first)
    sortLaws('newest');

    // Initialize UI
    renderLaws();
    initSearch();
    initFilters();
    initSort();
    initThemeToggle();
    initMobileMenu();
    initBackToTop();
    initLoadMore();

    // Update stats
    updateStats();

    // Hide loading
    document.getElementById('loading').style.display = 'none';
}

// Render laws grid
function renderLaws() {
    const grid = document.getElementById('lawsGrid');
    const lawsToShow = filteredLaws.slice(0, displayCount);

    if (lawsToShow.length === 0) {
        grid.innerHTML = '';
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }

    document.getElementById('noResults').style.display = 'none';

    grid.innerHTML = lawsToShow.map(law => createLawCard(law)).join('');

    // Show/hide load more button
    document.getElementById('loadMoreBtn').style.display =
        filteredLaws.length > displayCount ? 'block' : 'none';
}

// Create law card HTML
function createLawCard(law) {
    const typeIcons = {
        'zakon': '📜',
        'ustavni_zakon': '🏛️',
        'vyhlaska': '📋',
        'narizeni': '📝'
    };

    const typeNames = {
        'zakon': 'Zákon',
        'ustavni_zakon': 'Ústavní zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení'
    };

    const categoryName = lawsDatabase.categories[law.category] || law.category;
    const icon = typeIcons[law.type] || '📄';
    const typeName = typeNames[law.type] || 'Předpis';

    const newBadge = law.isNew ? '<span class="law-badge new">Nový 2026</span>' : '';
    const fullTextBadge = law.hasFullText ? '<span class="law-badge fulltext">Plné znění</span>' : '';
    const pdfBadge = law.hasPdf ? '<span class="law-badge pdf">PDF</span>' : '';

    return `
        <article class="law-card ${law.isNew ? 'is-new' : ''}">
            <div class="law-card-header">
                <span class="law-icon">${icon}</span>
                <div class="law-badges-row">
                    ${newBadge}
                    ${fullTextBadge}
                    ${pdfBadge}
                </div>
            </div>
            <div class="law-card-body">
                <span class="law-type">${typeName} • ${categoryName}</span>
                <h3 class="law-title">${law.title}</h3>
                <p class="law-number">${law.number} Sb.</p>
                <p class="law-description">${truncate(law.description, 100)}</p>
            </div>
            <div class="law-card-footer">
                <span class="law-effective">
                    <span class="icon">📅</span> Účinnost: ${formatDate(law.effective)}
                </span>
                <div class="law-actions">
                    ${law.isNew ? `
                        <a href="zakon.html?id=${law.id}" class="law-btn primary">Zobrazit</a>
                    ` : `
                        <a href="${law.externalUrl}" target="_blank" class="law-btn secondary">Externí odkaz</a>
                    `}
                </div>
            </div>
        </article>
    `;
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchInput.addEventListener('input', debounce(performSearch, 300));
    searchBtn.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    if (!query) {
        filteredLaws = [...allLaws];
    } else {
        filteredLaws = allLaws.filter(law => {
            return law.title.toLowerCase().includes(query) ||
                   law.number.toLowerCase().includes(query) ||
                   law.description.toLowerCase().includes(query) ||
                   (law.keywords && law.keywords.some(k => k.toLowerCase().includes(query)));
        });
    }

    applyCurrentFilter();
    sortLaws(currentSort);
    displayCount = 12;
    renderLaws();
}

// Filter functionality
function initFilters() {
    const filterTags = document.querySelectorAll('.filter-tag');

    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            currentFilter = this.dataset.category;
            applyCurrentFilter();
            displayCount = 12;
            renderLaws();
        });
    });
}

function applyCurrentFilter() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    let base = query ? allLaws.filter(law => {
        return law.title.toLowerCase().includes(query) ||
               law.number.toLowerCase().includes(query) ||
               law.description.toLowerCase().includes(query);
    }) : [...allLaws];

    if (currentFilter === 'all') {
        filteredLaws = base;
    } else if (currentFilter === 'zakony') {
        filteredLaws = base.filter(law => law.type === 'zakon');
    } else if (currentFilter === 'vyhlasky') {
        filteredLaws = base.filter(law => law.type === 'vyhlaska');
    } else if (currentFilter === 'narizeni') {
        filteredLaws = base.filter(law => law.type === 'narizeni');
    } else if (currentFilter === 'nalezy') {
        filteredLaws = base.filter(law => law.type === 'ustavni_zakon');
    } else {
        filteredLaws = base.filter(law => law.category === currentFilter);
    }

    sortLaws(currentSort);
}

// Sort functionality
function initSort() {
    const sortSelect = document.getElementById('sortSelect');

    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        sortLaws(currentSort);
        renderLaws();
    });
}

function sortLaws(sortType) {
    switch(sortType) {
        case 'newest':
            // New laws first, then by effective date
            filteredLaws.sort((a, b) => {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return new Date(b.effective) - new Date(a.effective);
            });
            break;
        case 'oldest':
            filteredLaws.sort((a, b) => new Date(a.effective) - new Date(b.effective));
            break;
        case 'number':
            filteredLaws.sort((a, b) => {
                const numA = parseInt(a.number.split('/')[0]);
                const numB = parseInt(b.number.split('/')[0]);
                return numA - numB;
            });
            break;
        case 'effective':
            filteredLaws.sort((a, b) => new Date(b.effective) - new Date(a.effective));
            break;
    }
}

// Load more
function initLoadMore() {
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        displayCount += 12;
        renderLaws();
    });
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Mobile menu
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}

// Back to top
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Update stats
function updateStats() {
    const newLawsCount = lawsDatabase.newLaws.length;
    document.getElementById('totalLaws').textContent = newLawsCount;
}

// Helper functions
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('cs-CZ');
}

function truncate(text, length) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
