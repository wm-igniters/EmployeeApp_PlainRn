import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Text, View, StyleSheet } from 'react-native';
import EmployeeList from '../pages/employees';
import Profile from '../pages/profile';
import DepartmentList from '../pages/department';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Employees"
    screenOptions={{
      tabBarActiveTintColor: '#003092',
      tabBarInactiveTintColor: '#777',
      tabBarStyle: { backgroundColor: '#f8f8f8', padding: 10,height:60 },
      headerStyle: { backgroundColor: '#003092' },
      headerTitleStyle: { color: '#fff' },
    }}
  >
    <Tab.Screen
      name="Employees"
      component={EmployeeList}
      options={{
        tabBarLabel: 'Employees',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle" size={30} color={color} />
        ),
      }}
    />
        <Tab.Screen
      name="Department"
      component={DepartmentList}
      options={{
        tabBarLabel: 'Department',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="office-building" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default Tabs;



