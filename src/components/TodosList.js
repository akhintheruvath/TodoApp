import React from 'react'

const TodosList = ({ todos, setTodos,setEditTodo }) => {
    const handleComplete = ({id}) => {
        setTodos(todos.map((item) => {
            if(item.id === todos.id){
                return {...item,completed:!item.completed}
            }
            return item;
        }))
    }

    const handleEdit = ({id}) => {
        const findToDo = todos.find((todo) => todo.id === id);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id!==id));
        setEditTodo(findTodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(e) => e.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button' onClick={() => handelEdit(todo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodosList;