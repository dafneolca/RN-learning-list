import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';


import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalName) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalName }
    ]);
    setIsAddMode(false)
  }

  const deleteGoalHandler = (index) => {
    setCourseGoals(currentGoals => {
      return courseGoals.filter((goal) => goal.id !== index)
    })
  }

  const displayModal = () => {
    console.log("display modal");
    setIsAddMode(true);
    console.log('is add mode: ', isAddMode)
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }


  return (
    <View style={style.screen}>
      <Button title="Add New Goal" onPress={displayModal} />
      <GoalInput
        onAddGoal={addGoalHandler} showModal={isAddMode} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value}
          onDelete={() => deleteGoalHandler(itemData.item.id)} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50
  }
});

