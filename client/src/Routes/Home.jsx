import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/app/actions"
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Home = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [nameString, setNameString] = useState("");
    const [saveMethodLoading, setSaveMethodLoading] = useState(false);

    const {
        contract
    } = useSelector(state => state.app)

    // =>> Get the name from the contract by calling recursively --- not recommended
    // const getName = async (n = 10) => {
    //     setSaveMethodLoading(true)

    //     if (n <= 0) {
    //         setSaveMethodLoading(false)
    //         return;
    //     } else {
    //         setTimeout(async () => {
    //             try {
    //                 let tempName = await contract.getName()
    //                 if (tempName === name) {
    //                     getName(n - 1)
    //                 } else {
    //                     setName(tempName)
    //                     setSaveMethodLoading(false)
    //                     return;
    //                 }
    //             } catch (error) {
    //                 setSaveMethodLoading(false)
    //                 return;
    //             }
    //         }, 2000);
    //     }
    // }

    const getName = async (n = 10) => {
        setSaveMethodLoading(true)
        try {
            let tempName = await contract.getName()
            setName(tempName)
            setSaveMethodLoading(false)
            return;
        } catch (error) {
            setSaveMethodLoading(false)
            return;
        }
    }

    const handleSubmit = async () => {
        dispatch(setLoading(true))
        let tx = await contract.setName(nameString)
        await tx.wait();
        dispatch(setLoading(false))
        getName()
        setNameString("")
    }

    useEffect(() => {
        (async () => {
            try {
                let tempName = await contract.getName()
                setName(tempName)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [contract]);

    return (
        <div className='h-full flex justify-center items-center flex-col'>
            <h1 className='text-3xl text-slate-200 p-10'>User Name : {name === "" ? "Unknown" : name}</h1>
            <input className='p-2 m-2 rounded text-xl w-52' value={nameString} onChange={(e) => setNameString(e.target.value)} />

            {
                saveMethodLoading === true ?
                    <button className='flex justify-center items-center active:translate-y-1 p-2 m-2 mb-36 rounded text-xl text-slate-300 bg-blue-500 w-52'><AiOutlineLoading3Quarters className='mx-4 text-2xl animate-spin' /> Setting ...</button>
                    :
                    <button className='p-2 m-2 mb-36 rounded text-xl text-slate-300 bg-blue-500 w-52' onClick={() => handleSubmit()}>Set Name</button>
            }
        </div>
    )
}

export { Home }