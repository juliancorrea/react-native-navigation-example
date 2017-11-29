import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Login',
    title: 'Login',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  });
  render() {
    return (
      <View>
        <Text>
           LOGIN VIEW
        </Text>
      </View>
    );
  }
}