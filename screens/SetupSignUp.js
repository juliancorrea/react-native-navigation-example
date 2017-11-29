import React, { Component } from "react";
import { Text, View,Button } from "react-native";

export default class SetupSignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'SetupSignUp',
    title: 'SetupSignUp',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
    <Button title="Back" onPress={() => navigation.goBack()} />
  </View>
  });
  render() {
    return (
      <View>
        <Text>SETUPSIGNUP VIEW</Text>
      </View>
    );
  }
}
