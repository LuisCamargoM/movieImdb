import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import IButton from '../../components/Button';
import {IText} from '../../components/Text';

const AuthScreen: React.FC = () => {
  const {container, titleContainer, titleText, buttonText} = styles;
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
      <View style={titleContainer}>
        <IText text={'Welcome to imdbot'} style={titleText} />
      </View>
      <IButton loading={loading} onPress={handleSignIn}>
        <IText text={'Sign In'} style={buttonText} />
      </IButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  titleContainer: {marginTop: 30, flex: 1},
  titleText: {color: 'black', fontSize: 20},
  buttonText: {color: 'black', fontSize: 20},
});
export default AuthScreen;
