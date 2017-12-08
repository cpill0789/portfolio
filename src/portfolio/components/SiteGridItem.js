/* globals window */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SiteGridItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const maxWidth = 1024;
    const maxHeight = 768;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    let left = 0;
    let top = 0;

    let width = screenWidth;
    let height = screenHeight;

    if (screenWidth > maxWidth) {
      width = maxWidth;
      left = (screenWidth - maxWidth) / 2;
    }

    if (screenHeight > maxHeight) {
      height = maxHeight;
      top = (screenHeight - maxHeight) / 2;
    }

    window.open(this.props.link, this.props.title, `menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,left=${left},top=${top},width=${width},height=${height}`);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="SiteGridItem">
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}

SiteGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SiteGridItem;
