import React from 'react'
import educationIcon from "../assets/educationIcon.png"
import img10th from "../assets/10thImg.jpg"
import img12th from "../assets/12thImg.jpg"
import bcaImg from "../assets/bcaImg.jpg"


const educationArray = [
    {
        qualification: "10th - Board",
        year: "2017-2018",
        grade: "Percentage - 87%",
        institution: "DAV Public School Baniahir, Dhanbad",
        image: img10th
    },
    {
        qualification: "12th - Science",
        year: "2019-2020",
        grade: "Percentage - 91%",
        institution: "Rajkamal Sarawati Vidya Mandir, Dhanbad",
        image: img12th
    },
    {
        qualification: "Bachelor of Computer Application",
        year: "2021-2024",
        grade: "GPA - Result not declared yet",
        institution: "Guru Nanak College, Dhanbad",
        image: bcaImg
    },
]

function Education() {
    return (
        <div id='Education' className='w-full font-nunito'>
            <div className='text-center xl:w-[80%] mx-auto py-[90px] px-[7%] '>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-7' src={educationIcon} alt="education icon" />
                    <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>Education</h1>
                </div>
                {educationArray.map((elm, index) => (
                    <div className='educationCard flex flex-col gap-5 sm:flex-row justify-between rounded bg-zinc-950 px-5 sm:px-10 py-8 my-12'>
                        <div className='text-left'>
                            <h2 className='text-xl text-[#fff000]'>{elm.qualification}</h2>
                            <h2 className='text-sm py-2'>{elm.year}</h2>
                            <h2 className='text-sm pb-2'>{elm.grade}</h2>
                            <h2>{elm.institution}</h2>
                        </div>
                        <div>
                            <img className='h-[120px]' src={elm.image} alt="education image" />
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Education