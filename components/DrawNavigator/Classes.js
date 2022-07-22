import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authentication, db } from '../../firebase/firebase-config';
import { collection, getDocs, getDoc, doc, collectionGroup, query, where, orderBy } from 'firebase/firestore';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from 'react-native-gesture-handler';

const Classes = () => {

  const [info, setInfo] = useState([]);
  const colRef = query(collectionGroup(db, 'Rooms'));
  getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.map((doc) => {
      info.push({ ...doc.data(), id: doc.id })
    })
    console.log(info);
    console.log(authentication.currentUser?.displayName);
  });
  const navigation = useNavigation();

  const handleCreate = () => {
    navigation.navigate("Create a Room");
  }
  
  const handleJoin = () => {
    navigation.navigate("Join a Room");
  }

  const handleRedirect = () => {
    navigation.navigate("Server");
  }

  const addToArchive = () => {

  }
  return (
    <ScrollView style = {styles.main}>
      <View sty = {styles.container}>
        <View style = {styles.direction}>
          <TouchableOpacity onPress = {handleCreate}>
            <Text style = {styles.buttons}>Create Room</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {handleJoin}>
            <Text style = {styles.buttons}>Join Room</Text>
          </TouchableOpacity>
        </View>
        {info.map((each, index) =>
          <View key = {index}>
          <TouchableOpacity 
            style = {styles.box}
            onPress = {handleRedirect}
          >
            <View style = {styles.view}>
              <Text style = {styles.heading}>{each.className} {each.section}</Text>
              <Text>
                <TouchableOpacity 
                  onPress = {addToArchive}
                >
                  <MaterialIcons style = {styles.icon} name = "more-vert" size = {30} />
                </TouchableOpacity>
              </Text>
            </View>
            <Text style = {styles.subject}>
              {each.subjectName}
            </Text>
          </TouchableOpacity>
        </View>

       )}
       <View>
            <TouchableOpacity 
              style = {styles.box}
              onPress = {handleRedirect}
            >
              <View style = {styles.view}>
                <Text style = {styles.heading}>ClassName section</Text>
                <Text>
                  <TouchableOpacity 
                    onPress = {addToArchive}
                  >
                    <MaterialIcons style = {styles.icon} name = "more-vert" size = {30} />
                  </TouchableOpacity>
                </Text>
              </View>
              <Text style = {styles.subject}>
                SubjectName
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

export default Classes

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    color: "black"
  },
  box: {
    backgroundColor: "rgb(0, 89, 178)",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    color: "white"
  },
  subject: {
    fontSize: 18,
    color: "white",
    marginTop: 20
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    backgroundColor: "#fff",
    color: "#0c002b",
    fontWeight: "800",
    padding: 10,
    margin: 10,
    fontSize: 17,
    // borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    marginTop: "5%",
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "800",
    color: "#120A8F"
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  icon: {
    color: "#fff"
  },
  top: {
    color: "#120A8F",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    backgroundColor: "#0c002b"
  }
})