/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Appbar, ToggleButton, Button } from 'react-native-paper';
import EncaGeneral from './vistas/encaGeneral';
import Login from './vistas/login';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        {/* encabezado*/}
        <EncaGeneral/>
        {/* cuerpo */}
        <View style={styles.body}>
          <Login/>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  },
  body: {
    backgroundColor: 'green',
    paddingTop:15
  },
});

export default App;
