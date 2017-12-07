import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PhoneFrame.css';
import phone from '../assets/iphone8.png';

class PhoneFrame extends PureComponent {
  constructor(props) {
    super(props);
    this.bindVideoRef = this.bindVideoRef.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.state = {
      clicked: false,
    };
  }

  getOverlay() {
    if (!this.state.clicked) {
      return (
        <div className="PhoneFrame-overlay" onClick={this.playVideo}>
          <svg viewBox="0 0 1792 1792" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M896 128q209 0 385.5 103T1561 510.5 1664 896t-103 385.5-279.5 279.5T896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128zm384 823q32-18 32-55t-32-55L736 521q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z" fill="#CCC" /></svg>
        </div>
      );
    }

    return null;
  }

  playVideo() {
    this.setState({ clicked: true });

    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  bindVideoRef(video) {
    this.video = video;
    this.video.loop = true;
  }

  render() {
    return (
      <div className="PhoneFrame">
        <img src={phone} alt="" className="PhoneFrame-frame" />
        { this.getOverlay() }
        <video
          ref={this.bindVideoRef}
          onClick={this.playVideo}
          className="PhoneFrame-video"
          poster={this.props.poster}
        >
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}

PhoneFrame.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default PhoneFrame;
