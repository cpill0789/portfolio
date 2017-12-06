import React, { PureComponent } from 'react';
import image from './assets/ATPWorldTour.jpg';

const imageStyles = {
  width:'100%',
  height: 'auto',
}

class Widgets extends PureComponent {
  render() {
    return (
      <div className="Portfolio-messenger">
        <div>
          <h3>Vixlet Widgets</h3>
          <p>Embeddable feeds, login/signup forms, sweepstakes entry forms.</p>
          <p>Feed embedded on ATPWorldTour.com (shown), Slipknot1.com</p>
          <p>Sweepstakes entry form embedded on mlb.com and liverpoolfc.com</p>
        </div>
        <div>
          <img src={image} alt="" style={imageStyles} />
        </div>
      </div>
    );
  }
}

export default Widgets;
