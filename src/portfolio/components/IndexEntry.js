import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

import './IndexEntry.css';

class IndexEntry extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const selector = `.${this.props.config.id}-title`;

    scrollToElement(selector, {
      offset: -10,
      duration: 750,
    });
  }

  render() {
    const {
      config,
      selectedTechnologies,
    } = this.props;

    let showItem = true;

    if (selectedTechnologies.size > 0) {
      showItem = false;
      config.technologies.forEach((tech) => {
        if (selectedTechnologies.has(tech)) {
          showItem = true;
        }
      });
    }

    return (
      <div onClick={this.handleClick} className={`IndexEntry${showItem ? '' : ' hidden'}`}>
        {config.title}
      </div>
    );
  }
}

IndexEntry.propTypes = {
  config: PropTypes.object.isRequired,
  selectedTechnologies: PropTypes.object.isRequired,
};

export default IndexEntry;
