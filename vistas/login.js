import * as React from 'react';
import { StyleSheet,View,Text,Dimensions} from 'react-native';
import { Appbar,FAB,RadioButton,Button,TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
// import Dimensions from 'Dimensions'
const pantalla = Dimensions.get('window');

export default class Login extends React.Component {
   constructor(props){
      super(props);
      this.state={
         este: 0
      }
   }

   find_dimesions(layout){ 
      const {x, y, width, height} = layout; 
      /* console.warn(x); 
      console.warn(y); 
      console.warn(width); 
      console.warn(height);  */
      // var alto = Dimensions.get('window').height;
      this.setState({este : (pantalla.height - 150 - height)/2});
   }

   render() {
      return (
         <>
            <Appbar.Header style={styles.header} >
               <Appbar.Action icon="arrow-left" color={'#e39c0e'} onPress={() => this.props.navigation.goBack()}/>
               <Appbar.Content title="Ingresar"/>
            </Appbar.Header>
            <View style={{marginTop: this.state.este}} onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
               <View style={styles.sectionTitle}>
                  <Text style={styles.titulo}>Inicia Sesión</Text>
               </View>
               <View style={{alignItems: 'center'}}>
                  <TextInput style={styles.input} label='Email'/>
                  <TextInput style={styles.input} label='Contraseña' secureTextEntry={true}/>
               </View>
               <View style={{flexDirection:'row', alignItems: 'center',marginBottom:10}}>
                  <CheckBox style={{marginLeft:pantalla.width*0.05}}/>
                  <Text>Mantener Sesión Inicida</Text>
               </View>
               <View style={styles.boton}>
                  <Button style={{backgroundColor:'#e39c0e'}} icon="login" mode="contained" >
                     Ingresar
                  </Button>
               </View>
            </View>
         </>
      );
   }
}

const styles = StyleSheet.create({
   header:{
      flexDirection:'row',
      backgroundColor: '#fff',
   },
   sectionTitle: {
      marginTop: 30,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center'
   },
   titulo:{
      fontSize: 30,
      fontWeight: '600',
      color: '#a40406',
      fontWeight: 'bold',
   },
   input:{
      marginBottom:10,
      width: pantalla.width*0.9,
   },
   boton:{
      alignItems: 'center'
   }
 });

 