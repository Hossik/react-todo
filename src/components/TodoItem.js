// rce tab
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px', 
        borderBottom: '1px #ccc dotted',
        // ternery operation
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
      // before ternery operation
    // if (this.props.todo.completed){
    //   return {
    //     textDecoration: 'inline-through'
    //   }
    // }else{
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    }
// markComplete(e){
//   console.log(this.props)
// }
// its gives error because its not arrow and cant read "this"!! but in render we can use "this" beacuse its part of component / here(TodoItem)/ so for resolve we can bind(this) in onchange, look at 7(2) - but beter to use arrow function 
  render() {
    //7-  we can use "destructing to pull the variables out of the to-do and the props"/  
    const { id, title } = this.props.todo;
    return (
      //Don't use - instead capital letter
      <div style={this.getStyle()}>
        
        
          {/* // 1- by checkbox calling onChange={'this."props".markComplete' */}
          {/*6-  we need item to know which checkboxes are true of false so we add ".bind(this), this.props.todo.id)" */}
          {/* 7(2):change: <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {''}
          { this.props.todo.title } */}
          <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
          {/*7(3):change: { this.props.todo.title }  */}
          {/* 8 - passing the ID up>> App.js */}
          { title }
          <bottom onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >x</bottom>
          </p>
      </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired 
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border : 'none',
  padding : '5px 9px',
  borderRadius:'50%',
  float: 'right'
}

export default TodoItem;

