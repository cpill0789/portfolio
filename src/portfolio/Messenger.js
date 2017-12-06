import React, { PureComponent } from 'react';

import PhoneFrame from './PhoneFrame';

import messengerVideo from './assets/messenger.m4v';

class Messenger extends PureComponent {
  render() {
    return (
      <div className="Portfolio-messenger">
        <div>
          <h3>Vixlet Messenger</h3>
          <p>Architected API and React Native implementation for messaging functionality on the Vixlet Platform.
          The messaging views shown are React Native views embedded with an existing iOS Swift application. I led both the front-end and back-end development for the feature.</p>
          <p>I wrote API in Node using Restify, WebSockets, and Cassandra for highly-scalable storage.</p>
        </div>
        <PhoneFrame src={messengerVideo} />
      </div>
    );
  }
}

export default Messenger;
