import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../../screens/Initial';

type MainStackList = {
  Home: undefined;
};

const Main = createNativeStackNavigator<MainStackList>();

export const MainStack = (): JSX.Element => {
  return (
    <Main.Navigator>
      <Main.Group >
        <Main.Screen
          name="Home"
          component={InitialScreen}
          options={{headerShown: false}}
        />
      </Main.Group>
    </Main.Navigator>
  );
};
