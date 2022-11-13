import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi'
import foodOrderApp from "../assets/Food-Order-App.png";
const Experience = () => {
    return (
        <section className="flex flex-col gap-6 max-w-screen-xl m-auto my-auto p-32 text-base font-semibold  justify-center">
            <h1 className="text-primaryText text-2xl font-bold after:content-[''] after:h-[1px] after:w-60 after:bg-primaryText after:block after:relative after:top-[-13px] after:ml-[275px]">Some Things I’ve Built</h1>
            <div className="my_project grid grid-cols-[4fr,3fr] gap-10 my-10">
                <div className="image_project relative overflow-hidden mix-w-lg w-full rounded">
                    <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                        <div className=" bg-primaryText w-full h-full opacity-70 z-10 absolute hover:opacity-0 ease-in-out duration-500" />
                        <img src={foodOrderApp} alt="foodOrderApp" className="absolute" />
                    </a>
                </div>
                <div className="description_project flex flex-col items-end gap-2">
                    <h2 className="text-primaryText text-lg font-mono">Full-Stack Project</h2>
                    <h1 className="text-secondaryText text-2xl font-bold">Home Service Web Application</h1>
                    <p className="text-white bg-primaryText text-sm max-w-xl leading-8 p-4 rounded shadow-xl my-4 text-end">
                        This is the team's final project in TechUp Bootcamp it's about booking services for the home such as cleaning or maintenance. mainly using a scrum system for implementation.
                    </p>
                    <ul className="text-primaryText text-base flex gap-6 font- flex-wrap justify-end">
                        <li>React</li>
                        <li>Chakra-UI</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>Git</li>
                    </ul>
                    <ul className="text-primaryText text-xl flex gap-3">
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
            <div className="my_project grid grid-cols-[3fr,4fr] gap-10 my-10">
                <div className="image_project relative overflow-hidden mix-w-lg w-full rounded order-last">
                    <a href='https://touchsung.github.io/Food-Menu-Order/' target="_blank" rel="noreferrer">
                        <div className=" bg-primaryText w-full h-full opacity-70 z-10 absolute hover:opacity-0 ease-in-out duration-500" />
                        <img src={foodOrderApp} alt="foodOrderApp" className="absolute" />
                    </a>
                </div>
                <div className="description_project flex flex-col items-start gap-2">
                    <h2 className="text-primaryText text-lg font-mono">Front-End Project</h2>
                    <h1 className="text-secondaryText text-2xl font-bold">Food Order Web Application</h1>
                    <p className="text-white bg-primaryText text-sm max-w-xl leading-8 p-4 rounded shadow-xl my-4 text-start">
                        Web application that for food orders just the front-end part, mainly using tailwind to decorate CSS and redux to manage state.
                    </p>
                    <ul className="text-primaryText text-base flex gap-6 font-mono">
                        <li>React</li>
                        <li>Redux</li>
                        <li>Tailwind</li>
                    </ul>
                    <ul className="text-primaryText text-xl flex gap-3">
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