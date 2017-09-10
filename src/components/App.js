import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <WeatherList />
      </Container>
    );
  }
}

export default App;
