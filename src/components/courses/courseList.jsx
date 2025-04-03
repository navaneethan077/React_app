import React, { useEffect } from 'react';

import Course from './course';
import { useState } from 'react';
function CourseList() {


    const [courses, setCourses] = useState(null);
    const [show, setShow] = useState(true);

    useEffect(() => {

        fetch('http://localhost:3000/courses')
            .then(response => { 
                console.log(response);
                return response.json() 
            }) .then(data => {
                console.log(data);
                setCourses(data)
                
            })

            
    },[]);

    function handleDelete(id) {
        console.log("Deleting course:", id);
        setCourses(courses.filter((course) => course.id !== id));
    }
    // courses.sort((a, b) => b.price - a.price);
    if(!courses){
        return <h1>Loading...</h1>
    }
    const courseList = courses.map((course) =>
        <Course key={course.id} name={course.name}
            price={course.price}
            img={course.img}
            onDelete={handleDelete}
            id={course.id} />

    );
    return (
        <>
            {courseList}
            <button onClick={() => { setShow(false) }}>show</button>
        </>
    );



}
export default CourseList;