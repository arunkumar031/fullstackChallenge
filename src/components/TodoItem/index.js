// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, toDelete} = props
  const {id, title} = details

  const onDelete = () => {
    toDelete(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
