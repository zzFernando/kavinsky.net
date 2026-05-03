// ==========================
// FALLOUT TERMINAL PORTFOLIO
// ==========================

document.addEventListener('DOMContentLoaded', function() {
    initializeTerminal();
    addSmoothScrolling();
    addHoverEffects();
    animateRadiationMeter();
    randomizeStats();
    addRandomGlitch();
    playBootSound();
    updateTimeDisplay();
    initializeColorToggle();
});

// ==========================
// TERMINAL INITIALIZATION
// ==========================

function initializeTerminal() {
    const header = document.querySelector('.vault-header h1');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease, transform 1s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 300);
    }

    const sections = document.querySelectorAll('.terminal-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        section.style.transitionDelay = `${index * 0.08}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

// ==========================
// SMOOTH SCROLLING
// ==========================

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================
// HOVER EFFECTS
// ==========================

function addHoverEffects() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==========================
// AUDIO EFFECTS
// ==========================

function playBootSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const beeps = [
            { freq: 800, duration: 100, delay: 500 },
            { freq: 1000, duration: 100, delay: 650 },
            { freq: 1200, duration: 150, delay: 800 }
        ];
        beeps.forEach(beep => {
            setTimeout(() => {
                playBeep(audioContext, beep.freq, beep.duration);
            }, beep.delay);
        });
    } catch (e) {}
}

function playBeep(audioContext, frequency, duration) {
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (e) {}
}

// ==========================
// RADIATION METER
// ==========================

function animateRadiationMeter() {
    const radiationFill = document.querySelector('.radiation-fill');
    if (!radiationFill) return;

    let direction = 1;
    let width = 30;

    setInterval(() => {
        if (width >= 45) direction = -1;
        if (width <= 20) direction = 1;
        width += direction * 0.5;
        radiationFill.style.width = width + '%';
    }, 50);
}

// ==========================
// STAT RANDOMIZER
// ==========================

function randomizeStats() {
    const stats = ['OPTIMAL', 'EXCELLENT', 'GOOD', 'STABLE', 'READY', 'ACTIVE'];

    setInterval(() => {
        const statLines = document.querySelectorAll('.stat-line');
        statLines.forEach(line => {
            if (Math.random() > 0.85 && line.textContent.includes('STATUS:')) {
                const newStat = stats[Math.floor(Math.random() * stats.length)];
                const original = 'STATUS: ' + newStat;
                line.textContent = original;
                line.style.color = 'var(--fallout-amber)';
                setTimeout(() => {
                    line.style.color = '';
                }, 500);
            }
        });
    }, 8000);
}

// ==========================
// RANDOM GLITCH EFFECT
// ==========================

function addRandomGlitch() {
    const header = document.querySelector('.vault-header h1');
    if (!header) return;

    setInterval(() => {
        if (Math.random() < 0.03) {
            header.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 51, 0, 0.5),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 170, 0, 0.5)
            `;
            setTimeout(() => {
                header.style.textShadow = '0 0 10px var(--fallout-green), 0 0 20px var(--fallout-green)';
            }, 100);
        }
    }, 1000);
}

// ==========================
// COLOR THEME TOGGLE
// ==========================

function initializeColorToggle() {
    const toggle = document.getElementById('color-toggle');
    if (!toggle) return;

    const saved = localStorage.getItem('vault-theme');
    if (saved === 'amber') {
        document.body.classList.add('amber-theme');
        updateToggleLabel(true);
    }

    toggle.addEventListener('click', function() {
        const isAmber = document.body.classList.toggle('amber-theme');
        localStorage.setItem('vault-theme', isAmber ? 'amber' : 'green');
        updateToggleLabel(isAmber);
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            playBeep(ctx, isAmber ? 1200 : 800, 100);
        } catch (e) {}
    });

    function updateToggleLabel(isAmber) {
        toggle.querySelector('.toggle-label').textContent = isAmber ? 'GREEN' : 'AMBER';
    }
}

// ==========================
// KEYBOARD SHORTCUTS
// ==========================

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'h') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const menu = document.querySelector('.vault-menu');
        if (menu) {
            menu.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.5)';
            setTimeout(() => { menu.style.boxShadow = ''; }, 1000);
        }
    }
});

// ==========================
// TIME DISPLAY
// ==========================

function updateTimeDisplay() {
    setInterval(() => {
        const now = new Date();
        const t = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.title = `[${t}] Fernando Silveira - AI Researcher`;
    }, 1000);
}

// ==========================
// PAGE VISIBILITY
// ==========================

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            playBeep(ctx, 1000, 150);
        } catch (e) {}
    }
});

// ==========================
// CONSOLE
// ==========================

console.log('%c╔════════════════════════════════╗', 'color: #00ff00; font-weight: bold;');
console.log('%c║ VAULT-TEC ENTERTAINMENT NETWORK ║', 'color: #ffaa00; font-weight: bold;');
console.log('%c╚════════════════════════════════╝', 'color: #00ff00; font-weight: bold;');

function help() {
    console.log('%chelp() - This message', 'color: #00ff00;');
    console.log('%cstats() - Display S.P.E.C.I.A.L. stats', 'color: #00ff00;');
}
window.help = help;

function stats() {
    console.table({
        'Strength': '85%', 'Perception': '90%', 'Endurance': '80%',
        'Charisma': '75%', 'Intelligence': '95%', 'Agility': '88%', 'Luck': '92%'
    });
}
window.stats = stats;
