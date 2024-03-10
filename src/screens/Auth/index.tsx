import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import IButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const AuthScreen: React.FC = () => {
  const {container} = styles;
  const [loading, setLoading] = React.useState(false);
  const {SignInEvent} = useAuth();

  const handleSignIn = async () => {
    setLoading(true);
    SignInEvent();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <View style={container}>
      <IButton loading={loading} onPress={handleSignIn}>
        <Text style={{color: 'black', fontSize: 20}}>Sign In</Text>
      </IButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AuthScreen;
