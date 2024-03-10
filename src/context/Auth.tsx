import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
type AuthContext = {
  isLoggedIn: boolean;
  SignInEvent: (email?: string, password?: string) => Promise<void>;
  SignOutEvent: () => void;
};

type ProviderProps = {
  children: JSX.Element;
};
export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC<ProviderProps> = props => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>();
  const dispatch = useDispatch();

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem('@isLoggedIn');
    if (auth) setIsLoggedIn(JSON.parse(auth));
  };
  const SignInEvent = async () => {
    try {
      AsyncStorage.setItem('@isLoggedIn', JSON.stringify(true));
    } catch (error) {
      Alert.alert(error, 'try again');
    }
  };

  const SignOutEvent = async () => {
    return new Promise((resolve, reject) => {
      try {
        AsyncStorage.removeItem('@isLoggedIn');
      } catch (error) {
        reject(error);
        Alert.alert(error.message, 'try again');
      }
    });
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
