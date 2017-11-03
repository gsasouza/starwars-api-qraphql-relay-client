import React from 'react';
import { TabNavigator } from 'react-navigation';
import PersonNavigator from './navigators/PersonNavigator';
import PlanetScreen from './screens/PlanetScreen';


const RootTabs = TabNavigator({
  Home: {
    screen: PersonNavigator,
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