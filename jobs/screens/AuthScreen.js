import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    //We could comment the next line..
    this.onAuthComplete(this.props);
  }

  //This lifecycle method is called just before when the component is about to be re-rendered.
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
