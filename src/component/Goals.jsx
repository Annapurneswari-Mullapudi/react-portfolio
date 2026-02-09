import { useEffect, useRef, useState } from "react";
import './Goals.css';
import shortTermIcon from '../assets/icons/short-term-icon.png';
import midTermIcon from '../assets/icons/mid-term-icon.png';
import longTermIcon from '../assets/icons/long-term-icon.png';


function Goals(){
      const goalsRef = useRef(null);
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

            if (goalsRef.current) observer.observe(goalsRef.current);

            return () => observer.disconnect();
        }, []);
    return(
        <>
            <section ref={goalsRef} className={`goals ${show ? "fade-in" : ""}`} id="goals">
                <h2 className="section-title">Career Goals</h2>
                <div className="goals-container">
                    
                    {/* Short-Term Goal */}
                    <div className="goal-box">
                        <div className="goal-header">
                            <img src={shortTermIcon} alt="Short Term" />
                            <h3>Short - Term</h3>
                        </div>
                        <p>
                            My current goal is to strengthen my practical experience by working on more real-world front-end projects. I want to improve the quality of my designs, refine my development workflow, and explore better ways to create intuitive, user-friendly interfaces.
                            I want to apply what I already know in a more structured and professional environment, take on new challenges, and build a stronger portfolio that reflects my growth.
                        </p>
                    </div>

                    {/* Mid-Term Goal */}
                    <div className="goal-box">
                        <div className="goal-header">
                            <img src={midTermIcon} alt="Mid Term" />
                            <h3>Mid – Term</h3>
                        </div>
                        <p>
                            To gain hands-on experience by working in a professional team, building strong problem-solving skills, and learning back-end technologies like Node.js and databases.
                            I also want to improve my communication and teamwork skills by working in a company or with a group of developers. By taking part in bigger projects and solving real-time problems, I hope to grow as a well-rounded developer.
                        </p>
                    </div>

                    {/* Long-Term Goal */}
                    <div className="goal-box">
                        <div className="goal-header">
                            <img src={longTermIcon} alt="Long Term" />
                            <h3>Long – Term</h3>
                        </div>
                        <p>
                            To become a full-stack developer who can confidently build complete web applications from front-end to back-end.
                            I want to work on complex applications, lead projects, and contribute to creating products that make a real difference. I also hope to keep learning new technologies, stay updated with the latest trends in web development, and grow step by step into a responsible and skilled professional in the software industry.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Goals;