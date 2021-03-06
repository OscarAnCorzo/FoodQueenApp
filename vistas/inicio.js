import React, {useState} from 'react';
import { StyleSheet,Text, View, Image, ScrollView, FlatList,Button } from 'react-native';
import EncaGeneral from './encaGeneral';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import { Avatar  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Producto({nombre,precio}){
   return(
      <View style={styles.contenedorP}>
         <Avatar.Image size={100} source={require('./../img/hamburger-494706_640.jpg')} style={{alignItems:'center',marginBottom:8}}/>
         <Text>{nombre}</Text>
         <Text>${precio}</Text>
      </View>
   );
}

const productos = [
   {
      id:'1',
      nombre:'nombre1',
      precio:'precio1'
   },
   {
      id:'2',
      nombre:'nombre2',
      precio:'precio2'
   },{
      id:'3',
      nombre:'nombre3',
      precio:'precio3'
   },{
      id:'4',
      nombre:'nombre3',
      precio:'precio3'
   }
];

class BloqueProductos extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         titulo:props.titulo,
         productos:props.productos
      }
   }
   render(){
      return (
         <>
            <Text style={styles.sectionTitle}> {this.state.titulo} </Text>
            <FlatList style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}
               data={this.state.productos}
               renderItem={({item}) => <Producto nombre={item.nombre} precio={item.precio}/>}
               keyExtractor={e => e.id}
            />
         </>
      );
   }
}

const Inicio = ({navigation}) => {
   return (
      <>
         <EncaGeneral navigation={navigation}/>
         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.body}>
            <Swiper style={styles.wrapper} showsButtons autoplay loop={true} activeDotColor={'#fff'} nextButton={<Text style={{color:'#fff',fontSize:60}}>›</Text>} prevButton={<Text style={{color:'#fff',fontSize:60}}>‹</Text>}>
               <View testID="uno" style={styles.slide1}>
                  <Image source={require('./../img/mediterranean-cuisine-2378758_640.jpg')}/>
               </View>
               <View testID="dos" style={styles.slide2}>
                  <Image source={require('./../img/hamburger-494706_640.jpg')}/>
               </View>
               <View testID="tres" style={styles.slide2}>
                  <Image source={require('./../img/pizza-3007395_640.jpg')}/>
               </View>
               <View testID="cuatro" style={styles.slide2}>
                  <Image source={require('./../img/bread-2796393_640.jpg')}/>
               </View>
            </Swiper>
            <BloqueProductos productos={productos} titulo={'Recomendados'}/>
            <BloqueProductos productos={productos} titulo={'Hamburguesas'}/>
            <BloqueProductos productos={productos} titulo={'Pizzas'}/>
         </ScrollView>
      </>
   );
}

var styles = {
   body: {
      backgroundColor: 'white',
    },
   wrapper: {
      height:350
   },
   slide1: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   slide2: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   slide3: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   text: {
     color: '#fff',
     fontSize: 30,
     fontWeight: 'bold'
   },
   sectionTitle: {
      fontSize: 30,
      fontWeight: '600',
      color: '#000',
      fontWeight: 'bold',
      marginTop: 10
    },
    contenedorP:{
      marginLeft:15,
      width:110,
      backgroundColor:'white',
      marginTop:5,
      marginBottom:5
    }
 }
 
export default Inicio;