import React from 'react'
import educationIcon from "../assets/educationIcon.png"
import bcaImg from "../assets/bcaImg.jpg"


function Education() {
    return (
        <div id='Education' className='w-full font-nunito'>
            <div className='text-center xl:w-[80%] mx-auto py-[90px] px-[7%] '>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-7' src={educationIcon} alt="education icon" />
                    <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>Education</h1>
                </div>
                <div className='educationCard flex flex-col gap-5 sm:flex-row justify-between rounded bg-zinc-950 px-5 sm:px-10 py-10 my-12'>
                    <div className='text-left'>
                        <h2 className='text-xl text-[#fff000]'>Bachelor of Computer Application</h2>
                        <h2 className='py-2'>2021-2024</h2>
                        <h2>Guru Nanak College, Dhanbad</h2>
                    </div>
                    <div>
                        <img className='h-[120px]'  src={bcaImg} alt="ducation image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education