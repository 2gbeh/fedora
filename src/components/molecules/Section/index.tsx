import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
// LOCAL IMPORTS
import {sectionStyles as sx} from './styles';

type PropsType = PropsWithChildren<{
  title: string;
}>;

const Section: React.FC<PropsType> = ({children, title}) => (
  <View style={sx().container}>
    <Text style={sx().text}>{title}</Text>
    <Text style={sx().subText}>{children}</Text>
  </View>
);

export default React.memo(Section);
