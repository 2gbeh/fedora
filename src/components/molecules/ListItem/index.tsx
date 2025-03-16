import React from 'react';
import {View} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';
import type {AvatarImageSource} from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
// SHARED IMPORT
import {Typography} from '@/components/atoms/Typography';
// LOCAL IMPORTS
import {listItemStyles as sx} from './styles';

const mockAvatar = require('@/assets/images/avatar.png');

type PropsType = {
  avatar?: AvatarImageSource;
  headline: string;
  supportingText?: string;
  trailingText: string;
};

const ListItem: React.FC<PropsType> = ({
  avatar,
  headline,
  supportingText,
  trailingText,
}) => (
  <Surface elevation={0} style={sx().container}>
    <View style={sx().figure}>
      <Avatar.Image source={avatar ?? mockAvatar} size={40} />
      <View style={sx().figcaption}>
        <Typography.Body style={sx().text}>{headline}</Typography.Body>
        {!!supportingText && (
          <Typography.Body md style={sx({muted: true}).text}>
            {supportingText}
          </Typography.Body>
        )}
      </View>
    </View>
    <Typography.Body sm style={sx({muted: true}).text}>
      {trailingText}
    </Typography.Body>
  </Surface>
);

export default React.memo(ListItem);
