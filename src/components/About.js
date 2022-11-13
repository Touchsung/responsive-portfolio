import React from "react";

const About = () => {
    return (
        <section className="flex flex-col gap-6 max-w-screen-xl m-auto my-auto px-20 py-20 text-base font-semibold min-h-screen justify-center">
            <h1 className="text-primaryText text-2xl font-bold after:content-[''] after:h-[1px] after:w-60 after:bg-primaryText after:block after:relative after:top-[-13px] after:ml-32">About Me</h1>
            <div className="content_about_me grid grid-cols-[3fr,2fr] gap-10">
                <article className="text-contentText text-lg max-w-xl leading-8 flex flex-col gap-6">
                    <p>
                        Hello! My name is Jettapat and I graduated with a bachelor of Food and Science my interest in programming languages started back when I graduated when I decided to try learning about python by myself then I feel good when coding and trying to solve problems it like playing puzzle game
                    </p>
                    <p>
                        I also recently joined <a href="https://www.techupth.com/" target="_blank" className="text-highlightText font-bold hover:text-primaryBg ease-in-out duration-200" rel="noreferrer">TechUp Bootcamp</a> which covers basic skills everything needs to be a full stack software developer with javascript
                    </p>
                    <p>
                        Now I'm entry-level and have few projects but I am willing to learn new things with a growth mindset.
                    </p>
                    <p>
                        Here are a few technologies I’ve been using recently:
                    </p>
                    <div className="skills_about_me grid grid-cols-2 text-base font-semibold font-mono">
                        <ul className=" flex flex-col gap-2">
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">HTML</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">CSS</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">JavaScript</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">React</li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">Node.js</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">Express.js</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">MongoDB</li>
                            <li className="before:content-['▹'] before:text-highlightText before:text-base before:mr-2 ">PostgreSQL</li>
                        </ul>
                    </div>


                </article>
                <div className="image_about_me max-w-xs">
                    <img src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" alt="Jettapat" className="w-full rounded-md" />
                </div>
            </div>
        </section >
    )
}

export default About