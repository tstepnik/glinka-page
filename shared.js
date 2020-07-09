var $stickyBlock = document.querySelector('.nav');
var origOffsetY = $stickyBlock.offsetTop - 15; // 15 is your top margin

function onScroll() {
    window.scrollY >= origOffsetY ? $stickyBlock.classList.add('sticky') :
        $stickyBlock.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);



//MOBILE NAV

var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', showMobileNav)
backdrop.addEventListener('click', quitMobileMenu);

function showMobileNav() {
    mobileNav.style.display='block';
    backdrop.style.display='block';
    setTimeout(addOpenClass,10);
}
function quitMobileMenu() {
    setTimeout(removeMobileNav,10);
    closeModal();
}


function removeMobileNav() {
    mobileNav.classList.remove('open');
}

function addOpenClass() {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
}

function noneBackdrop() {
    backdrop.style.display='none';
}

function closeModal() {
    backdrop.classList.remove('open');
    setTimeout(noneBackdrop,10)
}

//MOBILE NAV