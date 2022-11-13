import React from "react"

const Footer = () => {

    return (
        <footer className="flex flex-col items-center gap-4 p-12 w-full text-base font-bold font-mono h-12 justify-center text-primaryText absolute bottom-0">
            <h2>Build by Touchsung</h2>
            <h2>Inspired from <a className="hover:text-primaryBg ease-in-out duration-300" href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a></h2>
        </footer>

    )
}

export default Footer