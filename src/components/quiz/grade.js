import react from 'react';

function instruct(props){
    return (
        <div>

            <div className='instruct'>
                <h1>
                    Quiz Grade
                </h1>
                <ul>
                    <li>
                        achieved grade
                    </li>
                    <li>
                        avg grade
                    </li>
                    <li>
                        comment:
                    </li>
                </ul>
            </div>
            <button className='attempt-now'>Review Quiz</button>
            <button className='go-back'>Go Back</button>
        </div>
    );
}

export default instruct;