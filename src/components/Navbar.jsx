import React from 'react'

const Navbar = () => {
    return (
        <div className='flex  justify-between px-10 py-4 w-full bg-indigo-300'>
            <div>
                <a href="" alt="logo">Logo</a>
            </div>
            <div className='flex gap-10 list-none'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </div>
        </div>
    )
}

export default Navbar
