import React from 'react';
import {View} from 'react-native';
// SHARED IMPORTS
import {Typography} from '@/components/atoms/Typography';

export type PropsType = {
  headline?: string;
  body?: string;
};

const Heading: React.FC<PropsType> = ({headline, body}) => (
  <View>
    {!!headline && <Typography.Headline>{headline}</Typography.Headline>}
    {!!body && <Typography.Body>{body}</Typography.Body>}
  </View>
);

export default React.memo(Heading);
