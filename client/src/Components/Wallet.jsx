import React, { useState } from 'react';
import { abi } from "../helper";
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { AiOutlineLoading3Quarters, AiFillCaretUp } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';
import { FaUserCircle, FaEthereum } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";
import { IoWalletOutline, IoWallet } from 'react-icons/io5';
import { GoLinkExternal } from 'react-icons/go';
import { SiHiveBlockchain } from 'react-icons/si';
import { FiLogOut } from 'react-icons/fi';
// let contractObj = new ethers.Contract(
//     "0x15C93058E8662660A4e2Cb906819995A5752f2da",
//     abi,
//     mySigner
// );

const Wallet = () => {
    const [status, setStatus] = useState(false);
    const [profileModal, setProfileModal] = useState(false);

    const [auth, setAuth] = useState(false);
    const [guestWalletLoading, setGuestWalletLoading] = useState(false)
    const [userWalletLoading, setUserWalletLoading] = useState(false)
    const [logoutLoading, setLogoutLoading] = useState(false)

    let add = "0X15...f2da";
    let network = "rinkeby";
    let amount = "5.00...3123"
    let name = "MetaMask"
    let wallet = {
        accounts: [add]
    }

    const checkAuth = () => {
        if (auth === true) {
            setProfileModal(!profileModal)
        } else {
            setStatus(true)
        }
    }

    const handleWalletConnect = (para) => {
        if (para === "user") {
            setUserWalletLoading(true);
            setTimeout(() => {
                setUserWalletLoading(false);
                setAuth(true);
                setStatus(false)
            }, 2500);
        } else if (para === "guest") {
            setGuestWalletLoading(true);
            setTimeout(() => {
                setGuestWalletLoading(false);
                setAuth(true);
                setStatus(false)
            }, 2500);
        }
    }

    const handleLogOut = () => {
        setLogoutLoading(true);
        setTimeout(() => {
        setLogoutLoading(false);
            setAuth(false)
            setProfileModal(false)
        }, 2000);
    }

    return (
        <>
            <div className='px-4' >
                <MdOutlineAccountBalanceWallet className='fill-slate-300 text-3xl cursor-pointer hover:fill-slate-900 transition ease-in' onClick={() => checkAuth()} />
                {
                    auth === true ?
                        <div className='border-2 border-slate-200 rounded-full w-3 h-3 bg-green-500 absolute bottom-3 right-3 md:right-7' />
                        :
                        <div className='border-2 border-slate-200 rounded-full w-3 h-3 bg-slate-500 absolute bottom-3 right-3 md:right-7' />
                }
            </div>

            {
                status === true &&
                <div>
                    <div className='fixed top-0 px-2 left-0 bg-gray-900/30 backdrop-blur-sm w-screen h-screen' onClick={() => setStatus(!status)} ></div>
                    <Fade>
                        <div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 h-fit py-8 w-3/4 md:w-1/3 border-none bg-slate-700 shadow-lg rounded-md translate-x-[-50%] translate-y-[-50%]'>
                            {
                                userWalletLoading === false ?
                                    <button onClick={() => handleWalletConnect("user")} className='active:translate-y-1 bg-blue-500 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl hover:bg-blue-600'>Connect your Wallet</button>
                                    :
                                    <button className='flex justify-center items-center active:translate-y-1 bg-blue-600 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl '> <AiOutlineLoading3Quarters className='mx-4 text-2xl animate-spin' /> Connecting ...</button>

                            }
                            <div className="p-4 flex w-4/5 justify-center items-center">
                                <div className='bg-slate-500 h-[2px] flex grow' />
                                <p className='m-2 text-slate-300'>OR</p>
                                <div className='bg-slate-500 h-[2px] flex grow' />
                            </div>
                            {
                                guestWalletLoading === false ?
                                    <button onClick={() => handleWalletConnect("guest")} className='active:translate-y-1 bg-blue-500 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl hover:bg-blue-600'>Continue as a guest</button>
                                    :
                                    <button className='flex justify-center items-center active:translate-y-1 bg-blue-600 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl'> <AiOutlineLoading3Quarters className='mx-4 text-2xl animate-spin' /> Processing ...</button>

                            }

                        </div>
                    </Fade>
                </div>
            }

            {
                profileModal === true &&                                                                                // -4px 5px 12px 0px rgba(5,8,15,0.77)
                <div className='absolute top-[65px] right-2  w-fit h-fit flex flex-col items-center rounded bg-slate-700 py-2 drop-shadow-[-4px_5px_12px_rgba(5,8,15,0.77)]'>
                    <FaUserCircle className='text-6xl text-slate-300 my-4' />
                    <div className='flex items-center p-2 px-4'>
                        <p className='text-slate-300 m-1'>ETH : {add}</p>
                        <BiCopy onClick={() => navigator.clipboard.writeText(wallet.accounts[0])} className="m-1 text-xl fill-slate-300 active:translate-y-1 cursor-pointer" />
                        <GoLinkExternal onClick={() => window.open(`https://rinkeby.etherscan.io/address/${wallet.accounts[0]}`, '_blank')} className="m-1 text-xl fill-slate-300 active:translate-y-1 cursor-pointer" />
                    </div>
                    <div className='flex items-center border-[1px] border-slate-600 w-full'>
                        <FaEthereum className="fill-slate-300 m-1 text-xl" />
                        <div className="flex grow justify-between">
                            <p className="text-slate-300 px-2">Balance</p>
                            <p className="text-slate-300 px-2">{amount}</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[1px] border-slate-600 w-full'>
                        <IoWalletOutline className="text-slate-300 m-1 text-xl" />
                        <div className="flex grow justify-between">
                            <p className="text-slate-300 px-2">Wallet</p>
                            <p className="text-slate-300 px-2">{name}</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[1px] border-slate-600 w-full'>
                        <SiHiveBlockchain className="fill-slate-300 m-1 text-xl" />
                        <div className="flex grow justify-between">
                            <p className="text-slate-300 px-2">Network</p>
                            <p className="text-slate-300 px-2">{network}</p>
                        </div>
                    </div>
                    {
                        logoutLoading === false ?
                        <button onClick={() => handleLogOut()} className='flex justify-center items-center active:translate-y-1 bg-blue-500 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl'> LogOut <FiLogOut className='mx-2 text-2xl' /></button>
                        :
                        <button className='flex justify-center items-center active:translate-y-1 bg-blue-500 text-neutral-100 rounded-md w-4/5 py-2 m-2 text-xl'> LogOut <AiOutlineLoading3Quarters className='mx-2 text-2xl animate-spin' /></button>
                    }
                </div>
            }
        </>
    )
}

export { Wallet }