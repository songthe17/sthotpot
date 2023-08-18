/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Setting2, Endow, SignUp2, Home2} from '../pages';
import Home from '../pages/Homes';
import {COLORS} from '@/constants';
import Oders from '@/pages/InfoOder';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homes"
        component={Home2}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('@/assets/icons/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Đặt Hàng"
        component={Oders}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('@/assets/icons/coffee.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cửa Hàng"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('@/assets/icons/store.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Ưu đãi"
        component={Endow}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('@/assets/icons/coupon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Khác"
        component={Setting2}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('@/assets/icons/menu.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
