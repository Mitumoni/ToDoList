import React, { useRef , useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

function Form({input , setInput , tasks , setTasks , editTodo , setEditTask}) {
    


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    
    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if(editTodo)
        {
            const item = tasks.find(i => i.id === editTodo)
            const updatedTasks = tasks.map(todo => 
                todo.id === item.id ? todo = {id : todo.id , list :  input , completed : false } : { id : todo.id , list : todo.input , completed: false})
                setTasks(updatedTasks)
                setEditTask('')
                setInput('')
                return;
        }
        
        setTasks([...tasks, { id : uuidv4() , list :input , completed : false}])
        
        setInput('')
    }

    
  return (
    <div className='container'>
        <form onSubmit={formSubmit} className=' my-7 -mt-7 mx-14 flex px-16'>
            <input ref={inputRef} className='mx-2 rounded-sm border-2 border-gray-400' type='text' placeholder='Enter a Task...' value={input} onChange={inputChange}/>

            <button type='submit' className='bg-orange-500  text-yellow-100 px-3 rounded-md'>{editTodo ? 'Ok' : 'Add'}</button>
        </form>
    </div>
  )
}

export default Form