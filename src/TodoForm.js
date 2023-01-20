import { useState } from "react"

function TodoForm({onAdd}) {
    const [text, setText] = useState("")
    return(
        <form onSubmit={(ev) =>{
            ev.preventDefault();
            onAdd(text)
            setText("")
        }}> 
            <input type="text" value={text} onChange={(ev) =>{
                setText(ev.target.value) 
            }}></input>
            <button>Add</button>
        </form>
    )
}
export default TodoForm