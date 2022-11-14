import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ about }) => {
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
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 md:hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-200 md:before:absolute md:before:h-1  md:before:-bottom-3 md:before:left-9'
                    onClick={() => {
                        closeMenu()
                        scrollToSection("about")
                    }} >About</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 md:hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-200 md:before:absolute md:before:h-1  md:before:-bottom-3 md:before:left-9' onClick={() => {
                    closeMenu()
                    scrollToSection("experience")
                }} >Experience</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 md:hover:text-primaryBg md:relative md:before:content-[""] md:before:bg-primaryBg md:before:w-0 md:hover:before:w-11/12 md:before:ease-out md:before:duration-200 md:before:absolute md:before:h-1  md:before:-bottom-3 md:before:left-9' onClick={() => {
                    closeMenu()
                    scrollToSection("contact")
                }}>Contact</li>
                <li className='py-8 w-full text-center ease-in-out duration-300 md:py-0 md:w-fit md:pl-16 md:text-primaryText md:hover:text-primaryBg md:relative md:before:content-[""]  md:before:border-[3px] md:before:border-primaryText md:before:hover:border-primaryBg  md:before:w-full md:before:absolute md:before:h-14  md:before:-top-[16px] md:before:left-8 md:before:-z-10 md:before:rounded-xl md:hover:bg-opacity-0 md:hover:before:bg-opacity-90 md:before:ease-in md:before:duration-300'
                    onClick={() => {
                        closeMenu()
                    }}><a href='https://drive.google.com/file/d/1uu2SoHxqS3bQ3ZtMmn3znjptncuc3t6E/view?usp=sharing'>Resume</a></li>
            </ul>
            <div className=' text-primary-text-color text-3xl md:hidden z-20' onClick={handleClick}>
                {click ? <AiOutlineClose /> : <FiMenu />}
            </div>
            {/* <ul className={`text-primaryText text-base font-mono font-semibold flex flex-col bg-white100 w-full absolute left-0 items-center z-10 shadow rounded-b-3xl  ${click ? "translate-y-12" : "-translate-y-[550px]"} ease-in-out duration-300 top-7 md:flex-row md:relative md:top-0 md:translate-y-0 md:left-0 md:w-fit gap-6 md:shadow-none`}>
                <li className="p-2 hover:text-primaryBg ease-in-out duration-200 active:text-primaryText md:py-0 my-4"
                    onClick={() => {
                        closeMenu()
                        scrollToSection("about")
                    }}
                >
                    About
                </li>
                <li className="p-2 hover:text-primaryBg ease-in-out duration-200 active:text-primaryText md:py-0 my-4"
                    onClick={() => {
                        closeMenu()
                        scrollToSection("experience")
                    }}
                >
                    Experience
                </li>
                <li className="p-2 hover:text-primaryBg ease-in-out duration-200 active:text-primaryText md:py-0 my-4"
                    onClick={() => {
                        closeMenu()
                        scrollToSection("contact")
                    }}
                >
                    Contact
                </li>
                <li className="p-2">
                    <a href="/" className=" px-4 md:py-2 border-2 rounded-lg hover:text-primaryBg ease-in-out duration-200active:text-primaryText sm:border-none my-4">Resume</a>
                </li>
            </ul>
            <div className=' text-primaryText hover:text-primaryBg ease-in-out duration-200 active:text-primaryText text-3xl z-20 md:hidden ' onClick={handleClick}>
                {click ? <AiOutlineClose /> : <FiMenu />}
            </div> */}
        </nav>
    )
}

export default Navbar