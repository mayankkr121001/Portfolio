import React, { useRef, useState } from 'react'
import resumePdf from "../assets/RESUME.pdf"


function Navbar() {
    const [navbarMenuIconClickedFlag, setNavbarMenuIconClickedFlag] = useState(false);


    const navLinksLaptopRef = useRef([]);
    const navLinksMobileRef = useRef([]);
    
    const navLinksArray = ["About", "Resume", "Skills", "Projects", "Education", "Contact"];


    const onNavlinkLaptopClickFunc = (index) => {

        if(navLinksLaptopRef.current[index].getAttribute("href") == "#Resume"){
            navLinksLaptopRef.current[index].setAttribute("href", resumePdf);
            navLinksLaptopRef.current[index].setAttribute("target", "_blank");
        }
    }



    const onNavlinkMobileClickFunc = (index) => {


        if(navLinksMobileRef.current[index].getAttribute("href") == "#Resume"){
            navLinksMobileRef.current[index].setAttribute("href", resumePdf);
            navLinksMobileRef.current[index].setAttribute("target", "_blank");
        }

    }

    const onNavbarMenuClickFunc = () => {
        setNavbarMenuIconClickedFlag(prev => !prev);
    }

    return (
        <div className=' w-full fixed top-0 z-10'>
            <div className='bg-black text-[white] tracking-wider flex items-center justify-between px-[7%] py-3 md:py-4 relative z-[8]'>
                <div className='flex items-baseline gap-3 pt-4'>
                    <p className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-rubikDirt'>Portfolio</p>
                    <div className='bg-[#c5ba22] h-3 w-3 rounded-full animate-bounceInMobile md:animate-bounceTbLp'></div>
                </div>
                <ul className='hidden mbTb:flex items-center sm:gap-4 md:text-md md:gap-7 lg:text-lg xl:gap-9 font-nunito '>
                    {
                        navLinksArray.map((element, index) => (
                            <a key={index} href={`#${element}`} ref={(el) => (navLinksLaptopRef.current[index] = el)} onClick={() => onNavlinkLaptopClickFunc(index)} className='navbarListItems cursor-pointer font-bold'>{element}</a>
                        ))
                    }
                </ul>
                <div onClick={onNavbarMenuClickFunc} className={`${navbarMenuIconClickedFlag ? "navbarMenuIconActive" : "navbarMenuIcon"} mbTb:hidden flex flex-col gap-2`}>
                    <div className="topLine w-10 h-1 bg-[#c5ba22] rounded"></div>
                    <div className="middleLine w-10 h-1 bg-[#c5ba22] rounded" ></div>
                    <div className="bottomLine w-10 h-1 bg-[#c5ba22] rounded" ></div>
                </div>

            </div>
            {<ul className={`${navbarMenuIconClickedFlag ? "mobileNavbarLinksUlActive" : "mobileNavbarLinksUl"} w-full mbTb:hidden flex flex-col gap-5 md:lg-text-md xl:text-xl font-nunito bg-zinc-950 px-[7%] py-5 absolute z-[7]`}>
                {
                    navLinksArray.map((element, index) => (
                        <a key={index} href={`#${element}`} ref={(el) => (navLinksMobileRef.current[index] = el)} onClick={() => onNavlinkMobileClickFunc(index)} className='navbarListItems cursor-pointer'>{element}</a>
                    ))
                }
            </ul>}

        </div>
    )
}

export default Navbar