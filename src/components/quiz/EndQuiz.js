import react from 'react';
import { Link } from 'react-router-dom';

import '../../css/ModalEndQuiz.css';
import '../../css/Qns.css';

const EndQuiz = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-end display-block" : "modal-end display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-end">
        {children}
        <Link to="/student-dashboard/ongoing/topics/topic/quiz/grade"><button className="yes-modal">Yes</button></Link>
        <button className="no-modal" onClick={handleClose}>
          No
        </button>
      </section>
    </div>
  );
};

export default EndQuiz;
