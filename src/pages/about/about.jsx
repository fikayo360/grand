import './about.css'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

export function About(){
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef();

//     useGSAP(() => {
//         gsap.from('.aboutItem', {
//                 scrollTrigger: '#about', 
//                 duration: 3,
//                 delay:1,
//                 y: '10%',
//                 ease: "power2.out"
//         })
//         }, { scope: container });

    return(
        <section id='about' ref={container}>
                <div className='aboutItem' id="aboutItem1">
                        <p>
                           i am your ideal choice for services like ...
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem2">
                    <img/>
                        <h1>potraits </h1>
                        <p>
                        From the timeless elegance of black-and-white headshots to the vibrant energy of family portraits, portrait photographers tell stories through captivating images of people. They capture not just physical features but also emotions, personalities, and connections. Whether 
                        it's a child's infectious smile, a couple's deep love, or a business professional's quiet confidence, portrait photographers create lasting visual memories.
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem3">
                <img/>
                        <h1>weddings </h1>
                        <p>
                        Wedding photography is more than just capturing staged poses. It's about documenting the raw emotions,
                         intricate details, and fleeting moments that make a wedding day so special. From the nervous anticipation of the groom to the radiant joy of the bride, 
                        from the heartfelt tears of parents to the raucous laughter of friends, wedding photographers weave a visual narrative of a couple's love story in bloom.
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem4">
                <img/>
                        <h1>events </h1>
                        <p>
                        Event photography goes beyond simple snapshots.
                         It's about capturing the essence of an event, be it a high-energy conference, a glamorous gala, or a whimsical birthday party.
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem5">
                <img/>
                        <h1>products </h1>
                        <p>
                        In today's digital age, product photography is the silent salesperson.  This form of art goes beyond
                         just showing a product; it's about creating a captivating image that highlights its features, evokes a sense of desire, and compels viewers to take action.
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem6">
                <img/>
                        <h1>food photography </h1>
                        <p>
                        Food photography is an art form that transcends mere documentation.  It's about transforming everyday meals into mouthwatering masterpieces. Food photographers use lighting, composition, styling, and props to create visuals that tantalize the taste buds and draw viewers in.
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem7">
                <img/>
                        <h1>real estate </h1>
                        <p>
                        In the competitive world of real estate, captivating visuals are essential for attracting potential buyers.
                         Real estate photographers use their expertise in lighting, composition, and space optimization to showcase properties in the most appealing light. 
                        </p>
                </div>

                <div className='aboutItem' id="aboutItem8">
                <img/>
                        <h1>commercial</h1>
                        <p>
                        Commercial photography is a powerful tool for businesses to tell their stories and promote their products or services.
                         This diverse field encompasses everything from product photography and lifestyle imagery to captivating visuals for advertising campaigns and magazine spreads.
                        </p>
                </div>
        </section>
    )
}