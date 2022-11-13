import React from "react";

const Introduction = () => {
    return (
        <header className="flex flex-col gap-4 max-w-screen-xl m-auto my-auto md:px-32 px-16 py-20 text-base font-semibold min-h-screen justify-center">
            <h2 className="text-primaryText text-lg">Hi, my name is</h2>
            <h1 className="text-primaryText text-6xl font-bold">Jettapat Thongsima</h1>
            <h1 className="text-secondaryText text-6xl font-bold">Now I build things for the web.</h1>
            <p className="text-contentText text-lg max-w-xl mt-4 leading-8">I'm a software developer based in Thailand, I’am coding with a clean and beautiful problem solving in mind. Currently, I'm looking for new jobs about full stack developer.</p>
        </header >
    )
}

export default Introduction