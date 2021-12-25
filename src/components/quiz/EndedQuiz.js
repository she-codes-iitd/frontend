import react from 'react';
import { Link } from 'react-router-dom';

import '../../css/ModalEndedQuiz.css';
import '../../css/Qns.css';

const EndedQuiz = ({ show2, children }) => {
  const showHideClassName = show2 ? "modal-end display-block" : "modal-end display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-end">
        {children}
        <Link to="/student-dashboard/ongoing/topics/topic/quiz/grade"><button className="see-grades">See grades!</button></Link>
      </section>
    </div>
  );
};

export default EndedQuiz;