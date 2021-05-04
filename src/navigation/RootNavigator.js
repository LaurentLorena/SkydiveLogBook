import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AnonymousStackScreens, AuthorizedStackScreens} from '../context';
const RootStack = createStackNavigator();

const RootStackNavigation = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="AnonymousStack"
      component={AnonymousStackScreens}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="AutorizedStack"
      component={AuthorizedStackScreens}
    />
  </RootStack.Navigator>
);

export {RootStackNavigation};
