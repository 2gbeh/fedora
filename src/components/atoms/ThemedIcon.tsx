import {memo} from 'react';
import {IconButton} from 'react-native-paper';
import type {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

type PropsType = {
  icon: IconSource;
  size?: number;
  color?: string;
  background?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const DefaultIcon: React.FC<PropsType> = props => (
  <IconButton
    icon={props.icon}
    size={props.size}
    iconColor={props.color}
    containerColor={props.background}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    animated
  />
);

const FilledIcon: React.FC<PropsType> = props => (
  <IconButton
    mode="contained"
    icon={props.icon}
    size={props.size}
    iconColor={props.color}
    containerColor={props.background}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    animated
  />
);

const TonalIcon: React.FC<PropsType> = props => (
  <IconButton
    mode="contained-tonal"
    icon={props.icon}
    size={props.size}
    iconColor={props.color}
    containerColor={props.background}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    animated
  />
);

const OutlinedIcon: React.FC<PropsType> = props => (
  <IconButton
    mode="outlined"
    icon={props.icon}
    size={props.size}
    iconColor={props.color}
    containerColor={props.background}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    animated
  />
);

export const ThemedIcon = {
  Default: memo(DefaultIcon),
  Filled: memo(FilledIcon),
  Tonal: memo(TonalIcon),
  Outlined: memo(OutlinedIcon),
};
