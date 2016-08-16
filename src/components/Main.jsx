/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        {'Hello from Main!'}
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};
