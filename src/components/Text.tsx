import React from 'react';
import {ColorValue, StyleSheet, Text} from 'react-native';

type CustomTextProps = {
  text: string;
  type?: 'title' | 'label' | 'text';
  color: string;
} & React.ComponentProps<any>;

const IText: React.FC<CustomTextProps> = ({text, color, size, ...rest}) => {
  const {textStyle} = styles(size, color);
  return (
    <Text style={textStyle} {...rest}>
      {text}
    </Text>
  );
};

const ITitle: React.FC<CustomTextProps> = ({text, color, size, ...rest}) => {
  const {titleText} = styles(size, color);
  return (
    <Text {...rest} style={titleText}>
      {text}
    </Text>
  );
};

const styles = (size: number, color: ColorValue) =>
  StyleSheet.create({
    titleText: {fontSize: size ?? 24, fontWeight: 'bold', color},
    textStyle: {color, fontSize: size ?? 16, fontWeight: 'bold'},
  });

export {IText, ITitle};
