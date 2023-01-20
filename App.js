import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FirstScreen from './screens/introScreens/FirstScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirstScreen style={styles.introScreen}></FirstScreen>
    </View>
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
