class Main {
    constructor() {
        this.initIsotope();
        this.initProfileModal();
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
            }, 1000);
        }
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