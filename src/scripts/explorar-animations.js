import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const  sections = document.querySelectorAll('.explorar-section');

sections.forEach((section) => {
    const image = section.querySelector('.explorar-image');

    if(!image) return;

    gsap.fromTo(image,
        {
            yPercent:-20,
            scale:1.3,
        },
        {
            yPercent:20,
            scale: 1.3,
            ease: 'none',
            scrollTrigger:{
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                
            },

        }
    );

});
sections.forEach((section)=>{
    const subtitle = section.querySelector('.explorar-subtitle');
    const title = section.querySelector('.explorar-title');
    const description = section.querySelector('.explorar-description');

    const textElements = [subtitle,title,description];

    gsap.from(textElements,{
        opacity:0,
        y:40,
        duration:1,
        stagger:0.25,
        ease:'power2.out',
        scrollTrigger:{
            trigger: section,
            start:'top 60%',
            toggleActions: 'play none none reverse'
        },
    });
});

/* gsap.fromTo('.explorar-image',
    {
        scale: 1.15,
        yPercent: -8,
    },
    {
        scale: 1,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
            trigger: '.explorar-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    }
); */