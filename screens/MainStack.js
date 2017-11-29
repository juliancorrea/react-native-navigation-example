import React, { Component } from "react";
import { Text, View ,Button} from "react-native";

export default class MainStack extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'MainStack',
    title: 'MainStack',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
    <Button title="Back" onPress={() => navigation.goBack()} />
  </View>
  });
  render() {
    return (
      <View>
        <Text>MAIN VIEW</Text>
      </View>
    );
  }
}
