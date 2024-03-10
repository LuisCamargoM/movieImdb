import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type CustomButtonProps = {
  loading: boolean;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline' | 'default';
  onPress: () => void;
} & React.ComponentProps<any>;

const IButton: React.FC<CustomButtonProps> = ({
  loading,
  children,
  type,
  onPress,
  ...rest
}) => {
  const {button} = styles;

  return (
    <TouchableOpacity
      style={button}
      onPress={onPress}
      disabled={loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'black'} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 2,
  },
});
export default IButton;
