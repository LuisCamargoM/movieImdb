import React from 'react';
import {StyleSheet,View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import IButton from '../../components/Button';
import {IText} from '../../components/Text';

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
        <IText text={'Sign In'} style={{color: 'black', fontSize: 20}} />
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
