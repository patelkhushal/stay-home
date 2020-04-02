import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';





import login from '../screens/login';
import rewards from '../screens/rewards';
import home from '../screens/home';
import newsfeed from '../screens/newsfeed';
import user from '../screens/user';


const Tab = createBottomTabNavigator();


export default function App() {
        return (
          <NavigationContainer>
          <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{
              activeTintColor: '#e91e63',
              showIcon: true
            }}
          >

            <Tab.Screen
              name="user"
              component={user}
              options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ }) => (
                  <Icon name="user" color={'red'} size={20} />
                ),
              }}
            />

            <Tab.Screen
              name="home"
              component={home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ }) => (
                  <Icon name="home" color={'red'} size={20} />
                ),
              }}
            />

            <Tab.Screen
              name="newsfeed"
              component={newsfeed}
              options={{
                tabBarLabel: 'News Feed',
                tabBarIcon: ({ }) => (
                  <Icon name="info" color={'red'} size={20} />
                ),
              }}
            />

            <Tab.Screen
              name="rewards"
              component={rewards}
              options={{
                tabBarLabel: 'Rewards',
                tabBarIcon: ({ }) => (
                  <Icon name="star" color={'red'} size={20} />
                ),
              }}
            />
       
          </Tab.Navigator>
          </NavigationContainer>
        );

      }