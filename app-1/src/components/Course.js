import React from 'react';
import {Link} from 'react-router-dom';
import data from '../Data';

function Course() {

    const items=data.map((item,index)=>{
            return (
                <Link to={`/courses/${item.id}`}><div key={item.id} className="course-card" style={{background:`url(${item.courseImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                    <h1>{item.courseName}</h1>
                </div>
                </Link>
            )
    })
    return (
        <div className="course-section">
           {items}
        </div>
    )
}

export default Course
