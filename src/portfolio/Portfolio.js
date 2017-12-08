import React, { PureComponent } from 'react';

import './Portfolio.css';

import PortfolioItem from './components/PortfolioItem';
import PhoneFrame from './components/PhoneFrame';
import SiteScreen from './components/SiteScreen';
import SiteGrid from './components/SiteGrid';
import FilterToggle from './components/FilterToggle';
import IndexEntry from './components/IndexEntry';

import messengerVideo from './assets/messenger.m4v';
import messengerPoster from './assets/messenger-poster.jpg';

import tennisVideo from './assets/tennis.m4v';
import tennisPoster from './assets/tennis-poster.jpg';

import atpImage from './assets/ATPWorldTour.jpg';
import atpImageMask from './assets/ATPWorldTourMask.png';

import whrbVideo from './assets/whrb.m4v';
import whrbPoster from './assets/whrb-poster.jpg';

import siteTanya from './assets/site-tanya.png';
import siteCaio from './assets/site-caio.png';
import siteWHRB from './assets/site-whrb.png';
import siteTLC from './assets/site-tlc.png';

const items = new Map([
  [
    'messenger',
    {
      title: 'Vixlet Messenger',
      role: 'API and Front-end Lead Developer',
      technologies: ['Cassandra', 'JavaScript', 'Node.js', 'React Native', 'Redis', 'Redux', 'WebSockets'],
      description: 'In the summer and fall of 2017, I architected the API and client code for direct messaging functionality on the Vixlet Platform. The client is written in React Native with a redux data store and integrated into the existing Vixlet iOS and Android apps. The API is backed by Apache Cassandra with a REST API written with the Restify framework on Node.js. Real-time communication is powered by WebSockets with Redis Pub/Sub used to coordinate communication between servers.',
      additional: 'The demo video shows the messaging application in Vixlet’s internal company app. The “vixbot” user is a chat bot that replies with a random quote (which I also wrote). The React Native code is built to be themed for multiple Vixlet worlds (MLB Fans, Slipknot OT9, LFC Xtra, MyATP, and more) via dynamic configuration.',
    },
  ],
  [
    'widgets',
    {
      title: 'Vixlet Embeddable Widgets',
      role: 'Architect and Primary Front-end Developer',
      technologies: ['CSS-in-JS', 'HTML', 'JavaScript', 'Node.js', 'PostMessage', 'React Web', 'Isomorphic Rendering'],
      description: 'In the fall of 2016, I led a complete refactor of the Vixlet Widgets SDK, which embeds parts of the Vixlet social platform onto third-party sites. The refactor implemented the PostMessage API for secure cross-domain iframe communication, isomorphic React rendering to provide rich HTML from server,  and dynamic styling through CSS-in-JS.',
      additional: 'The screenshot shows the feed and authentication widgets embedded on the ATP World Tour homepage. Widgets were also embedded on the official websites for Liverpool FC, MLB, and Slipknot.',
    },
  ],
  [
    'tennis',
    {
      title: 'Tennis Tournament Web Views',
      role: 'Full-Stack Developer',
      technologies: ['CSS-in-JS', 'HTML', 'JavaScript', 'Node.js', 'React Web', 'Redux', 'Server-Sent Events'],
      description: 'A small cross-functional team at Vixlet was organized to create a proof-of-concept for real-time tennis scores and event information embedded in the tennis-focused Vixlet apps. The live scores were created as React.js web views and served by a Node server. Live score data was provided by the ATP XML API and sent to clients in real-time using server-sent events.',
      additional: 'The feature was completed in six weeks and deployed live for the 2017 Garanti Koza Sofia Open, which is shown in the video. The feature was also deployed for the 2017 ATP Istanbul Open and WTA Istanbul Cup.',
    },
  ],
  [
    'whrb',
    {
      title: 'WHRB Radio App',
      role: 'Developer/Designer',
      technologies: ['Fastlane', 'Icecast', 'JavaScript', 'Node.js', 'React Native', 'Redux', 'Server-Sent Events'],
      description: 'In the summer of 2017, I built a live stream and playlist app for Harvard Radio with React Native. I designed, developed, and released the app. The live stream is an HE-AAC stream served by an Icecast server. Playlist data is provided through a Node.js API, which also serves data for the whrb.org homepage.',
    },
  ],
  [
    'sites',
    {
      title: 'Concrete5 Sites',
      role: 'Developer/Designer',
      technologies: ['Concrete5', 'CSS', 'HTML', 'JavaScript', 'LAMP', 'Less'],
      description: 'As a freelancer, I\'ve designed and developed several sites with the Concrete5 CMS. All of these sites include custom functionality built with the Concrete5 framework. I\'ve also publish add-ons on the official Concrete5 marketplace that are used on over 3,700 sites',
    },
  ],
]);

