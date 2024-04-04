import React, { Component } from "react";
import img from "./assets/WhatsApp Image 2023-10-13 at 00.35.04.jpeg";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = { read: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // ============== chatgpt =============
    // this.setState((prevState) => ({ read: !prevState.read }));
    // 1 methode=================
    // if (this.state.read) {
    //   this.setState({ read: false });
    // } else {
    //   this.setState({ read: true });
    // }
    // 2 methode=================
    this.setState({ read: !this.state.read });
  }

  render() {
    const style = { width: "200px", height: "200px" };
    return (
      <div>
        <img style={style} src={img} alt="" />
        <h2>omar el bzizi</h2>
        <p>je m'appelle omar el bzizi j'ai 22 ans </p>
        {this.state.read ? (
          <div>
            <p>j'aime jouer au football</p>
            <p>j'adore les maths</p>
            <button onClick={this.toggle}>Hide</button>
          </div>
        ) : (
          <button onClick={this.toggle}>Show More</button>
        )}
      </div>
    );
  }
}

export default Portfolio;
