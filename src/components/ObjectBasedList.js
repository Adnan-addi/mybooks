// note this is for reuse Help

import { View, Image, Text, FlatList } from 'react-native';

function Home({ navigation }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numbersObjArray = [
    {
      name: 'rizwan',
      age: 30,
    },
    {
      name: 'steve',
      age: 60,
    },
    {
      name: 'saleem',
      age: 40,
    },
  ];

  return (
    <View>
      <View>
        <Text>My Coffees To See</Text>
        <FlatList
          data={numbersObjArray}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <View>
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

              <Text>Name: {item.name}</Text>
              <Text>Age: {item.age}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export { Home };