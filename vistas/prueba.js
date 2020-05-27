import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,FlatList,ToolbarAndroid
} from "react-native";
import SideMenu from 'react-native-side-menu';


// const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      <>
      {/* <ToolbarAndroid
        title="AwesomeApp"
        actions={[{title: 'Settings', icon:"menu", show: 'always'}]}
      /> */}
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.ios.js
        </Text>
        <Text >
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
      </>
    );
  }
}

export default class Prueba extends React.Component {
   constructor(props){
      super(props);
   }
  render() {
    return (
      <SideMenu>
        <ContentView/>
      </SideMenu>
    );
  }
}