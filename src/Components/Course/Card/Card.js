import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from '../../User/ShareData';
import DetailsModal from './DetailsModal';

const Card = (card) => {
    const { courseId, SetCourseID } = useContext(SharedContext)
    //const number = '00' + parseInt(courseId)
    const [details, setDetails] = useState('')
    const { category_id, img, others_info, name, title, duration, price, _id } = card.CardData;
    console.log('details----------------', parseInt(courseId), details)
    useEffect(() => {
        fetch(`https://sever-of-carrot-bunny-sami019325.vercel.app/course/${parseInt(courseId)}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [courseId])
    return (
        <div>
            {/* modal  -------------------------*/}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div id={category_id} className="card m-auto w-11/12 h-full bg-base-100 shadow-xl">
                        <figure><img className='h-44 w-full' src={details?.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {details.name}
                                <div className="badge badge-secondary">{others_info?.is_todays_pick}</div>
                            </h2>
                            <p>{title}</p>
                            <div className='text-slate-500'>
                                <p>Duration: <span>{details?.duration}</span></p>
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
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Done</label>
                    </div>
                </div>
            </div>
            {/* modal end ---------------------- */}



            <div id={category_id} className="card m-auto w-11/12 h-full bg-base-100 shadow-xl">
                <figure><img className='h-44 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{others_info.is_todays_pick}</div>
                    </h2>
                    <p>{title}</p>
                    <div className='text-slate-500'>
                        <p>Duration: <span>{duration}</span></p>
                        <p>Price: <span>{price}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-5" onClick={() => SetCourseID(_id)} className="px-5 py-1 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer badge-outline modal-button modal-button">Details</label>
                        {/* <div className=" px-5 py-1 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer badge-outline modal-button" ></div> */}
                        <Link onClick={() => SetCourseID(_id)} to='/purchase' className=" px-5 py-1 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer badge-outline">Buy</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

const Combocard = () => {
    return (
        <div id='04' className='pt-10'>
            <div className="card m-auto my-5 h-44 md:h-36 w-11/12 bg-base-100 shadow image-full">
                <figure><img src="https://i.pinimg.com/736x/c2/0d/a7/c20da7e5bc7622acb653fd9155525e29.jpg" alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className='flex gap-3'>
                        <div className='w-8/12'>
                            <h2 className="card-title text-4xl">Best deal</h2>
                            <p className='font-bold'>Buy all coursed just only <span className='line-through text-slate-200'>1600</span> <span className='text-orange-300 text-2xl'>1000 Taka</span> </p>
                        </div>
                        <div className="card-actions justify-end items-center w-4/12">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export { Card, Combocard };