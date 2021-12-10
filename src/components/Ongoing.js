import react from "react";
import Header2 from "./Header2";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Topics from "./Topics";
import id_page from '../imgs/Group19.png'
import SingleTopic from "./SingleTopic";
import '../css/ongoingtopic.css';

function Ongoing() {
    return (
        <div className="ongoingtopic">
                
                    <Topics />
                    <SingleTopic />
                
            </div>

        
    );
}

export default Ongoing;