import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Dashboard',
    title: 'Dashboard',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
      </View>
  });

  render() {
    return (
      <View>
        <Text>DASHBOARD VIEW</Text>
      </View>
    );
  }
}
