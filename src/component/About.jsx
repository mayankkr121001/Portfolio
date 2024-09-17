import React, {useRef} from 'react'
import myImage from "../assets/myImage.jpeg"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import cloudDownloadIcon from "../assets/cloud-download.png"
import resumePdf from "../assets/RESUME.pdf"

function About() {
    const myImageRef = useRef(null);

    const onImageMouseMoveFunc = (e) => {
        let imagePosition = myImageRef.current.getBoundingClientRect();
        let mouseX = e.clientX - imagePosition.left;
        let mouseY = e.clientY - imagePosition.top;

        let dx = (mouseX - imagePosition.width / 2) / (imagePosition.width / 2);
        let dy = (mouseY - imagePosition.height / 2) / (imagePosition.height / 2);

        myImageRef.current.style.transform = ` rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
        myImageRef.current.style.transition = ` transform 0.1s ease`;

    }

    const onImageMouseLeaveFunc = () => {
        myImageRef.current.style.transform = ""
        myImageRef.current.style.transition = ` transform 0.1s ease`;

    }

    return (
        <div id='About' className='w-full font-nunito pt-[130px]'>
            <div className='tracking-widest w-[100%] mx-auto flex py-4 pl-[8%] pr-[8%]'>
                <div className='flex flex-col items-center mbTb:items-top mbTb:flex-row mbTb:gap-[5%] xl:gap-[15%]'>
                    <div className='mbTb:w-[50%] pt-[50px]'>
                        <h3 className='text-[#c3c3c3]'>Hello, My name is</h3>
                        <h1 className='text-5xl font-bold py-2'>Mayank Kumar</h1>
                        <h2 className='text-[#c5ba22] text-2xl font-semibold'>WEB DEVELOPER</h2>
                        <p className='text-[#9e9e9e] text-[13px] py-2'>I design, build, and maintain websites, ensuring functionality, user experience, and performance across various devices and browsers.</p>
                        <p className='text-[#c3c3c3]'>Open for work and collaborations.</p>

                        <div className='my-8'>
                            <a href={resumePdf} target="_blank"><button  className='downloadResumeBtn flex items-center gap-3 rounded-full px-10 py-2'>
                                <img className='downloadResumeBtnImg w-9' src={cloudDownloadIcon} alt="download icon" />
                                <h1 className='text-black text-lg font-bold'>Resume</h1>
                            </button></a>
                        </div>
                    </div>
                    <div className='myImageDiv mbTb:w-[50%] pt-[30px] lg:pr-[80px]'>
                        <img className='myImage w-[70%] mx-auto' src={myImage} alt="my Image" ref={myImageRef} onMouseMove={onImageMouseMoveFunc} onMouseLeave={onImageMouseLeaveFunc}/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-6 mt-6 fixed right-4 mbTb:right-7'>
                    <div className='h-[150px] w-1 bg-[#c5ba22] rounded'></div>
                    <div className='flex flex-col gap-3'>
                        <a href='https://www.linkedin.com/in/mayank-kumar-a4452b1ba/' target='_blank' className='aboutSocialIconsDiv bg-[#c5ba22] rounded-full inline-block p-2 w-10'>
                            <img className="aboutSocialIcons w-8" src={linkedinIcon} alt="linkedin" />
                        </a>
                        <a href='https://github.com/mayankkr121001' target='_blank' className='aboutSocialIconsDiv bg-[#c5ba22] rounded-full inline-block p-2 w-10'>
                            <img className="aboutSocialIcons w-8" src={githubIcon} alt="github" />
                        </a>
                    </div>
                    <div className='h-[150px] w-1 bg-[#c5ba22] rounded'></div>

                </div>
            </div>
        </div>
    )
}

export default About