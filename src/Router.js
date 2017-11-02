import { StackNavigator } from 'react-navigation';
import Home from './Home';
import PersonScreen from './screens/PersonScreen';
import PlanetScreen from './screens/PlanetScreen';
import React from 'react';

const Router = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
  },)

export default () => <Router />