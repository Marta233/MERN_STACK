import "./Answer.css";
import Form from "react-bootstrap/Form";
import prof from "../imgs.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuastionContext } from "../../Hook/usequastioncontext";
import { useUserContext } from "../../Hook/useUserContext";

function Answer() {
  const { user } = useUserContext();
  const { quastions, dispatch } = useQuastionContext();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(typeof id);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const questionAsk = await fetch(
        `http://localhost:4000/api/quastion/${id}`
      );
      const json = await questionAsk.json();
      console.log(json);
      if (questionAsk.ok) {
        setQuestion(json);
      }
    };
    fetchWorkouts();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const questionRes = await fetch(`http://localhost:4000/api/answer/${id}`);
      const json = await questionRes.json();
      console.log(json);
      if (questionRes.ok) {
        // setAnswers(json);
        dispatch({ type: "SET_ANSWER", payload: json });
        console.log(answers);
      }
    };
    getData();
  }, [dispatch]);
  const handleSubmit = async (e) => {
    const userName = user.name;
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const myanswer = { answer, quastion_id: id, UserName: userName };
    const response = await fetch("http://localhost:4000/api/answer", {
      method: "POST",
      body: JSON.stringify(myanswer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setAnswer("");
      // console.log("new answer for given quastion is added:", json);
      dispatch({ type: "CREATE_ANSWER", payload: json });
    }
  };

  return (
    <div className="main">
      <div className="usersprof_wrapper">
        <div className="Quastions">
          <h4>Quastion</h4>
          <p>{question?.quastionTitle}</p>
          <p className="quastionDescription">{question?.quastiondescription}</p>
        </div>
        <div className="answers">
          <h4 id="community">Answer From The community</h4>
          {quastions?.map((answr, i) => {
            return (
              <div className="userprof1">
                <div className="usersprofile">
                  <img src={prof} />
                  <p className="userName">{answr.UserName}</p>
                </div>
                <div className="userans">
                  <p>{answr.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="maincontant">
        <div className="quastionTitle">
          <h5>Answer The Top Quastion</h5>
          <a href="#">Go To Quastion Page</a>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                placeholder="Your Answer.."
                as="textarea"
                rows={6}
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
              />
            </Form.Group>
            <input
              type="submit"
              className="submitQuastion"
              value="Post Your Answer"
            />
            {error && <div className="error">{error}</div>}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Answer;
