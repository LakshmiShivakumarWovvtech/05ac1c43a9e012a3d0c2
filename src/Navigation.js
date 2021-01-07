import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'native-base';
import React from 'react';
import Home from './Home';
import Info from './Info';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
