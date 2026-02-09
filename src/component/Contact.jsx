import { useEffect, useRef, useState } from "react";
import './Contact.css';

function Contact(){
    const contactRef = useRef(null);
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

        if (contactRef.current) observer.observe(contactRef.current);

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <section ref={contactRef} className={`contact ${show ? "fade-in" : ""}`} id="contact">
                <p className="small-heading">Get in Touch</p>
                <h2 className="section-title">CONTACT</h2>
                
                <form className="contact-form" action="https://formspree.io/f/manjrdva" method="POST">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlForfor="name">Your Name</label>
                            <input type="text" id="name" name="name" required
                            pattern="^[A-Za-z ]+$"
                            placeholder='John Doe'
                            title="Enter a valid name using only letters and spaces" />
                        </div>

                        <div className="form-group">
                            <label htmlForfor="email">Your Email</label>
                            <input type="email" id="email" name="email" required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            placeholder='john@email.com'
                            title="Enter a valid email address" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder='Your message...' name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="send-btn">
                    ✉️ Send Message
                    </button>
                </form>
            </section>
        </>
    )
}

export default Contact;