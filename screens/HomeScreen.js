import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import 'react-native-gesture-handler';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { authentication } from '../firebase/firebase-config';
import Materials from '../components/Materials';
import Classes from '../components/Classes';
import Archive from "../components/Archive";
import Notifications from '../components/Notifications';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './SettingsScreen';
import CreateClass from './CreateClass';
import JoinClass from '../components/JoinClass';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const signOut = () => {
    authentication
    .signOut()
    .then(() => {
      navigation.replace("Login");
    })
    .catch(error => alert(error.message));
  }

  return (
    <NavigationContainer independent = {true}>
      <Modal
        animationType = "slide"
        transparent = {true}
        visible = {modalVisible}
        onRequestClose = {() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style = {styles.centeredView}>
          <View style = {styles.modalView}>
            <View>
              <MaterialIcons style = {{color: "#120A8F"}} name = "account-circle" size = {100} />
            </View>
            <View>
              <Text style = {{textAlign: "center", color: "#120A8F", fontSize: 20, fontWeight: "700"}}>
                {authentication.currentUser?.displayName}
              </Text>
              <Text style = {{ color: "#120A8F" }}>{authentication.currentUser?.email}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style = {{marginTop: 10, textDecorationLine: "underline", color: "blue"}}>Visit Profile</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress = {signOut}>
              <Text style={styles.modalText}>Logout!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>
                <MaterialIcons style = {{ color: "#120A8F"}} name = "clear" size = {30} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Classes" component = {Classes}
          options={{ 
            headerTitle: () => (
             <View style = {styles.head}>
                <Text style = {styles.heading}>Rubix Meetings                    </Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <MaterialIcons name="account-circle" size = {45} />
                </TouchableOpacity>
             </View>
            )}
          }
        />
        <Drawer.Screen name="Materials" component = {Materials} />
        <Drawer.Screen name="Archived" component = {Archive} />
        <Drawer.Screen name="Notifications" component = {Notifications} />
        <Drawer.Screen name="Settings" component = {SettingsScreen} />
        <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Create a Class" component = {CreateClass} />
        <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Join a Class" component = {JoinClass} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    flexDirection: "row",
    flex:1,
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 0
  },
  textStyle: {
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    color: "#120A8F",
    padding: 10,
    borderRadius: 10,
    borderColor: "#120A8F",
    borderWidth: 3,
    fontWeight: "800",
    fontSize: 15,
    margin: 20
  }
})