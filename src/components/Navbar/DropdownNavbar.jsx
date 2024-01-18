import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Button from './Button'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const DropdownNavbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-white'>
            <div className='flex items-center font-medium justify-around '>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <Link to={'/'}>
                        <img src={`${process.env.PUBLIC_URL}/Brand/logo.png`} alt="" className='md:cursor-pointer md:h-16 h-12' />
                    </Link>
                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        {open ? <IoMdClose /> : <IoMenu />}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <NavLinks />
                </ul>

                <div className='md:block hidden'>
                    <Button />
                </div>

                {/*Mobile */}
                <ul className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                    <NavLinks />
                    <div className='py-5 mobile-button-navbar'>
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default DropdownNavbar