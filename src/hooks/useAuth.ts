import React, {useContext} from 'react';
import {AuthContext} from '../context/Auth';

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
