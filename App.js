import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DepartmentsOverviewScreen from './screens/DepartmentsOverviewScreens';
import SplashScreen from './screens/SplashScreen';
import SearchScreen from './screens/SearchScreen';
import DepartmentDetailScreen from './screens/DepartmentDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Departments"
          component={DepartmentsOverviewScreen}
          options={{
            title: 'List of Departments',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Detail"
          component={DepartmentDetailScreen}
          options={{
            title: 'Department',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
