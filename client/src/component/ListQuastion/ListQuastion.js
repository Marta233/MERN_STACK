import React from "react";
import { useEffect, useState } from "react";
import prof from "../imgs.png";
import "./ListQuastion.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import { useQuastionContext } from "../../Hook/usequastioncontext";
import { useUserContext } from "../../Hook/useUserContext";

function ListQuastion() {
  const { quastions, dispatch } = useQuastionContext();
  const { user } = useUserContext();
  // const [quastion, setquastion] = useState(null);
  useEffect(() => {
    const listquastions = async () => {
      const response = await fetch("http://localhost:4000/api/quastion", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        // setquastion(json);
        dispatch({ type: "SET_ANSWER", payload: json });
      }
    };
    if (user) {
      listquastions();
    }
  }, [dispatch, user]);
  // console.log(quastions);
  return (
    <div className="maincontainer">
      <div className="NameandLink">
        <Link to={"/AskQustion"} className="aske_buton">
          Ask Quastion
        </Link>
        {user && <p>Wellcome: {user.name}</p>}
      </div>
      <div className="ListQuation">
        <h3>Quastion</h3>
      </div>

      {quastions &&
        quastions.map((quastion, i) => {
          var Q_id = quastion.id.toString();
          console.log(Q_id);
          return (
            <Link className="userprof" to={Q_id} key={i}>
              <div className="userprof1">
                <div className="usersprofile">
                  <img src={prof} />
                  <p className="userName">{quastion.UserName}</p>
                </div>

                <div className="userans">
                  <p>{quastion.quastionTitle}</p>
                </div>
              </div>
              <div>
                <ArrowForwardIosOutlinedIcon className="arrows" />
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ListQuastion;
