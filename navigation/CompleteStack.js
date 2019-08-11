
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import CompleteScreen from '../screens/CompleteScreen'
const CompleteStack = createStackNavigator(
    {
      Complete: CompleteScreen,
    }
  );
  
  CompleteStack.navigationOptions = {
    tabBarLabel: 'Complete',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-done-all'} />
    ),
  };
  
export default CompleteStack;