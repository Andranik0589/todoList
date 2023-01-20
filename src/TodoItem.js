function TodoItems({todo, onChange,onDelete}) {
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.isComoleted} onChange={(ev) =>{
                    //ev.target.checked
                    onChange({
                        ...todo,
                        isComoleted:ev.target.checked
                    })
                }}></input>
                {todo.text}
                <button onClick={() =>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItems