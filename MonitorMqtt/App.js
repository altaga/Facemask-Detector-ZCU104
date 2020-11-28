import { StatusBar } from 'expo-status-bar';
import React, { Component,useEffect } from 'react';
import { StyleSheet, ImageBackground, View,Input,Platform } from 'react-native';
import Components from "./Components"
import SplashScreen from 'react-native-splash-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  componentDidMount() {
    SplashScreen.hide()
  }

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./logo.png")} style={styles.image}>
        <Components />
        <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
  }
}

export default App