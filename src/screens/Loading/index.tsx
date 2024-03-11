import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface LoadingProps {
  oposite: boolean;
}
const LoadingScreen: React.FC<LoadingProps> = ({oposite}) => {
  const {container} = styles;
  const themeColor = oposite ? 'white' : 'grey';
  return (
    <View style={container}>
      <ActivityIndicator size={'large'} color={themeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
