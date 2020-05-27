import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


const EncaGeneral = ({ navigation }) => {
   return (
      <Appbar.Header style={styles.header} >
         <Appbar.Action icon="menu" color={'#e39c0e'} onPress={()=> navigation.openDrawer()}/>
         <Appbar.Content title="FoodQueen" titleStyle={{textAlign:'center'}}/>
         <Appbar.Action icon="magnify" color={'#e39c0e'} onPress={()=> navigation.navigate('Login')}/>
      </Appbar.Header>
   );
};

const styles = StyleSheet.create({
   header:{
      backgroundColor: '#a40406',
      flexDirection:'row'
   }
 });
 
 export default EncaGeneral;