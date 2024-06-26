import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();

    const backToHome = () => {
        router.push("/");
    }
    
    const addFood = () => {
        router.push("/create");
    }

    return (
        <div className='fixed z-20 flex w-full h-10 px-20 font-semibold rounded-b-2xl bg-slate-100 dark:bg-slate-800'>
            <div className='flex items-center justify-between w-full'>
                <button onClick={backToHome}><h1 className='dark:text-white'><i className="mr-2 text-lg text-amber-500 fa-solid fa-pizza-slice"></i>IndoKuliner</h1></button>
                <div className='flex items-center gap-5'>
                    <button onClick={addFood} className='px-3 py-[3px] text-xs text-white bg-teal-600 hover:bg-teal-700 rounded-md'><i className="mr-1 text-[9px] leading-4 fa-solid fa-plus"></i>Food</button>
                    <button><i className={`text-sm text-amber-500 hover:text-amber-600 fa-solid fa-sun`}></i></button>
                    <a target="_blank" href="https://github.com/ihwan4rfa"><i className="text-xl text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
