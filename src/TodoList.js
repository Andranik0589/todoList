import TodoItems from "./TodoItem"

function TodoList({todos, onDelete, onChange}) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TodoItems key={todo.id} todo ={todo} onChange={onchange} onDelete={onDelete}/>
                    )
                })
            }
        </div>
    )
}

export default TodoList