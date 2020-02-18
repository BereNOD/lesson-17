import React from 'react';

class Field extends React.Component {
  render = () => (
    <label>
      <span>{this.props.title}</span>
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    </label>
  );
}

export default Field;
