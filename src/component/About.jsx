import { useEffect, useRef, useState } from "react";
import './About.css';
import profile2 from '../assets/myImages/profile2.jpg';

function About(){
    const aboutRef = useRef(null);
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

        if (aboutRef.current) observer.observe(aboutRef.current);

            return () => observer.disconnect();
        }, []);
        
    return(
        <>
            <section ref={aboutRef} className={`about ${show ? "fade-in" : ""}`} id="about">
                <h2 className="section-title">About Me</h2>
                <div className="about-container">
                    <div className="about-img-wrapper">
                        <div className="img-shadow"></div>
                        <img src={profile2} alt="About Image" className="about-img" />
                    </div>
                    <div className="about-text">
                        <p>
                            Hi, I’m Annapurneswari, a B.Tech graduate (2025) in Computer Science Engineering with a specialization in Artificial Intelligence. I have a strong interest in front-end web development and enjoy designing and building clean, responsive, and user-friendly interfaces that deliver a smooth user experience.                        </p>
                        <p>
                            I work with HTML, CSS, JavaScript, and React, and use Bootstrap and Tailwind CSS to create modern UI designs. I focus on writing clean, maintainable code and ensuring websites work well across different devices, while continuously improving my skills and exploring tools like Framer Motion for animations.                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;