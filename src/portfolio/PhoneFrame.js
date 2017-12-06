import React, { PureComponent } from 'react';

import phone from './assets/iphone8.png';

const containerStyles = {
  width:400,
  height:600,
  position:'relative',
};

const frameStyles = {
  height:600,
  width:'auto',
};

const videoStyles = {
  cursor: 'pointer',
  height: 450,
  position: 'absolute',
  left:0,
  right:0,
  marginLeft: 'auto',
  marginRight: 'auto',
  top:70,
};

class PhoneFrame extends PureComponent {
  constructor(props) {
    super(props);
    this.bindVideoRef = this.bindVideoRef.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  bindVideoRef(video) {
    this.video = video;
    this.video.loop = true;
  }

  playVideo() {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    return (
      <div style={containerStyles}>
        <img src={phone} alt="" style={frameStyles} />
        <video
          ref={this.bindVideoRef}
          onClick={this.playVideo}
          style={videoStyles}>
          <source src={this.props.src} />
        </video>
      </div>
    );
  }
}

export default PhoneFrame;
