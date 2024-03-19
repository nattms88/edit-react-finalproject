import { useState } from 'react';
import { Reset } from "styled-reset";
import styles from './Contact.module.css';
import contactImg from '../../assets/images/contactImg.jpeg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        alert('Message submitted successfully!');
    };

    return (
        <div className={styles.contact}>
            <Reset/>
            <div className={styles.contactContainer}>
                <img
                    src={contactImg}
                    alt="Computer"
                    className={styles.contactImg}
                />
                <div className={styles.textContainer}>
                    <div className={styles.contactHeading}>
                        <h1>Reach Out!</h1>
                        <p>
                            Got a project you would like me to work on? Or how
                            about just a friendly chat?{" "}
                            <span>Let&apos;s make something great together!</span>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.contactForm}>
                            <label htmlFor="name" className={styles.labels}>
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.contactForm}>
                            <label htmlFor="email" className={styles.labels}>
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.contactForm}>
                            <label
                                htmlFor="message"
                                className={styles.labels}
                            >
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.contactBtnContainer}>
                            <button
                                type="submit"
                                className={styles.contactBtn}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
