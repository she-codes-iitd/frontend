import react from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Topics from "./Topics";
import id_page from '../imgs/Group19.png'
import SingleTopic from "./SingleTopic";
import '../css/ongoingtopic.css';
import Header2 from './Header2';
import '../css/SingleTopic.css';

function OngoingTopics(props) {
    return (
        <>
            <div id="contain" className="container">
                <img src={id_page} id="bg" className="img-fluid2" alt="" />
                <Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
            </div>

            <div className="ongoingtopic container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-6">
                            <Topics />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-6 box">

                            <SingleTopic />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default OngoingTopics;