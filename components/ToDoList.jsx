import {
    Pressable,
    View,
    Text,
    ScrollView,
    StyleSheet
  } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const ToDoList = ({tasks}) => {
  return (
   <View>
    {tasks.map((task,index) => (
      <View key={index}>{task}</View>
    ))}
   </View>
  )
}

export default ToDoList
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });