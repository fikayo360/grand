import './hero.css'
import { useState,useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

export function Hero(){
    const [navActive,setNavActive] = useState(false)
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.5});
    useGSAP(() => {
        gsap.from('#heroOther', {
                duration: 2.5,
                y: '-70vh',
                ease: "bounce.out"
        })
        
        }, { scope: container });

        useGSAP(()=>{
            gsap.from('.nmItems',{
                duration: 1,
                x: '-50%',
                stagger: 0.1, 
                ease: 'power3.inOut',
            })
        },[inView])

    return (
        <section id="hero" ref={container}>
           { navActive? (<div id='navMobile' onClick={toggleMobileNav} ref={ref} >
                <header>
                    <h1>vevo</h1>
                    <img src='./close.png'/>
                </header>
                <ul id='navMobileList'>
                            <li className='nmItems'><a href='#contact' >contact</a></li>
                            <li className='nmItems'><a href='#portfolio' >portfolio</a></li>
                            <li className='nmItems'><a href='#testimonials'>testimonials</a></li>   
                            <li className='nmItems'><a href='#about'>about</a></li>
                            <li className='nmItems'><a href='#faq'>faqs</a></li> 
                            
                </ul>
            </div>) :null } 

            <nav id='navbar'>
                    <div id='navWrap'>
                        <ul id='navLeft'>
                            <li><a href='#contact'>contact</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#testimonials'>testimonials</a></li>   
                            <li><a href='#about'>about</a></li>
                            <li><a href='#faq'>faqs</a></li>
                        </ul>

                    <h1 id='navCenter'> vevo</h1>

                    <div id='socialIcons'>
                        <div className='socialIcon'><img src='./facebook.png' /></div>
                        <div className='socialIcon'><img src='./instagram.png'/></div>
                        <div className='socialIcon'><img src='./twitter.png'/></div>
                    </div>

                    <img id='burger' src='./burger.png' onClick={toggleMobileNav}/>
                    </div>
            </nav>

            <div id='heroOther'>
                <p> <span id='txtG'>vevo-studios</span><span className='hIc'><img src='profile.png' /></span>  we are an exceptional photography brand based in lagos state nigeria...
                </p>
                <div id='heroBtn'><span>get in touch</span><img src='./right.png'/></div>
                
            </div>
        </section>
    )
}