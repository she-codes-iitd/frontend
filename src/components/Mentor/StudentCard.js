import React, { useState } from 'react';
import AssignmentSub from './AssignmentSub';

function StudentCard(props) {
    const [selected, setSelected] = useState(false);
    const { student } = props;
    const assignments = student.completed_assignments;

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row'>
                <h6>{student.name}</h6>
                <div onClick={() => setSelected(!selected)}>View Submission</div>
            </div>
            {
                selected ? (<div>
                    <br />
                    {
                        assignments.map(assgn => {
                            return <AssignmentSub assgn={assgn} student={student} />
                        })
                    }
                </div>) : null
            }

        </div>
    );
}

export default StudentCard;
