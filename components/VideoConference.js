import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VideoConference = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    navigation.navigate("Rooms");
  }
  const handleChat = () => {
    navigation.navigate("Chat");
  }
  return (
    <View style = {{ flex: 1}}>
        <View style = {styles.videoContainer}>
            <Camera type = {"front"} style = {styles.camera}></Camera>
        </View>
        {/* <Modal>

        </Modal> */}
        <View style = {styles.align}>
            <TouchableOpacity>
                <MaterialIcons name = "mic" size = {35} color = "white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name = "videocam-off" size = {35} color = "white" />
            </TouchableOpacity>
            <TouchableOpacity onPress = {handleChat}>
                <MaterialIcons name = "chat" size = {35} color = "white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name = "groups" size = {35} color = "white" />
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <MaterialIcons name = "screen-share" size = {35} color = "white" />
            </TouchableOpacity> */}
            <TouchableOpacity onPress = {handleBack}>
                <MaterialIcons name = "call-end" size = {35} style = {styles.end} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default VideoConference

const styles = StyleSheet.create({
    camera: {
        height: "80%",
        margin: 20,
    },
    videoContainer: {
        flex: 1,
        justifyContent: "center"
    },
    align: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#120A8F",
    }, 
    end: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    }
})