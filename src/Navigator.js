import React from 'react';
import { TabNavigator } from 'react-navigation';
import PersonScreen from './screens/PersonScreen';
import PlanetScreen from './screens/PlanetScreen';


const RootTabs = TabNavigator({
  Home: {
    screen: PersonScreen,
    navigationOptions: {
      tabBarLabel: 'Personagens',
    },
  },
  Profile: {
    screen: PlanetScreen,
    navigationOptions: {
      tabBarLabel: 'Planetas',
    },
  },
});

export default RootTabs;