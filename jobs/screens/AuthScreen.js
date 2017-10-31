import React, { Component } from 'react';
import { View, TextInput, Dimensions, StatusBar, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Spinner } from '../components/common';


const SCREEN_WIDTH = Dimensions.get('window').width;

class AuthScreen extends Component {

  constructor(props){
    super(props);
    this.requestOTP = this.requestOTP.bind(this);
    this.renderOTPInput = this.renderOTPInput.bind(this);
    this.renderButton =this.renderButton.bind(this);
  }

  state = {
    mobile: '',
    waitingForOTP: false,
    error: null,
    otp: ''
  }

  requestOTP(){
    const { mobile } = this.state;
    if(mobile.length !== 10){
      this.setState({
        error: 'Incorrect mobile number'
      });
      return;
    }

    this.setState({
      waitingForOTP: true
    });
  }

  renderOTPInput(){
    if(this.state.waitingForOTP){
      return(
        <TextInput
          value = {this.state.otp}
          style = {{...styles.inputStyle, width: SCREEN_WIDTH/2, textAlign: "center"}}
          underlineColorAndroid = "transparent"
          placeholder="Enter 6 digit OTP"
          keyboardType = 'numeric'
          onChangeText = {
            (text) => this.setState({ otp: text})
          }
        />
      );
    }
    return;
  }

  renderButton(){
    const { waitingForOTP } = this.state;
    return (
      <Button 
        title="GENERATE OTP"
        disabled = { waitingForOTP }
        buttonStyle={ styles.buttonStyle }
        onPress={this.requestOTP}
      />
    );
  }

  render(){

    const { waitingForOTP, error } = this.state;

    return(
      <View style = {styles.viewStyle}>
        <TextInput
          value = {this.state.mobile}
          style = {styles.inputStyle}
          underlineColorAndroid = "transparent"
          placeholder="Enter 10 digit mobile number"
          keyboardType = 'numeric'
          onChangeText = {
            (text) => this.setState({ mobile: text})
          }
        />        
        {this.renderButton()}
        <View style={styles.otpContainerStyle}>
          {this.renderOTPInput()}
        </View>
      </View>
    )
  }  
}

const styles = {
  viewStyle: {
    flex: 1,    
    width: SCREEN_WIDTH,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },  
  inputStyle: {
    margin: 15,
    marginBottom: 0,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  },
  otpContainerStyle: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH
  }
};

export default AuthScreen;
