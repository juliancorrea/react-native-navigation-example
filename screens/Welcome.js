import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Button } from 'react-native';

export default class Welcome extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLabel: 'Welcome',
        title: 'welcome',
        headerLeft:
        <View style={{ marginLeft: 10 }}>
          <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
        </View>
      });
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigate("Login");}}>
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigate("SignUp");}}>
    <Text style={styles.buttonText}>SignUp</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigate("Content");}}>
<Text style={styles.buttonText}>Content</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonContainer} onPress={()=> {navigate("SetupSignUp");}}>
<Text style={styles.buttonText}>SetupSignUp</Text>
</TouchableOpacity>

      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText:{
        textAlign: 'center',
        color:'#FFF',
        fontWeight: '700'
    },

    text: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    }    
});