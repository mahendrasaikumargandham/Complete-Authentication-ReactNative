import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { authentication } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const JoinClass = () => {
    const [join, setJoin] = useState('');
    const navigation = useNavigation();

    const handleReturn = () => {
        navigation.navigate("Rooms");
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
            placeholder = "Class Code" 
            value = {join} 
            autoComplete= 'off'
            onChangeText = {text => setJoin(text)} 
            style = {styles.input}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity
            style = {styles.button}
        >
            <Text style = {styles.buttonText}>Join Class</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress = {handleReturn}>
            <Text style = {styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default JoinClass

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