import React from "react";
import SingleTopic from "./SingleTopic";
import Topics from "./Topics";

function TopicsTab() {
    return (
        <div className="alltopics">
            <div className="row">
                <div className="col-md-6">
                    <Topics />
                </div>
                <div className="col-md-6">
                    <div className="singletopic">
                        <SingleTopic />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopicsTab;