import { useEffect, useRef, useState } from "react";
import './Skills.css';
import html from '../assets/skills/html-skill.png';
import css from '../assets/skills/css-skill.png';
import javaScript from '../assets/skills/js-skill.png';
import bootStrap from '../assets/skills/bt-skill.webp';
import tailwind from '../assets/skills/tailwind-skill.png';
import react from '../assets/skills/react-skill.png';
import framerMotion from '../assets/skills/framerMotion-skill.png';
import figma from '../assets/skills/figma-skill.png';
import canva from '../assets/skills/canva-skill.jpeg';

function Skills(){
    const skillsRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setShow(true);
            }
        },
        { threshold: 0.3 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <section ref={skillsRef} id="skills" className={`about ${show ? "fade-in" : ""}`}>
                <h2>Skills</h2>
                <div className="skills-container">

                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={html} alt="HTML" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={css} alt="CSS" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={javaScript} alt="JavaScript" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={bootStrap} alt="Bootstrap" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={tailwind} alt="Tailwind CSS" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={react} alt="React" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={framerMotion} alt="Framer Motion" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={figma} alt="Figma" />
                    </div>
                    <div className={`skill-card ${show ? "animate" : ""}`}>
                        <img src={canva} alt="Canva" />
                    </div>

                </div>
                </section>
        </>
    )
}

export default Skills;