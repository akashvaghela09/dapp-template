import React from 'react';
import { Wallet } from './Wallet';

const Header = () => {
    // const 
    return (
        <div className='bg-blue-700 h-fit flex sticky top-0 left-0 select-none'>
            <a href="https://akashvaghela.dev" target="_blank" rel='noreferrer' className='md:pl-4 flex h-fit items-center w-fit cursor-pointer'>
                <img src='logo.png' alt="dapp logo" className='w-8 h-8 m-3' />
                <p className="h-fit text-2xl text-slate-200 cursor-pointer font-medium">Dapp Template</p>
            </a>
            <div className='flex grow justify-end items-center md:divide-x-2 divide-slate-500 md:pr-4'>
                <div className='hidden md:flex'>
                    <a href='https://example.com' className='h-fit text-xl text-slate-200 mx-3'>DashBoard</a>
                    <a href='https://example.com' className='h-fit text-xl text-slate-200 mx-3'>Contact Me</a>
                    <a href='https://example.com' className='h-fit text-xl text-slate-200 mx-3'>GitHub</a>
                </div>
                <Wallet />
            </div>
        </div>
    )
}

export { Header }