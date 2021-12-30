import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Topics.css';

function Topics() {

    return (
        <div className="topics">
            
                <div class="col-lg-6">
                    <div class="cards">

                        <ul class="list-style-none">
                            <li class="d-flex no-block card-body">
                                <div> <Link to="/student-dashboard/ongoing/topics/topic"> Topic 1
                                </Link>
                                </div>
                            </li>
                            <li class="d-flex no-block card-body border-top">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 2</a></div>
                            </li>
                            <li class="d-flex no-block card-body border-top">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 3</a></div>
                            </li>
                            <li class="d-flex no-block card-body border-top">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 4</a></div>
                            </li>
                            <li class="d-flex no-block card-body border-top">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 5</a></div>
                            </li>
                            <li class="d-flex no-block card-body border-top">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 6</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
    );
}

export default Topics;