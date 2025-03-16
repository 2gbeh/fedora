import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from 'react-native-paper';

/*
 * To keep the template simple and small we're adding padding to prevent view
 * from rendering under the System UI.
 * For bigger apps the recommendation is to use `react-native-safe-area-context`:
 * https://github.com/AppAndFlow/react-native-safe-area-context
 *
 * You can read more about it here:
 * https://github.com/react-native-community/discussions-and-proposals/discussions/827
 */
const SAFE_PADDING = '5%';

type PropsType = {muted?: boolean};

export function homeScreenStyles(props?: PropsType) {
  const theme = useTheme();
  return StyleSheet.create({
    _: {},
    container: {
      backgroundColor: theme.dark ? Colors.darker : Colors.lighter,
    },
    content: {
      backgroundColor: theme.dark ? Colors.darker : Colors.lighter,
    },
    main: {
      backgroundColor: theme.dark ? Colors.black : Colors.white,
      paddingHorizontal: SAFE_PADDING,
      paddingBottom: SAFE_PADDING,
    },
  });
}
