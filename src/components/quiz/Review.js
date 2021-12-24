import react, { Component } from 'react';
import Header3 from '../Header3';
import '../../css/Qns.css'
import '../../css/Review.css'
import EndQuiz from './EndQuiz';
import { Link } from 'react-router-dom';


function Review(props) {
    const corrAns = [1, 1, 4];
    const stuAns = [1, 4, 0];
    //0 means NA
    const marks = [+4, +0, -1];
    const comments = ["Correct", "Unattempted", "Incorrect"];
    let qnNo = 1;
    let ansNo = 0;
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
                <Link to="/id/ongoing/topics/topic/quiz">
                    <span className='end-quiz-review'>Back</span>
                </Link>
            </div>
            <div className='qnsss' style={{ marginTop: "-240px" }}>
                <div className={stuAns[qnNo - 1] === 0 ? 'qn NA' : (corrAns[qnNo - 1] === stuAns[qnNo - 1] ? 'qn corr' : 'qn wrong')}>
                    <h3>Question {qnNo++}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                    <ul className={ansNo = 0 ? '' : ''}>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            hgcydt
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhyfutgjyu
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhfgy
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jyfuyfkj
                        </li>
                    </ul>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? marks[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? marks[0] : marks[2])}</button>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? comments[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? comments[0] : comments[2])}</button>
                </div>
                <div className={stuAns[qnNo - 1] === 0 ? 'qn NA' : (corrAns[qnNo - 1] === stuAns[qnNo - 1] ? 'qn corr' : 'qn wrong')}>
                    <h3>Question {qnNo++}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                    <ul className={ansNo = 0 ? '' : ''}>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            hgcydt
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhyfutgjyu
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhfgy
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jyfuyfkj
                        </li>
                    </ul>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? marks[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? marks[0] : marks[2])}</button>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? comments[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? comments[0] : comments[2])}</button>
                </div>
                <div className={stuAns[qnNo - 1] === 0 ? 'qn NA' : (corrAns[qnNo - 1] === stuAns[qnNo - 1] ? 'qn corr' : 'qn wrong')}>
                    <h3>Question {qnNo++}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada quam sed ipsum finibus, non rhoncus velit.</p>

                    <ul className={ansNo = 0 ? '' : ''}>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            hgcydt
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhyfutgjyu
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jhfgy
                        </li>
                        <li className={corrAns[qnNo - 2] === ++ansNo ? 'corrans' : ''}>
                            jyfuyfkj
                        </li>
                    </ul>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? marks[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? marks[0] : marks[2])}</button>
                    <button className='clear'>{stuAns[qnNo - 2] === 0 ? comments[1] : (corrAns[qnNo - 2] === stuAns[qnNo - 2] ? comments[0] : comments[2])}</button>
                </div>

            </div>
        </div>
    );
}


export default Review;

