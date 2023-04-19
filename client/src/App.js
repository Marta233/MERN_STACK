import "./App.css";
import Navbars from "./component/Nav/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer/Footer";
import Login from "./component/user/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AskQustion from "./component/AskQuastion/AskQustion";
import { ClassNames } from "@emotion/react";
import Answer from "./component/Answer/Answer";
import ListQuastion from "./component/ListQuastion/ListQuastion";
import { useUserContext } from "./Hook/useUserContext";

function App() {
  const { user } = useUserContext();
  return (
    <div>
      <Router>
        <Navbars />
        <Routes>
          {
            <Route
              path="/"
              element={user ? <ListQuastion /> : <Navigate to="/login" />}
            />
          }
          <Route
            path="/AskQustion"
            element={
              <>
                <AskQustion />
              </>
            }
          />
          <Route
            path="ListQuastion/:id"
            element={
              <>
                <Answer />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/ListQuastion"
            element={
              <>
                <ListQuastion />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
