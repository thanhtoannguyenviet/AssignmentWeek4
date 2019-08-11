
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ActiveScreen from '../screens/ActiveScreen'
const ActiveStack = createStackNavigator(
    {
      Active: ActiveScreen,
    }
  );
  
  ActiveStack.navigationOptions = {
    tabBarLabel: 'Active',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={
        Platform.OS === 'ios'
          ? `ios-checkbox${focused ? '' : '-outline'}`
          : 'md-checkbox'
      } />
    ),
  };
  
export default ActiveStack;
  