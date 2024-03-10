import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../../screens/Auth';

type AuthStackList = {
  Auth: undefined;
};
const Auth = createNativeStackNavigator<AuthStackList>();

export const AuthStack = (): JSX.Element => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};
