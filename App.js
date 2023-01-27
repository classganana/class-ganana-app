import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FirstScreen from './screens/introScreens/FirstScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();


export default function App() {
  const [freshUser, setFreshUser] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='introScreen' component={FirstScreen}></Stack.Screen> */}
          <Stack.Screen name='home' component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
