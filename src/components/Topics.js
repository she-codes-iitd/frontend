import React from 'react';
import '../css/Topics.css';

function Topics() {

    return (
        <div className="topics">
            <div class="row d-flex justify-content-center mt-100 mb-100">
                <div class="col-lg-6">
                    <div class="card">

                        <ul class="list-style-none">
                            <li class="d-flex no-block card-body">
                                <div> <a href="#" class="m-b-0 font-medium p-0" data-abc="true">Topic 1</a></div>
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
        </div>
    );
}

export default Topics;