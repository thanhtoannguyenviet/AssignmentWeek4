import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AllStack from './AllStack'
import ActiveStack from './ActiveStack'
import CompleteStack from './CompleteStack'

const tabNavigator = createBottomTabNavigator({
  AllStack,
  ActiveStack,
  CompleteStack,
});

tabNavigator.path = '';

export default tabNavigator;