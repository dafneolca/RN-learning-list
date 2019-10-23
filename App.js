import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';


import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goalName) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalName }
    ]);
  }

  const deleteGoalHandler = (index) => {
    setCourseGoals(currentGoals => {
      return courseGoals.filter((goal) => goal.id !== index)
    })
  }

  return (
    <View style={style.screen}>
      <GoalInput
        onAddGoal={addGoalHandler} />
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

