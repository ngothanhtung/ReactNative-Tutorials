import React from 'react'
import { View } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)

export default TodoApp