import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
//import Adicionar from '../pages/New';

export default function Routes() {

    const AppStack = createNativeStackNavigator();

 return (
   <AppStack.Navigator>
        
        <AppStack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false,
            }}
        />

   </AppStack.Navigator>
  );
}