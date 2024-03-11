import React from 'react';
import {Text} from 'react-native';

type CustomTextProps = {
  text: string;
  type?: 'title' | 'label' | 'text';
  color: string;
} & React.ComponentProps<any>;

const IText: React.FC<CustomTextProps> = ({text, color, size, ...rest}) => {
  return (
    <Text style={{color, fontSize: size ?? 16, fontWeight: 'bold'}} {...rest}>
      {text}
    </Text>
  );
};

const ITitle: React.FC<CustomTextProps> = ({text, color, size, ...rest}) => {
  return (
    <Text {...rest} style={{fontSize: size ?? 24, fontWeight: 'bold', color}}>
      {text}
    </Text>
  );
};

export {IText, ITitle};
