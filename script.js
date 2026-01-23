// Translations
const translations = {
    en: {
        page_title: "Can Arkadaş Deliktaş | Cyber Security & Development",

        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_role_text: "< Junior Cyber Security | Open Source Contributor />",
        hero_greeting_text: "Hi, I'm Can Arkadaş Deliktaş",

        hero_bio: "I am a developer dedicated to building secure, efficient, and open-source solutions. My focus ranges from cybersecurity tools to full-stack web applications, always aiming for precision and innovation.",
        hero_cta: "View Latest Work",

        spotlight_title: "Recently Crafted Project",
        version_latest: "LATEST RELEASE",
        version_legacy: "LEGACY VERSION",

        passforge_pro_desc: "Forged in the fires of advanced cryptography. PassForge Pro is a zero-knowledge vault environment designed to withstand even the most aggressive analysis. Our architecture ensures that even in the event of a total system compromise, your data remains inaccessible to unauthorized entities.",

        passforge_desc: "The foundation. A robust CLI tool that started it all.",

        feat_entropy: "High Entropy",
        feat_clipboard: "Clipboard Safe",
        feat_gui: "GUI & CLI",

        try_now: "Launch PassForge Pro",
        view_project: "View Legacy",

        skills_title: "Learned Doctrines",
        initiatives_title: "My Works",

        stats_title: "GitHub Stats",
        langs_title: "Most Used Programming Languages",
        quote_title: "Random Dev Quote",

        contact_title: "Contact for more",
        contact_email_btn: "Email Me",
        footer_rights: "All rights reserved.",

        // Titles
        proj_pf_pro: "PassForge Pro",
        proj_pf: "PassForge",
        proj_cyber: "Cybersecurity Tools",
        proj_os: "Contributing to Open Source",
        proj_web: "Web Development",
        proj_func: "Functional and Practical Programs",
        proj_ai: "Artificial Intelligence and Machine Learning"
    },
    tr: {
        page_title: "Can Arkadaş Deliktaş | Siber Güvenlik & Geliştirme",

        nav_projects: "Projeler",
        nav_contact: "İletişim",

        hero_role_text: "< Junior Siber Güvenlik | Açık Kaynak Geliştirici />",
        hero_greeting_text: "Merhaba, Ben Can Arkadaş Deliktaş",

        hero_bio: "Güvenli, verimli ve açık kaynaklı çözümler oluşturmaya kendini adamış bir geliştiriciyim. Odak noktam, siber güvenlik araçlarından tam yığın web uygulamalarına kadar uzanıyor ve her zaman hassasiyet ve yeniliği hedefliyorum.",
        hero_cta: "Son Çalışmaları Gör",

        spotlight_title: "Son Geliştirilen Proje",
        version_latest: "EN YENİ SÜRÜM",
        version_legacy: "ESKİ SÜRÜM",

        passforge_pro_desc: "Gelişmiş kriptografinin ateşinde yapıldı. PassForge Pro, en saldırgan analizlere bile dayanabilecek şekilde tasarlanmış, sıfır açıklı bir kasa ortamıdır. Mimarimiz, sistemin tamamen ele geçirilmesi durumunda bile verilerinizin yetkisiz kişi ve kurumlar için erişilemez kalmasını sağlar.",

        passforge_desc: "Temel. Her şeyi başlatan sağlam bir CLI aracı.",

        feat_entropy: "Yüksek Entropi",
        feat_clipboard: "Güvenli Pano",
        feat_gui: "Arayüz & Komut Satırı",

        try_now: "PassForge Pro'yu Başlat",
        view_project: "Eski Sürümü Gör",

        skills_title: "Bildiğim Öğretiler",
        initiatives_title: "Çalışmalarım",

        stats_title: "GitHub İstatistikleri",
        langs_title: "En Çok Kullanılan Programlama Dilleri",
        quote_title: "Rastgele Geliştirici Sözü",

        contact_title: "Daha fazlası için iletişim",
        contact_email_btn: "Bana E-posta Gönder",
        footer_rights: "Tüm hakları saklıdır.",

        // Titles
        proj_pf_pro: "PassForge Pro",
        proj_pf: "PassForge",
        proj_cyber: "Siber Güvenlik Araçları",
        proj_os: "Açık Kaynağa Katkı",
        proj_web: "Web Geliştirme",
        proj_func: "İşlevsel ve Pratik Programlar",
        proj_ai: "Yapay Zeka ve Makine Öğrenimi"
    }
};

