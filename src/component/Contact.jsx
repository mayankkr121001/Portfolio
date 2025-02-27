import React, { useState } from 'react'
import contactIcon from "../assets/contactIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import mailIcon from "../assets/mailIcon.png"
import instagram from '../assets/instagram.png'
import callIcon from "../assets/callIcon.png"
import locationIcon from "../assets/locationIcon.png"

function Contact() {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [inputError, setInputError] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const inputErrorFunc = () => {
        let newErrors = {};
        if (details.name.trim() == "") {
            newErrors.name = "*Please enter your name";
        }
        if (details.email.trim() == "") {
            newErrors.email = "*Please enter your email";
        }
        if (details.phone.trim() == "") {
            newErrors.phone = "*Please enter your phone";
        }
        if (details.message.trim() == "") {
            newErrors.message = "*Please enter your message";
        }

        setInputError(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    const onFormSubmit = (e) => {
        e.preventDefault();

        if (inputErrorFunc()) {
            e.target.submit();
            console.log("Form submitted successfully", details);
            setDetails({ name: '', email: '', phone: '', message: '' });
        }
        else {
            console.log("Form validation failed");
        }

    }

    return (
        <div id='Contact' className='w-full font-nunito pt-[100px]'>
            <div className='text-center'>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-6' src={contactIcon} alt="education icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Contact</h1>
                </div>
                <form action="https://formsubmit.co/mayanksahu121001@gmail.com" method="POST" onSubmit={onFormSubmit} className='bg-white w-[90%] md:w-[60%] xl:w-[50%] mx-auto py-5 rounded-md my-10'>
                    <div className='my-7 w-[90%] mx-auto'>
                        <input type="text" placeholder='Name' name='name' value={details.name} onChange={(e) => setDetails((prev) => ({ ...prev, name: e.target.value }))} className='w-full border rounded-md px-4 py-2 outline-none text-black' />
                        {inputError.name != "" && <p className='text-red-700 text-sm'>{inputError.name}</p>}
                    </div>
                    <div className='my-7 w-[90%] mx-auto'>
                        <input type="email" placeholder='Email' name='email' value={details.email} onChange={(e) => setDetails((prev) => ({ ...prev, email: e.target.value }))} className='w-full border rounded-md px-4 py-2 outline-none text-black' />
                        {inputError.email != "" && <p className='text-red-700 text-sm'>{inputError.email}</p>}
                    </div>
                    <div className='my-7 w-[90%] mx-auto'>
                        <input type="number" placeholder='Phone no.' name='phone' value={details.phone} onChange={(e) => setDetails((prev) => ({ ...prev, phone: e.target.value }))} className='w-full border rounded-md px-4 py-2 outline-none text-black' />
                        {inputError.phone != "" && <p className='text-red-700 text-sm'>{inputError.phone}</p>}
                    </div>
                    <div className='my-7 w-[90%] mx-auto'>
                        <textarea name="message" value={details.message} onChange={(e) => setDetails((prev) => ({ ...prev, message: e.target.value }))} className='w-full border rounded-md px-4 py-2 outline-none text-black min-h-[100px]' placeholder='Your message'></textarea>
                        {inputError.message != "" && <p className='text-red-700 text-sm'>{inputError.message}</p>}
                    </div>
                    <div className='my-5'>
                        <button type="submit" className='bg-black px-8 py-2 rounded'>Submit</button>
                    </div>
                </form>
                <div className='bg-[#c5ba22] text-black px-[5%] lg:px-[8%] pt-[50px]'>
                    <div className='flex flex-col gap-[50px] sm:flex-row sm:gap-[8%] md:gap-[15%] mbTb:justify-between'>
                        <div className='text-left w-[90%] sm:w-[40%]'>
                            <h1 className='text-xl font-bold'>Let's Connect</h1>
                            <p className='py-4'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                            <div>
                                <a href='https://www.linkedin.com/in/mayank-kumar-a4452b1ba/' target='_blank' className='aboutSocialIconsDiv bg-blue-500 rounded-full inline-block p-2 w-10 mr-4'>
                                    <img className="aboutSocialIcons w-8" src={linkedinIcon} alt="linkedin" />
                                </a>
                                <a href='https://github.com/mayankkr121001' target='_blank' className='aboutSocialIconsDiv bg-blue-500 rounded-full inline-block p-2 w-10 mr-4'>
                                    <img className="aboutSocialIcons w-8" src={githubIcon} alt="github" />
                                </a>
                                <a href='mailto:mayanksahu121001@gmail.com' target='_blank' className='aboutSocialIconsDiv bg-blue-500 rounded-full inline-block p-2 w-10 mr-4'>
                                    <img className="aboutSocialIcons w-8" src={mailIcon} alt="github" />
                                </a>
                                <a href='https://www.instagram.com/mayanksaw12/' target='_blank' className='aboutSocialIconsDiv bg-blue-500 rounded-full inline-block p-2 w-10 mr-4'>
                                    <img className="aboutSocialIcons w-8" src={instagram} alt="github" />
                                </a>
                            </div>
                        </div>
                        <div className='text-left w-[90%] sm:w-[35%]'>
                            <h1 className='text-xl font-bold pb-2'>Contact Info</h1>
                            <div className='flex items-center gap-4 pt-2'>
                                <img className='w-4 h-4' src={callIcon} alt="call" />
                                <p>+91 8603121001</p>
                            </div>
                            <div className='flex items-center gap-4 pt-2'>
                                <img className='w-4 h-4' src={mailIcon} alt="call" />
                                <p>mayanksahu121001@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-4 pt-2'>
                                <img className='w-4 h-4' src={locationIcon} alt="call" />
                                <p>New Delhi, India</p>
                            </div>
                        </div>

                    </div>

                    <div className='mt-8 pb-3'>
                        <div className='w-full h-[1px] bg-black rounded mb-2'></div>
                        <p>Designed by  <span className='font-bold'>&#123; <span className='text-[blue]'>Mayank</span> &#125;</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact