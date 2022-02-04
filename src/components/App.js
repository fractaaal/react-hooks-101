import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducer/index.js";
import EventForm from "./EventForm";
import Events from "./Events.js";
import AppContext from "../contexts/AppContext.js";

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
