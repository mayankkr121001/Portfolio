import React, { useRef } from 'react'
import projectsIcon from "../assets/projectsIcon.png"
import takeLookIcon from "../assets/takeLookIcon.png"
import githubIcon from "../assets/githubIcon.png"
import weatherImg from "../assets/weatherImg.png"
import noteImg from "../assets/noteImg.png"
import votingImg from "../assets/votingImg.png"
import portfolioImg from "../assets/portfolioImg.png"


const projectsArray = [
    {
        sNo: 1,
        image: weatherImg,
        name: "Weather App",
        description: "It shows current temperature, other weather conditions, 3 days forecast and has a whole day temperature forecast in a 3-hour difference in graph.",
        techStack: ["HTML", "CSS", "React JS", "Weather API"],
        link: "https://weather-app-mk12.netlify.app/",
        target: "_blank",
        github: "https://github.com/mayankkr121001/weather-app"

    },
    {
        sNo: 2,
        image: noteImg,
        name: "Notes Here",
        description: "A Note keeping website in which we can Register, Login and keep our notes in which we can add title, content, note color, and image and can also edit them.",
        techStack: ["React JS", "NodeJS", "ExpressJS", "MongoDB"],
        link: "https://notes-app-frontend-kizg.onrender.com/",
        target: "_blank",
        github: "https://github.com/mayankkr121001/Notes-App"

    },
    {
        sNo: 3,
        image: votingImg,
        name: "Voteverse",
        description: "A college / school voting web app in which student can login using credential given by admin and can vote. It also has a admin panel through which admin host elections. ( College project )",
        techStack: ["React JS", "Laravel", "", ""],
        link: "javascript:void(0)",
        target: "",
        github: "https://github.com/mayankkr121001/Online-Voting-System"

    },
    {
        sNo: 4,
        image: portfolioImg,
        name: "Portfolio",
        description: "A personal portfolio website showcasing web development projects and skills. Built with React JS and Tailwind CSS, it also includes contact information for potential job opportunities.",
        techStack: ["HTML", "CSS", "React JS", "Tailwind CSS"],
        link: "#About",
        target: "",
        github: "https://github.com/mayankkr121001/Portfolio"

    },
]

function Projects() {

    const projectImage = useRef([]);

    const onImageMouseMoveFunc = (e, index) => {
        let imagePosition = projectImage.current[index].getBoundingClientRect();
        let mouseX = e.clientX - imagePosition.left;
        let mouseY = e.clientY - imagePosition.top;

        let dx = (mouseX - imagePosition.width / 2) / (imagePosition.width / 2);
        let dy = (mouseY - imagePosition.height / 2) / (imagePosition.height / 2);

        projectImage.current[index].style.transform = ` rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
        projectImage.current[index].style.transition = ` transform 0.1s ease`;

    }

    const onImageMouseLeaveFunc = (index) => {
        projectImage.current[index].style.transform = ""
        projectImage.current[index].style.transition = ` transform 0.1s ease`;

    }

    return (
        <div id='Projects' className='w-full font-nunito mt-[40px] pt-[20px]'>
            <div className='bg-zinc-950 text-center mx-auto pt-[90px] pb-[80px] px-[8%]'>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-6'>
                    <img className='w-6' src={projectsIcon} alt="project icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Projects</h1>
                </div>

                {projectsArray.map((elm, index) => (
                    <div key={index} className={` flex flex-col-reverse ${(elm.sNo % 2 == 0)? "lg:flex-row-reverse": "lg:flex-row"} items-start justify-center gap-[50px] lg:gap-[10%] py-[100px]`} >

                        <div className='text-left w-[80%] lg:w-[50%] lg:pr-[50px]'>
                            <h1 className='text-2xl font-bold text-blue-500'>{elm.sNo}. {elm.name}</h1>
                            <p className='text-[#9e9e9e] text-[13px] py-4 font-semibold'>{elm.description}
                            </p>
                            <div className='flex flex-wrap gap-4 xl:gap-8 text-[#c5ba22]'>
                                <p>{elm.techStack[0]}</p>
                                <p>{elm.techStack[1]}</p>
                                <p>{elm.techStack[2]}</p>
                                <p>{elm.techStack[3]}</p>
                            </div>
                            <div className='flex gap-3 sm:gap-7 mt-6'>
                                {(elm.name !== "Voteverse") && <a href={elm.link} target={elm.target} className='takeALookBtn flex items-center gap-2 sm:gap-5 text-black font-bold rounded-full px-5 sm:px-10 py-2'>
                                    <img className='w-3' src={takeLookIcon} alt="takeLookIcon" />
                                    <p className='text-sm'>Take a Look</p>
                                </a>}
                                <a href={elm.github} target='_blank'><img className='takeALookGithub bg-blue-500 rounded-full w-10 p-2' src={githubIcon} alt="github" /></a>
                            </div>
                        </div>

                        <a href={elm.link} target={elm.target} className='projectImageDiv w-[80%] lg:w-[50%]'>
                            <img className='w-[80%]' ref={(el) => (projectImage.current[index] = el)} onMouseMove={(e) => onImageMouseMoveFunc(e, index)} onMouseLeave={() => onImageMouseLeaveFunc(index)} src={elm.image} alt="weather App" />
                        </a>
                    </div>
                ))}




            </div>
        </div >
    )
}

export default Projects