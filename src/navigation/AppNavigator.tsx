import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './stacks/MainStack';
import {AuthStack} from './stacks/AuthStack';
import {useAuth} from '../hooks/useAuth';

const AppNavigator: React.FC = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNavigator;
