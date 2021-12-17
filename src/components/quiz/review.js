import react, { Component } from 'react';
import Header3 from '../Header3';
import '../../css/Qns.css'
import '../../css/Review.css'
import EndQuiz from './EndQuiz';


function Qns(props) {


    return (
        <div>
            <div id="contain">

                <Header3 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
            </div>

            <div className='heading'>


                <span className='quiz-type'>
                    Quiz 1
                </span>&emsp;&emsp;&emsp;&emsp;&emsp;
                <span className='quiz-type'>
                    Topic
                </span>
                <span className='end-quiz-review'>Back</span>
            </div>
            <div className='qnsss' style={{ marginTop: "-240px" }}>
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

            </div>
        </div>
    );
}


export default Qns;