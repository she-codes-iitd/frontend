import react from 'react';
import Header3 from '../Header3';
import {Link} from 'react-router-dom';

function Grade(props) {
    return (
        <div>
            <div id="contain">

                <Header3 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
            </div>

            <div className='instruct'>
                <h1>
                    Quiz Grade
                </h1>
                <br/>
                
                <ul style={{listStyle: "none"}}>
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
            <Link to="/student-dashboard/ongoing/topics/topic/quiz/review"> <button className='attempt-now'>Review Quiz</button></Link>
            <Link to="/student-dashboard/ongoing/topics/topic"><button className='go-back'>Go to Home</button></Link>
        </div>
    );
}

export default Grade;

