import { View, FlatList, StyleSheet, Text } from 'react-native';

import { DEPARTMENTS } from '../data/data-employee';
import DisplayedDepartment from '../components/DisplayedDepartment';

function DepartmentsOverviewScreen({ route }) {
  const catID = route.params.categoryID;

  const departments = DEPARTMENTS.filter((dept) => {
    return dept.departmentIds.indexOf(catID) >= 0;
  });

  const renderDepartments = (data) => {
    const item = data.item;

    const detail = {
      id: item.id,
      title: item.title,
    };

    return <DisplayedDepartment {...detail} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={departments}
        keyExtractor={(item) => item.id}
        renderItem={renderDepartments}
      />
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
