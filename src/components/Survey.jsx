import { useState } from "react";
import Form from "./Form";
import AnswerList from "./AnswersList"

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]); 

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswerList answersList={answersList} />

      </section>
      <section className="survey__form"><Form/></section>
    </main>
  );
}

export default Survey;
