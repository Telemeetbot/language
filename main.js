document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const lang = this.getAttribute('data-lang');
            
            const wave = this.querySelector('.wave-effect');
            wave.style.animation = 'wave 0.6s linear';
            wave.style.opacity = '0';
            
            wave.addEventListener('animationend', () => {
                wave.style.animation = '';
                wave.style.opacity = '';
            });
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            optionCards.forEach(c => {
                if (c !== this) {
                    c.style.transform = 'scale(0.9)';
                    c.style.opacity = '0.5';
                    c.style.filter = 'blur(2px)';
                }
            });
            
            
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
            
            
            if (lang === 'en') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#4361ee', '#3a0ca3', '#4895ef', '#4cc9f0']
                });
            }
            
            setTimeout(() => {
                if (lang === 'en') {
                    window.location.href = 'https://saimaunglenn.pythonanywhere.com/';
                } else {
                    window.location.href = 'https://lennfx.pythonanywhere.com/';
                }
            }, 1000);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(20);
                opacity: 0;
            }
        }
        @keyframes wave {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
        }
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            width: 10px;
            height: 10px;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'rotate(10deg) scale(1.1)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'rotate(0) scale(1)';
    });
});