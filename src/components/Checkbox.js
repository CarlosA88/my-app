import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
    // this.props.onFilter=this.onFilter.bind(this)
  }

  onFilter=(event)=> {
    this.props.onFilter(
      event.currentTarget.dataset.value,
      event.currentTarget.checked
    );
  }

  render() {
    var label = this.props.label;
    return (
      <p>
        <input
          className="checkbox"
          type="checkbox"
          data-value={label}
          onChange={this.onFilter}
          defaultChecked={this.state.checked}
        />
        {label}
      </p>
    );
  }
}

export default Checkbox;
