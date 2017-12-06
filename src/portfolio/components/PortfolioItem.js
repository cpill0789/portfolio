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
        <span className="Portfolio-label">TECHNOLOGIES:</span>
        {this.props.technologies.map(tech => <div className="Portfolio-technology">{tech}</div>)}
      </p>
    );
  }

  render() {
    return (
      <div className="Portfolio-item">
        <div className="Portfolio-item-left">
          <h3>{this.props.title}</h3>
          <p><span className="Portfolio-label">ROLE:</span> {this.props.role}</p>
          {this.getTechnologies()}
          <p><span className="Portfolio-label">DESCRIPTION:</span> {this.props.description}</p>
          {this.props.additional && <p>{this.props.additional}</p>}
        </div>
        <div className="Portfolio-item-right">
          {this.props.children}
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
};

PortfolioItem.defaultProps = {
  technologies: [],
  additional: '',
};

export default PortfolioItem;
