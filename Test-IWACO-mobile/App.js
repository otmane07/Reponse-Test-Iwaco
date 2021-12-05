import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListChekout from './Component/ListChekout';
import Product from './Component/Product';
import { Appcontext } from './context';
import Speaker from "./assets/speaker.jpg"

export default function App() {
  const productList = [{ 
    id:Math.random(),
    name:'Mini speaker',
    type:'FORSA',
    price:"230$",
    img:'https://www.linkpicture.com/q/speaker_1.jpg'
  }]
  const [product, setproduct] = useState(productList)
  const dispatchEvent = (action,payload)=>{
    switch (action) {
      case 'Add':
        setproduct([payload.newProduct,...product])
        return;
      case 'remove':
        setproduct(product.filter(prod => prod.id !== payload.productid))
        return;
    
      default:
        break;
    }
  }
  return (
    <View style={{backgroundColor:'#EDEDED'}} >
     <Appcontext.Provider value={{product,dispatchEvent}}>
      <Product/>
      {/* <ListChekout/> */}
     </Appcontext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
