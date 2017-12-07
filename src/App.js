import React, { Component } from 'react';
import 'reset-css';
import './App.css';

import Portfolio from './portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1 className="App-title">Carl A. Pillot</h1>
            <h2>Full-Stack Developer</h2>
          </div>
          <div className="logos">
            <a href="https://www.linkedin.com/in/carl-pillot-00a90930">
              <svg viewBox="0 0 1792 1792" width="44" height="44" xmlns="http://www.w3.org/2000/svg" className="linkedin"><path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z" fill="#fff" /></svg>
            </a>
            <a href="https://github.com/cpill0789">
              <svg viewBox="0 0 1792 1792" width="44" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M896 128q209 0 385.5 103T1561 510.5 1664 896q0 251-146.5 451.5T1139 1625q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 493 446q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T128 896q0-209 103-385.5T510.5 231 896 128zM419 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" fill="#fff" /></svg>
            </a>
          </div>
        </header>
        <Portfolio />
      </div>
    );
  }
}

export default App;
