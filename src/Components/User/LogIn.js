import React from 'react';

const LogIn = () => {
    return (
        <div>
            <form className='bg-indigo-500 p-12 w-full m-auto mt-6 rounded-3xl' >
                <div>
                    <p className='text-white font-bold text-xl'>Name:</p>
                    <input className='font-xl pl-4 w-full' name='name' />
                    <p className='text-white font-bold text-xl'>Image URL:</p>
                    <input className='font-xl pl-4 w-full' name='image' />
                    <p className='text-white font-bold text-xl'>Mail:</p>
                    <input className='font-xl pl-4 w-full' name='email' type='email' />
                    <p className='text-white font-bold text-xl'>Password</p>
                    <input className='font-xl pl-4 w-full' name='password' type="password" />
                    <p className='text-white font-bold text-xl' >Confirm password</p>
                    <input className='font-xl pl-4 w-full' type="password" />
                    <div className='flex items-center '>
                        <button type="submit" className='btn m-auto mt-4'>REGISTER</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;