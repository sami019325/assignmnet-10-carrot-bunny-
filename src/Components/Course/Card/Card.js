import React from 'react';

const Card = (card) => {
    console.log(card.CardData)
    const { category_id, img, others_info, name, title, duration, price } = card.CardData;
    console.log(card.CardData.price)
    return (
        <div>
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
                        <div className=" px-5 py-1 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer badge-outline">Details</div>
                        <div className=" px-5 py-1 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer badge-outline">Buy</div>
                    </div>
                </div>
            </div>
        </div>
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