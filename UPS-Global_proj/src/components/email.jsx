import React from 'react'
import Navlinks from './Navlinks'
import Footer from './Footer'
import { useState } from 'react'

function Email() {

    const [emailMessage, setEmailMessage] = useState({
        firstname: '',
        lastname:'',
        email: '',
        message: ''
    })

    const [errorForm, setErrorForm] = useState({
        firstname: '',
        lastname:'',
        email: '',
        message: ''
    })

    //handle user input from form
    const handleInput = (event) => {
        const { name, value } = event.target;
        setEmailMessage({
            ...emailMessage,
            [name]: value
        })
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        const isValid = validateForm();



    }

    const validateForm = () => {
        let isValid = true;
        const errors = {};
    
        if (emailMessage.firstname.trim() === "") {
          errors.firstname = "first name is required";
          isValid = false;
        }

        if (emailMessage.lastname.trim() === "") {
            errors.lastname = "last name is required";
            isValid = false;
        }

        if (emailMessage.email.trim() === "") {
            errors.email = "email address is required";
            isValid = false;
        }

        if (emailMessage.message.trim() === "") {
            errors.message = "message field cannot be empty";
            isValid = false;
        }

        setErrorForm(errors);
        return isValid;
    }

    return (
        <main>
            <Navlinks/>
            {/**email section--------------------------------------------------------------------------- */}
            <section className='w-full h-full'>
                <div className='min-h-screen w-full md:w-[70%] mx-auto bg-[#F7F5F8]/90 flex justify-center items-center'>
                    <form action="">
                        <div className='w-full md:w-[620px] mx-auto p-2'>
                            <p>Send us an email.</p>
                        <div className='block md:flex gap-x-2'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='firstname'>First Name:</label>
                                <input type='text' className='w-full py-2 px-2 rounded-2xl outline-none border-2 border-[#ED7D1A]' name='firstname' onChange={handleInput} value={emailMessage.firstname} id='firstname' placeholder='First name'/>
                                <span style={{ color: "red" }}>
                                    {errorForm.firstname}
                                </span>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='firstname'>Last Name:</label>
                                <input type='text' className='w-full py-2 px-2 rounded-2xl outline-none border-2 border-[#ED7D1A]' name='lastname' onChange={handleInput} value={emailMessage.lastname} id='lastname' placeholder='Last name'/>
                                <span style={{ color: "red" }}>
                                    {errorForm.lastname}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col pt-3'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' className='w-full py-2 px-2 rounded-2xl outline-none border-2 border-[#ED7D1A]' placeholder='enter ur email adress' name='email' onChange={handleInput} value={emailMessage.email} id='email'/>
                            <span style={{ color: "red" }}>
                                {errorForm.email}
                            </span>
                        </div>
                        <div className='flex flex-col pt-3'>
                            <label htmlFor='subject'>Subject:</label>
                            <input type='text' className='w-full py-2 px-2 rounded-2xl outline-none border-2 border-[#ED7D1A]' placeholder='email subject' name='subject' id='subject'/>
                        </div>
                        <div className='flex flex-col pt-3 pb-10'>
                            <label htmlFor='message'>Message:</label>
                            <textarea name='message' className='w-full py-2 px-2 rounded-2xl outline-none border-2 border-[#ED7D1A]' placeholder='enter message here' onChange={handleInput} value={emailMessage.message} id='message'></textarea>
                            <span style={{ color: "red" }}>
                                {errorForm.message}
                            </span>
                        </div>
                        <button className=' w-full bg-[#ED7D1A] rounded-2xl py-2' onClick={handleSubmit}>Send</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Email
