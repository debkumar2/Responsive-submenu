(() => {
    const openMenu = document.querySelector('.ham-menu'),
        closeMenu = document.querySelector('.ham-close'),
        navMenu = document.querySelector('.nav-links-container'),
        background = document.querySelector('.background'),
        mediaSize = 992;
    const toggleMenu = () => {
        navMenu.classList.toggle('open');
        background.classList.toggle('active')
    }

    openMenu.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    background.addEventListener('click', toggleMenu);
    navMenu.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
            e.preventDefault();
            const dropdownMenuBranch = e.target.parentElement;

            if (dropdownMenuBranch.classList.contains('active')) {
                collapseDropdownMenu();
            }
            else {
                if (navMenu.querySelector('.dropdown-menu-branch.active')) {
                    collapseDropdownMenu();
                }
                dropdownMenuBranch.classList.add('active');
                const dropdownMenu = dropdownMenuBranch.querySelector('.dropdown-menu');
                dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            }
        }
    });

    function collapseDropdownMenu() {
        navMenu.querySelector('.dropdown-menu-branch.active .dropdown-menu').removeAttribute('style');
        navMenu.querySelector('.dropdown-menu-branch.active').classList.remove('active');

    }

})();
