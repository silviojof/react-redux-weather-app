import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import GoogleMap from '../components/google_map';
import GoogleMaps from '../components/google_maps';

function getAverage(data) {
  return _.round(_.sum(data)/data.length)
}

const Sparkline = (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={120} limit={20}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{getAverage(props.data)}{props.unit}</div>
    </div>
  )
};

class WeatherList extends  Component {

  render() {
    if(this.props.weather.length === 0) {
      return <div></div>;
    }
    const cities = this.props.weather.map((city, index) => {
      const list = city.list;
      const temp = list.map(weather => weather.main.temp);
      const pressure = list.map(weather => weather.main.pressure);
      const humidity = list.map(weather => weather.main.humidity);
      const {lon, lat} = city.city.coord;

      return <Table.Row key={index}>
        <Table.Cell verticalAlign='top' style={{'width':'250px', 'height':'250px'}}>
          <GoogleMap
            lat={lat}
            lon={lon}
          />
        </Table.Cell>
        <Table.Cell verticalAlign='bottom'>
          <Sparkline data={temp} color="blue" unit="&#8451;"/>
          <div>{city.city.name}</div>
        </Table.Cell>
        <Table.Cell verticalAlign='bottom'>
          <Sparkline data={pressure} color="red" unit="hPa"/>
        </Table.Cell>
        <Table.Cell verticalAlign='bottom'>
          <Sparkline data={humidity} color="green" unit="%"/>
        </Table.Cell>
      </Table.Row>
    });
    return (
      <Table basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width="3">City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Pressure</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cities}
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
