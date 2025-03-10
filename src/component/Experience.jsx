import React from 'react'
import experience from "../assets/experience.png"


function Experience() {
    return (
        <>
        <div id='Experience' className='w-full mt-[30px] pt-[90px] pb-[40px] font-nunito'>
            <div className='text-center px-[8%]'>
                <div className='flex gap-2 md:gap-5 justify-center items-center'>
                    <img className='w-6' src={experience} alt="icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Work Experience</h1>  
                </div>
                <div className='w-full flex flex-col gap-10 my-10'>
                    <div className="bg-zinc-950 text-left p-5 sm:p-10">
                        <p className='text-2xl mb-1'>Web Developer Intern</p>
                        <a href='https://www.unbundl.com' target='_blank' className='text-xl text-[#c5ba22] font-bold'>Unbundl</a>
                        <p className='text-sm'>New Delhi, Delhi</p>
                        <p className='text-sm text-blue-500 mt-2'>Dec 2024 - Present</p>
                        <ul className='list-disc ml-4 my-2 flex flex-col gap-1'>
                            <li>Developed and optimized dynamic, responsive web applications using React, HTML, CSS, and JavaScript.</li>
                            <li>Customized and implemented interactive UI components to enhance user experience and accessibility.</li>
                            <li>Gained hands-on experience in managing and deploying scalable web applications with a focus on performance and usability.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Experience