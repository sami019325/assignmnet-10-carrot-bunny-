import React, { useContext } from 'react';
import { SharedContext } from './ShareData';

const LogIn = () => {
    const { LogInUserWithMail } = useContext(SharedContext)

    const logIntoUser = (e) => {
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        LogInUserWithMail(email, password)
        form.reset()
    }
    return (
        <div>
            <form className='bg-indigo-500 p-12 w-full m-auto mt-6 rounded-3xl' onChange={logIntoUser}>
                <div>
                    <p className='text-white font-bold text-xl'>Mail:</p>
                    <input className='font-xl pl-4 w-full' name='email' type='email' required />
                    <p className='text-white font-bold text-xl'>Password</p>
                    <input className='font-xl pl-4 w-full' name='password' type="password" required />
                    <div className='flex items-center '>
                        <button type="submit" className='btn m-auto mt-4'>LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;