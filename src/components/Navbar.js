import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from 'react-icons/fi';
import resume from '../assets/resume_jettapat.pdf';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="flex justify-between items-center w-full m-auto px-12 py-12 h-14 fixed bg-white100 z-20">
            <h1 className="text-2xl font-bold text-primaryText tracking-widest hover:cursor-pointer hover:text-primaryBg ease-in-out duration-200 z-20">Touch<span className="font-normal">sung</span></h1>
            <ul className={`text-primaryText flex flex-col font-mono font-semibold text-base bg-white100 w-full absolute left-0 items-center z-10 rounded-b-3xl shadow-xl  ${click ? "translate-y-48" : "-translate-y-[500px]"} ease-in-out duration-300 md:flex-row md:translate-y-0 md:relative md:shadow-none md:w-fit md:z-0`}>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-300 md:before:absolute md:before:h-[2px]  md:before:-bottom-3 md:before:left-9'
                    onClick={() => {
                        closeMenu()
                        scrollToSection("about")
                    }} >About</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-300 md:before:absolute md:before:h-[2px]  md:before:-bottom-3 md:before:left-9' onClick={() => {
                    closeMenu()
                    scrollToSection("experience")
                }} >Experience</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-300 md:before:absolute md:before:h-[2px]  md:before:-bottom-3 md:before:left-9' onClick={() => {
                    closeMenu()
                    scrollToSection("contact")
                }}>Contact</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 md:text-primaryText hover:text-primaryBg md:relative md:before:content-[""]  md:before:border-[3px] md:before:border-primaryText md:before:hover:border-primaryBg  md:before:w-full md:before:absolute md:before:h-14  md:before:-top-[16px] md:before:left-8 md:before:-z-10 md:before:rounded-xl md:hover:bg-opacity-0 md:hover:before:bg-opacity-90 md:before:ease-in md:before:duration-300 md:mr-8'
                    onClick={() => {
                        closeMenu()
                    }}><a href={resume}>Resume</a></li>
            </ul>
            <div className=' text-primary-text-color text-3xl md:hidden z-20' onClick={handleClick}>
                {click ? <AiOutlineClose /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default Navbar