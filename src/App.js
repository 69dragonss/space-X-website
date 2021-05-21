import React, { Component, Fragment } from "react";
import "./App.css";
import { Cards } from "./components/Cards";
import { Filter } from "./components/Filter";
import { Model } from "./components/Model";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: [],
      selectedHeight: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((rockets) => this.setState({ rockets: rockets }));
  }
  // onHandleChange(e) {
  //   this.setState({ selectedHeight: e.target.value });
  // }
  render() {
    // const { rocket, selectedHeight } = this.state;
    // const filterdHeight = rocket.filter((rocket) => {
    //   rocket.height.feet > selectedHeight;
    // });

    return (
      <div className="container">
        <h1 className="text-center my-4">SpaceX Rockets Api</h1>
        {/* <div className="text-center my-4">
          <Filter onChange={this.onHandleChange} />
        </div> */}
        <div className="row">
          {this.state.rockets.map((rocket) => (
            <Fragment>
              <Cards rocket={rocket} />
              <Model rocket={rocket} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
