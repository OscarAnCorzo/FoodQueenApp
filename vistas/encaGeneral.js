import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const EncaGeneral = () => {
   return (
      <Appbar.Header style={styles.header}>
         <Appbar.Action icon="menu" color={'#e39c0e'}/>
         <Appbar.Content title="FoodQueen" titleStyle={{textAlign:'center'}}/>
         <Appbar.Action icon="login" color={'#e39c0e'}/>
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