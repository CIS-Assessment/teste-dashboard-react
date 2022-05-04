import { useRef, useState } from 'react'
import * as C from './style'
import { Item } from '../../types/item'

type Props = {
    item: Item
    handleRemoveItem: (id:number) => void
}

export const ListItem = ({item, handleRemoveItem}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    const [edit, setEdit] = useState(false)
    const [itemState, setItemState] = useState(item.name)
    const inputEdit = useRef<HTMLInputElement>(null)

    const handleClickEdit = () =>{
        setEdit(true)
    }
    const handleItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    const taskItemName = inputEdit.current?.value
    console.log(taskItemName)
       const taskLists = JSON.parse(localStorage.getItem('taskList') as string)
       const newTaskList:Item[] = taskLists.map((task:Item )=> {
           if(item.id === task.id){
               return {
                ...task,
                name:taskItemName
               }
           } 
           return task
       })
       localStorage.setItem('taskList', JSON.stringify(newTaskList  ))
    }  

    
    return(
        <C.Container done={isChecked}>
            <input type="checkbox" 
                checked={isChecked}
                onChange = {e => setIsChecked(e.target.checked)}
            />
           
            {edit ? (
                <form action="POST" onSubmit={(e) => handleItem(e) }>
                    <input id ="inp" type="text" ref={inputEdit} /></form>
            ) : (<label>{item.name}</label>)}
            <button id='edit'onClick={handleClickEdit}>EDITAR</button>
            <button id='remove' onClick={() => handleRemoveItem(item.id)}>X</button>
            
        </C.Container>
    )
}