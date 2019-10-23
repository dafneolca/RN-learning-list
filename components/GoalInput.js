import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (input) => {
    setEnteredGoal(input)
  };

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  )
}

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 2
  }
});

export default GoalInput;