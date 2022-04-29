import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack  = createNativeStackNavigator();
import {Themes} from './constants'
import {globalStyles} from './styles'
import { Button } from './components/common';
import Onboarding from './screens/Onboarding';
import SignUp from './screens/SignUp';

function App () {

  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null)

  useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunch');
    if (appData === null ) {
      setIsAppFirstLaunch(true)
      AsyncStorage.setItem('isAppFirstLaunch', 'false')
    } else {
      setIsAppFirstLaunch(false)
    }
  }, [])

  return (
    isAppFirstLaunch !== null && (
    <NavigationContainer>
      <StatusBar style='auto' backgroundColor={Themes.primary}/>
      <Stack.Navigator 
      screenOptions={{ headerShown: false}}>
        {isAppFirstLaunch && (
          <Stack.Screen name='Onboarding' component={Onboarding}/>
        )}
        <Stack.Screen name='SignUp' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}


export default App;
const styles = StyleSheet.create({

});