const itemKeys = Array.from(items.keys());

const technologies = new Set();

// Add all technologies for all items to the technologies Set.
items.forEach(item => item.technologies.forEach(tech => technologies.add(tech)));

const technologiesArray = Array.from(technologies);

technologiesArray.sort();

const exampleSites = [
  {
    title: 'TanyaOrellana',
    link: 'https://tanyaorellana.com/',
    image: siteTanya,
  },
  {
    title: 'WHRB',
    link: 'https://www.whrb.org/',
    image: siteWHRB,
  },
  {
    title: 'Caio Afiune',
    link: 'https://www.caioafiune.com/',
    image: siteCaio,
  },
  {
    title: 'TLC',
    link: 'https://trinitystatecollege.org/',
    image: siteTLC,
  },
];

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
        <div className="Portfolio-intro">
          <p>
            Here are some selected full-stack and front-end projects completed
            while working at the social networking company Vixlet, LLC
            (<a href="https://github.com/cpillzvix" target="_blank" rel="noopener noreferrer">view contribution history</a>) and as a
            freelance developer. I was lead architect, primary contributor, or sole
            developer on all projects listed. This portfolio
            (<a href="https://github.com/cpill0789/portfolio" target="_blank" rel="noopener noreferrer">source code</a>) was written
            in React.js and uses CSS flexbox for layouts.
          </p>
        </div>
        <div className="Portfolio-navigation">
          <div className="Portfolio-index">
            <h4>Projects</h4>
            { itemKeys.map(key => <IndexEntry config={items.get(key)} key={key} id={key} selectedTechnologies={this.state.selectedTechnologies} />) }
          </div>
          <div className="Portfolio-technology-filters">
            <h4>Filter by Technology</h4>
            { this.getTechList() }
          </div>
        </div>
        <PortfolioItem {...items.get('messenger')} id="messenger" selectedTechnologies={this.state.selectedTechnologies}>
          <PhoneFrame src={messengerVideo} poster={messengerPoster} title="messenger" />
        </PortfolioItem>
        <PortfolioItem {...items.get('widgets')} id="widgets" selectedTechnologies={this.state.selectedTechnologies}>
          <SiteScreen image={atpImage} mask={atpImageMask} />
        </PortfolioItem>
        <PortfolioItem {...items.get('tennis')} id="tennis" selectedTechnologies={this.state.selectedTechnologies}>
          <PhoneFrame src={tennisVideo} poster={tennisPoster} title="tennis" />
        </PortfolioItem>
        <PortfolioItem {...items.get('whrb')} id="whrb" selectedTechnologies={this.state.selectedTechnologies} additional={<a href="https://itunes.apple.com/us/app/whrb/id1239241850?mt=8" className="appStore" />}>
          <PhoneFrame src={whrbVideo} poster={whrbPoster} title="whrb" />
        </PortfolioItem>
        <PortfolioItem {...items.get('sites')} id="sites" selectedTechnologies={this.state.selectedTechnologies}>
          <SiteGrid sites={exampleSites} />
        </PortfolioItem>
      </div>
    );
  }
}

export default Portfolio;
