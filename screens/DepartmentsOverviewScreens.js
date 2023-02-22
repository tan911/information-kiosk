import { View, Text, StyleSheet } from 'react-native';

function DepartmentsOverviewScreen({ route }) {
  const catID = route.params.categoryID;
  return (
    <View style={styles.container}>
      <Text>Departments overview - {catID}</Text>
    </View>
  );
}

export default DepartmentsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
