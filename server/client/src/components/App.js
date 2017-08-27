import React, { Component } from 'react';
import './App.css';

import MiniNav from './MiniNav';
import MainNav from './MainNav';
import Jumbo from './Jumbo';
import ContestForm from './ContestForm';
import Description from './Description';
import Prizes from './Prizes';
import Rules from './Rules';
import BottomJumbo from './BottomJumbo';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <MiniNav />
        <MainNav />
        <Jumbo />
        <ContestForm />
        <Description />
        <Prizes />
        <Rules />
        <BottomJumbo />
        <Footer />
      </div>
    );
  }
}

export default App;
