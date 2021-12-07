import React from 'react';

function SingleTopic() {
    return (
        <div>
            <div class="movie_card" id="bright">
                <div class="info_section">
                    <div class="movie_header">

                        <h1>Video</h1>
                    </div>
                </div>
                <div class="blur_back bright_back"></div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="movie_card" id="tomb">
                        <div class="info_section">
                            <div class="movie_header">

                                <h1>Assignment</h1>
                            </div>
                        </div>
                        <div class="blur_back tomb_back"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="movie_card" id="ave">
                        <div class="info_section">
                            <div class="movie_header">
                                <h1>Quiz</h1>
                            </div>
                        </div>
                        <div class="blur_back ave_back"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleTopic;