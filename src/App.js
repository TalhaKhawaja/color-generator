import "./App.css";
import Header from "./components/header.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Hex from "./pages/hex.page";
import RGBA from "./pages/rgba.page";
import { random_hex } from "./utils/generate-color";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hexCode: "#FFFFFF",
    };
  }

  // handleChange(event) {
  //   //this.setState({ value: event.target.value });
  //   this.setState((prevState) => ({
  //     hexValue: (prevState.hexValue = random_hex()),
  //   }));
  // }

  handleClick = () => {
    // Changing state
    this.setState({ hexCode: random_hex() });
  }

  handleInput = (e) => {
    if (e.target.value.length === 6) {
      this.setState({ hexCode: random_hex(e.target.value)});
    }
    else {
      this.setState({ hexCode: e.target.value});
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/" />
        <Route path="/hex" component={ () => <Hex hexCode={this.state.hexCode} handleClick={this.handleClick} handleInput={this.handleInput} />} />
        <Route path="/rgba" component={RGBA} />
      </div>
    );
  }
}

export default App;
