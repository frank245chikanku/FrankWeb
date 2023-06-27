import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen(!open);
    };
    return (
        <div className='flex  justify-between px-10 py-8 w-full bg-indigo-300 items-center'>
            <div>
                <a href="" alt="logo" className='text-xl'>Frank</a>
            </div>
            <div className='md:flex hidden gap-10 list-none'>
                <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                    <a href="">Home</a>
                </li>
                <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                    <a href="">Services</a>
                </li>
                <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                    <a href="">About</a>
                </li>
                <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                    <a href="">Contacts</a>
                </li>
            </div>
            <button onClick={handleMenu} className='md:hidden block'>
                <div className='md:hidden absolute right-12 text-lg'>
                    {
                        open?(<a className='flex gap-2 items-center'> <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 00354 671z" />
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
                    </svg>Close</a> 
                        ):(
                            <a className='flex gap-2 items-center'><svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                        </svg>Menu</a>
                        )
                    }
                    { open ? (
                        <div className='md:hidden flex flex-col gap-4 list-none bg-indigo-300'>
                        <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                            <a href="">Home</a>
                        </li>
                        <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                            <a href="">Services</a>
                        </li>
                        <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                            <a href="">About</a>
                        </li>
                        <li className='hover:bg-white py-2 px-3 rounded text-xl'>
                            <a href="">Contacts</a>
                        </li>
                    </div>
                    ):null }
                </div>
            </button>
        </div>
    )
}

export default Navbar
