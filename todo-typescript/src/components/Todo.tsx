import React from 'react'

import {ITask} from '../interfaces'

interface props {
    todo: ITask;
}


const Todo = ({todo}:props) => {
    return (
        <>
        {
            todo.taskName && <li>
            {todo.taskName}
       </li>
        }
       </>
    )
}

export default Todo
