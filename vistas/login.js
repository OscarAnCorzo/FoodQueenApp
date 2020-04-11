import * as React from 'react';
import { Appbar,FAB,RadioButton,ToggleButton } from 'react-native-paper';
import { StyleSheet,View,Text } from 'react-native';

export default class Login extends React.Component {
   render() {
     return (
        <>
         <View>
            <Appbar style={styles.bottom}>
               <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
               <Appbar.Action icon="email" onPress={() => console.log('Pressed mail')} />
               <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
               <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
            </Appbar>
         </View>
       </>
     );
   }
}

const styles = StyleSheet.create({
   bottom: {
      backgroundColor:'red',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -50,
   },
 });