import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/header';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from './Components/list';
import Form from './Components/form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    // {text: "Купить ...", key: '1'},
    // {text: "Помыть ...", key: '2'},
    // {text: "Сделать ...", key: '3'},

  ]);


  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteAllHandler = () => {
    setListOfItems([]);
  };

  return (
    <View style={styles.Header}>
      <Header />
      <Form addHandler={addHandler} deleteAllHandler={deleteAllHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
  },
});
