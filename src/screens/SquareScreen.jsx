import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

function SquareScreen() {


  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // console.log(state);

  return (
    <View>
      <ColorCounter
        onIncrease={() => )}
      onDecrease={() => )}
      color="Red"
      />
      <ColorCounter
        onIncrease={() => )}
      onDecrease={() => )}
      color="Blue"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => )}
      onDecrease={() => )}
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreen