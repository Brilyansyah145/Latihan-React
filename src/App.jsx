import React, { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      complement: false,
    },
    {
      id: 2,
      title: 'Have Lunch with Guru Domba',
      complement: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      complement: false,
    },
  ])


 

  return (
    <div style={style.container}>
      <h1 style={style.title}>My TodoList</h1>
      <Todos todos= {todos}/>
    </div>
  
  )  
}

const style = {
  container: {
    textAlign: '12px',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
