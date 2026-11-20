import React from 'react'
import experience from "../assets/experience.png"

const unbWebsites = [
    {
        "name": "Whistle",
        "url": "https://whistle.in/"
    },
    {
        "name": "Unbundl",
        "url": "https://unbundl.com/"
    },
    {
        "name": "WorldofPerfumers",
        "url": "https://worldofperfumers.com/"
    },
    {
        "name": "Saralhome",
        "url": "https://saralhome.com/"
    },
    {
        "name": "HummelIndia",
        "url": "https://hummel.net.in/"
    },
    {
        "name": "SheenCouture",
        "url": "https://sheencouture.com/"
    },
    {
        "name": "ImagineByShiwali",
        "url": "https://imaginebyshiwali.in/"
    },
    {
        "name": "VanillaMoon",
        "url": "https://vanillamoon.in/"
    },
    {
        "name": "Dcyphr",
        "url": "https://dcyphr.in/"
    },
    {
        "name": "HandsCarpets",
        "url": "https://handscarpets.com/"
    },
]

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
                            <p className='text-2xl mb-1'>Full Stack Developer</p>
                            <a href='https://triline.in/' target='_blank' className='text-xl text-[#c5ba22] font-bold'>Triline Infotech Pvt. Ltd.</a>
                            <p className='text-sm'>Noida, Uttar Pradesh</p>
                            <p className='text-sm text-blue-500 mt-2'>Jan 2026 – Sep 2026</p>
                            <ul className='list-disc ml-4 my-2 flex flex-col gap-2'>
                                <li><span className='font-semibold text-white'>Niwasi</span> | <span className='text-[#c5ba22] text-sm'>Next.js, Express.js, MySQL</span> — Independently developed a full-stack web application, built frontend components, created backend APIs, and integrated the MySQL database.</li>
                                <li><span className='font-semibold text-white'>Proact.Website</span> | <span className='text-[#c5ba22] text-sm'>NestJS, PostgreSQL</span> — Developed backend modules for a content management system (CMS), created REST APIs, and managed PostgreSQL database operations.</li>
                                <li><span className='font-semibold text-white'>Transform UP</span> | <span className='text-[#c5ba22] text-sm'>Next.js, NestJS, PostgreSQL</span> — Developed a separate version of the CMS platform, built frontend features, created backend APIs, and integrated PostgreSQL.</li>
                                <li><span className='font-semibold text-white'>Society Management System</span> | <span className='text-[#c5ba22] text-sm'>Next.js, Express.js, MySQL</span> — Built a full-stack application with responsive interfaces, backend APIs, and MySQL database operations.</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-950 text-left p-5 sm:p-10">
                            <p className='text-2xl mb-1'>MERN Web Developer</p>
                            <a href='https://www.billionsholidays.com' target='_blank' className='text-xl text-[#c5ba22] font-bold'>Billions Holidays</a>
                            <p className='text-sm'>New Delhi, Delhi</p>
                            <p className='text-sm text-blue-500 mt-2'>Jun 2025 – Nov 2025</p>
                            <ul className='list-disc ml-4 my-2 flex flex-col gap-1'>
                                <li>Independently developed and deployed the company&apos;s full-stack travel website using the MERN stack.</li>
                                <li>Built responsive, mobile-first interfaces using React.js and Tailwind CSS.</li>
                                <li>Developed REST APIs using Express.js and integrated MongoDB for content delivery and user management.</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-950 text-left p-5 sm:p-10">
                            <p className='text-2xl mb-1'>Web Development Intern</p>
                            <a href='https://www.unbundl.com' target='_blank' className='text-xl text-[#c5ba22] font-bold'>Unbundl (Infinite Creations Pvt. Ltd.)</a>
                            <p className='text-sm'>New Delhi, Delhi</p>
                            <p className='text-sm text-blue-500 mt-2'>Dec 2024 – May 2025</p>
                            <ul className='list-disc ml-4 my-2 flex flex-col gap-1'>
                                <li>Contributed to client projects including Whistle, Unbundl, World of Perfumers, Saral Home, Hummel India, and Dcyphr:
                                    <div className='flex flex-wrap mt-1'>
                                        {unbWebsites.map((web, index) => (
                                            <a key={index} href={web.url} target='_blank' className='text-[#c5ba22] mr-8 hover:underline'>{web.name}</a>
                                        ))}
                                        etc.
                                    </div>
                                </li>
                                <li>Built and optimized dynamic, responsive web applications using Shopify, React.js, HTML, CSS, and JavaScript.</li>
                                <li>Converted Figma designs into pixel-perfect, production-ready code in close collaboration with senior developers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience