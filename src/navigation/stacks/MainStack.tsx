import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../../screens/Details';
import LoadingScreen from '../../screens/Loading';
import HomeScreen from '../../screens/Home';
type MainStackList = {
  Home: undefined;
  Details: undefined;
  Loading: undefined;
};

const Main = createNativeStackNavigator<MainStackList>();

export const MainStack = (): JSX.Element => {
  return (
    <Main.Navigator>
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Loading"
        component={LoadingScreen}
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