// Projects Data
const projects = [
    {
        titleKey: "proj_pf_pro",
        desc_en: "The ultimate evolution. Engineered for paranoia-grade security. Features advanced entropy analysis, seamless clipboard integration, and a highly customizable engine.",
        desc_tr: "Paranoya düzeyinde güvenlik için tasarlandı. Gelişmiş entropi analizi, sorunsuz pano entegrasyonu ve oldukça özelleştirilebilir bir motor içerir.",
        tags: ["Python", "Security", "GUI"],
        link: "https://can-deliktas.github.io/PassForgePro/"
    },
    {
        titleKey: "proj_pf",
        desc_en: "A powerful and customizable password generator and strength evaluator written in Python, focused on enhancing password security through easy-to-use features like strength evaluation and clipboard integration.",
        desc_tr: "Python ile yazılmış, güç değerlendirmesi ve pano entegrasyonu gibi kullanımı kolay özelliklerle şifre güvenliğini artırmaya odaklanan güçlü ve özelleştirilebilir bir şifre oluşturucu ve güç değerlendiricisi.",
        tags: ["Python", "Security", "CLI"],
        link: "https://can-deliktas.github.io/PassForge/"
    },
    {
        titleKey: "proj_cyber",
        desc_en: "Developing various scripts and tools to analyze and secure systems, as well as exploring vulnerabilities and solutions.",
        desc_tr: "Sistemleri analiz etmek ve güvence altına almak için çeşitli komut dosyaları ve araçlar geliştirmek, ayrıca güvenlik açıklarını ve çözümleri keşfetmek.",
        tags: ["Bash", "Python", "Network"],
        link: "https://github.com/can-deliktas?tab=repositories"
    },
    {
        titleKey: "proj_os",
        desc_en: "Actively contributing to projects related to cybersecurity and privacy, sharing knowledge, and enhancing community-driven tools.",
        desc_tr: "Siber güvenlik ve gizlilikle ilgili projelere aktif olarak katkıda bulunmak, bilgi paylaşmak ve topluluk odaklı araçları geliştirmek.",
        tags: ["Open Source", "Community"],
        link: "https://github.com/can-deliktas"
    },
    {
        titleKey: "proj_web",
        desc_en: "Exploring full-stack development with a focus on security, aiming to create secure and optimized web applications.",
        desc_tr: "Güvenli ve optimize edilmiş web uygulamaları oluşturmayı hedefleyerek güvenliğe odaklanan tam yığın geliştirmeyi keşfetmek.",
        tags: ["HTML/CSS", "JS", "Security"],
        link: "https://github.com/can-deliktas?tab=repositories"
    },
    {
        titleKey: "proj_func",
        desc_en: "Working on functional programs and developing applications that simplify daily computer tasks and improve productivity.",
        desc_tr: "İşlevsel programlar üzerinde çalışmak ve günlük bilgisayar görevlerini basitleştiren ve üretkenliği artıran uygulamalar geliştirmek.",
        tags: ["Automation", "Tools"],
        link: "https://github.com/can-deliktas?tab=repositories"
    },
    {
        titleKey: "proj_ai",
        desc_en: "Exploring intelligent systems that solve real-world problems efficiently, experimenting with adaptive AI models, and applying AI techniques in cybersecurity, automation, and data analysis to create innovative, practical, and cutting-edge solutions.",
        desc_tr: "Gerçek dünya sorunlarını verimli bir şekilde çözen akıllı sistemleri keşfetmek, uyarlanabilir yapay zeka modelleriyle deneyler yapmak ve yenilikçi, pratik ve son teknoloji çözümler oluşturmak için siber güvenlik, otomasyon ve veri analizinde yapay zeka tekniklerini uygulamak.",
        tags: ["AI", "ML", "Python"],
        link: "https://github.com/can-deliktas?tab=repositories"
    }
];

let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initial Render
    updateLanguage(currentLang);
    setRandomBackground();

    // Listeners
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
});

// V9: Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
});

// Safety fallback
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.opacity !== '0') {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
}, 3000); // 3 seconds max

// Language Logic
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    updateLanguage(newLang);
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update Title
    if (translations[lang].page_title) {
        document.title = translations[lang].page_title;
    }

    // Static Text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Toggle Btn
    const langBtn = document.getElementById('lang-toggle');
    langBtn.innerHTML = lang === 'en'
        ? '<span class="active-lang">EN</span> / <span>TR</span>'
        : '<span>EN</span> / <span class="active-lang">TR</span>';

    // Re-render Projects
    renderProjects();

    // Restart Typing Animation
    typeWriterEffect();
}

// Projects
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'initiative-card';
        // Get title form key
        const title = translations[currentLang][project.titleKey] || project.titleKey;
        const desc = currentLang === 'en' ? project.desc_en : (project.desc_tr || project.desc_en);

        card.innerHTML = `
            <a href="${project.link}" target="_blank">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="tech-tag-container" style="display:flex; gap:4px; margin-top: auto;">
                    ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Typing Animation - Clean Inline Logic
let typeInterval;
function typeWriterEffect() {
    const titleEl = document.getElementById('typing-title');
    const subEl = document.getElementById('typing-subtitle');

    // Clear previous
    if (typeInterval) clearInterval(typeInterval);
    titleEl.textContent = '';
    subEl.textContent = '';

    const targetTitle = translations[currentLang].hero_greeting_text;
    const targetSub = translations[currentLang].hero_role_text;

    let charIndex = 0;

    // Set blinking cursor next to title

    typeInterval = setInterval(() => {
        if (charIndex < targetTitle.length) {
            titleEl.textContent += targetTitle.charAt(charIndex);
            charIndex++;
        } else {
            // Typing done for title.
            clearInterval(typeInterval);
            subEl.textContent = targetSub;
        }
    }, 50);
}

// Background
function setRandomBackground() {
    const bgOverlay = document.getElementById('bg-overlay');
    const backgrounds = [
        'bg_1_1769187119450.png', 'bg_2_1769187134657.png',
        'bg_3_1769187150685.png', 'bg_4_1769187256809.png',
        '1.jpg', '2.jpg', '3.jpg', '4.jpg'
    ];
    // Simple random
    const randomImg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    const img = new Image();
    img.src = `image/${randomImg}`;
    img.onload = () => {
        bgOverlay.style.backgroundImage = `url('image/${randomImg}')`;
    };
}
