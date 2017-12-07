import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SiteScreen.css';

class SiteScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mask: true,
    };

    this.toggleMask = this.toggleMask.bind(this);
  }

  toggleMask() {
    this.setState(prevState => ({
      mask: !prevState.mask,
    }));
  }

  render() {
    return (
      <div className="SiteScreen" onClick={this.toggleMask}>
        <img src={this.props.image} alt="" className="SiteScreen-image" />
        { this.props.mask && <img src={this.props.mask} alt="" className={`SiteScreen-mask ${this.state.mask ? ' show' : ''}`} /> }
      </div>
    );
  }
}

SiteScreen.propTypes = {
  image: PropTypes.string.isRequired,
  mask: PropTypes.string,
};

SiteScreen.defaultProps = {
  mask: '',
};

export default SiteScreen;
