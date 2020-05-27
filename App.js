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
  Dimensions
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
import SideMenu from './vistas/sideMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <SideMenu/>} drawerStyle={{width: Dimensions.get('window').width - 100}}>
        <Drawer.Screen name="Home" component={Inicio}/>
        {/* <Drawer.Screen name="Prueba" component={SideMenu}/> */}
        <Drawer.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
