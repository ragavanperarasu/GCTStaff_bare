import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {RootStackParamList} from './screens/RootParam';
import StaffLogin from './screens/axios/StaffLogin';
import StaffHome from './screens/StaffHome';

import HomeScreen from './screens/HomeScreen';
import About from './screens/About';


const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StaffLogin" component={StaffLogin} options={{ headerShown: false }}/>
      <Stack.Screen name="StaffHome" component={StaffHome} options={{ headerShown: false }}/>
      <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
