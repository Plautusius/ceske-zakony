// ===== Law Detail Page JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    // Get law ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const lawId = urlParams.get('id');

    if (!lawId) {
        showError('Zákon nebyl nalezen');
        return;
    }

    // Find the law
    const law = findLaw(lawId);

    if (!law) {
        showError('Zákon s tímto ID nebyl nalezen');
        return;
    }

    // Render the law
    renderLaw(law);

    // Initialize controls
    initControls(law);
    initThemeToggle();
});

// Find law in database
function findLaw(id) {
    // Check new laws
    let law = lawsDatabase.newLaws.find(l => l.id === id);
    if (law) return law;

    // Check old laws
    law = lawsDatabase.oldLaws.find(l => l.id === id);
    return law;
}

// Render law details
function renderLaw(law) {
    // Update page title
    document.title = `${law.title} - České Zákony`;

    // Breadcrumb
    document.getElementById('breadcrumbTitle').textContent = law.number + ' Sb.';

    // Badges
    if (law.isNew) {
        document.getElementById('badgeNew').style.display = 'inline-block';
    }

    const typeNames = {
        'zakon': 'Zákon',
        'ustavni_zakon': 'Ústavní zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení vlády'
    };
    document.getElementById('badgeType').textContent = typeNames[law.type] || 'Předpis';

    const categoryName = lawsDatabase.categories[law.category] || law.category;
    document.getElementById('badgeCategory').textContent = categoryName;

    // Title
    document.getElementById('lawTitle').textContent = law.title;

    if (law.fullTitle && law.fullTitle !== law.title) {
        document.getElementById('lawFullTitle').textContent = law.fullTitle;
    }

    // Meta
    document.getElementById('lawNumber').textContent = law.number + ' Sb.';
    document.getElementById('lawPublished').textContent = law.published ? formatDate(law.published) : '-';
    document.getElementById('lawEffective').textContent = formatDate(law.effective);

    // Description
    document.getElementById('lawDescription').textContent = law.description;

    // Key Points
    if (law.keyPoints && law.keyPoints.length > 0) {
        const keyPointsSection = document.getElementById('keyPointsSection');
        const keyPointsList = document.getElementById('keyPointsList');

        keyPointsSection.style.display = 'block';
        keyPointsList.innerHTML = law.keyPoints.map(point => `<li>${point}</li>`).join('');
    }

    // Full Text
    if (law.hasFullText && law.fullText) {
        const fullTextSection = document.getElementById('fullTextSection');
        const fullTextContent = document.getElementById('fullTextContent');

        fullTextSection.style.display = 'block';
        fullTextContent.textContent = law.fullText;
    }

    // PDF Download
    if (law.hasPdf && law.pdfUrl) {
        const downloadBtn = document.getElementById('downloadPdf');
        downloadBtn.style.display = 'inline-flex';
        downloadBtn.href = law.pdfUrl;
        downloadBtn.download = `${law.id}.pdf`;
    }

    // External Link - only for OLD laws
    const externalLinkBtn = document.getElementById('externalLink');
    if (!law.isNew && law.externalUrl) {
        externalLinkBtn.href = law.externalUrl;
        externalLinkBtn.style.display = 'inline-flex';
    } else {
        externalLinkBtn.style.display = 'none';
    }

    // Old Law Notice - only for old laws
    if (!law.isNew) {
        document.getElementById('oldLawNotice').style.display = 'block';
        if (law.externalUrl) {
            document.getElementById('oldLawLink').href = law.externalUrl;
        }
    }
}

// Initialize controls
function initControls(law) {
    // Copy link
    document.getElementById('copyLink').addEventListener('click', function() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Odkaz zkopírován do schránky');
        }).catch(() => {
            showToast('Nepodařilo se zkopírovat odkaz');
        });
    });

    // Font size controls
    const fullTextContent = document.getElementById('fullTextContent');
    let fontSize = 0.9;

    document.getElementById('increaseFont').addEventListener('click', function() {
        fontSize = Math.min(fontSize + 0.1, 1.4);
        fullTextContent.style.fontSize = fontSize + 'rem';
    });

    document.getElementById('decreaseFont').addEventListener('click', function() {
        fontSize = Math.max(fontSize - 0.1, 0.7);
        fullTextContent.style.fontSize = fontSize + 'rem';
    });

    // Toggle width
    document.getElementById('toggleWidth').addEventListener('click', function() {
        fullTextContent.classList.toggle('wide');
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

// Format date
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('cs-CZ');
}

// Show error
function showError(message) {
    document.getElementById('lawTitle').textContent = message;
    document.getElementById('lawHeader').innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <span style="font-size: 3rem;">⚠️</span>
            <h2 style="margin-top: 16px;">${message}</h2>
            <a href="index.html" style="color: var(--accent-primary); margin-top: 16px; display: inline-block;">
                Zpět na přehled zákonů
            </a>
        </div>
    `;
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
