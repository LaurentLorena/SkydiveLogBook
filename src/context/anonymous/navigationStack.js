import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HelloScreen, LoginScreen} from './screens';

const AnonymousNavigation = createStackNavigator();

const AnonymousStackScreens = () => {
  return (
    <AnonymousNavigation.Navigator>
      <AnonymousNavigation.Screen name="Hello" component={HelloScreen} />
      <AnonymousNavigation.Screen name="Login" component={LoginScreen} />
    </AnonymousNavigation.Navigator>
  );
};

export {AnonymousStackScreens};
