import React from 'react';
import { Link } from 'react-router-dom';

const JoinCourseBtn = () => {
    return (
        <>
            <Link to='/course' className='bg-orange-700 px-12 py-3  rounded-full font-bold text-white hover:bg-slate-400'> JOIN OUR COURSE NOW</Link>
        </>
    );
};

export default JoinCourseBtn;