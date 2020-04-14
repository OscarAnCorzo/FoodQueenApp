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
import Inicio from './vistas/inicio';


const App = () => {
  return(
    <>
      <StatusBar barStyle="dark-content" />
      {/* encabezado*/}
      <EncaGeneral/>
      {/* cuerpo */}
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.body}>
        <Inicio/>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;
