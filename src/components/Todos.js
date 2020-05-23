import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  // 3 - set to this method here called markComplete nad go to one level up! >>>App.js where is STATE
  // بجای این بایین اضاف کردم 
  // markComplete = () => {
  //   console.log('Hello')
  // }
  render() {
    // console.log(this.props.todos)
    return this.props.todos.map((todo) =>(
      //  2 - from TododItem prop called markComplete it,s run {this.markComplete}
    <TodoItem key={todo.id} todo={todo} 
    // این PROPS this.markComplete
    markComplete= {this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}


export default Todos;