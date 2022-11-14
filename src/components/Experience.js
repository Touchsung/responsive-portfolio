import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi'
import foodOrderApp from "../assets/img/Food-Order-App.png";

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col gap-6 max-w-screen-xl m-auto my-auto lg:p-32 px-16 pt-32 text-base font-semibold  justify-center">
            <h1 className="text-primaryText text-2xl font-bold after:content-[''] after:h-[1px] after:w-60 after:bg-primaryText after:block after:relative after:top-[-13px] after:ml-[275px]">Some Things I’ve Built</h1>
            <div className="my_project grid grid-cols-[repeat(12, 1fr)] my-10 relative overflow-hidden lg:bg-white100 lg:rounded-none lg:shadow-none  bg-primaryText w-full rounded shadow-2xl">
                <div className="image_project absolute col-span-1 lg:max-w-xl lg:block hidden max-h-full">
                    <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                        <div className="lg:bg-primaryBg bg-primaryText w-full h-full lg:opacity-30 opacity-90 absolute lg:hover:opacity-0 ease-in-out duration-500" />
                        <img src={foodOrderApp} alt="foodOrderApp" className="lg:w-full lg:h-full" />
                    </a>
                </div>
                <div className="description_project flex flex-col lg:items-end gap-2 col-span-7 p-8 items-start">
                    <h2 className="lg:text-primaryText text-contrastText lg:text-lg text-base text-h font-mono z-10">Full-Stack Project</h2>
                    <h1 className="lg:text-secondaryText text-white text-2xl font-bold z-10">Home Service Web Application</h1>
                    <p className="text-white lg:bg-primaryText bg-none text-sm max-w-xl leading-8 lg:p-4 0 lg:rounded lg:shadow-xl my-4 lg:text-end items-start z-10">
                        This is the team's final project in TechUp Bootcamp it's about booking services for the home such as cleaning or maintenance. mainly using a scrum system for implementation.
                    </p>
                    <ul className="lg:text-primaryText text-white text-base flex lg:gap-6 font-mono flex-wrap justify-end z-10 gap-3">
                        <li>React</li>
                        <li>Chakra-UI</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>Git</li>
                    </ul>
                    <ul className="lg:text-primaryText text-white text-xl flex gap-3 z-10">
                        <li>
                            <a href='https://github.com/Touchsung/Food-Menu-Order' target="_blank" rel="noreferrer">
                                <AiFillGithub className="hover:text-primaryBg ease-in-out duration-200" />
                            </a>
                        </li>
                        <li>
                            <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                                <FiExternalLink className="hover:text-primaryBg ease-in-out duration-200" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my_project grid grid-cols-[repeat(12, 1fr)] my-10 relative overflow-hidden lg:bg-white100 lg:rounded-none lg:shadow-none  bg-primaryText w-full rounded shadow-2xl lg:max-w-full">
                <div className="image_project absolute col-span-2 lg:max-w-xl lg:block hidden max-h-full right-0">
                    <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                        <div className="lg:bg-primaryBg bg-primaryText w-full h-full lg:opacity-30 opacity-90 absolute lg:hover:opacity-0 ease-in-out duration-500" />
                        <img src={foodOrderApp} alt="foodOrderApp" className="lg:w-full lg:h-full" />
                    </a>
                </div>
                <div className="description_project flex flex-col gap-2 col-span-7 p-8 items-start">
                    <h2 className="lg:text-primaryText text-contrastText lg:text-lg text-base text-h font-mono z-10">Front-End Project</h2>
                    <h1 className="lg:text-secondaryText text-white text-2xl font-bold z-10">Food Order Web Application</h1>
                    <p className="text-white lg:bg-primaryText bg-none text-sm max-w-xl leading-8 lg:p-4 0 lg:rounded lg:shadow-xl my-4 items-start z-10">
                        Web application that for food orders just the front-end part, mainly using tailwind to decorate CSS and redux to manage state.
                    </p>
                    <ul className="lg:text-primaryText text-white text-base flex lg:gap-6 font-mono flex-wrap justify-end z-10 gap-3">
                        <li>React</li>
                        <li>Redux</li>
                        <li>Tailwind</li>
                    </ul>
                    <ul className="lg:text-primaryText text-white text-xl flex gap-3 z-10">
                        <li>
                            <a href='https://github.com/Touchsung/Food-Menu-Order' target="_blank" rel="noreferrer">
                                <AiFillGithub className="hover:text-primaryBg ease-in-out duration-200" />
                            </a>
                        </li>
                        <li>
                            <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                                <FiExternalLink className="hover:text-primaryBg ease-in-out duration-200" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Experience