import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

function Search({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: '#dddddd' }}
        style={styles.searchBox}
      >
        <Icon size={25} name="search" color="#9ca3af" />
        <Text style={styles.placeholderText}>Search</Text>
      </Pressable>
    </View>
  );
}
export default Search;

const styles = StyleSheet.create({
  rootContainer: {
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#1c1917',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  placeholderText: {
    color: '#9ca3af',
  },
});
