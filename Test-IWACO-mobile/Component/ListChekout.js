import React, { useState } from "react";
import { View, Text, Modal ,StyleSheet, Pressable, TouchableOpacity} from "react-native";

export default function ListChekout() {
    const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <>
    <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
         
        </View>
      </BottomSheet>
    </>
  );
}
const styles = StyleSheet.create({
  
  });
