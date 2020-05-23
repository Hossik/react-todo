import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import Rate from './components/pages/Rate';
import axios from 'axios';


import './App.css';

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); 

// component mount 
class App extends Component{
  state = {
    todos:[]
}
// component dead mount (another life cycle)
// &_limit=10 its gets limit
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?start=0&_limit=10').then(res => this.setState({ todos: res.data}))
}




// 5- SO WE CHANGED STATE HERE>>6 AT TodoItem
// 8- pass id here(now , id checked the state!) we have to use set state

  // console.log('from app.js')
  // console.log(id) 
  // 9- we have to use set state
  //10-  state as a whole which is an object({}) and 
  // 11-match the id here passed in here and if matches then we want to update te COMPLETED value when it's checked
  
  // Toggle Complete
  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo =>{
     if (todo.id === id ){
       todo.completed = !todo.completed
     }
     return todo;
   }) });
} 

// Delet Todo 
// Spread Operator here [...this]
delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
}

// delTodo = (id) =>{
//   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
// }
// Add Todo
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
  .then(res =>this.setState({ todos: [...this.state.todos, res.data] }));
  // const newTodo = { 
  //   id:uuidv4(),
  //   title,
  //   completed: false
  // } 
  // this.setState({ todos: [...this.state.todos, newTodo] });
}

  render() {
    // console.log(this.state.todos)
  return (
  <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props =>(
        <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          {/* 4 - ADD markComplete={this.markComplete}  TO <Todos todos={this.state.todos}  */}
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </React.Fragment>
      )}   />
      <Route path="/about" component={About} />
      <Route path="/rate" component={Rate} />
      <Footer />
      
      </div>  
    </div>
  </Router>
   );
  }
} 

export default App;
