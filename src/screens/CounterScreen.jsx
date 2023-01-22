import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //state === {counter: number}
  //action === {type: 'increment' | 'decrement', payload: 1}
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count + action.payload };;
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return <View>
    <Button title="increase" onPress={() => {
      dispatch({ type: 'increase', payload: 1 });
    }}></Button>
    <Button title="decrease" onPress={() => {
      dispatch({ type: 'decrease', payload: -1 });
    }}></Button>
    <Text>current count: {count} </Text>
  </View>
};

const styles = StyleSheet.create({});
export default CounterScreen;