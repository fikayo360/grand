import './extra1.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

const Extra1 = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef();

    useGSAP(() => {
        gsap.from('.bt', {
                scrollTrigger: '#extra', 
                duration: 1,
                opacity:0,
                delay:1,
                ease: "power2.out"
        })
        }, { scope: container });

    return (
        <section id='extra' ref={container}>
                <p id='e' className='bt'>"If I could give vevo studios and his photography business more than five stars,
                     I would do it in a heartbeat! From start to finish, vevo studios has been an absolute dream to work with, and his talent behind the lens is truly unparalleled.

                    From the moment we met vevo studios, it was clear that he wasn't just
                    another photographer – he's a true artist who pours his heart and soul into his craft. 
                    His passion for capturing the beauty and emotion of every moment shines through in every single photograph he takes.

                    Leading up to our big day, vevo studios took the time to understand our vision and preferences, 
                    ensuring that every shot reflected our unique style and personality. On the day of the wedding, vevo studios and his team were an absolute joy to have around – professional, attentive, and incredibly talented.

                    But it's not just about the technical skill – vevo studios has an incredible ability to make you feel comfortable and at
                    ease in front of the camera, capturing the most authentic and heartfelt moments that we will treasure for a lifetime.
                </p>
            <h1 className='bt'>Matt & ashley</h1>
        </section>
    )
}

export default Extra1