import react from 'react';

function instruct(props) {
    return (
        <div>

            <div className='heading'>

                <ul>
                    <li>
                        quiz1
                    </li>
                    <li>
                        topic
                    </li>
                    <li>

							<a data-bs-toggle="modal" data-bs-target="#signInStudent" className="sign_in_button">End Quiz</a>
                        
                    </li>
                    <li>
                        timer
                    </li>
                </ul>
            </div>
            <div className='qnsss'>
                <div className='qn'>
                <h3>Question 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                <ul>
                    <li>
                        hgcydt
                    </li>
                    <li>
                        jhyfutgjyu
                    </li>
                    <li>
                        jhfgy
                    </li>
                    <li>
                        jyfuyfkj
                    </li>
                </ul>
                <button className='clear'>clear selection</button>
                </div>
                
                <div>
                <h3>Question 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                <ul>
                    <li>
                        hgcydt
                    </li>
                    <li>
                        jhyfutgjyu
                    </li>
                    <li>
                        jhfgy
                    </li>
                    <li>
                        jyfuyfkj
                    </li>
                </ul>
                <button className='clear'>clear selection</button>
                </div>
                <div>
                <h3>Question 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                <ul>
                    <li>
                        hgcydt
                    </li>
                    <li>
                        jhyfutgjyu
                    </li>
                    <li>
                        jhfgy
                    </li>
                    <li>
                        jyfuyfkj
                    </li>
                </ul>
                <button className='clear'>clear selection</button> 
                </div>
            </div>
        </div>
    );
}

export default instruct;