import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { SharedContext } from '../User/ShareData';

const Purchase = () => {
    const { courseId, SetCourseID } = useContext(SharedContext)
    const [details, setDetails] = useState('')
    useEffect(() => {
        fetch(`https://sever-of-carrot-bunny-sami019325.vercel.app/course/${parseInt(courseId)}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [courseId])
    console.log(details.img)
    return (
        <div>

            <div id={details.category_id} className="card m-auto mt-16 w-11/12 h-full bg-base-100 shadow-xl">
                <figure><img className='h-44 w-full' src={details?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {details.name}
                        <div className="badge badge-secondary">{details.others_info?.is_todays_pick}</div>
                    </h2>
                    <p>{details.title}</p>
                    <div className='text-slate-500'>
                        <p>Duration: <span>{details.duration}</span></p>
                        <p>Published: <span>{details.author?.published_date}</span></p>
                        <p>Exam: <span>{details?.exam}</span></p>
                        <p>Price: <span>{details?.price}</span></p>
                    </div>
                    <hr />
                    <div>
                        <img className='w-60 h-60 rounded-full m-auto' src={details.author?.img} alt="" />
                        <h1 className='text-center font-bold text-xl'>Instructor: {details.author?.name}</h1>
                    </div>
                </div>
            </div>
            <div className='w-11/12 m-auto py-5 bg-orange-500 mb-10 text-center font-bold text-white text-3xl rounded-2xl cursor-pointer'>Check out</div>
        </div>

    );
};

export default Purchase;