import gsap from 'gsap';

const  tl =gsap.timeline();



//animación al título
tl.from('.personajes-title',{
    opacity:0,
    y:20,
    filter: 'blur(4px)',
    duration:2,
    ease:'power2.out',
});
//animación de las tarjetas
tl.from('.personaje-card', {
    opacity: 0,
    scale: 1.15,
    y: 30,
    duration: 1.8,
    stagger: 0.4,
    ease: 'power2.out',
    
},'-=1'); //esta animación se ejecuta cuando el titulo tiene un segundo de duración