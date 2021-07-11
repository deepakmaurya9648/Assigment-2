import React from 'react';
import { useParams } from "react-router-dom";
import data from '../Data';

function CourseDetail() {
    const { courseId } = useParams();
    const thisCourse = data.find(course => course.id === courseId);
    console.log(thisCourse.courseName)
    return (
        <div className="course-detail">
            <div className="row">
                <div className="col-1">
                    <h1>{thisCourse.courseName}</h1>
                    <p>{thisCourse.courseDescription}</p>
                    <a href="" onClick={()=>{
                        alert(`${thisCourse.courseName} course purchase succecfully!`);
                    }}>Purchase</a>
                </div>
                <div className="col-2">
                    <img src={thisCourse.courseImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
