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
           Finish {' '}{todo.taskName}{' '} in {' '}{todo.deadLine}-day{todo.deadLine === 1? '':'s'}
       </li>
        }
       </>
    )
}

export default Todo
