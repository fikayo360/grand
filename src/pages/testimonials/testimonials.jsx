import './testimonials.css'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

export function Testimonials(){
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef();

    useGSAP(() => {
        gsap.from('.testimonial', {
                scrollTrigger: '#testimonials', 
                duration: 2,
                delay:1,
                y: '200%',
                ease: "power2.out"
        })
        }, { scope: container });

    return(
        <section id='testimonials' ref={container}>
            <h2 id='head1'>Our happy clients </h2>
            <div id="tCont">
            <div className='testimonial bg1'>
            
                <div className='testiUp'>
                <img src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'/>
                    <div className='testiUpCol'>
                        <h2> stephan hubert </h2>
                    </div>
                </div>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
            </div>

            <div className='testimonial bg3'>
            
            <div className='testiUp'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiodenmhSgAPXBgEUGskn4mNvaixE0JlzV4o6-8K4MRUBcLWWuds9cftE1S7_A62UG6M&usqp=CAU'/>
                <div className='testiUpCol'>
                    <h2> jason clark </h2>
            
                </div>
            </div>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                      excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                     laborum odit repellendus.
                </p>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
        </div>

        <div className='testimonial bg1'>
            
            <div className='testiUp'>
            <img src='https://media.istockphoto.com/id/1309315007/photo/profile-picture-of-smiling-caucasian-male-employee.jpg?s=612x612&w=0&k=20&c=pBsE_puKWiV9Pru3FWNPiYiDBnTp2k6x1PMjqZA8FHo='/>
                <div className='testiUpCol'>
                    <h2> jason clark </h2>
           
                </div>
            </div>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                      excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                     laborum odit repellendus.
                </p>
        </div>

        <div className='testimonial bg2'>
            
            <div className='testiUp'>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg' />
                <div className='testiUpCol'>
                    <h2> jason clark </h2>
          
                </div>
            </div>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                      excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                     laborum odit repellendus.
                </p>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
                
                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
        </div>

        <div className='testimonial bg3'>
            
            <div className='testiUp'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlSA6OeLhxDwO5_TymyV7YAUdvrr3xSDTgxEwoCIpFA&s'/>
                <div className='testiUpCol'>
                    <h2> jason clark </h2>
                   
                </div>
            </div>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                      excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                     laborum odit repellendus.
                </p>

                <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
        </div>

           <div className='testimonial bg2'>
            
                <div className='testiUp'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_fil6rdswIjvGu1OYVNf75OscbxaiCUe-PSKsxMUcw&s'/>
                    <div className='testiUpCol'>
                        <h2> jason clark </h2>
                    
                    </div>
                </div>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>

                    <p className='testiDown'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo iusto dolores quas natus nobis ab corrupti, aliquid,
                          excepturi ducimus incidunt modi magni possimus quam dolore delectus ipsum
                         laborum odit repellendus.
                    </p>
            </div>

            </div>
        </section>
    )
}