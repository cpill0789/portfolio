import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SiteScreen.css';

class SiteScreen extends PureComponent {
  render() {
    return (
      <div className="SiteScreen">
        <img src={this.props.image} alt="" className="SiteScreen-image" />
        { this.props.mask && <img src={this.props.mask} alt="" className="SiteScreen-mask" /> }
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
