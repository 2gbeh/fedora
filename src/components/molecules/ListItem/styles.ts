import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
// 
import {containerStyles} from '@/styles/containerStyles';

type PropsType = {muted?: boolean};

export function listItemStyles(props?: PropsType) {
  const theme = useTheme();
  return StyleSheet.create({
    _: {},
    container: {
      // backgroundColor: theme.colors.surface,
      paddingVertical: 8,
      ...containerStyles.rowCenterBetween,
    },
    figure: {
      ...containerStyles.rowCenter,
      columnGap: 16,
    },
    figcaption: {},
    text: {
      color: props?.muted
        ? theme.colors.onSurfaceVariant
        : theme.colors.onSurface,
    },
  });
}
