import React, { PureComponent } from 'react';

import Messenger from './Messenger';
import Widgets from './Widgets';
import HarvardRadio from './HarvardRadio';

class Portfolio extends PureComponent {
  render() {
    return [
      <Messenger key="messenger" />,
      <Widgets key="widgets" />,
      <HarvardRadio key="whrb" />,
    ];
  }
}

export default Portfolio;
