import React from "react";

const Contact = () => {
    return (
        <header className="flex flex-col items-center gap-4 max-w-screen-xl m-auto my-auto px-32 py-20 text-base font-semibold min-h-screen justify-center">
            <h1 className="text-secondaryText text-6xl font-bold">Get In <span className="text-primaryText">Touch</span></h1>
            <p className="text-contentText text-xl max-w-2xl mt-4 leading-8 text-center">Now I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <button className="px-4 py-2 border-2 my-6 rounded hover:text-primaryBg ease-in-out duration-200 active:text-primaryText">Say Hello</button>
        </header >
    )
}

export default Contact