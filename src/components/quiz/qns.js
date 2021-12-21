import react, { Component } from 'react';
import Header3 from '../Header3';
import '../../css/Qns.css'
import EndQuiz from './EndQuiz';
import Countdown from 'react-countdown';
import EndedQuiz from './EndedQuiz';

class Qns extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            
            return (
                <div>
                <EndedQuiz show2={true}>
                    <p className='modal-body-end'>The quiz has ended </p>

                </EndedQuiz>
                </div>
                );
        } else {
            return <span className='timer'>{hours}:{minutes}:{seconds}</span>;
        }
    }

    render() {
        return (
            <div>
                <div id="contain">

                    <Header3 logo={this.props.logo} hamburger={this.props.hamburger} navMenu={this.props.navMenu} setHamburger={this.props.setHamburger} setNav={this.props.setNav} />
                </div>

                <div className='heading'>


                    <span className='quiz-type'>
                        Quiz 1
                    </span>&emsp;&emsp;&emsp;&emsp;&emsp;
                    <span className='quiz-type'>
                        Topic
                    </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <EndQuiz show={this.state.show} handleClose={this.hideModal}>
                        <p className='modal-body-end'>End the quiz? </p>
                    </EndQuiz>
                    <button className="end-quiz" type="button" onClick={this.showModal}>
                        End Quiz
                    </button>

                    <Countdown date={Date.now() + 5000} renderer={this.renderer} />


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
}

export default Qns;