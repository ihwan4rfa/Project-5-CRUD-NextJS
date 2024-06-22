import React from 'react'
import FoodForm from '@/components/FoodForm'
import Navbar from '@/components/Navbar'

const create = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-wrap justify-center w-full gap-5 px-16 pt-20 mb-10'>
                <div className="flex w-full mb-1 rounded-lg cursor-pointer bg-slate-800">
                    <FoodForm />
                </div>
            </div>
        </>
    )
}

export default create
