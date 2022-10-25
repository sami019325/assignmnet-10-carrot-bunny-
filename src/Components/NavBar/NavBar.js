import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Resources/logo-of-assignmnet-10.png'

const NavBar = () => {
    return (
        <nav className='bg-yellow-500 h-20 grid grid-cols-3'>
            <div className='flex items-center justify-center gap-3 px-3 col-span-1 '>
                <img src={logo} className='w-12 h-12' alt="app logo a bunny" srcset="" />
                <h1 className='text-5xl text-slate-50 font-bold'>Carrot Bunny</h1>
            </div>
            <div className='flex justify-end items-center	gap-5 col-span-2 px-10'>
                <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to=''>Course</Link>
                <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to=''>FAQ</Link>
                <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to=''>Blog</Link>

                <div className='w-12 h-12 rounded-full bg-slate-500'>U</div>
            </div>
        </nav>
    );
};

export default NavBar;