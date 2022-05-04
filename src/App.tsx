import { useState, useEffect } from 'react'
import './App.css';
import *  as C from './App.styles'
import {Item} from './types/item'
import {ListItem} from './components/ListItem'
import { AddArea } from './components/AddArea'

function App() {
  const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem('taskList')as string) || [])
  

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })  
    setList(newList)
    localStorage.setItem('taskList', JSON.stringify(newList))
  }

  const handleRemoveTask = (id: number) => {
    const newTaskList = list.filter((item) => item.id !== id && item)
    console.log(newTaskList)
    setList(newTaskList)
    localStorage.setItem('taskList', JSON.stringify(newTaskList))
  } 
 
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item,index) => (
          <ListItem  handleRemoveItem={() => handleRemoveTask(item.id)} key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
