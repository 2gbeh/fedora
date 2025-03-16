import {memo, PropsWithChildren} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';

type PropsType = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  md?: boolean;
  sm?: boolean;
}>;

const DisplayText: React.FC<PropsType> = ({children, ...props}) => {
  const variant = props.sm
    ? 'displaySmall'
    : props.md
    ? 'displayMedium'
    : 'displayLarge';
  return (
    <Text variant={variant} style={props?.style}>
      {children}
    </Text>
  );
};

const HeadlineText: React.FC<PropsType> = ({children, ...props}) => {
  const variant = props.sm
    ? 'headlineSmall'
    : props.md
    ? 'headlineMedium'
    : 'headlineLarge';
  return (
    <Text variant={variant} style={props?.style}>
      {children}
    </Text>
  );
};

const TitleText: React.FC<PropsType> = ({children, ...props}) => {
  const variant = props.sm
    ? 'titleSmall'
    : props.md
    ? 'titleMedium'
    : 'titleLarge';
  return (
    <Text variant={variant} style={props?.style}>
      {children}
    </Text>
  );
};

const BodyText: React.FC<PropsType> = ({children, ...props}) => {
  const variant = props.sm
    ? 'bodySmall'
    : props.md
    ? 'bodyMedium'
    : 'bodyLarge';
  return (
    <Text variant={variant} style={props?.style}>
      {children}
    </Text>
  );
};

const LabelText: React.FC<PropsType> = ({children, ...props}) => {
  const variant = props.sm
    ? 'labelSmall'
    : props.md
    ? 'labelMedium'
    : 'labelLarge';
  return (
    <Text variant={variant} style={props?.style}>
      {children}
    </Text>
  );
};

export const Typography = {
  Display: memo(DisplayText),
  Headline: memo(HeadlineText),
  Title: memo(TitleText),
  Body: memo(BodyText),
  Label: memo(LabelText),
};
