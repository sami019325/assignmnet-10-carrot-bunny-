import React from 'react';
import { Card, Combocard } from './Card/Card';

const Course = () => {
    const course = {
        Name: 'Speaking Skill',
        duration: '12H'
    }
    return (
        <div>
            <Combocard></Combocard>
            <Card CardData={course}></Card>
        </div>
    );
};

export default Course;