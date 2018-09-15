import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import PersonNavigator from './navigators/PersonNavigator';

import PlanetScreen from './screens/PlanetScreen';
import MovieScreen from './screens/MovieScreen';
import SpecieScreen from './screens/SpecieScreen';
import StarshipScreen from './screens/StarshipScreen';
import VehicleScreen from './screens/VehicleScreen';

const RootTabs = DrawerNavigator({
  Person: {
    screen: PersonNavigator,
    navigationOptions: {
      drawerLabel: 'Characters',
    },
  },
  Movie: {
    screen: MovieScreen,
    navigationOptions: {
      drawerLabel: 'Movies',
    },
  },
  Planet: {
    screen: PlanetScreen,
    navigationOptions: {
      drawerLabel: 'Planets',
    },
  },
  Specie: {
    screen: SpecieScreen,
    navigationOptions: {
      drawerLabel: 'Species',
    },
  },
  Starship: {
    screen: StarshipScreen,
    navigationOptions: {
      drawerLabel: 'Starships',
    },
  },
  Vehicle: {
    screen: VehicleScreen,
    navigationOptions: {
      drawerLabel: 'Vehicles',
    },
  },
});

export default RootTabs;