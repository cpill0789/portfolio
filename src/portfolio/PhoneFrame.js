import React, { PureComponent } from 'react';

import phone from './assets/iphone8.png';

const containerStyles = {
  width:400,
  height:600,
  position:'relative',
};

const frameStyles = {
  height:600,
  position: 'absolute',
  width:'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
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

const overlay = {
  backgroundColor: '#000',
  position: 'absolute',
  height:451,
  width:260,
  left:0,
  right:0,
  marginLeft: 'auto',
  marginRight: 'auto',
  top:70,
  zIndex:1,
  opacity:0.7,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class PhoneFrame extends PureComponent {
  constructor(props) {
    super(props);
    this.bindVideoRef = this.bindVideoRef.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.state = {
      clicked: false,
    }
  }

  bindVideoRef(video) {
    this.video = video;
    this.video.loop = true;
  }

  playVideo() {
    this.setState({ clicked: true });

    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  getOverlay() {
    if (!this.state.clicked) {
      return (
        <div style={overlay} onClick= {this.playVideo}>
          <svg viewBox="0 0 1792 1792" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M896 128q209 0 385.5 103T1561 510.5 1664 896t-103 385.5-279.5 279.5T896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128zm384 823q32-18 32-55t-32-55L736 521q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z" fill="#CCC"/></svg>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div style={containerStyles}>
        <img src={phone} alt="" style={frameStyles} />
        { this.getOverlay() }
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
