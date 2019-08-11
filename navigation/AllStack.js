
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import AllScreen from '../screens/AllScreen'
import TodoDetailScreen from '../screens/ToDoDetailScreen'
const AllStack = createStackNavigator(
    {
      All: AllScreen,
      Detail:TodoDetailScreen
    }
  );
  
  AllStack.navigationOptions = {
    tabBarLabel: 'All',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
         'ios-list-box'
        }
      />
    ),
  };
export default AllStack;