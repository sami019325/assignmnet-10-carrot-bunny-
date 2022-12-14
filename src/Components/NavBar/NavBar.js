import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Resources/logo-of-assignmnet-10.png'
import { BsList, BsPlus } from "react-icons/bs";
import { useState } from 'react';
import './NavBar.css'
import { SharedContext } from '../User/ShareData';
const NavBar = () => {
    const [IsBtnActive, setIsBtnActive] = useState(true)
    const { user, DisplayUser, signOutCall } = useContext(SharedContext)
    const ShowBtn = DisplayUser.uid
        ;
    console.log(ShowBtn)
    console.log(DisplayUser)
    const signOutFunction = () => {
        signOutCall()
    }
    return (
        <nav className='bg-yellow-500 h-20 grid grid-cols-6 sticky top-0 z-50'>
            <div className='flex items-center justify-start pl-12 gap-3 px-3 col-span-4 md:col-span-3 '>
                <Link to='/'> <img src={logo} className='w-12 h-12' alt="app logo a bunny" /></Link>
                <Link to='/'>
                    <h1 className='text-xl md:text-5xl text-slate-50 font-bold select-none'>Carrot Bunny</h1>
                </Link>
            </div>
            <div className='col-span-2 md:col-span-3 flex  justify-center items-center'>
                <div className={`hidden lg:block `}>
                    <div className={`flex justify-end items-center gap-5 px-10`}>
                        <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to='/course'>Course</Link>
                        <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to='/faq'>FAQ</Link>
                        <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to='/blog'>Blog</Link>
                        <div className="dropdown dropdown-end ">
                            <img tabIndex={0} className='  m-auto w-12 h-12 rounded-full bg-slate-500' src={DisplayUser.photoURL} alt="" />
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    ShowBtn ?
                                        <li><button onClick={signOutFunction}>Log Out</button></li>
                                        :
                                        <>
                                            <li><Link to='/login'>Log In</Link></li>
                                            <li><Link to='register'>Register</Link></li>
                                        </>
                                }

                            </ul>
                        </div>
                    </div>

                </div>
                <div className={` lg:hidden ${IsBtnActive ? 'hidden' : 'block fixed top-20 bottom-0 left-0 right-0 flex-col bg-blur '}`}>
                    <div className={`grid grid-cols-1 justify-end items-center gap-5 px-10 text-center`}>
                        <Link className='p-5 flex-auto font-bold hover:bg-yellow-300 rounded-xl' to='/course'>Course</Link>
                        <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to='/faq'>FAQ</Link>
                        <Link className='p-5 font-bold hover:bg-yellow-300 rounded-xl' to='/blog'>Blog</Link>
                    </div>

                </div>
                <div className='lg:hidden flex justify-end items-center bg-yellow-900 p-1 rounded-full select-none text-white'>
                    {
                        IsBtnActive ?
                            <button onClick={() => setIsBtnActive(false)}><BsPlus className='w-12 h-12' /> </button>
                            :
                            <button onClick={() => setIsBtnActive(true)}><BsList className='w-12 h-12' /> </button>

                    }
                </div>


            </div>
        </nav>
    );
};

export default NavBar;