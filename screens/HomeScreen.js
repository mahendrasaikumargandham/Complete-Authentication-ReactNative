import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { authentication } from '../firebase/firebase-config';
import Materials from '../components/DrawNavigator/Materials';
import Classes from '../components/DrawNavigator/Classes';
import Archive from "../components/DrawNavigator/Archive";
import Notifications from '../components/DrawNavigator/Notifications';
import CreateClass from '../components/CreateClass/CreateClass'
import JoinClass from '../components/JoinClass/JoinClass';
import Server from '../components/Server';
import VideoConference from '../components/VideoConference';
import Chat from '../components/Conference/Chat';
import Profile from '../components/Profile';
import DashBoard from '../components/DashBoard';
import Meeting from './Meeting';
import StartMeeting from '../components/StartMeeting';
import CustomDraw from '../components/CustomDraw';
import Settings from '../components/DrawNavigator/Settings';
import About from '../components/DrawNavigator/About';
import Contact from '../components/DrawNavigator/Contact';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator 
      useLegacyImplementation
      screenOptions = {{
        drawerActiveBackgroundColor: "#fff",
        drawerActiveTintColor: "#0c002b",
        drawerInactiveTintColor: "#fff",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0c002b",
        },
        drawerLabelStyle : {
          marginLeft: -20
        }
      }}
      drawerContent = {(props) => <CustomDraw {...props} />} 
    >
        <Drawer.Screen 
          name="DashBoard" 
          component = {DashBoard}
          options = {{
            drawerIcon: ({color}) => (
              <MaterialIcons name = "dashboard" size = {30} color = {color} />
            )
          }}
        />
        <Drawer.Screen 
          name="Rooms" 
          component = {Classes} 
          options = {{
            drawerIcon: ({color}) => (
              <MaterialIcons name = "groups" size = {30} color = {color} />
            )
          }}
        />
        <Drawer.Screen 
          name="Materials" 
          component = {Materials}
          options = {{
            drawerIcon: ({color}) => (
              <MaterialIcons name = "menu-book" size = {30} color = {color} />
            )
          }} 
        />
        <Drawer.Screen 
          name="Archived" 
          component = {Archive} 
          options = {{
            drawerIcon: ({color}) => (
              <MaterialIcons name = "archive" size = {30} color = {color} />
            )
          }}
        />
        <Drawer.Screen 
          name="Notifications" 
          component = {Notifications} 
          options = {{
            drawerIcon: ({color}) => (
              <MaterialIcons name = "notifications" size = {30} color = {color} />
            )
          }}
        />
      <Drawer.Screen 
        name="Settings" 
        component = {Settings} 
        options = {{
          drawerIcon: ({color}) => (
            <MaterialIcons name = "settings" size = {30} color = {color} />
          )
        }}
      />
      <Drawer.Screen 
        name="About" 
        component = {About} 
        options = {{
          drawerIcon: ({color}) => (
            <MaterialIcons name = "contacts" size = {30} color = {color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Contact" 
        component = {Contact} 
        options = {{
          drawerIcon: ({color}) => (
            <MaterialIcons name = "mail" size = {30} color = {color} />
          )
        }}
      />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Profile" component = {Profile} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Create a Room" component = {CreateClass} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Join a Room" component = {JoinClass} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Server" component = {Server} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Chat" component = {Chat} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="VideoConference" component = {VideoConference} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Emergency Meeting" component = {Meeting} />
      <Drawer.Screen options={{drawerItemStyle: { height: 0 }}} name="Start Meeting" component = {StartMeeting} />
    </Drawer.Navigator>
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
    marginTop: "40%",
    backgroundColor: "#120A8F",
    borderRadius: 5,
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
    borderRadius: 5,
    borderColor: "#120A8F",
    borderWidth: 3,
    fontWeight: "800",
    fontSize: 15,
    margin: 20
  }
})