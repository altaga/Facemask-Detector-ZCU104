import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, Input} from 'react-native-elements'
import MQTT from 'sp-react-native-mqtt';
import { Dimensions, Alert, PermissionsAndroid,DevSettings,BackHandler } from "react-native";
import { NetworkInfo } from 'react-native-network-info';
import RNFetchBlob from 'rn-fetch-blob'
import { NoFlickerImage } from 'react-native-no-flicker-image';


var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

console.log(deviceWidth)
console.log(deviceHeight * .84)

let base = "data:image/png;base64,"

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "data:image/png;base64,",
      file: "",
      values:"/device1",
      color:"red",
      statec:"red",
      ipAdresss:"NO SERVER!",
      ipDisplay:"NO SERVER!"
    }
    this.sub=""
    this.randint = 'monitor'+getRandomInt(0,10000000000).toString()
  }

  saveInMemory(image) {
    Alert.alert(
      "Client Image",
      "Are you sure you want save this picture?",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Nope")
          },
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            var path = "/storage/emulated/0/Pictures/Monitor" + "/image" + Date.now().toString() + ".jpg"
            RNFetchBlob.fs.writeFile(path, image, 'base64')
              .then((result) => { console.log("File has been saved to:" + result) })
              .catch(error => console.log(error))
              alert("Image Saved:"+path)
             
          }
        }
      ],
      { cancelable: false }
    );


  }

  requestCameraPermission = () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'MonitorMQTT Gallery Permission',
          message:
            'Do you allow MonitorMQTT to save the images taken in gallery?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('OK');
      } else {
        console.log('Permission denied')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentWillUnmount(){
    this.sub.disconnect()
    MQTT.removeClient({
      uri: 'ws://' + this.state.ipAdresss + ':1883',
      clientId: this.randint,
      automaticReconnect:true,
      keepalive:60,
      clean:true
    })
    
  }

  componentDidMount() {
    this.requestCameraPermission()
    this.sub=""
    let _this = this
    NetworkInfo.getIPAddress().then(ipAddress => {
      MQTT.removeClient({
        uri: 'ws://' + ipAddress + ':1883',
        clientId: _this.randint,
        automaticReconnect:true,
        keepalive:60,
        clean:true
      })
      let __this = _this
      MQTT.createClient({
        uri: 'ws://' + ipAddress + ':1883',
        clientId: 'monitor',
        automaticReconnect:true,
        keepalive:60,
        clean:true
      }).then(function (client) {
        let ___this = __this
        __this.sub = client
        __this.sub.on('closed', function () {
          console.log('mqtt.event.closed');
          //DevSettings.reload()
        });

        __this.sub.on('error', function (msg) {
          if(msg.substring(0,14) === "ConnectionLost"){
            //DevSettings.reload()
          }
          else{
          Alert.alert(
            "MQTT Unable",
            "Activate the MQTT broker and press Reload App",
            [
              {
                text: "Reload App", onPress: () => {
                  DevSettings.reload()
                }
              }
            ],
            { cancelable: false }
          );
          ___this.setState({
            color:"red"
          })
        }
        });

        __this.sub.on('message', function (msg) {

          let payload = JSON.parse(msg.data)
          console.log(payload.state)
        
          ___this.setState({
            image: base + payload.img,
            file: payload.img
          })

        });

        __this.sub.on('connect', function () {
          console.log('connected');
          let temp = _this.state.values
          __this.sub.subscribe(temp, 0);
          ___this.setState({
            color:"green",
            ipAdresss:ipAddress,
            ipDisplay:ipAddress+":1883"
          })
          //client.publish('/data', "test", 0, false);
        });

        __this.sub.connect();
      }).catch(function (err) {
        console.log(err);
        //DevSettings.reload()
      });
    });

  }

  componentWillUnmount() {

  }



  render() {
    return (
      <>
       <Input
   placeholder={this.state.values}
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={{color:"white"}}
   onChangeText={value => {
    this.sub.unsubscribe(this.state.values)
    this.setState({ values: value })
    this.sub.subscribe(value, 0);
   }}
   value = {this.state.values}
  />
  <Text style={{fontSize: 20,color:"white",textAlign:"center"}}>Server: {this.state.ipDisplay}</Text>
        <Card containerStyle={{fontSize:30,borderColor:"#222222", backgroundColor: 'transparent' }} >
          <Card.Title style={{fontSize:30, color:this.state.color}}>FaceMask MONITOR</Card.Title>
          <Card.Divider />
          <NoFlickerImage
          resizeMethod="scale"
          resizeMode="cover"
          source={{ uri: this.state.image }}
          style={{borderRadius:20, width: Dimensions.get("window").width*.82, height: Dimensions.get("window").height * .5 }}
        />
        </Card>
        <Text></Text>
        <Button
          onPress={() => this.saveInMemory(this.state.file)}
          title="Save Image"
          titleStyle={{
            color: "white",
            fontSize: 30,
          }}
          buttonStyle={{
            borderRadius: 20,
            width: "100%",
            color:this.state.statec
          }}
        />
      </>
    );
  }
}

export default Components;