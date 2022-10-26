import React, { useContext } from 'react';
import { SharedContext } from './ShareData';
import bunny from './../../Resources/—Pngtree—bunny with carrot illustration vector_5302230.png'
const CreateUserMail = () => {
    const { CreateUserWithMail } = useContext(SharedContext)

    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        CreateUserWithMail(email, password)
    }
    return (
        <>
            <h1 className='text-4xl font-bold text-center mt-6'>Please register to get full access</h1>
            <hr />
            <div className='grid grid-cols-2 px-20 gap-10'>
                <form className='bg-indigo-500 p-12 w-full m-auto mt-6 rounded-3xl' onSubmit={handleCreateUser}>
                    <div>
                        <p className='text-white font-bold text-xl'>Name:</p>
                        <input className='font-xl pl-4 w-full' name='name' />
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
                <div>
                    <img className='w-40 m-auto' src={bunny} alt="" />
                    <div className='w-6/12 m-auto'>
                        <h1 className='font-bold'>Advantages of register</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateUserMail;