import React from 'react';

const Card = (card) => {
    console.log(card)
    return (
        <div>
            <h1>{card.CardData.Name}</h1>
            <img src="" alt="" srcset="" />
        </div>
    );
};

const Combocard = () => {
    return (
        <div className="card m-auto my-5 h-36 w-11/12 bg-base-100 shadow image-full">
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
    )
}
export { Card, Combocard };