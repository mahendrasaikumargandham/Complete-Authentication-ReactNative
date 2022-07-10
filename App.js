import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import SettingsScreen from "./screens/SettingsScreen";
import CreateClass from './screens/CreateClass';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options = {{ headerShown: false }} name = "Login" component = {LoginScreen} />
          <Stack.Screen options = {{ headerShown: false }} name = "Register" component = {RegisterScreen} />
          <Stack.Screen options = {{ headerShown: false }} name = "ForgotPassword" component = {ForgotPassword} />
          <Stack.Screen options = {{ headerShown: false }} name = "Home" component = {HomeScreen} />
          <Stack.Screen name = "Settings" component = {SettingsScreen} />
          <Stack.Screen name = "CreateClass" component = {CreateClass} />
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
