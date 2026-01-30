class Main {
    constructor() {
        this.initIsotope();
        this.initProfileModal();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initMarquee();
        this.initGsapTextAnimation();
    }
    initGsapTextAnimation() {
        gsap.registerPlugin(SplitText);
        const textElement = document.querySelector('.text-animation');
        
        if (textElement) {
            if (typeof SplitText !== 'undefined' && SplitText.create) {
                let split = SplitText.create(textElement, { type: "chars" });
                gsap.set(split.chars, { opacity: 0 });
                gsap.to(split.chars, {
                    opacity: 1,
                    duration: 0,
                    stagger: 0.05,
                });
            }
        }
    }
    initMarquee() {
        const container = document.querySelector('.animate-marquee');
        if (!container) return;

        container.style.display = 'flex';
        container.style.width = 'max-content';

        const items = Array.from(container.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            container.appendChild(clone);
        });

        const contentWidth = container.scrollWidth / 2;

        let position = 0;
        const speed = 1.5;

        const animate = () => {
            position -= speed;
            if (position <= -contentWidth) {
                position = 0;
            }
            container.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }
    initIsotope() {
        const grid = document.querySelector('.grid-projects');
        if (grid) {
            const iso = new Isotope(grid, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.grid-item',
                    gutter: 20
                }
            });
            setTimeout(() => {
                iso.layout();
            }, 2000);
            window.addEventListener('resize', () => {
                iso.layout();
            });
        }
    }
    initMobileMenu() {
        const menuContainer = document.getElementById('mobile-menu');
        const mobileMenuItems = menuContainer ? menuContainer.querySelectorAll('a') : [];
        if (!menuContainer || !mobileMenuItems.length) return;
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuContainer.classList.add('hidden');
            });
        });
    }
    initSmoothScroll() {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
    initProfileModal() {
        const avatar = document.querySelector('#profile-avatar');
        const modal = document.getElementById('profile-modal');
        const closeBtn = document.getElementById('profile-modal-close');
        if (!modal) return;

        const open = () => {
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');
        };
        const close = () => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
        };

        if (avatar) avatar.addEventListener('click', open);
        if (closeBtn) closeBtn.addEventListener('click', close);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) close();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Main();
});