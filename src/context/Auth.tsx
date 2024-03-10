import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
type AuthContext = {
  isLoggedIn: boolean;
  SignInEvent: () => Promise<void>;
  SignOutEvent: () => Promise<void>;
};

type ProviderProps = {
  children: JSX.Element;
};
export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC<ProviderProps> = props => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem('@isLoggedIn');
    if (auth) setIsLoggedIn(JSON.parse(auth));
  };
  const SignInEvent = async () => {
    try {
      await AsyncStorage.setItem('@isLoggedIn', JSON.stringify(true));
      setTimeout(async () => {
        setIsLoggedIn(true);
      }, 3000);
    } catch (error) {
      Alert.alert(error, 'try again');
    }
  };

  const SignOutEvent = async () => {
    try {
      await AsyncStorage.removeItem('@isLoggedIn');
      setTimeout(async () => {
        setIsLoggedIn(false);
      }, 3000);
    } catch (error) {
      Alert.alert(error.message, 'try again');
    }
  };
  React.useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{isLoggedIn, SignInEvent, SignOutEvent}}>
      {props.children}
    </AuthContext.Provider>
  );
};
