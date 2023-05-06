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
    <div style={styles.container}>
    <h1 style={styles.title}>My Todo List</h1>
    <Todos todos={todos} />
    </div>
  )

}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}



export default App
