import React from 'react';
import bunnyWithCar from './../../Resources/pngwing.com.png'
import './Home.css'
const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2 p-5 flex items-center '>
                <div>
                    <h1 className='handwriting text-3xl md:text-4xl font-bold'>Well! Remember the story <span className=' text-orange-700 text-4xl md:text-5xl'> "slow and steady wins the race" </span> ? Do you want to be the bunny who wasted his power and lost the game or do you want to be the bunny who loves to use his power? </h1>
                    <br />
                    <p className='handwriting text-2xl md:text-3xl font-bold'>
                        CarrotBunny knows you don't want to repeat history again. So, join our course today so that you can ensure better use of your power.
                    </p>
                </div>
            </div>
            <div className='col-span-1'>
                <img src={bunnyWithCar} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Home;