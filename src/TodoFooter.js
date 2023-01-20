function TodoFooter({todos, onClearCompleted}){
   const complitedSize =  todos.filter((todo) => todo.isCompleted).length
    return(
        <div>
            <span>{complitedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoFooter