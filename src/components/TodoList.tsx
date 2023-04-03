import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';


type TodoListProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }: TodoListProps) => {
    return (
        <div className="todos">
            {
                todos.map(todo => (
                    <SingleTodo
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        setTodos={setTodos}
                    />
                ))
            }
        </div>
    )
}

export default TodoList