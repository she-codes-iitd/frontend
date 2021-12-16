import react from 'react';
import Header3 from '../Header3';

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
            <button className='attempt-now'>Review Quiz</button>
            <button className='go-back'>Go Back</button>
        </div>
    );
}

export default Grade;