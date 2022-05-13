import 'react-native-gesture-handler'
import { StyleSheet,StatusBar } from 'react-native';
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
import SideMenu from './Drawer/SideMenu';
import RetrieveId from './screens/RetrieveId';
import Recovery from './screens/Recovery';
import Notification from './screens/Notification';
import Result from './screens/Result';
import MaternalRecord from './screens/MaternalRecord';
import MaternalRecordSecond from './screens/MaternalRecordSecond';
import Detail from './screens/Detail';
import Delete from './screens/Delete';
import MaternalHistory from './screens/MaternalHistory';
import { GlobalProvider } from './context/GlobalState';


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
      <GlobalProvider>
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
        <Stack.Screen name='SideMenu' component={SideMenu}/>
        <Stack.Screen name='RetrieveId' component={RetrieveId}/>
        <Stack.Screen name='Recovery' component={Recovery}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='Result' component={Result}/>
        <Stack.Screen name='MaternalRecord' component={MaternalRecord}/>
        <Stack.Screen name='MaternalRecordSecond' component={MaternalRecordSecond}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='MaternalHistory' component={MaternalHistory}/>
        <Stack.Screen name='Delete' component={Delete}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalProvider>
    )
  );
}


export default App;