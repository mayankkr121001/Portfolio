import React, { useState } from 'react'
import resumePdf from "../assets/Mayank_Kumar_Resume.pdf"


function Navbar() {
    const [navbarMenuIconClickedFlag, setNavbarMenuIconClickedFlag] = useState(false);
    
    const navLinksArray = ["About", "Resume", "Skills", "Experience", "Projects", "Education", "Contact"];

    const onNavbarMenuClickFunc = () => {
        setNavbarMenuIconClickedFlag(prev => !prev);
    }

    return (
        <div className=' w-full fixed top-0 z-10'>
            <div className='bg-black text-[white] tracking-wider flex items-center justify-between px-[5%] py-3 md:py-4 relative z-[8]'>
                <div className='flex items-baseline gap-3 pt-4'>
                    <p className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-rubikDirt'>Portfolio</p>
                    <div className='bg-[#c5ba22] h-3 w-3 rounded-full animate-bounceInMobile md:animate-bounceTbLp'></div>
                </div>
                <ul className='hidden lgxl:flex items-center sm:gap-4 md:text-md md:gap-7 lg:text-md xl:gap-9 font-nunito '>
                    {
                        navLinksArray.map((element, index) => (
                            <a
                                key={index}
                                href={element === "Resume" ? resumePdf : `#${element}`}
                                target={element === "Resume" ? "_blank" : undefined}
                                rel={element === "Resume" ? "noreferrer" : undefined}
                                className='navbarListItems cursor-pointer font-bold'
                            >
                                {element}
                            </a>
                        ))
                    }
                </ul>
                <div onClick={onNavbarMenuClickFunc} className={`${navbarMenuIconClickedFlag ? "navbarMenuIconActive" : "navbarMenuIcon"} lgxl:hidden flex flex-col gap-2`}>
                    <div className="topLine w-10 h-1 bg-[#c5ba22] rounded"></div>
                    <div className="middleLine w-10 h-1 bg-[#c5ba22] rounded" ></div>
                    <div className="bottomLine w-10 h-1 bg-[#c5ba22] rounded" ></div>
                </div>

            </div>
            {<ul className={`${navbarMenuIconClickedFlag ? "mobileNavbarLinksUlActive" : "mobileNavbarLinksUl"} w-full lgxl:hidden flex flex-col gap-5 md:lg-text-md xl:text-xl font-nunito bg-zinc-950 px-[7%] py-5 absolute z-[7]`}>
                {
                    navLinksArray.map((element, index) => (
                        <a
                            key={index}
                            href={element === "Resume" ? resumePdf : `#${element}`}
                            target={element === "Resume" ? "_blank" : undefined}
                            rel={element === "Resume" ? "noreferrer" : undefined}
                            onClick={() => setNavbarMenuIconClickedFlag(false)}
                            className='navbarListItems cursor-pointer'
                        >
                            {element}
                        </a>
                    ))
                }
            </ul>}

        </div>
    )
}

export default Navbar