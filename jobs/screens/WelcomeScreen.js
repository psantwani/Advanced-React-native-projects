import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { AppLoading } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

class WelcomeScreen extends Component {

  constructor(props){
    super(props);

    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick(){
    this.props.navigation.navigate('auth');
  }

  render(){
    return(
      <View style = {styles.viewStyle}>
        <Text style={styles.textStyle}>Kya Bolta hai</Text>
        <Button 
          title="LOGIN"
          raised
          onPress={this.onLoginButtonClick}
          buttonStyle={styles.buttonStyle}
          />
      </View>
    )
  }  
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'black'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};


export default WelcomeScreen;
