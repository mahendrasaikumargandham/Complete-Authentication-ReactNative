import { ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { authentication } from '../firebase/firebase-config';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const redirect = () => {
        navigation.replace("Login");
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then(() => updateProfile(authentication.currentUser, {
                displayName: name,
            }),
            (userCredential) => {
            const user = userCredential.user;
            console.log('registered with', user.displayName);
            console.log('Registered with ',user.email); 
        }).catch(error => alert(error.message));
    };
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
                placeholder = "Name" 
                value = {name} 
                onChangeText = {text => setName(text)} 
                style = {styles.input}
                autoComplete= 'off'
            />
            <TextInput 
                placeholder = "Email" 
                value = {email} 
                onChangeText = {text => setEmail(text)} 
                style = {styles.input}
                autoComplete= 'off'
            />
            <TextInput 
                placeholder = "Password" 
                value = {password} 
                onChangeText = {text => setPassword(text)} 
                style = {styles.input}
                autoComplete= 'off'
                secureTextEntry
            />
        </View>
        <View style = {styles.buttonContainer}>
            <TouchableOpacity
                onPress = {handleSignUp}
                style = {styles.button}
            >
                <Text style = {styles.buttonText}>Register</Text>
            </TouchableOpacity> 
            <View><Text style = {styles.new}>Already a member?</Text></View>
            <TouchableOpacity
                onPress = {redirect}
                style = {[styles.button, styles.buttonOutline]}
            >
                <Text style = {styles.buttonOutlineText}>Login</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default RegisterScreen

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
        backgroundColor: 'blue',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    },
    forgot: {
        marginBottom: 10,
        textDecorationLine: "underline",
    },
    new: {
        marginTop: 5
    }
})