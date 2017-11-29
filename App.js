/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
 import {ScrollView } from 'react-native';
 import React from 'react';

 import Login  from "./screens/Login";
 import Dashboard  from "./screens/Dashboard";
import SetupSignUp  from "./screens/SetupSignUp";
import SignUp from "./screens/SignUp";
import Welcome  from "./screens/Welcome";
import MainStack from "./screens/MainStack";

const stack = StackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  Content: {screen: MainStack},
  SetupSignUp: {screen: SetupSignUp}
},
  {
  initialRouteName: "Welcome",
  headerMode: 'none' 
});

const Main = DrawerNavigator({
  Dashboard: {screen: Dashboard},
  Stack: {screen: stack},
},{
  initialRouteName: "Dashboard",
  contentComponent: props =><ScrollView><DrawerItems {...props} /></ScrollView>
});

const App = StackNavigator({
  Main: { screen: Main }
});

export default App;