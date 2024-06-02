import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const newTodosList = initialTodosList.map(each => ({
  ...each,
  isSaved: true,
  isChecked: false,
}))

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: newTodosList, input: '', edit: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const filterdList = todosList.filter(each => each.id !== id)
    this.setState({
      todosList: filterdList,
    })
  }

  checked = id => {
    const {todosList} = this.state
    const filterdList = todosList.map(each =>
      each.id === id ? {...each, isChecked: !each.isChecked} : each,
    )
    this.setState({
      todosList: filterdList,
    })
  }

  editSaveTodo = id => {
    const {todosList, edit} = this.state
    const todo = todosList.filter(each => each.id === id)[0]
    if (todo.isSaved) {
      const filterdList = todosList.map(each =>
        each.id === id ? {...each, isSaved: !each.isSaved} : each,
      )
      this.setState({
        todosList: filterdList,
        edit: todosList.filter(each => each.id === id)[0].title,
      })
    } else {
      const filterdList = todosList.map(each =>
        each.id === id ? {...each, isSaved: !each.isSaved, title: edit} : each,
      )
      this.setState({
        todosList: filterdList,
        edit: todosList.filter(each => each.id === id)[0].title,
      })
    }
    /* const filterdList = todosList.map(each =>
      each.id === id ? {...each, isSaved: !each.isSaved} : each,
    )
    this.setState({
      todosList: filterdList,
      edit: todosList.filter(each => each.id === id)[0].title,
    }) */
  }

  onChangeTitle = edit => {
    this.setState({
      edit,
    })
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
    console.log(event.target)
  }

  addTodo = () => {
    const {input} = this.state
    const newTodo = {id: uuidv4(), title: input, isSaved: true}
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      input: '',
    }))
  }

  render() {
    const {todosList, input, edit} = this.state

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              type="text"
              value={input}
              className="add-input"
              onChange={this.onChangeInput}
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="list-container">
            {todosList.map(each => (
              <TodoItem
                key={each.id}
                details={each}
                deleteTodo={this.deleteTodo}
                editSaveTodo={this.editSaveTodo}
                onChangeTitle={this.onChangeTitle}
                edit={edit}
                checked={this.checked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
