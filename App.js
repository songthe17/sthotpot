/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './src/navigation/tabs';
import {
  Restaurant,
  OderDelivery,
  SignOut,
  Map1,
  SignUp2,
  Restaurant1,
  DonHang,
} from './src/pages';
import TouchID from 'react-native-touch-id';

const stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Tabs} />
        <stack.Screen name="Restaurant" component={Restaurant} />
        <stack.Screen name="Restaurant1" component={Restaurant1} />
        <stack.Screen name="OderDelivery" component={OderDelivery} />
        <stack.Screen name="Map1" component={Map1} />
        <stack.Screen name="DonHang" component={DonHang} />
        <stack.Screen name="SignOut" component={SignOut} />
        <stack.Screen name="SignUp2" component={SignUp2} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
