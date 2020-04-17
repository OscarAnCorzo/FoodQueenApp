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
import Login from './vistas/login';
import Inicio from './vistas/inicio';
import Prueba from './vistas/prueba';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return(
    <>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Inicio}/>
        <Stack.Screen name="Prueba" component={Prueba}/>
        <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
