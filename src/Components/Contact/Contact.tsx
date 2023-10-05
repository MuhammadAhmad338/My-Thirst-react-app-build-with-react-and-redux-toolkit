/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // Define state variables for each input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Define a function to handle form submission
    const handleSubmit = () => {
        // Create an object with form data
        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };
        // Log form data to console
        console.log(formData);
        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

        if (
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            message.trim().length === 0
        ) {
            // Alert the user to fill in the required fields
            alert("Please fill in the required fields");
            // Return early and do not send the data
            return;
        }
        // Sen
    };

    return (
        <div className='contact-us'>
            <div className='contact-us-content'>
                <h2 className='contact-us-heading'>Contact</h2>

                <div className='contact-us-name-email'>
                    <input className='contact-us-name'
                        type="text"
                        name='name'
                        value={name}
                        placeholder='Your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='contact-us-email'
                        type="text"
                        name='email'
                        value={email}
                        placeholder='Your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input
                    type="text"
                    name='phone'
                    value={phone}
                    placeholder='Your phone (optional)'
                    className='contact-us-phone'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id=""
                    placeholder='Your message'
                    rows={10}
                    cols={30} className='contact-us-textarea'>Muhammad Ahmad</textarea>
                <div className='contact-us-sendmessage' onClick={handleSubmit}>SEND MESSAGE</div>

            </div>
        </div>
    );
}

export default Contact