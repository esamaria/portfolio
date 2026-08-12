/**
 * AAA Cyber-Portfolio Interactive Script - Esa Maria Shyju
 */

// B1: Data Store - Projects JavaScript Array of Objects
const projectsData = [
    {
        id: 1,
        title: "AI-Powered GitHub Dev Assistant",
        category: "ai",
        description: "An AI developer productivity platform analyzing commits, detecting security risks, and generating automated PR code fixes using LLMs.",
        technologies: ["Python", "LLM", "Streamlit", "System Design"],
        image: "images/project1.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop",
        repoLink: "https://github.com/sonadarshan99/ai-github-dev-assistant"
    },
    {
        id: 2,
        title: "Healthcare Cost Prediction Platform",
        category: "ai",
        description: "Predictive analytics machine learning platform using Random Forest to estimate personal medical expenses with a Streamlit interface.",
        technologies: ["Machine Learning", "Python", "Random Forest", "Streamlit"],
        image: "images/project2.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop",
        repoLink: "https://github.com/sonadarshan99/health-app"
    },
    {
        id: 3,
        title: "Network Intrusion Detection using ANN",
        category: "ai",
        description: "Intelligent cybersecurity detection system utilizing Artificial Neural Networks to classify and prevent malicious network activity.",
        technologies: ["ANN", "Cybersecurity", "Python", "Data Analysis"],
        image: "images/project3.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop",
        repoLink: "https://github.com/sonadarshan99/network-intrusion-detection-ann"
    },
    {
        id: 4,
        title: "Library Management System",
        category: "web",
        description: "Full-stack web application built using the MERN stack featuring user authentication, catalog management, and REST APIs.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
        image: "images/project4.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop",
        repoLink: "https://github.com/sonadarshan99/bookstoreapp-frontend"
    }
];

// Interactive Cursor Spotlight
const cursorDot = document.getElementById('cursorDot');
const cursorGlow = document.getElementById('cursorGlow');

window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

// Sound FX Synthesizer (Web Audio API)
let soundEnabled = true;
const soundToggle = document.getElementById('soundToggle');

const playBeep = (freq = 600, duration = 0.05) => {
    if (!soundEnabled) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.value = freq;
        gain.gain.value = 0.02;
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) { console.log(e); }
};

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
});

// Matrix Binary Digital Rain Effect
const initMatrixCanvas = () => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01100101010101010111001";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
        ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#06b6d4';
        ctx.font = `${fontSize}px Fira Code`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    setInterval(draw, 33);
};

// 3D Perspective Tilt Effect on Glass Cards
const init3DTilt = () => {
    const cards = document.querySelectorAll('.3d-tilt');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
};

// Interactive Command Line Terminal Simulator
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            playBeep(800, 0.04);
            const cmd = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';

            const line = document.createElement('p');
            line.className = 'term-line';
            line.innerHTML = `<span class="term-prompt">esa@portfolio:~$</span> ${cmd}`;
            terminalOutput.appendChild(line);

            let resp = '';
            if (cmd === 'help') {
                resp = 'Available commands: <span class="term-highlight">about, skills, projects, contact, clear</span>';
            } else if (cmd === 'about') {
                resp = 'Esa Maria Shyju | B.Tech CSE Student @ MBCET | CGPA: 9.32/10';
            } else if (cmd === 'skills') {
                resp = 'Languages: Python, Java, C, MERN Stack (MongoDB, Express, React, Node.js), PyTorch, LLMs.';
            } else if (cmd === 'projects') {
                resp = 'Projects: 1. AI GitHub Dev Assistant | 2. Healthcare Cost Predictor | 3. ANN Intrusion Detection';
            } else if (cmd === 'contact') {
                resp = 'Email: esamariashyju.b23cs1129@mbcet.ac.in | Tel: +91-7306177237';
            } else if (cmd === 'clear') {
                terminalOutput.innerHTML = '';
                return;
            } else {
                resp = `Command not recognized: '${cmd}'. Type <span class="term-highlight">'help'</span>.`;
            }

            const respLine = document.createElement('p');
            respLine.className = 'term-line';
            respLine.innerHTML = resp;
            terminalOutput.appendChild(respLine);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
}

// Typewriter Effect
const phrases = ["AI Assistant Systems.", "MERN Stack Engines.", "Machine Learning Pipelines."];
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

const typeLoop = () => {
    const current = phrases[phraseIdx];
    typewriterEl.textContent = isDeleting 
        ? current.substring(0, charIdx--) 
        : current.substring(0, charIdx++);

    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === current.length + 1) {
        speed = 2000; isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 500;
    }
    setTimeout(typeLoop, speed);
};

// Render Projects dynamically
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

const renderProjects = (filter = 'all') => {
    projectsGrid.innerHTML = '';
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
        const cardHTML = `
            <article class="project-card 3d-tilt">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='${project.fallbackImage}'">
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <a href="${project.repoLink}" target="_blank" rel="noopener" class="btn primary-glow-btn">Explore Code →</a>
                </div>
            </article>
        `;
        projectsGrid.innerHTML += cardHTML;
    });
    init3DTilt();
};

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playBeep(400, 0.05);
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProjects(e.target.getAttribute('data-filter'));
    });
});

// Theme Persistence
const themeToggle = document.getElementById('themeToggle');
const initTheme = () => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
};

themeToggle.addEventListener('click', () => {
    playBeep(900, 0.05);
    const curr = document.documentElement.getAttribute('data-theme');
    const target = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('portfolio-theme', target);
    themeToggle.textContent = target === 'dark' ? '☀️' : '🌙';
});

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('name').value.trim();
    const emailVal = document.getElementById('email').value.trim();
    const msgVal = document.getElementById('message').value.trim();

    if (nameVal && emailVal && msgVal) {
        playBeep(1200, 0.1);
        document.getElementById('formSuccess').textContent = 'Signal transmitted successfully!';
        contactForm.reset();
        setTimeout(() => document.getElementById('formSuccess').textContent = '', 4000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initMatrixCanvas();
    typeLoop();
    renderProjects('all');
    initTheme();
    init3DTilt();
});