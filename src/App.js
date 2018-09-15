import Home from './Home';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: Home }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Star Wars Pedia',
    headerTintColor: 'white',
    headerLeft: <Text style={{ color: 'white', fontSize: 20 }} onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>
  })
})

export default DrawerNavigation;