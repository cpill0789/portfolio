import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './FilterToggle.css';

class FilterToggle extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const className = `FilterToggle${this.props.selected ? ' selected' : ''}`;
    return (
      <div onClick={this.handleClick} className={className}>
        {this.props.name}
      </div>
    );
  }
}

FilterToggle.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FilterToggle;
