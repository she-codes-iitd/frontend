import react from 'react';
import Header3 from '../Header3';
import '../../css/Instruct.css'
import { Link } from 'react-router-dom';
function Instruct(props) {
    return (
        <div className='body-instruct'>
            <div id="contain">

                <Header3 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
            </div>

            <div className='instruct'>
                <h1>
                    Quiz Instructions
                </h1>
                <br />
                <ul>
                    <li>
                        okkweiugfoiuwegas
                    </li>
                    <li>
                        wliuegfkszebhdzgfvekuw
                    </li>
                    <li>
                        ljgsebfckvbwqudfcukewwh
                    </li>
                    <li>
                        lkjsgevfckjsbjkcfskjgfej
                    </li>
                </ul>
            </div>
            <Link to="/student-dashboard/ongoing/topics/topic/quiz/attempt">
                <button className='attempt-now'>Attempt Now</button>
            </Link>
            <Link to="/student-dashboard/ongoing/topics/topic">
                <button className='go-back'>Go Back</button>
            </Link>
        </div>
    );
}

export default Instruct;
