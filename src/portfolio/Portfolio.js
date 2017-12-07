import React, { PureComponent } from 'react';

import './Portfolio.css';

import PortfolioItem from './components/PortfolioItem';
import PhoneFrame from './components/PhoneFrame';
import SiteScreen from './components/SiteScreen';
import FilterToggle from './components/FilterToggle';

import messengerVideo from './assets/messenger.m4v';
import messengerPoster from './assets/messenger-poster.jpg';
import tennisVideo from './assets/tennis.m4v';
import tennisPoster from './assets/tennis-poster.jpg';
import image from './assets/ATPWorldTour.jpg';
import imageMask from './assets/ATPWorldTourMask.png';

const messengerProps = {
  title: 'Vixlet Messenger',
  role: 'API and Front-end Architect/Lead Developer',
  technologies: ['Cassandra', 'Node.js', 'React Native', 'Redux', 'WebSockets'],
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
  technologies: ['Node.js', 'PostMessage', 'React Web'],
  description: `Embeddable feeds, login/signup forms, sweepstakes entry forms.
          Feed embedded on ATPWorldTour.com (shown), Slipknot1.com
          Sweepstakes entry form embedded on mlb.com and liverpoolfc.com`,
  key: 'widgets',
};

const tennisProps = {
  title: 'Live Tennis Score Views',
  role: 'Front-end Developer/API Contributor',
  technologies: ['React Web', 'Server-Sent Events', 'Local Storage'],
  description: 'Live tennis scores for multiple tournaments',
  key: 'tennis',
};

const technologies = new Set();

messengerProps.technologies.forEach(tech => technologies.add(tech));
widgetsProps.technologies.forEach(tech => technologies.add(tech));

const technologiesArray = Array.from(technologies);

technologiesArray.sort();

class Portfolio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechnologies: new Set(),
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  getTechList() {
    return technologiesArray.map((item) => {
      const selected = this.state.selectedTechnologies.has(item);
      return (
        <FilterToggle
          key={item}
          selected={selected}
          onClick={this.handleFilterClick}
          name={item}
        />
      );
    });
  }

  handleFilterClick(tech) {
    this.setState((prevState) => {
      const selectedTechnologies = new Set(prevState.selectedTechnologies);
      if (selectedTechnologies.has(tech)) {
        selectedTechnologies.delete(tech);
      } else {
        selectedTechnologies.add(tech);
      }
      return {
        selectedTechnologies,
      };
    });
  }

  render() {
    return (
      <div className="Portfolio">
        <p className="Portfolio-intro">This is a portfolio of some recent full-stack
          projects that I&apos;ve worked on both at the social networking company Vixlet, LLC (<a href="https://github.com/cpillzvix">contribution history</a>)
          and as a freelance developer. On all of these projects I was the
          lead architect, primary contributor, or the sole developer.
          This portfolio (<a href="https://github.com/cpill0789/portfolio">view source on github</a>) was written in React.js and uses flex-box for layouts.
          I bootstrapped the project with the create-react-app utility from Facebook.
        </p>
        <div className="Portfolio-technology-filters">
          <span className="Portfolio-label">Filter by Technology:</span>
          { this.getTechList() }
        </div>
        <PortfolioItem {...messengerProps} selectedTechnologies={this.state.selectedTechnologies}>
          <PhoneFrame src={messengerVideo} poster={messengerPoster} />
        </PortfolioItem>
        <PortfolioItem {...widgetsProps} selectedTechnologies={this.state.selectedTechnologies}>
          <SiteScreen image={image} mask={imageMask} />
        </PortfolioItem>
        <PortfolioItem {...tennisProps} selectedTechnologies={this.state.selectedTechnologies}>
          <PhoneFrame src={tennisVideo} poster={tennisPoster} />
        </PortfolioItem>
      </div>
    );
  }
}

export default Portfolio;
