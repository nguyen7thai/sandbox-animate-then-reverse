import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  ref = React.createRef();
  state = {
    yo: true
  };
  click = () => {
    this.ref.current.style["animation-play-state"] = "running";
    if (this.state.yo) {
      this.ref.current.classList.remove("move-reverse");
      const clone = this.ref.current.cloneNode(true);
      clone.classList.add("move");
      this.ref.current.after(clone);
      this.ref.current.remove();
      this.ref.current = clone;
      this.setState({ yo: false });
    } else {
      this.ref.current.classList.remove("move");
      const clone = this.ref.current.cloneNode(true);
      clone.classList.add("move-reverse");
      this.ref.current.after(clone);
      this.ref.current.remove();
      this.ref.current = clone;
      this.setState({ yo: true });
    }
  };
  render() {
    return (
      <div className="App">
        <h1 onClick={this.click}>Click here</h1>
        <h2 className="base" ref={this.ref}>
          Moving element
        </h2>
        {this.state.yo ? "Click to move down" : "Click to move up"}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
