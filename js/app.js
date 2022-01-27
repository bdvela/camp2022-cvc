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
    navigationTooltips: ['Inicio', 'Info', 'Precios', 'Contacto'],
    showActiveTooltip: false,
});
