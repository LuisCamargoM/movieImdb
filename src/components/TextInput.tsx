import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type CustomTextInputProps = {
  placeholder: string;
  value: string;
  setValue: string;
} & React.ComponentProps<any>;

const ITextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  setValue,
  ...rest
}) => {
  const {textInput} = styles;
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      value={value}
      onChangeText={value => setValue(value.toLowerCase())}
      autoCorrect={false}
      autoFocus={true}
      placeholderTextColor={'grey'}
      style={textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#292929',
    borderRadius: 10,
    borderWidth: 1,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ITextInput;
