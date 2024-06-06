import './works.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const Works = () => {

    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.1});
    const isMobile = () => window.innerWidth <= 768;

        useGSAP(()=>{
            gsap.from('.designItem',{
                scrollTrigger: '#works', 
                duration: 0.7,
                x: '-1%',
                stagger: 0.1, 
                ease: 'power3.inOut',
             })
        },[])

    return (
        <div id='works' ref={container}>
            <div id='wkWrap' ref={ref}>
            <h1 id='wHead'>works</h1>

                <div className='ww'>
                    <h1>painting</h1>
                    <div className="wWrap">
                    <div className='designItem'><img src='https://5.imimg.com/data5/SELLER/Default/2021/11/ZZ/ZB/HL/7669570/home-painting-services-500x500.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtCSW-KKPJ_LbfgqRqrA16X_snsEstrbo7g&s'/></div>
                    <div className='designItem'><img src='https://www.kindhomesolutions.com/wp-content/uploads/2022/04/interior-painting-hand-image-1.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd0E0axTJG1OhqdpP_6T0aXvQKyh30RmgjPlhrI-fDIjVrtgLspuMbNXYStTDF3RTXgQ&usqp=CAU'/></div>
                    <div className='designItem'><img src='https://sbpaintingcompany.com/wp-content/uploads/2019/06/house-painting.jpg'/></div>
                    <div className='designItem'><img src='https://achoicepainting.com/wp-content/uploads/2019/01/professional-house-painters.jpeg'/></div>
                </div>
                </div>
              
        
            <div className='ww'>
                <h1>plastering</h1>
                <div className="wWrap">
                    <div className='designItem'><img src='https://myhomemydesign.in/wp-content/uploads/2019/07/cropped-shutterstock_451866313.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeLsbF6_h5PEF15pm3L9WoZl2qbyhMJxf2JcjvGVJ6b5dq9dzB5vwZ8FG2Je1Vu5c0bI&usqp=CAU'/></div>
                    <div className='designItem'><img src='https://homesmart.co.nz/wp-content/uploads/2020/05/plaster-home-4-w.jpg'/></div>
                    <div className='designItem'><img src='https://newvision-media.s3.amazonaws.com/cms/6d342cf5-11bc-4aa5-a4f0-1cb8767ba131.jpg'/></div>
                </div>
            </div>
    
            <div className='ww'>
                <h1>tiling</h1>
                <div className="wWrap">
                    <div className='designItem'><img src='https://www.kajariaceramics.com/concept-picture/high001487.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYNK9WH_abAHIJibU5tp-z4HJRepDD5adFQ&s'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWMx2S7E1QLNA2fKFFkMxOhqTbbdJb1m7vJMl8y_yBg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-grvRHJa-MINA7h_YhBtTNtVgEwrWSXmAuA&s'/></div>
                </div>
            </div>
            
        </div>
        </div>
    )
}