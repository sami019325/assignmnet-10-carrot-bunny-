import React from 'react';
import { Card, Combocard } from './Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';

const Course = () => {
    const course = {
        Name: 'Speaking Skill',
        duration: '12H'
    }

    const [categoy, setCategory] = useState([])
    const [courseData, setCourseData] = useState([])

    useEffect(() => {
        fetch('https://sever-of-carrot-bunny-sami019325.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(err => console.error(err));
    }, [])
    useEffect(() => {
        fetch('https://sever-of-carrot-bunny-sami019325.vercel.app/course')
            .then(res => res.json())
            .then(course => setCourseData(course))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <main className='col-span-2'>
                <Combocard course={courseData}></Combocard>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {
                        courseData.map(course => <>
                            <Card key={courseData.category_id} CardData={course}></Card>
                        </>)
                    }
                </div>
            </main>
            <aside className='sticky top-28'>

                {

                    categoy.map(catgs => <>
                        <div className='grid grid-cols-3 border bg-orange-600 border-yellow-500 m-auto w-10/12 mt-16 px-5 py-2 rounded-xl sticky top-28'>
                            <a href={`#${catgs.id}`} className='col-span-2 font-bold'>{catgs.name}</a>
                            <img src={catgs.img} className='w-10 h-10 bg-black' alt="" />
                        </div>
                    </>)
                }
            </aside>
        </div>
    );
};

export default Course;