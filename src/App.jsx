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
  // console.log(todos)


  return(
    <div>
      <h1>My TodoList</h1>
     
  <Todos todos= {todos} />
    </div>
  )
}



export default App
