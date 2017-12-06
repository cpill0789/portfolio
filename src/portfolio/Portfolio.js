import React, { PureComponent } from 'react';

import PortfolioItem from './components/PortfolioItem';
import PhoneFrame from './components/PhoneFrame';
import SiteScreen from './components/SiteScreen';

import messengerVideo from './assets/messenger.m4v';
import image from './assets/ATPWorldTour.jpg';
import imageMask from './assets/ATPWorldTourMask.png';

const messengerProps = {
  title: 'Vixlet Messenger',
  role: 'API and Front-end Architect/Lead Developer',
  technologies: ['Node.js', 'WebSockets', 'Cassandra', 'React Native', 'Redux'],
  description: `Architected API and React Native implementation for messaging functionality
          on the Vixlet Platform. The messaging views shown are React Native views embedded within an existing
          iOS Swift application. I led both the front-end and back-end development for the
          feature. I wrote API in Node using Restify, WebSockets, and Cassandra for highly-scalable
          storage. In the demo video I'm showing a conversation with a very simple chat bot that
          I created in order to quickly test out functionality.`,
  key: 'messenger',
};

const widgetsProps = {
  title: 'Vixlet Embeddable Widgets',
  role: 'Architect/Front-end Developer',
  technologies: ['Node.js', 'React', 'PostMessage'],
  description: `Embeddable feeds, login/signup forms, sweepstakes entry forms.
          Feed embedded on ATPWorldTour.com (shown), Slipknot1.com
          Sweepstakes entry form embedded on mlb.com and liverpoolfc.com`,
  key: 'widgets',
};

class Portfolio extends PureComponent {
  render() {
    return [
      <PortfolioItem {...messengerProps}>
        <PhoneFrame src={messengerVideo} />
      </PortfolioItem>,
      <PortfolioItem {...widgetsProps}>
        <SiteScreen image={image} mask={imageMask} />
      </PortfolioItem>,
    ];
  }
}

export default Portfolio;
