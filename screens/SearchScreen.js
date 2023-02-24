import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

function SearchScreen() {
  const navigationNav = useNavigation();

  useLayoutEffect(() => {
    navigationNav.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Ex. MICS Department',
      },
    });
  }, []);

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

export default SearchScreen;
