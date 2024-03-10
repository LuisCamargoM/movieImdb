import React from 'react';
import { Text} from 'react-native';

type CustomTextProps = {
  text: string;
  type?: 'title' | 'label' | 'text';
} & React.ComponentProps<any>;

const IText: React.FC<CustomTextProps> = ({text, ...rest}) => {
  return <Text {...rest}>{text}</Text>;
};

const ITitle: React.FC<CustomTextProps> = ({text, ...rest}) => {
  return (
    <Text
      {...rest}
      style={{fontSize: 20, fontWeight: 'bold', color: '#292929'}}>
      {text}
    </Text>
  );
};

export {IText, ITitle};
