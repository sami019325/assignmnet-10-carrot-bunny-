import React from 'react';

const Card = (card) => {
    console.log(card.CardData)
    const { category_id } = card.CardData;
    console.log()
    return (
        <div>
            <div id={`0${parseInt(category_id) + 1}`} className="card m-auto w-11/12 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Speaking
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
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