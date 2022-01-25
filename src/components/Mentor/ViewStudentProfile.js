import React from "react";

const ViewStudentProfile = (props) => {
    const { student: user } = props;
    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <h2>Student Details : </h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text labelinformationStudent" id="basic-addon1">Name</span>
                        <input type="text" className="form-control informationStudent" value={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text labelinformationStudent" id="basic-addon1">Email</span>
                        <input type="text" className="form-control informationStudent" value={user.email} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text labelinformationStudent" id="basic-addon1">School</span>
                        <input type="text" className="form-control informationStudent" value={user.school} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text labelinformationStudent" id="basic-addon1">Class</span>
                        <input type="text" className="form-control informationStudent" value={user._class} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text labelinformationStudent" id="basic-addon1">No. of Topics Studied</span>
                        <input type="text" className="form-control informationStudent" value={user.topics} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ViewStudentProfile;