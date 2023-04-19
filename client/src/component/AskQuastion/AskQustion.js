import React, { useState } from "react";
import "./AskQustion.css";
import Form from "react-bootstrap/Form";
import { useUserContext } from "../../Hook/useUserContext";
import { useQuastionContext } from "../../Hook/usequastioncontext";

function AskQustion() {
  const { user } = useUserContext();
  const [quastiondescription, setQuastion] = useState("");
  const [quastionTitle, setQuastionTitle] = useState("");
  const { dispatch } = useQuastionContext();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const userName = user.name;
      console.log(user);
      console.log(userName);

      const myanswer = {
        quastiondescription,
        quastionTitle,
        UserName: userName,
      };
      console.log(userName);
      const response = await fetch("http://localhost:4000/api/quastion", {
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
        setQuastion("");
        setQuastionTitle("");
        // console.log("new answer for given quastion is added:", json);
        dispatch({ type: "CREATE_ANSWER", payload: json });
      }
    } else {
      console.log("You must be logged in");
      setError("You must be logged in");
      return;
    }
  };

  return (
    <div className="main">
      <div className="instraction">
        <h5>Steps To Write A Good Quastion</h5>
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail</li>
          <li>Describe what you tried and you expected to happen</li>
          <li>Review your quastion and post it to the site</li>
        </ul>
      </div>
      <div className="maincontant">
        <div className="quastionTitle">
          <h5>Ask a Public Quastion</h5>
          <a href="#">Go To Quastion Page</a>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places"
                placeholder="Title"
                as="textarea"
                rows={2}
                onChange={(e) => setQuastionTitle(e.target.value)}
                value={quastionTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                placeholder="Quastion Description.."
                as="textarea"
                onChange={(e) => setQuastion(e.target.value)}
                value={quastiondescription}
                rows={6}
              />
            </Form.Group>
            <input
              type="submit"
              className="submitQuastion"
              value="Post Your Quastion"
            />
            {error && <div className="error">{error}</div>}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AskQustion;
