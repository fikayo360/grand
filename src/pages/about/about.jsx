 import './about.css'
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { useRef } from 'react';

 export const About = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    
    useGSAP(() => {
        
        gsap.from('#aboutWrap', {
                duration: 1.5,
                y: '-70vh',
                ease: 'power3.inOut',
        })
      }, { scope: container });

    return (
        <section id='about' ref={container}>
            <div id='aboutWrap'>
            <h1 id='aboutH'>about</h1>
            <p className='aboutp'>
            At Grand Island Construction, we understand that your home is a reflection of your style and personality. 
             We're a full-service construction company dedicated to transforming your living space into a masterpiece. 
            Our team of highly skilled professionals offers a range of services, from design consultations to meticulous execution, ensuring every detail aligns with your vision.
            </p>

            <p className='aboutp'>
            Whether you dream of a fresh coat of paint that revitalizes your walls, or intricate tilework that adds a touch of elegance, 
            Grand Island Construction has the expertise to make it happen. We specialize in design, painting, plastering, tilework, and marble installations,
             utilizing only the finest materials and techniques. 
             Our commitment to quality craftsmanship guarantees a flawless finish that will stand the test of time.
            </p>

            <p className='aboutp'>
            Don't settle for anything less than extraordinary. Contact Grand Island Construction today for a free consultation. 
            Let's collaborate to turn your vision into a reality, and create a space that inspires and delights you for years to come.
            </p> 
            </div>
        </section>
    )
 }