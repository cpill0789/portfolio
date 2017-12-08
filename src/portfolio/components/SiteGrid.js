import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SiteGrid.css';

import SiteGridItem from './SiteGridItem';

class SiteGrid extends Component {
  render() {
    return (
      <div className="SiteGrid">
        {
          this.props.sites.map(site => (
            <SiteGridItem
              {...site}
              key={site.title}
            />
          ))
        }
      </div>
    );
  }
}

SiteGrid.propTypes = {
  sites: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SiteGrid;
