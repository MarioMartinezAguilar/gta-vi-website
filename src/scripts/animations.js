
import  gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

//creamos el plugin
gsap.registerPlugin(ScrollTrigger);

const banner = document.querySelector('.promo-banner');
const glow = document.querySelector('.promo-glow');


gsap.set('.trailer-section', {
    autoAlpha: 0,
    clipPath: 'inset(50% 50% 50% 50%)'
});

const tl = gsap.timeline();
//brillo del banner
//línea del tiempo para el scrollTrigger
const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: '+=1500',
        scrub: true,
        pin: true,
    
    }
});
//el mosaico se aleja y desaparece
scrollTl.to('.mosaico-frame',{
    scale:0.7,
    y:-80,
    opacity:0,
    duration:1,
    ease:'power2.in'
});
// ReleaseSection también desaparece
scrollTl.to('.release-section', {
    duration: 0.7,
    opacity: 0,
    y: 60,
    ease: 'power2.in'
}, '<0.2');

// Aparece el tráiler
scrollTl.to('.trailer-section', {
    autoAlpha: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    pointerEvents: 'auto',
    duration: 1.5,
    ease: 'power2.out'
}, '-=0.2');
// Navegación directa al tráiler desde el menú
const trailerLink = document.querySelector('a[href="/#trailer"]');

trailerLink?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.menu-close')?.click();


    ScrollTrigger.refresh();

    const trailerPosition = scrollTl.scrollTrigger.end;

    window.scrollTo({
        top: trailerPosition,
        behavior: 'smooth'
    });
});
// Comprobar si llegamos desde el enlace Tráiler

    if(window.location.hash === '#trailer'){
        const  goToTrailer = () =>{
            ScrollTrigger.refresh();
            const trailerPosition = scrollTl.scrollTrigger.end;

            window.scrollTo({
                top: trailerPosition,
                behavior: 'smooth'
            });

        }
        
        if(tl.progress()=== 1){
            goToTrailer();
        }else{
            tl.eventCallback('onComplete', goToTrailer);
        }

    }

//entrada de las tarjetas
gsap.from('.card-item',{
    opacity:0,
    y:60,
    stagger:0.5,
    duration:1.4,
    ease:'power3.out',
    scrollTrigger:{
        trigger:'.card-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }

});


gsap.to('.promo-glow', {
    opacity: 1,
    duration: 7,
    ease: 'power1.inOut'
});


tl.from('.shard',{
    opacity:0,
    y:30,
    scale:0.96,
    duration:0.8,
    stagger:0.12,
    ease: 'power3.out'
});

tl.fromTo('.mosaico-frame',
    {
        borderColor: 'transparent'
    },
    {
        borderColor: '#21002f',
        duration: 1.2,
        ease: 'power2.out'
    }
);



tl.from('.logo-vi',{
    opacity:0,
    scale:0.5,
    duration:1.,
    ease:'power3.out'
});
tl.fromTo('.logo-gta',
    {
        clipPath:'inset(0 0 100% 0)'
    },
    {
        clipPath: 'inset(0 0 0% 0)',
        duration:2.5,
        ease:'power2.out'
    }
)
//brillo en el centro del mosaico
tl.fromTo('.logo-flare',
    {
        opacity: 0,
        scale: 0.6
    },
    {
        opacity: 0.8,
        scale: 1.15,
        duration: 0.35,
        ease: 'power2.out'
    }
);

tl.to('.logo-flare', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});
//animación de entrada del release al final
tl.from('.release-section',{
    opacity:0,
    duration:1.5,
    ease:'power2.out'
});

//animación en el navbar
tl.from('.navbar-content', {
    opacity:0,
    duration: 0.8,
    ease:'power2.out'
})
tl.to('.promo-banner-wrapper', {
    height: 70,
    duration: 0.8,
    ease: 'power3.out'
}, '-=1.2');

tl.from('.promo-banner', {
    y: -70,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '<');




banner.addEventListener('mouseenter', () => {
    gsap.to(glow, {
        scale: 1.2,
        filter: 'brightness(1.5)',
        duration: 0.5,
        ease: 'power2.out'
    });
});

banner.addEventListener('mouseleave', () => {
    gsap.to(glow, {
        scale: 1,
        filter: 'brightness(1)',
        duration: 0.5,
        ease: 'power2.out'
    });
});

//Pulso continuo de la flecha
gsap.to('.release-arrow',{
    filter: 'brightness(1.8) drop-shadow(0 0 6px #f4b5ca)',
    duration:0.5,
    repeat:-1,
    yoyo:true,
    ease:'power1.inOut'
})

//ScrollTrigger
/* gsap.to('.mosaico-frame',{
    scale:0.8,

    scrollTrigger:{
        trigger:'main',
        start:'top top',
        end: '+=500',
        scrub:true,
        markers:true,
    }
}) */




































 /*import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.caja',{
    opacity:0,
    y:100,
    duration:2.5,
    scrollTrigger:{
        trigger: '.caja',
        start: 'top 80%',
        markers: true
    }
})

/* gsap.from('.titulo', {
    opacity:0,
    y:50,
    duration:2.5,
}); */ 


// Primero aparece la imagen
/* menuTl.fromTo('.menu-image',
    {
        x: '-100%',
        autoAlpha: 0
    },
    {
        x: '0%',
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out'
    }
); */