import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnTX3AOpECfm-KtcJxbE9cOk1DPrPMkQo',
      authDomain: 'test-a38c0.firebaseapp.com',
      databaseURL: 'https://test-a38c0.firebaseio.com',
      storageBucket: 'test-a38c0.appspot.com',
      messagingSenderId: '416425634454'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Auth</Text>
      </View>
    );
  }
}

export default App;
