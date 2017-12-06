import React, { PureComponent } from 'react';
import Messenger from './Messenger';

class Portfolio extends PureComponent {
  render() {
    return [<Messenger key="messenger" />];
  }
}

export default Portfolio;
