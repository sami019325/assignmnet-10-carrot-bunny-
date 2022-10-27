import React, { useContext, useState } from 'react';
import { SharedContext } from './ShareData';
import bunny from './../../Resources/—Pngtree—bunny with carrot illustration vector_5302230.png'
import googleImg from './../../Resources/Photos/google.png'
import facebookImg from './../../Resources/Photos/fb_icon_325x325.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateUserMail = () => {
    // const [registerBtn, setRegisterBtn] = useState(false)
    const { CreateUserWithMail, CreateUserWithGoogle, CreateUserWithFacebook, updateUserFunction } = useContext(SharedContext)

    // register notification
    const notify = () => {
        const resolveAfter1Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
            resolveAfter1Sec,
            {
                position: toast.POSITION.TOP_CENTER,
                pending: 'Creating account',
                success: 'Updating profile 👌',
                error: 'failed to create profile 🤯'
            }
        )
    }

    // error notification
    const errorNotify = () => {
        toast.warn("Password did not match", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;
        if (confirmPass === password) {
            notify()
            console.log(name, image, email, password);
            CreateUserWithMail(name, image, email, password)
            form.reset()
        }
        else {
            errorNotify()
            // alert('Password did not match')
        }

    }
    return (
        <>
            <ToastContainer />
            <h1 className='text-4xl font-bold text-center mt-6'>Please register to get full access</h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-2 px-10 gap-10'>
                <div>
                    <form className='bg-indigo-500 p-12 w-full m-auto mt-6 rounded-3xl' onSubmit={handleCreateUser}>
                        <div>
                            <p className='text-white font-bold text-xl'>Name:</p>
                            <input className='font-xl pl-4 w-full' name='name' required />
                            <p className='text-white font-bold text-xl'>Image URL:</p>
                            <input className='font-xl pl-4 w-full' name='image' required />
                            <p className='text-white font-bold text-xl'>Mail:</p>
                            <input className='font-xl pl-4 w-full' name='email' type='email' required />
                            <p className='text-white font-bold text-xl'>Password</p>
                            <input className='font-xl pl-4 w-full' name='password' type="password" required />
                            <p className='text-white font-bold text-xl' >Confirm password</p>
                            <input className='font-xl pl-4 w-full' type="password" name='confirmPass' required />
                            <div className='flex items-center '>
                                <button type="submit" className='btn m-auto mt-4' id='registerBtn' >REGISTER</button>
                            </div>
                        </div>
                    </form>
                    <div className='grid grid-cols-3 mt-5 justify-center items-center border border-indigo-500 px-5 py-2 rounded-xl '>
                        <h1 className='col-span-2 font-bold'>You may also continue with</h1>
                        <div className='grid grid-cols-2 m-3 gap-3'>
                            <img className='w-12 cursor-pointer' onClick={CreateUserWithGoogle} src={googleImg} alt="" />
                            <img className='w-12 cursor-pointer' onClick={CreateUserWithFacebook} src={facebookImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img className='w-60 m-auto' src={bunny} alt="" />
                    <div className='w-6/12 m-auto'>
                        <h1 className='font-bold text-orange-600'>Advantages of register</h1>
                        <ul className='text-slate-700 list-disc'>
                            <li>get access to all routs</li>
                            <li>Get our regular updates</li>
                            <li>Get teachers' guideline</li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CreateUserMail;