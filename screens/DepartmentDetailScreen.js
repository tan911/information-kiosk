import { Text, View } from 'react-native';

import { DEPARTMENTS } from '../data/data-employee';

function DepartmentDetailScreen({ route }) {
  const deptID = route.params.id;

  const department = DEPARTMENTS.find((dept) => dept.id === deptID);
  return (
    <View>
      <Text>{deptID}</Text>
      <Text>image: {department.imageMap}</Text>
      <Text>Dept. Head/OIC: {department.departmentHead}</Text>
      <Text>Contact: {department.contactNumber}</Text>
      <Text>Location: {department.location}</Text>
    </View>
  );
}

export default DepartmentDetailScreen;
