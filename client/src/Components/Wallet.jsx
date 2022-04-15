import React, { useState } from 'react';
import { abi } from "../helper";
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';


// let contractObj = new ethers.Contract(
//     "0x15C93058E8662660A4e2Cb906819995A5752f2da",
//     abi,
//     mySigner
// );

const Wallet = () => {
    const [status, setStatus] = useState(false);


    // const 
    // console.log(status);
    return (
        <>
            <div className='px-4' >
                <MdOutlineAccountBalanceWallet className='fill-slate-300 text-3xl cursor-pointer' onClick={() => setStatus(!status)} />
                <div className='border-2 border-slate-200 rounded-full w-3 h-3 bg-green-500 absolute bottom-3 right-3 md:right-7' />
            </div>

            {
                status === true &&
                <div className=''>
                    <div className='fixed top-0 left-0 bg-gray-900/30 backdrop-blur-sm w-screen h-screen' onClick={() => setStatus(!status)} ></div>  {/* overlay */}
                    <div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 h-fit py-8 w-3/4 md:w-1/3 border-none bg-neutral-100 rounded-md translate-x-[-50%] translate-y-[-50%]'>
                        <button className='bg-blue-700 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl hover:bg-blue-600 active:bg-blue-700'>Connect your Wallet</button>
                        <div className="p-4 flex w-4/5 justify-center items-center">
                            <div className='bg-gray-600 h-[2px] flex grow' />
                            <p className='m-2'>OR</p>
                            <div className='bg-gray-600 h-[2px] flex grow' />
                        </div>
                        <button className='bg-blue-700 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl hover:bg-blue-600 active:bg-blue-700'>Continue as a guest</button>
                    </div>
                </div>
            }
        </>
    )
}

export { Wallet }