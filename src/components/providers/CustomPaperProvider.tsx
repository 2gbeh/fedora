import {PropsWithChildren} from 'react';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
// GLOBAL IMPORTS
import {useAppContext} from '@/context/AppContext';

const CustomPaperProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const {isDarkMode} = useAppContext();
  // RENDER
  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
      {children}
    </PaperProvider>
  );
};

export default CustomPaperProvider;
