import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type CustomButtonProps = {
  loading: boolean;
  children: React.ReactNode;
  type?:  'secondary'
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
  const themeColor = type==='secondary' ? 'white' : 'grey';
  return (
    <TouchableOpacity
      style={button}
      onPress={onPress}
      disabled={loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator size={'small'} color={themeColor} />
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
    width: '100%',
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 2,
  },
});
export default IButton;
