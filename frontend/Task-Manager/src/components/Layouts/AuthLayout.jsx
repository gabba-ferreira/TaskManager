import React from 'react'
import UI_IMG from "../../assets/images/login.avif"

const AuthLayout = ({children}) => {
  return <div className='flex'>
        <div className='w-screen h-screen md:w-[80w] px-12 pt-8 pb-12'>
            <h2 className="text-lg font-medium text-black">Task Manager</h2>
            {children}
        </div>

        <div className="hidden md:flex w-full h-screen items-center justify-center bg-white">
            <img src={UI_IMG} className="" />
        </div>
    </div>

  
}

export default AuthLayout