import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../../screens/Initial';
import DetailsScreen from '../../screens/Details';

type MainStackList = {
  Home: undefined;
  Details: undefined;
};

const Main = createNativeStackNavigator<MainStackList>();

export const MainStack = (): JSX.Element => {
  return (
    <Main.Navigator>
      <Main.Screen
        name="Home"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Main.Group screenOptions={{presentation: 'modal'}}>
        <Main.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Main.Group>
    </Main.Navigator>
  );
};
