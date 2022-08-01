import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './Create-Todo-Field/CreateTodoField';

const data = [
    {
        _id: 1,
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },

    {
        _id: 2,
        title: 'Read next chapter of the book',
        isCompleted: false,
    },

    {
        _id: 3,
        title: 'Send the finished assignment',
        isCompleted: false,
    },
];

const Home = () => {

    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {

        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = (id) => {

        setTodos([...todos].filter(t => t._id !== id));
    }

   

  return (
    <div className=' text-white  w-4/5 mx-auto ' >
        <h1 className=' text-xl font-bold text-center mb-10 ' >TodoList</h1>
        {
            todos.map(todo => 
                (<TodoItem 
                    key={todo._id} 
                    todo={todo} 
                    changeTodo={changeTodo}
                    removeTodo={removeTodo} 
                /> 
            ))
        }

        <CreateTodoField setTodos={setTodos} />

    </div>
  )
}

export default Home;