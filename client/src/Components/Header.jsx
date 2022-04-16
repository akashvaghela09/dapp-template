import React from 'react';
import { Wallet } from './Wallet';
import { AiFillHome, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { MdDashboard, MdOutlineContactMail } from 'react-icons/md';
import { useNavigate } from 'react-router';

const Header = () => {

    let navigate = useNavigate();

    const handleRoute = (para) => {
        navigate(`/${para}`)
    }

    // const 
    return (
        <div className='bg-blue-500 h-fit flex sticky top-0 left-0 select-none'>
            <div onClick={() => handleRoute("")} className='md:pl-4 flex h-fit items-center w-fit cursor-pointer'>
                <img src='logo.png' alt="dapp logo" className='w-8 h-8 m-3' />
                <p className="h-fit text-2xl text-slate-200 cursor-pointer font-medium">Dapp Template</p>
            </div>
            <div className='flex grow justify-end items-center md:divide-x-2 divide-slate-400 md:pr-4'>
                <div className='hidden md:flex'>
                    <p onClick={() => handleRoute("dashboard")} className='cursor-pointer hover:text-slate-900 transition ease-in h-fit text-xl text-slate-200 mx-3'>DashBoard</p>
                    <p onClick={() => handleRoute("contact-me")} className='cursor-pointer hover:text-slate-900 transition ease-in h-fit text-xl text-slate-200 mx-3'>Contact Me</p>
                    <p onClick={() => window.open(`https://github.com/akashvaghela09`, '_blank')} className='cursor-pointer hover:text-slate-900 transition ease-in h-fit text-xl text-slate-200 mx-3'>GitHub</p>
                </div>

                <div className=' flex justify-around fixed bg-blue-500 bottom-0 left-0 w-full h-fit md:hidden'>
                    <div className="flex items-center flex-col m-2">
                        <AiFillHome onClick={() => handleRoute("")} className='fill-slate-100 text-3xl cursor-pointer' />
                        <p className="text-slate-300">Home</p>
                    </div>
                    <div className="flex items-center flex-col m-2">
                        <MdDashboard onClick={() => handleRoute("dashboard")} className='fill-slate-300 text-3xl cursor-pointer' />
                        <p className="text-slate-300">Dashboard</p>
                    </div>
                    <div className="flex items-center flex-col m-2">
                        <AiOutlineMail onClick={() => handleRoute("contact-me")} className='fill-slate-300 text-3xl cursor-pointer' />
                        <p className="text-slate-300">Contact Me</p>
                    </div>
                    <div className="flex items-center flex-col m-2">
                        <AiFillGithub onClick={() => window.open(`https://github.com/akashvaghela09`, '_blank')} className='fill-slate-300 text-3xl cursor-pointer' />
                        <p className="text-slate-300">GitHub</p>
                    </div>
                </div>
                <Wallet />
            </div>
        </div>
    )
}

export { Header }