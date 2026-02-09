import { useEffect, useState } from "react";
import "./Home.css";
import profile1 from "../assets/myImages/profile1.jpg";
import github from '../assets/icons/github-icon.png';
import linkedIn from '../assets/icons/linkedin-icon.png';
import emial from '../assets/icons/email-icon.png';
import resume from '../assets/Annapurneswari-Mullapudi-CV.pdf'

export default function Home() {
  const fullName = "Annapurneswari Mullapudi";
    const [text, setText] = useState("");
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "goals", "projects", "skills", "contact"];

            sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop - 150;
                const height = el.offsetHeight;
                const scroll = window.scrollY;

                if (scroll >= top && scroll < top + height) {
                setActiveSection(id);
                }
            }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
        setText(fullName.slice(0, index + 1));
        index++;

        if (index === fullName.length) {
        clearInterval(interval);
        }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className="navBar">
            <h3 className="logo">AM</h3>
            <input type="checkbox" id="toggle" />
            <label for="toggle" class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </label>
                <ul className="nav-links">
                    <label htmlFor="toggle" className="close">&#10006;</label>

                    <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
                    <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
                    <li><a href="#goals" className={activeSection === "goals" ? "active" : ""}>Goals</a></li>
                    <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
                    <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
                    <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
                </ul>
        </div>
        
        <section id="home">
            <div className="homeContent">
                <div class="home-text">
                    <p>Hello I’m</p>
                    <h1 className="typewriter">{text}</h1>
                    <h2>Computer Science Graduate (2025)</h2>
                    <div class="buttons">
                        <a href={resume} download class="btn-outline">Download CV</a>
                        <a href="#contact" class="btn-fill">Contact Info</a>
                    </div>
                </div>
                <div class="home-img">
                    <img src={profile1} />
                </div>
            </div>
        </section>


        <div className="social-sticky">
            <a href="https://github.com/Annapurneswari-Mullapudi" target="_blank">
                <img src={github} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/Annapurneswari Mullapudi" target="_blank">
                <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="mailto:anumullapudi7815@gmail.com">
                <img src={emial} alt="Email" />
            </a>
        </div>
    </>
  );
}






















// import "./Home.css";
// import profile from "../assets/profile.jpg";

// export default function Home() {
//   return (
//     <section className="home">

//       <div className="home-left">
//         <h1>Hi, I’m Annapurneswari</h1>
//         <h2>Frontend Developer</h2>

//         <p>
//           I build responsive and user-friendly web applications using
//           HTML, CSS, JavaScript, and React.
//         </p>

//         <div className="home-buttons">
//           <button>View Projects</button>
//           <button className="outline">Download Resume</button>
//         </div>
//       </div>

//       <div className="home-right">
//         <img src={profile} alt="profile" />
//       </div>

//     </section>
//   );
// }
