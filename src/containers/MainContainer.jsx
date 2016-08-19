import React from 'react';
import Menu from '../components/Menu';

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className='container--main'>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

MainContainer.propTypes = React.PropTypes.element.isRequired;
