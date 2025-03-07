import React from 'react';
import {gsap} from 'gsap';

import './style.scss'

import eight from '../../shere/assets/img/8.png';

function Welcome() {
    const gridRef = React.useRef(null);
    const welcomeRef = React.useRef(null);
    /* React.useEffect(() => {
         gsap.from(welcomeRef.current, {
             opacity: 0,
         });
         gsap.to(welcomeRef.current, {
             duration: 1,
             opacity: 1,
             ease: 'power1.in',
         });
     }, []);*/
    React.useEffect(() => {
        const tl = gsap.timeline();
        tl.to(gridRef.current, {
           delay: 0.5,
        });
        gridRef.current.querySelectorAll('.grid__line').forEach((line, i) => {
            tl.to(line, {
                opacity: 0.5,
                xPercent: -100,
                stagger: .4,
            });
        });
        tl.to(gridRef.current, {
            delay: 0.5,
            opacity: 0,
            xPercent: -100,
        });
    }, [])

    return (
        <div className='welcome' ref={welcomeRef}>
            <div className="welcome__grid grid" ref={gridRef}>
                {
                    Array(4).fill(null).map((item, i)=>(
                        <div key={i} className="grid__line"></div>
                    ))
                }
            </div>

            <div className="welcome__cart">
                <h1 className="welcome__title">Happy</h1>
                <img className='welcome__img' src={eight} alt="eight"/>
                <h2 className="welcome__text">MARCH</h2>
            </div>
        </div>
    );
}

export default Welcome;