import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (input) => {
    setEnteredGoal(input)
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.showModal} animation="slide">
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}><Button title="Cancel" onPress={props.onCancel} color="red" /></View>
          <View style={style.button}><Button title="Add" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 2
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;