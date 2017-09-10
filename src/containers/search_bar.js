import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';
import { Button, Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  onEnterHit(event) {
    if (event.keyCode === 13) {
      this.onFormSubmit();
   }
  }

  render(){
    return (
      <Input value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        onKeyUp={this.onEnterHit.bind(this)}
        fluid
        type='text'
        placeholder='Search...'
        action>
        <input />
        <Button type='submit' icon onClick={this.onFormSubmit.bind(this)}>
          <Icon name='search' />
        </Button>
      </Input>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
