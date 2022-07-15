import { ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore"; 
import { authentication, db } from '../../firebase/firebase-config';

const CreateClass = () => {
    const navigation = useNavigation();

    const handleReturn = () => {
        navigation.navigate("Rooms");
    }
    
    const [className, setClassName] = useState('');
    const [sectionId, setSectionId] = useState('');
    const [subjectName, setSubjectName] = useState('');

    const handleSubmit = async () => {
        await addDoc(collection(db, "classRoom"), {
            className: className,
            section: sectionId,
            subjectName: subjectName
        })
        .then(() => {
            console.log("successfull");
        })
        .then(() => {
            navigation.navigate("Rooms");
        })
        .catch((error) => console.log(error));
    }

  return (
    <ScrollView>
        <View> 
            <Text style = {styles.rubix}>Rubix Meetings</Text>
        </View>
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = "padding"
        >
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder = "Class Name" 
                value = {className} 
                onChangeText = {text => setClassName(text)} 
                style = {styles.input}
                autoComplete= 'off'
            />
            <TextInput 
                placeholder = "Section" 
                value = {sectionId} 
                onChangeText = {text => setSectionId(text)} 
                style = {styles.input}
                autoComplete= 'off'
            />
            <TextInput 
                placeholder = "Subject" 
                value = {subjectName} 
                onChangeText = {text => setSubjectName(text)} 
                style = {styles.input}
                autoComplete= 'off'
            />
        </View>
        <View style = {styles.buttonContainer}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {handleSubmit}
            >
                <Text style = {styles.buttonText}>Create Class</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress = {handleReturn}>
              <Text style = {styles.cancel}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default CreateClass

const styles = StyleSheet.create({
    rubix: {
        marginTop: "20%",
        fontSize: 30,
        fontWeight: "700",
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#120A8F',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    new: {
        marginTop: 5
    },
    cancel: {
      textDecorationLine: "underline",
      marginTop: 10,
    }
})