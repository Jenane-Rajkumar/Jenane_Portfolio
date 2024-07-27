window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 100) {
        document.querySelector('.navbar').classList.add('navbarDark');
    } else {
        document.querySelector('.navbar').classList.remove('navbarDark');
    }
};

document.querySelectorAll('.nav-item').forEach((l) => {
    l.addEventListener('click', () => {
        new bootstrap.Collapse(document.getElementById('navbarSupportedContent')).toggle();
    });
});