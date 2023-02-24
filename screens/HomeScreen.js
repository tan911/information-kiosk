import { View, SafeAreaView, StyleSheet, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Categories from '../components/Categories';
import Search from '../components/Search';

function HomeScreen({ navigation }) {
  const navigationNav = useNavigation();

  useLayoutEffect(() => {
    navigationNav.setOptions({
      headerShown: true,
      headerTitle: 'Branch',
    });
  }, []);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <StatusBar barStyle="light-content" hidden={false} />
      <View style={styles.rootContainer}>
        <ImageBackground
          source={require('../assets/map/cebumap.jpg')}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
        >
          <Search navigation={navigation} />
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
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    opacity: 0.9,
  },
  positionsContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
});
