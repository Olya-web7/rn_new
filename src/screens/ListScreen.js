import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend1", age: 20 },
    { name: "Friend2", age: 21 },
    { name: "Friend3", age: 22 },
    { name: "Friend4", age: 23 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
