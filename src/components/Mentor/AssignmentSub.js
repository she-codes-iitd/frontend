import React, { useState } from 'react';

function AssignmentSub(props) {
    const { assgn, student } = props;
    const [selectedGrade, setSelectedGrade] = useState('');
    const [success, setSuccess] = useState(false);
    const grades = ['A', 'A-', 'B', 'B-'];

    const updateGrades = async (assgn_id) => {
        try {
            const res = await fetch(`volunteer/students/${student._id}/assignment/${assgn_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ grades: selectedGrade })
            });
            const data = await res.json();
            if (data.success) setSuccess(true);
        }
        catch (e) {
            console.error(e);
        }
    }
    return (
        <div className='w-50'>
            <h5>{assgn.assignment.name}</h5>
            <div>{assgn.submission}</div>
            <select className='form-select w-25' value={selectedGrade} onChange={e => setSelectedGrade(e.target.value)}>
                {
                    grades.map(grade => {
                        return (
                            <option value={grade} >{grade}</option>
                        )
                    })
                }
            </select>
            <div className='btn btn-info' onClick={updateGrades(assgn.assignment._id)}>Update</div>
            {
                success ? <p className='text-success'>Grades updated Successfully</p> : null
            }
        </div>)
        ;
}

export default AssignmentSub;
