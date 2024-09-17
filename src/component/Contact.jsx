import React from 'react'
import contactIcon from "../assets/contactIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import mailIcon from "../assets/mailIcon.png"
import callIcon from "../assets/callIcon.png"
import locationIcon from "../assets/locationIcon.png"

function Contact() {
    return (
        <div id='Contact' className='w-full font-nunito pt-[100px]'>
            <div className='text-center'>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-7' src={contactIcon} alt="education icon" />
                    <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>Contact</h1>
                </div>
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
                                <p>Dhanbad, India</p>
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