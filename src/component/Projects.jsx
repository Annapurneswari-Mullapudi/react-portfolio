import { useEffect, useRef, useState } from "react";
import "./Projects.css";

import shootsmanager from '../assets/projects/shootsmanager.png';
import portfolio from '../assets/projects/portfolioSS.png';
import furniture from "../assets/projects/furniture.png";
import netflix from "../assets/projects/netflixlandingpage.png";
import imageGallery from "../assets/projects/imagegallery.png";
import quizeApp from "../assets/projects/quizapp.png";
import expenseTracker from "../assets/projects/expense.png";
import todo from "../assets/projects/todo.png";
import calculator from "../assets/projects/calculator.png";
import stopWatch from "../assets/projects/stopwatch.png";
import tempConverter from "../assets/projects/temperatureconverter.png";

const projectsData = [
  {
    title: "Shoots-Manager",
    image: shootsmanager,
    tech: "HTML • CSS • JavaScript • React",
    desc: "A web application designed to help manage event shoots by organizing client details, shoot locations, and assigned tasks in one place. Built with a clean UI to simplify daily shoot management.",
    code: "https://github.com/Annapurneswari-Mullapudi/shoots-manager",
    live: "https://annapurneswari-mullapudi.github.io/shoots-manager/",
  },
  {
    title: "Responsive portfolio",
    image: portfolio,
    tech: "HTML • CSS • React",
    desc: "A responsive personal portfolio built with React to showcase my projects, skills, and experience, featuring a clean UI and smooth user experience.",
    code: "https://github.com/Annapurneswari-Mullapudi/react-portfolio",
    live: "https://annapurneswari-mullapudi.github.io/react-portfolio/",
  },
  {
    title: "Netflix Landing Page",
    image: netflix,
    tech: "HTML • CSS • JavaScript",
    desc: "I created a Netflix landing page clone using HTML, CSS, and JavaScript, featuring a responsive hero section, email input field, and a trending movie slider.",
    code: "https://github.com/Annapurneswari-Mullapudi/Netflix-interface-clone",
    live: "https://github.com/Annapurneswari-Mullapudi/Netflix-interface-clone",
  },
  {
    title: "Furniture E-Commerce Interface",
    image: furniture,
    tech: "HTML • CSS",
    desc: "I designed a clean and responsive e-commerce interface using only HTML and CSS, focusing on layout and visual appeal.",
    code: "https://github.com/Annapurneswari-Mullapudi/furniture-ecommerce-interface",
    live: "https://annapurneswari-mullapudi.github.io/furniture-ecommerce-interface/",
  },
  {
    title: "Image Gallery",
    image: imageGallery,
    tech: "HTML • CSS • JavaScript",
    desc: "I created a responsive image gallery using HTML, CSS, and JavaScript, allowing users to view images in a clean grid layout.",
    code: "https://github.com/Annapurneswari-Mullapudi/image-gallery",
    live: "https://annapurneswari-mullapudi.github.io/image-gallery/",
  },
  {
    title: "Quiz App",
    image: quizeApp,
    tech: "HTML • CSS • JavaScript",
    desc: "I designed and built a quiz app with a simple UI and smooth interactions, allowing users to attempt questions and view their results.",
    code: "https://github.com/Annapurneswari-Mullapudi/quiz-app",
    live: "https://annapurneswari-mullapudi.github.io/quiz-app/",
  },
  {
    title: "Expense Tracker",
    image: expenseTracker,
    tech: "HTML • CSS • JavaScript",
    desc: "I built a simple expense tracker that lets users add and delete transactions while displaying the balance in real time.",
    code: "https://github.com/Annapurneswari-Mullapudi/expense-tracker",
    live: "https://annapurneswari-mullapudi.github.io/expense-tracker/",
  },
  // {
  //   title: "To-Do List",
  //   image: todo,
  //   tech: "HTML • CSS • JavaScript",
  //   desc: "I created a to-do list application where users can add, mark, and delete tasks.",
  //   code: "https://github.com/Annapurneswari-Mullapudi/todoList",
  //   live: "https://annapurneswari-mullapudi.github.io/todoList/",
  // },
  // {
  //   title: "Responsive Calculator",
  //   image: calculator,
  //   tech: "HTML • CSS • JavaScript",
  //   desc: "I built a functional calculator capable of handling basic arithmetic operations.",
  //   code: "https://github.com/Annapurneswari-Mullapudi/Responsive-Calculator",
  //   live: "https://annapurneswari-mullapudi.github.io/Responsive-Calculator/",
  // },
  // {
  //   title: "Stop Watch",
  //   image: stopWatch,
  //   tech: "HTML • CSS • JavaScript",
  //   desc: "I created a digital stopwatch with start, stop, and reset functionalities.",
  //   code: "https://github.com/Annapurneswari-Mullapudi/Stop-Watch",
  //   live: "https://annapurneswari-mullapudi.github.io/Stop-Watch/",
  // },
  // {
  //   title: "Temperature Converter",
  //   image: tempConverter,
  //   tech: "HTML • CSS • JavaScript",
  //   desc: "I developed a temperature converter that allows users to switch between Celsius and Fahrenheit.",
  //   code: "https://github.com/Annapurneswari-Mullapudi/Temperature-Converter",
  //   live: "https://annapurneswari-mullapudi.github.io/Temperature-Converter/",
  // },
];

function Projects() {
  const projectsRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={projectsRef}
      className={`projects ${show ? "fade-in" : ""}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p>{project.desc}</p>

              <div className="project-buttons">
                <a href={project.code} target="_blank" rel="noreferrer" className="btn-outline">
                  View Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-fill">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
