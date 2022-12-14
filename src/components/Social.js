import { AiFillGithub, AiOutlineArrowUp, AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

const Social = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='fixed bottom-0 lg:left-10 left-3 z-50'>
            <AiOutlineArrowUp onClick={scrollToTop} className='text-3xl text-primaryText my-5 hover:text-primaryBg ease-in duration-100' />

            <a href='//github.com/Touchsung' target='_blank' rel="noreferrer" >
                <AiFillGithub className='text-3xl text-primaryText my-5 hover:text-primaryBg ease-in duration-100' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" >
                <AiOutlineInstagram className='text-3xl text-primaryText my-5 hover:text-primaryBg ease-in duration-100' />
            </a>
            <a href='https://www.linkedin.com/in/jettapat-thongsima-247102253/' target='_blank' rel="noreferrer" >
                <FaLinkedin className='text-3xl text-primaryText my-5 hover:text-primaryBg ease-in duration-100' />
            </a>
            <div className=' relative left-[13px] w-[2px] h-24 bg-primaryText' />
        </div>
    )
}

export default Social