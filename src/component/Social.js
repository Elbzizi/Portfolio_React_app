import React, { Component } from "react";

class Social extends Component {
  render() {
    const { image, link } = this.props.socila;
    return (
      <div >
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </div>
    );
  }
}

export default Social;
