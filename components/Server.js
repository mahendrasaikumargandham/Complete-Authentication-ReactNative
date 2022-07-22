import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import Clipboard from 'expo-clipboard';
const Server = () => {

  const navigation = useNavigation();
  const [startCamera, setStateCamera] = useState();
  const handleRedirect = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setStateCamera(true);
      navigation.navigate("VideoConference");
    } else {
      console.log("Permission Denied");
    }
    
  }

  const copyToClipboard = () => {
    Clipboard.setStringAsync("8rq44TC8Mt60462aXcvu")
  }
  const members = [
    {
      name: "Student 1",
    },
    {
      name: "Student 2",
    },
    {
      name: "Student 3"
    },
    {
      name: "Student 4"
    },
    {
      name: "Student 5"
    },
    {
      name: "Student 6"
    },
    {
      name: "Student 7"
    },
    {
      name: "Student 8"
    },
    {
      name: "Student 9"
    },
    {
      name: "Student 10"
    },
    {
      name: "Student 11"
    }
  ]
  return (
    <View style = {styles.main}> 
      <View style = {styles.code}>
        <Text style = {styles.servercode}>Server code:</Text>
        <TouchableOpacity 
          style = {styles.id}
          onPress={copyToClipboard}
        >
            <Text style = {{ color: "#0c002b" }}>Copy Code</Text>
          </TouchableOpacity>
      </View>
      <View style = {styles.meet}>
        <TouchableOpacity 
          // onPress = {handleRedirect}
        >
          <Text style = {styles.servercode}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {members.map((member, index) => 
          <View style = {styles.fix} key = {index}>
            <MaterialIcons name = "account-circle" style = {styles.image} size = {50} />
            <Text style = {styles.memname}>{member.name}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Server

const styles = StyleSheet.create({
  code: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  servercode: {
    color: "#fff",
    fontSize: 17
  },
  meet: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 3,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  fix: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  memname: {
    marginLeft: 20,
    fontSize: 20,
    fontSize: 20,
    fontWeight: "900",
    color: "#fff"
  },
  id: {
    backgroundColor: "#fff",
    padding: 10, 
    margin: 10,
    borderRadius: 10,
    color: "#0c002b"
  },
  main: {
    backgroundColor: "#0c002b"
  },
  image: {
    color: "#fff"
  }
})