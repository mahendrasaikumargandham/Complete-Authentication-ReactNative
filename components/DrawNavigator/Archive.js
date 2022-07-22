import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Archive = () => {
  return (
    <View style={styles.main}>
      <Text style = {styles.text}>There is no Archived Rooms yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0c002b",
    height: "100%",
    flex: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
});

export default Archive;