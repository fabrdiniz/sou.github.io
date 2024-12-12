document.getElementById('hamburger').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('open');
});

var menuLinks = document.querySelectorAll('#nav a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.getElementById('nav');
        nav.classList.remove('open');
    });
});