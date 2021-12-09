import React from 'react';

function SingleTopic() {
	return (
		<div>
			<div className="movie_card" id="bright">
				<div className="info_section">
					<div className="movie_header">

						<h1>Video</h1>
					</div>
				</div>
				<div className="blur_back bright_back"></div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<div className="movie_card" id="tomb">
						<div className="info_section">
							<div className="movie_header">

								<h1>Assignment</h1>
							</div>
						</div>
						<div className="blur_back tomb_back"></div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="movie_card" id="ave">
						<div className="info_section">
							<div className="movie_header">
								<h1>Quiz</h1>
							</div>
						</div>
						<div className="blur_back ave_back"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleTopic;