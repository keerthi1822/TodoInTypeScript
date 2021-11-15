import React, { ChangeEvent, FC, useState } from "react";
import { ITask } from "./interfaces";
import "./App.css";
import Todo from "./components/Todo";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "deadLine")
      setDeadline(Number(event.target.value));
    else setTask(event.target.value);
  };

  const handleAddTask = (): void => {
    if(task === '') alert('please enter some task')
    else{
      const newTask = { taskName: task, deadLine: deadline };
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
    }
  
  };

  console.log(todoList);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <section>
          <input
            type="text"
            value={task}
            name="task"
            placeholder="Add Task.."
            onChange={handleChange}
          ></input>
          <input
            type="number"
            value={deadline}
            name="deadLine"
            placeholder="Add deadline in days.."
            onChange={handleChange}
          ></input>
        </section>
        <button onClick={handleAddTask} style={{ width: "100%" }}>
          +
        </button>
      </div>

      <div>
        {todoList.length ? (
          <ul>
            {todoList.map((todo: ITask, key: number) => {
              return <Todo todo={todo} key={key} />;
            })}
          </ul>
        ) : (
          "no todos listed"
        )}
      </div>
    </div>
  );
};

export default App;
