import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Classes = () => {

  let classNames = []
  const colRef = collection(db, 'classNamesList')
  getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      classNames.push({ ...doc.data(), id: doc.id })
    })
    console.log(classNames);
  });
  classNames = [
    {
      id: "CSE",
      subjectName: "Computer Networks"
    }
  ]

  const navigation = useNavigation();
  const handleCreate = () => {
    navigation.navigate("Create a Class");
  }
  const handleJoin = () => {
    navigation.navigate("Join a Class");
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.direction}>
        <TouchableOpacity onPress = {handleCreate}>
          <Text style = {styles.buttons}>Create Class</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {handleJoin}>
          <Text style = {styles.buttons}>Join Class</Text>
        </TouchableOpacity>
      </View>
      {classNames.map((i, index) => 
        <View key = {index}>
          <TouchableOpacity style = {styles.box}>
            <Text style = {styles.heading}>{i.id}</Text>
            <Text style = {styles.subject}>{i.subjectName}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Classes

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    color: "black"
  },
  box: {
    backgroundColor: "#120A8F",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 3,
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
    color: "#120A8F",
    fontWeight: "800",
    padding: 10,
    margin: 10,
    fontSize: 17,
    borderColor: "#120A8F",
    borderWidth: 3,
    borderRadius: 10,
  }
})