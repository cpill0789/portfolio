import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PortfolioItem.css';

class PortfolioItem extends PureComponent {
  getTechnologies() {
    if (!this.props.technologies.length) {
      return null;
    }

    return (
      <p>
        <span className="Portfolio-label">TECHNOLOGIES:</span> {this.props.technologies.join(', ')}
      </p>
    );
  }

  render() {
    const {
      title,
      role,
      description,
      selectedTechnologies,
      technologies,
      additional,
      children,
    } = this.props;

    let showItem = true;

    if (selectedTechnologies.size > 0) {
      showItem = false;
      technologies.forEach((tech) => {
        if (selectedTechnologies.has(tech)) {
          showItem = true;
        }
      });
    }

    return (
      <div className={`Portfolio-item${showItem ? '' : ' hidden'}`}>
        <div className="Portfolio-item-left">
          <h3>{title}</h3>
          {this.getTechnologies()}
          <p><span className="Portfolio-label">ROLE:</span> {role}</p>
          <p><span className="Portfolio-label">DESCRIPTION:</span> {description}</p>
          {additional && <p>{additional}</p>}
        </div>
        <div className="Portfolio-item-right">
          {children}
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additional: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  selectedTechnologies: PropTypes.object.isRequired,
};

PortfolioItem.defaultProps = {
  technologies: [],
  additional: '',
};

export default PortfolioItem;
