import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import InitialScreen from '../../screens/Initial';

type MainStackList = {
  Home: undefined;
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
    </Main.Navigator>
  );
};
