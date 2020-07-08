var $stickyBlock = document.querySelector('.nav');
var origOffsetY = $stickyBlock.offsetTop - 15; // 15 is your top margin

function onScroll() {
    window.scrollY >= origOffsetY ? $stickyBlock.classList.add('sticky') :
        $stickyBlock.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);

