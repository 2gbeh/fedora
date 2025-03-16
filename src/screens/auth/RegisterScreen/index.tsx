import React from 'react';
// SHARED IMPORTS
import Temp from '@/components/Temp';
import {useAppContext} from '@/context/AppContext';

function RegisterScreen(): React.JSX.Element {
  const {setIsAuthenticated} = useAppContext();
  // RENDER
  return <Temp next={() => setIsAuthenticated(true)}>RegisterScreen</Temp>;
}

export default RegisterScreen;
