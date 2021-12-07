import React from 'react';

function Courses(props){
    return (
    <div>
        <a href=""><img className="courses_tabs" src={props.img} alt=""/></a>
        <h4>{props.name}</h4>
    </div>
    );
}

export default Courses;