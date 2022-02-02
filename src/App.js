import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("DidMount or DidUpdate");
  });
  useEffect(() => {
    console.log("DidMount");
  }, []);
  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  const renderPeriod = () => {
    console.log("renderPeriod renders pertiod");
    return "。";
  };

  return (
    <div>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </div>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
