import React from 'react'
import takeLookIcon from "../assets/takeLookIcon.png"
import freelance1 from '../assets/freelance1.png'
import freelanceIcon from '../assets/freelanceIcon.png'

function Freelance() {
    return (
        <div id='Freelance' className='w-full font-nunito pt-[20px]'>
            <div className='bg-zinc-950 text-center mx-auto pt-[90px] pb-[80px] px-[8%]'>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-6' src={freelanceIcon} alt="freelance icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Freelance</h1>
                </div>
                <div className={` flex flex-col lg:flex-row items-start justify-center gap-[50px] lg:gap-[10%] py-[50px] lg:py-[100px]`} >
                    <div className='text-left w-[80%] lg:w-[50%] lg:pr-[50px]'>
                        <h1 className='text-2xl font-bold text-blue-500'>Apah Technologies</h1>
                        <p className='text-[#9e9e9e] text-[13px] py-4 font-semibold'>A static react js website for Apah Technologies for providing and contacting information to potential
                            customers .</p>
                        <div className='flex flex-wrap gap-4 xl:gap-8 text-[#c5ba22]'>
                            <p>HTML</p>
                            <p>Tailwind CSS</p>
                            <p>React JS</p>
                        </div>
                        <div className='flex gap-3 sm:gap-7 mt-6'>
                            <a href="https://www.apahtech.in" className='takeALookBtn flex items-center gap-2 sm:gap-5 text-black font-bold rounded-full px-5 sm:px-10 py-2'>
                                <img className='w-3' src={takeLookIcon} alt="takeLookIcon" />
                                <p className='text-sm'>Take a Look</p>
                            </a>
                        </div>
                    </div>

                    <a href="https://www.apahtech.in" target="_blank" className='projectImageDiv w-[80%] lg:w-[50%]'>
                        <img className='w-[80%]' src={freelance1} alt="apahtech" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Freelance