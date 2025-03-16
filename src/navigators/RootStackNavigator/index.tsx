import {createNativeStackNavigator} from '@react-navigation/native-stack';
// SHARED IMPORTS
import BottomTabNavigator from '../BottomTabsNavigator';
import AppScreen from '@/screens/wip/AppScreen';
import SplashScreen from '@/screens/SplashScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';
import DetailsScreen from '@/screens/main/DetailsScreen';
// LOCAL IMPORTS
import {RootStackParamList} from './types';
import {useAppContext} from '@/context/AppContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  const {isLoading, isAuthenticated} = useAppContext();
  // RENDER
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : isAuthenticated ? (
        <>
          <Stack.Screen name="Tabs" component={BottomTabNavigator} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{presentation: 'modal'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              contentStyle: {},
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
