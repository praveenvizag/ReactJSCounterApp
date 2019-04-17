import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    styles: {
      fontSize: 20,
      fontWeight: "Italic"
    },
    tags:['tag1','tag2','tag3']
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <span />
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
         {this.state.tags.map(tag=><li key={tag}>tag</li>)}
        </ul>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1 style = {this.state.styles}>Zero</h1> : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    console.log(classes);
    return classes;
  }
}

export default Counter;
