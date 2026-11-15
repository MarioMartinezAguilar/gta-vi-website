import gsap from 'gsap';

// Animación del menú
const menu = document.querySelector('.menu-overlay');
const menuButton = document.querySelector('.navbar-menu');
const closeButton = document.querySelector('.menu-close');
const menuTl = gsap.timeline({ paused: true });

/*Animation del menú gta */
menuTl.fromTo(menu,
    {
        x:'-100%',
        autoAlpha:0
    },
    {
        x:'0%',
        autoAlpha:1,
        duration:0.8,
        ease: 'power3.out'
    }
    
);

// Después aparece el panel derecho
menuTl.fromTo('.menu-principal',
    {
        x: '100%',
        autoAlpha: 0
    },
    {
        x: '0%',
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.1'
);

/*animación escalonada en los enlaces del menu */
menuTl.from('.menu-principal nav a',{
    opacity:0,
    x:40,
    duration:1,
    stagger:0.20,
    ease:'power2.out'

});
/*Eventos click en el menú */
menuButton.addEventListener('click',()=>{
    menuTl.play();
});

/*cerrar el menú*/
closeButton.addEventListener('click',()=>{
    menuTl.reverse();
});

// Mostrar el banner en las páginas secundarias
gsap.set('.promo-banner-wrapper', {
    height: 70
});