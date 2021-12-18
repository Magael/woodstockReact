import React from 'react'
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>CONTACT US</h1>
            <form className="contactForm" action="" method="">
                <input className="firstName" type="text" name="firstname" placeholder="FIRST NAME"/>
                <input className="lastName" type="text" name="lastname" placeholder="LAST NAME"/>
                <input className="email" type="email" name="mail" placeholder="EMAIL ADDRESS"/>
                <textarea className="text" name="message" placeholder="MESSAGE" rows="10" cols="50"/>
            </form>
        </div>
    )
}

export default Contact
