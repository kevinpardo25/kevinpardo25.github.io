const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre Mí",
        nav_experiencia: "Experiencia",
        nav_habilidades: "Habilidades",
        nav_contacto: "Contacto",
        hero_title: '<span class="gradient-text">Kevin Pardo</span><br>Software Engineer',
        hero_p: "Especialista en la arquitectura de sistemas escalables y de alto rendimiento. Con una sólida trayectoria en el ecosistema <strong>Java, Spring Boot y microservicios</strong>, diseño soluciones robustas centradas en el rigor técnico, la seguridad avanzada y la optimización continua de procesos operativos.",
        hero_btn_exp: "Ver Experiencia",
        hero_btn_contact: "Contactar",
        about_title: "Sobre Mí",
        about_p1: "Ingeniero de Sistemas con una trayectoria consolidada en la arquitectura y desarrollo de soluciones backend de alta disponibilidad. Especialista en el ecosistema Java y Spring Boot, mi enfoque profesional se sustenta en tres pilares fundamentales: <strong>seguridad rigurosa, automatización estratégica y escalabilidad eficiente</strong>.",
        about_p2: "A lo largo de mi carrera en entornos de alta exigencia, incluyendo el sector bancario y la consultoría tecnológica avanzada, he demostrado una capacidad excepcional para transformar requisitos complejos en sistemas técnicos robustos y mantenibles. Mi compromiso con la <strong>excelencia técnica y el Código Limpio (Clean Code)</strong> me permite entregar soluciones que trascienden el código funcional, optimizando el rendimiento del negocio y minimizando la deuda técnica. Soy un profesional proactivo con habilidades de liderazgo contrastadas, habituado a la toma de decisiones críticas y a impulsar equipos de alto rendimiento hacia la innovación tecnológica.",
        exp_title: "Experiencia Profesional",
        exp_date1: "Jul 2024 – Actualidad",
        exp_role1: "Analista de Sistema",
        exp_company1: "Ditech Group",
        exp_desc1: "Liderando iniciativas de análisis técnico y desarrollo de soluciones robustas para el ecosistema corporativo.",
        exp_date2: "Ene 2023 – Jul 2024",
        exp_role2: "Desarrollador Sénior",
        exp_company2: "Bahia Software",
        exp_desc2: "Desarrollo de microservicios escalables utilizando arquitecturas modernas.",
        exp_date3: "Oct 2022 – Nov 2022",
        exp_role3: "Desarrollador Back-end Spring Boot",
        exp_company3: "IN2 INGENIERIA DE LA INFORMACION",
        exp_desc3: "Implementación de servicios backend y aseguramiento de calidad mediante pruebas unitarias.",
        exp_date4: "Ene 2022 – Oct 2022",
        exp_role4: "Analista de Desarrollo Especializado 2",
        exp_company4: "Banco AV Villas",
        exp_desc4: "Desarrollo de integraciones bancarias críticas y mantenimiento de sistemas legacy.",
        skills_title: "Tech Stack",
        skills_cat1: "Backend & Core",
        skills_cat2: "Bases de Datos",
        skills_cat3: "DevOps & QA",
        contact_title: "Hablemos",
        contact_p: "¿Interesado en trabajar conmigo o simplemente quieres conectar?",
        contact_btn_li: "LinkedIn Profile",
        contact_btn_mail: "Enviar Email",
        footer_text: "&copy; 2026 Kevin Pardo - Desarrollado con Foco y Precisión"
    },
    en: {
        nav_inicio: "Home",
        nav_sobre_mi: "About",
        nav_experiencia: "Experience",
        nav_habilidades: "Skills",
        nav_contacto: "Contact",
        hero_title: '<span class="gradient-text">Kevin Pardo</span><br>Software Engineer',
        hero_p: "Specialist in scalable and high-performance system architecture. With a solid track record in the <strong>Java, Spring Boot, and microservices</strong> ecosystem, I design robust solutions centered on technical rigor, advanced security, and continuous optimization of operational processes.",
        hero_btn_exp: "View Experience",
        hero_btn_contact: "Contact Me",
        about_title: "About Me",
        about_p1: "Systems Engineer with a consolidated career in the architecture and development of high-availability backend solutions. Specialist in the Java and Spring Boot ecosystem, my professional approach is based on three fundamental pillars: <strong>rigorous security, strategic automation, and efficient scalability</strong>.",
        about_p2: "Throughout my career in high-demand environments, including the banking sector and advanced technology consulting, I have demonstrated an exceptional ability to transform complex requirements into robust and maintainable technical systems. My commitment to <strong>technical excellence and Clean Code</strong> allows me to deliver solutions that transcend functional code, optimizing business performance and minimizing technical debt. I am a proactive professional with proven leadership skills, accustomed to making critical decisions and driving high-performance teams towards technological innovation.",
        exp_title: "Professional Experience",
        exp_date1: "Jul 2024 – Present",
        exp_role1: "System Analyst",
        exp_company1: "Ditech Group",
        exp_desc1: "Leading technical analysis initiatives and developing robust solutions for the corporate ecosystem.",
        exp_date2: "Jan 2023 – Jul 2024",
        exp_role2: "Senior Developer",
        exp_company2: "Bahia Software",
        exp_desc2: "Developing scalable microservices using modern architectures.",
        exp_date3: "Oct 2022 – Nov 2022",
        exp_role3: "Spring Boot Backend Developer",
        exp_company3: "IN2 INGENIERIA DE LA INFORMACION",
        exp_desc3: "Implementation of backend services and quality assurance through unit testing.",
        exp_date4: "Jan 2022 – Oct 2022",
        exp_role4: "Specialized Development Analyst 2",
        exp_company4: "Banco AV Villas",
        exp_desc4: "Development of critical banking integrations and maintenance of legacy systems.",
        skills_title: "Tech Stack",
        skills_cat1: "Backend & Core",
        skills_cat2: "Databases",
        skills_cat3: "DevOps & QA",
        contact_title: "Let's Talk",
        contact_p: "Interested in working with me or just want to connect?",
        contact_btn_li: "LinkedIn Profile",
        contact_btn_mail: "Send Email",
        footer_text: "&copy; 2026 Kevin Pardo - Developed with Focus & Precision"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    const setLanguage = (lang) => {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
        
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    const savedLang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang') || 'es';
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // Scroll reveal observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    const getCurrentTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'light') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    };

    // Load saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        const newTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Smooth scroll for nav links (updated selector for wrap)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
