
import { View, Image, Text, FlatList } from 'react-native';

function Home({ navigation }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <View>
      <View>
        <Text>My Coffees To See</Text>
        <FlatList
          data={numbers}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2021/11/22/04/21/drink-6815800_1280.jpg',
              }}
            />
          )}
        />
      </View>

      <View>
        <Text>My Books To See</Text>
        <FlatList
          data={numbers}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: 'contain',
                marginHorizontal: 5,
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg',
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

export { Home };