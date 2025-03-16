import {memo, PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';
import type {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

type PropsType = PropsWithChildren<{
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: IconSource;
}>;

const FilledButton: React.FC<PropsType> = ({children, ...props}) => (
  <Button
    mode="contained"
    icon={props.icon}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    compact>
    {children}
  </Button>
);

const TonalButton: React.FC<PropsType> = ({children, ...props}) => (
  <Button
    mode="contained-tonal"
    icon={props.icon}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    compact>
    {children}
  </Button>
);

const OutlinedButton: React.FC<PropsType> = ({children, ...props}) => (
  <Button
    mode="outlined"
    icon={props.icon}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    compact>
    {children}
  </Button>
);

const ElevatedButton: React.FC<PropsType> = ({children, ...props}) => (
  <Button
    mode="elevated"
    icon={props.icon}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    compact>
    {children}
  </Button>
);

const TextButton: React.FC<PropsType> = ({children, ...props}) => (
  <Button
    mode="text"
    icon={props.icon}
    onPress={props.onClick}
    loading={props.isLoading}
    disabled={props.disabled}
    compact>
    {children}
  </Button>
);

export const ThemedButton = {
  Filled: memo(FilledButton),
  Tonal: memo(TonalButton),
  Outlined: memo(OutlinedButton),
  Elevated: memo(ElevatedButton),
  Text: memo(TextButton),
};
