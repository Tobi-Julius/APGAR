// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import themes from './constants/Themes'
// import {globalStyles} from './styles'
// import { Button } from './components/common';
import oboardingScreen from "./screens"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor={themes.primary}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
