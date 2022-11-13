import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full m-auto px-12 py-12 h-14 fixed">
            <h1 className="text-2xl font-bold text-primaryText tracking-widest hover:cursor-pointer hover:text-primaryBg ease-in-out duration-200">Touch<span className="font-normal">sung</span></h1>
            <ul className="flex gap-6 text-primaryText text-base font-semibold font-mono">
                <li className="p-2">
                    <a href="/" className=" hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">About</a>
                </li>
                <li className="p-2">
                    <a href="/" className=" hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">Experience</a>
                </li>
                <li className="p-2">
                    <a href="/" className=" hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">Work</a>
                </li>
                <li className="p-2">
                    <a href="/" className=" hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">Contact</a>
                </li>
                <li className="p-2">
                    <a href="/" className=" px-4 py-2 border-2 rounded-lg hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar