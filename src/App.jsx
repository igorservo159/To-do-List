import localforage from 'localforage'
import { useEffect, useState } from 'react'
import Header from '../componentes/header'
import List from '../componentes/list'
import Form from '../componentes/form'
import './App.css'
import Edit from '../componentes/edit'


function App() {
  const [todos, setTodos] = useState([])

  //localStorage

  useEffect(() => {
    localforage.getItem('App').then((data) => {
      if (data) setTodos(data)
    })
  }, [])

  useEffect(() => {
    localforage.setItem('App', todos)
  }, [todos])

  const addTodo = (text, link, category) => {
    if(text == null || category == null) return;
    const newTodos = [
      ...todos,
      {
        id: todos.length, 
        text,
        link,
        category,
        isCompleted: false
      }
    ];

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
    todo.id != id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
    todo.id == id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }

  const [idEdit, setidEdit] = useState("")

  const [isEditing, setIsEditing] = useState(false)
  
  const editTodo1 = (id) => {
    setIsEditing(!isEditing)
    setidEdit(id)
  }

  const editTodo2 = (id, prop, value) => {
    if (prop == null || value == null) return;
  
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, [prop]: value };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Header />
      <div className='main'>
        <List todos={todos} removeTodo={removeTodo} isEditing={isEditing}
        completeTodo={completeTodo} editTodo1={editTodo1} idEdit = {idEdit}/>
        <Form addTodo={addTodo} />
        <Edit isEditing={isEditing} idEdit = {idEdit} editTodo2={editTodo2}
        editTodo1={editTodo1}/>
      </div>
    </>

  )
}

export default App
