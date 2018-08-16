import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import fire from './firebase';
import Loading from './Loading';
import LightSwitch from './LightSwitch';

const db = fire.database();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {light: 'loading', loading: true}
  }

  componentWillMount () {
    let stateRef = db.ref('state').on('value', snapshot => {
      let onOff = snapshot.val();
      this.setState({light: onOff, loading: false});
    });
  }

  clickHandler = () => {
    let bin = this.state.light ? 0 : 1;
    db.ref('state').set(bin);
  }

  render() {
    let display = <Loading />;
    if (!this.state.loading) {
      display = <LightSwitch light={this.state.light} switched={this.clickHandler}/>
    }

    return display;
  }
}
