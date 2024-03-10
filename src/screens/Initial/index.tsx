import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IButton from '../../components/Button';
import {useAuth} from '../../hooks/useAuth';

const InitialScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const {SignOutEvent} = useAuth();
  const {container} = styles;
  
  const handleSignOut = () => {
    setLoading(true);
    SignOutEvent();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <View style={container}>
      <IButton loading={loading} onPress={handleSignOut}>
        <Text style={{color: 'black', fontSize: 20}}>Sign out</Text>
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

export default InitialScreen;
