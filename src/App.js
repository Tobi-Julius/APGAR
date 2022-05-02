import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack  = createNativeStackNavigator();
import {Themes} from './constants'
import Onboarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import RegisterSucess from './screens/RegisterSucess';
import Home from './screens/Home';
import RetrieveId from './screens/RetrieveId';
import Recovery from './screens/Recovery';


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
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='RegisterSucess' component={RegisterSucess}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='RetrieveId' component={RetrieveId}/>
        <Stack.Screen name='Recovery' component={Recovery}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}


export default App;
const styles = StyleSheet.create({

});
