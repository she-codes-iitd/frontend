import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentCard from './StudentCard';

function GradeCourse(props) {
    const { id } = useParams();
    const course = useRef({
        name: 'Intro to programming'
    });
    // const [viewAssignment, setViewAssignment] = useState(true);
    // const [selectedAssign, setSelectedAssign] = useState(0);
    const students = useRef([]);
    const assignments = useRef([])
    useEffect(() => {
        const getCourseDetails = async () => {
            const res = await fetch(`/courses/${id}`);
            const data = await res.json();
            course.current = data;
        }
        const getStudents = async () => {
            const res = await fetch('volunteer/students');
            const data = res.json();
            students.current = data;
        }
        getCourseDetails();
        getStudents();
    }, [id])
    return (
        <div>
            <h1>Grade students</h1>
            {
                students.current.map(std => {
                    return (
                        <StudentCard student={std} />
                    )
                })
            }
        </div>
    )
}

export default GradeCourse;
