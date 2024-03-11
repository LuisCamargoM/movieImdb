import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {IText} from '../../components/Text';

interface LoadingProps {
  oposite: boolean;
}
const LoadingScreen: React.FC<LoadingProps> = ({oposite}) => {
  const themeColor = oposite ? 'white' : 'grey';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={themeColor} />
    </View>
  );
};

export default LoadingScreen;
