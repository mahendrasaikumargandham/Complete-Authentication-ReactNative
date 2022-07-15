import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import SettingsScreen from "./screens/SettingsScreen";
import { useEffect } from 'react';
import { authentication } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    authentication.onAuthStateChanged(user => {
      console.log("user >>> ", user);
    })
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{ headerShown: false }} name = "Login" component = {LoginScreen} />
        <Stack.Screen options = {{ headerShown: false }} name = "Register" component = {RegisterScreen} />
        <Stack.Screen options = {{ headerShown: false }} name = "ForgotPassword" component = {ForgotPassword} />
        <Stack.Screen options = {{ headerShown: false }} name = "Home" component = {HomeScreen} />
        {/* <Stack.Screen name = "Settings" component = {SettingsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
