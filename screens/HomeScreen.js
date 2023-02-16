import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  FlatList,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import Icon from "react-native-vector-icons/EvilIcons"

import { employeePosition } from '../data/data-employee';
import PositionGridTile from '../components/PositionGridTile';

function renderEmployee(data) {
  return (
    <PositionGridTile position={data.item.position} color={data.item.color} />
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.rootContainer}>
        <Text>Home</Text>
        <View style={styles.searchBox}>
          <Icon size={30} name="search" color="#9ca3af"/>
          <TextInput placeholder='Search...' keyboardType="default"/>
        </View>
        <View style={styles.positionsContainer}>
          <FlatList
            key={'#'}
            data={employeePosition}
            keyExtractor={item => item.id}
            renderItem={renderEmployee}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#e0f2fe",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#57534e',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  positionsContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
});
