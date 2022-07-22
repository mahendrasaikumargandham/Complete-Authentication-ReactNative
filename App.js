import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import { authentication } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { StateProvider } from './StateProvider';
import Meeting from './screens/Meeting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        <Stack.Screen options = {{ headerShown: false }} name = "Login" component = {LoginScreen} />
        <Stack.Screen options = {{ headerShown: false }} name = "Register" component = {RegisterScreen} />
        <Stack.Screen options = {{ headerShown: false }} name = "ForgotPassword" component = {ForgotPassword} />
        <Stack.Screen options = {{ headerShown: false }} name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Meeting" component = {Meeting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
