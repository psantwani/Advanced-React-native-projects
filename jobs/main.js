import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ChatListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';
import ContactListScreen from './screens/ContactListScreen';

class App extends React.Component {

  //Inside TabNavigator instance, we have a key value pair.
  //We use the key to programatically navigate whenever needed.
  render() {

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: {screen: AuthScreen},
      main: {
        screen: TabNavigator({
          chats: { screen: ChatListScreen },
          contacts: { screen: ContactListScreen },
          profile: {
            screen: StackNavigator({
              settings: { screen: SettingsScreen }
            })
          }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      
      navigationOptions: {
        tabBar: { visible: false } //since we don't want to see the tabs visible on login and splash screen pages
      },
      lazy: true      
    });

    /**
     * What is lazyLoad (simply lazy in latest version of react-navigation) ?
     * RouterNavigation will try to load welcome, auth and main screens together when rendering
     * We dont want that. Hence we set lazyLoad to true
     */

    return (      
        <MainNavigator />      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'    
  },
});

Expo.registerRootComponent(App);
