import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen} from './screens';

const AutorizedNavigation = createStackNavigator();

const AuthorizedStackScreens = () => {
  return (
    <AutorizedNavigation.Navigator>
      <AutorizedNavigation.Screen name="Login" component={HomeScreen} />
      <AutorizedNavigation.Screen name="Hello" component={DetailScreen} />
    </AutorizedNavigation.Navigator>
  );
};

export {AuthorizedStackScreens};
