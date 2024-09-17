import React from 'react'
import htmlIcon from "../assets/html-5.png"
import cssIcon from "../assets/css-3.png"
import jsIcon from "../assets/js.png"
import reactIcon from "../assets/reactjs.png"
import nodeIcon from "../assets/nodejs.png"
import mongodbIcon from "../assets/mongodb.png"
import tailwindIcon from "../assets/tailwind.png"
import gitIcon from "../assets/git.png"
import laptopIcon from "../assets/laptop.png"


const skillsArray = [
    {
        image: htmlIcon,
        name: "HTML"
    },
    {
        image: cssIcon,
        name: "CSS"
    },
    {
        image: jsIcon,
        name: "Javascript"
    },
    {
        image: reactIcon,
        name: "React Js"
    },
    {
        image: nodeIcon,
        name: "Node.js"
    },
    {
        image: mongodbIcon,
        name: "MongoDB"
    },
    {
        image: tailwindIcon,
        name: "Tailwind CSS"
    },
    {
        image: gitIcon,
        name: "Git"
    },
]

function Skills() {

    return (
        <div id='Skills' className='w-full mt-[30px] pt-[130px] font-nunito'>
            <div  className='text-center w-[55%] mx-auto'>
                <div className='flex gap-2 md:gap-5 justify-center items-center'>
                    <img className='w-6' src={laptopIcon} alt="icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Skills</h1>
                </div>
                <div className='skillsDiv py-12'>
                    {
                        skillsArray.map((elm, index) => (
                            <div key={index} className='skillCard bg-zinc-950 px-7 py-8 flex flex-col items-center rounded-md'>
                                <img className='w-[50px]' src={elm.image} alt="html icon" />
                                <p className='pt-5 text-md text-[#c5ba22] font-bold'>{elm.name}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills