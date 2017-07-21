require('../styles/layout.scss');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import HomepageIndex from './homepage/HomepageIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import MapIndex from './map/MapIndex.jsx';
import SignInIndex from './signin/SignInIndex.jsx';
import CalendarIndex from './calendar/CalendarIndex.jsx';
import SortableComponent from './dnd/SortableComponent.jsx';
import AddCard from './addcard/addCardForm.jsx';
// import Styles from '../public/styles/layout.css';



const reactRoot = document.querySelector('#react-root');

if (module.hot) {
  module.hot.accept();
}

render(
  <Router>
    <div>
      <div>
        <Navbar />
      </div>
      <Route exact path="/" component={HomepageIndex} />
      <Route exact path="/add" component={AddCard} />
      <Route path="/itinerary" component={ItineraryIndex}/>
      <Route path="/map" component={MapIndex} />
      <Route path="/signin" component={SignInIndex} />
      <Route path="/export" component={CalendarIndex} />
    </div>
  </Router>
  , reactRoot);