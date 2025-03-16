import './gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// SHARED IMPORTS
import {AppContextProvider} from './src/context/AppContext';
import CustomPaperProvider from '@/components/providers/CustomPaperProvider';
import RootStackNavigator from './src/navigators/RootStackNavigator';

function App(): React.JSX.Element {
  // RENDER
  return (
    <AppContextProvider>
      <CustomPaperProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </CustomPaperProvider>
    </AppContextProvider>
  );
}

export default App;
