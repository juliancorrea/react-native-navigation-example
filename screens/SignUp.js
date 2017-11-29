import React, { Component } from "react";
import { Text, View ,Button} from "react-native";

export default class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'SignUp',
    title: 'SignUp',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
    <Button title="Back" onPress={() => navigation.goBack()} />
  </View>
  });
  render() {
    return (
      <View>
        <Text>SIGNUP VIEW</Text>
      </View>
    );
  }
}
