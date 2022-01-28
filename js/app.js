const sectionsPerPage = new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,

    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'info', 'precios', 'contacto'],
    parallax: true,

    navigationTooltips: ['Inicio', 'Info', 'Precios', 'Contacto'],
    showActiveTooltip: false,
    sectionsColor: ['#000', '#000', '#000'],
    verticalCentered: true,
    controlArrows: true,
    slidesNavigation: true,
    afterLoad: function (origin, destination) {
        if (destination.anchor == 'contacto') {
            document.querySelector('.contacto').querySelector('h2').style.opacity = 1;
        }
    },
});
