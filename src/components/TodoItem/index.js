// Write your code here
import './index.css'

const TodoItem = props => {
  const {
    details,
    deleteTodo,
    editSaveTodo,
    onChangeTitle,
    edit,
    checked,
  } = props
  const {id, title, isSaved, isChecked} = details

  const editSaveBtnText = isSaved ? 'Edit' : 'Save'
  const strike = isChecked ? 'strike' : ''

  const onDelete = () => {
    deleteTodo(id)
  }

  const onEditSave = () => {
    editSaveTodo(id)
  }

  const onChangeInput = event => {
    onChangeTitle(event.target.value)
  }

  const onClickCheckbox = () => {
    checked(id)
  }

  return (
    <li className="list-item">
      <input type="checkbox" htmlFor={id} onClick={onClickCheckbox} />
      <div id={id} className="list-item">
        {isSaved ? (
          <p className={`title ${strike}`}>{title}</p>
        ) : (
          <input
            type="text"
            value={edit}
            className="edit-input"
            onChange={onChangeInput}
          />
        )}

        <div>
          <button className="edit-btn" type="button" onClick={onEditSave}>
            {editSaveBtnText}
          </button>
          <button className="delete-btn" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
