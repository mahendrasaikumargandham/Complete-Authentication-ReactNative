import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Archive = () => {
  return (
    <View style={styles.centeredView}>
      <Text>Archive</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

export default Archive;