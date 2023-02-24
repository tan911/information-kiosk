import { View, SafeAreaView, StyleSheet, Platform, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import Categories from '../components/Categories';

function HomeScreen({ navigation }) {
  const navigationNav = useNavigation();

  useLayoutEffect(() => {
    navigationNav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.rootContainer}>
        <ImageBackground
          source={require('../assets/map/cebumap.jpg')}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.searchBox}>
            <Icon size={30} name="search" color="#9ca3af" />
            <View style={styles.inputContainer}>
              <TextInput placeholder="Ex. MICS Department" keyboardType="default" />
            </View>
          </View>
          <View style={styles.positionsContainer}>
            <Categories navigation={navigation} />
          </View>
        </ImageBackground>
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
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.9,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
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
  inputContainer: {
    flex: 1,
  },
  positionsContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
});
