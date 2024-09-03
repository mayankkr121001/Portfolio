import React from 'react'
import myImage from "../assets/myImage3.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import cloudDownloadIcon from "../assets/cloud-download.png"
import resumePdf from "../assets/RESUME.pdf"

function About() {
    return (
        <div id='About' className='w-full font-nunito pt-[110px]'>
            <div className='tracking-widest flex py-4 pl-[7%] pr-[7%]'>
                <div className='flex flex-col w-[90%] items-center mbTb:items-top mbTb:flex-row mbTb:gap-0 xl:gap-[15%]'>
                    <div className='mbTb:w-[50%] pt-[90px]'>
                        <h3 className='text-[#c3c3c3]'>Hello, My name is</h3>
                        <h1 className='text-5xl font-bold py-2'>Mayank Kumar</h1>
                        <h2 className='text-[#fff000] text-2xl'>WEB DEVELOPER</h2>
                        <p className='text-[#9e9e9e] text-[13px] py-2'>I design, build, and maintain websites, ensuring functionality, user experience, and performance across various devices and browsers.</p>
                        <p className='text-[#c3c3c3]'>Open for work and collaborations.</p>

                        <div className='my-8'>
                            <a href={resumePdf} target="_blank"><button  className='downloadResumeBtn flex items-center gap-3 rounded-full px-10 py-2'>
                                <img className='downloadResumeBtnImg w-9' src={cloudDownloadIcon} alt="download icon" />
                                <h1 className='text-black text-lg font-bold'>Resume</h1>
                            </button></a>
                        </div>
                    </div>
                    <div >
                        <img className='w-[100%]' src={myImage} alt="my Image" />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-6 mt-6 fixed right-4 mbTb:right-7'>
                    <div className='h-[150px] w-1 bg-[#fff000] rounded'></div>
                    <div className='flex flex-col gap-3'>
                        <a href='https://www.linkedin.com/in/mayank-kumar-a4452b1ba/' target='_blank' className='aboutSocialIconsDiv bg-[#fff000] rounded-full inline-block p-2 w-10'>
                            <img className="aboutSocialIcons w-8" src={linkedinIcon} alt="linkedin" />
                        </a>
                        <a href='https://github.com/mayankkr121001' target='_blank' className='aboutSocialIconsDiv bg-[#fff000] rounded-full inline-block p-2 w-10'>
                            <img className="aboutSocialIcons w-8" src={githubIcon} alt="github" />
                        </a>
                    </div>
                    <div className='h-[150px] w-1 bg-[#fff000] rounded'></div>

                </div>
            </div>
        </div>
    )
}

export default About