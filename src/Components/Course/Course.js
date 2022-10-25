import React from 'react';
import Card from './Card/Card';

const Course = () => {
    const course = {
        Name: 'Speaking Skill',
        duration: '12H'
    }
    return (
        <div>
            <Card CardData={course}></Card>
        </div>
    );
};

export default Course;