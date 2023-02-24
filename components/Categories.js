import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/data-employee';
import PositionGridTile from '../components/PositionGridTile';

function Categories({ navigation }) {
  function renderEmployee(data) {
    const presshandler = () => {
      navigation.navigate('Departments', {
        categoryID: data.item.id,
      });
    };

    return (
      <PositionGridTile
        position={data.item.position}
        color={data.item.color}
        image={data.item.image}
        onPress={presshandler}
      />
    );
  }

  return (
    <FlatList
      key={'_'}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderEmployee}
      numColumns={1}
    />
  );
}
export default Categories;
