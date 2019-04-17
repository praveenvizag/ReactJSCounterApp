import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    styles: {
      fontSize: 20,
      fontWeight: "Italic"
    },
    //tags:['tag1','tag2','tag3']
    tags: []
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <span />
        <button
          onClick={() =>
            this.handleIncrement({id:1})
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1 style={this.state.styles}>Zero</h1> : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    console.log(classes);
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags to render</p>;
    return this.state.tags.map(tag => <li key={tag}>tag</li>);
  }
  handleIncrement = product => {
    console.log(product);
    this.setState({
      state: this.state.count++
    });
  };
}

export default Counter;
