import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  ImageBackground,
} from "react-native";

import LampImag from "../assets/lampe.png";
import menu from "../assets/menu.png";
import Shop from "../assets/shop.jpg";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import ListChekout from "./ListChekout";
import { Appcontext } from "../context";
import SwipeView from 'react-native-swipeview';
import { Entypo } from '@expo/vector-icons';
export default function Product() {
  const { product, dispatchEvent } = useContext(Appcontext);

  const id = Math.random();
  const name = " Work lamp with LED bulb";
  const type = "NYFORS";
  const price = "€120";
  const img = "https://www.linkpicture.com/q/lampe.png";

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const [modalVisible, setModalVisible] = useState(false);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index == 0) setModalVisible(false);
  }, []);
  const openCheckout = () => {
    const AddProduct = { id, name, type, price, img };
    dispatchEvent("Add", { newProduct: AddProduct });
    setModalVisible(true);
    console.log(product);
  };

  return (
    <View /* style={{flex:1, alignItems: 'center',justifyContent: 'center',}} */
    >
      <View style={{ height: "45%", alignItems: "center", marginTop: "15%" }}>
        <Image
          // source={LampImag}
          source={{
            isStatic: true,
            uri: "https://www.linkpicture.com/q/lampe.png",
          }}
          style={{
            height: "90%",
            width: "90%",
            position: "relative",
            marginTop: 15,
          }}
        />
        <View
          style={{
            marginTop: -25,
            flex: 1,
            position: "absolute",
            flexDirection: "row",
            alignContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="menu"
            size={35}
            color="black"
            style={{ start: -75 }}
          />
          <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
            Kamsety
          </Text>
          <Feather
            name="shopping-cart"
            size={35}
            color="black"
            style={{ start: 75 }}
          />
        </View>
      </View>
      <View style={{ height: "55%", backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "200",
              start: 10,
            }}
          >
            {type}
          </Text>
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ start: 250 }}
          />
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
            start: 10,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "500",
            start: 10,
            marginTop: 10,
          }}
        >
          {price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignContent: "space-between",
          }}
        >
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              backgroundColor: "black",
              start: 10,
            }}
          ></View>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              backgroundColor: "#7D7553",
              start: 20,
            }}
          ></View>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              backgroundColor: "#A26F0F",
              start: 30,
            }}
          ></View>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              backgroundColor: "#F1EBDB",
              start: 40,
            }}
          ></View>
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={openCheckout}>
            <View
              style={{
                width: 250,
                height: 50,
                backgroundColor: "#262422",
                borderRadius: 20,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginTop: 8,
                }}
              >
                Add to bag
              </Text>
            </View>
          </TouchableOpacity>
          {/*  <ListChekout /> */}
        </View>
      </View>
      {modalVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          
          
        >
            
            <View style={styles.contentContainer}>
            {product.map((item) => (
                <>
               
              <View key={item.id} style={{flexDirection:'row',alignContent:'space-between' ,marginVertical:10}}>
               
              {/* <Button onPress={()=>{dispatchEvent('remove',item.id)}} title="remove"></Button> */}
             
              <View
                style={{
                  backgroundColor: "#C6C5C6",
                  width: 100,
                  height: 100,
                  borderRadius: 25,
                  alignContent: "center",
                  start: 10,
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
              </View>

                <View style={{flexDirection:'column',alignContent:'space-between',start:20}}>
                    <Text style={{fontWeight:'bold',fontSize:25}}>{item.name.substring('10','...')}</Text>
                    <Text style={{fontWeight:'100',fontSize:18,marginTop:15,right:-10}}>{item.type}</Text>
                </View>
                <Text style={{fontWeight:'bold',fontSize:20,start:30}}>{item.price}</Text>
                <Entypo style={{start:40}} name="trash" size={50} color="red" onPress={()=>{dispatchEvent('remove',{productid:item.id})}} />
                 

              </View>
             
              </>
            ))}
          </View>
       
          
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 100,
  },
});
