import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type PropsType = {};

export function sectionStyles(props?: PropsType) {
  const isDarkMode = useColorScheme() === 'dark';
  return StyleSheet.create({
    _: {},
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    text: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 24,
      fontWeight: '600',
    },
    subText: {
      color: isDarkMode ? Colors.light : Colors.dark,
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
  });
}
