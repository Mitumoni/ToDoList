import React, {useState , useRef , useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

function Form() {
    const [input, setInput] = useState(' ')
    const [tasks, setTasks] = useState([])
    const [editTodo, setEditTask] = useState("")


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

    const deleteTask = ({id}) => {
        setTasks(tasks.filter(item => item.id !== id ))
        
    }


     const editTask = ({id}) => {
        const newTask = tasks.find(item => item.id === id)
        setInput(newTask.list)
        setEditTask(id)
     }

    const doneTask = ({id}) => {
        
        setTasks(
            tasks.map(item => {
                if(item.id === id)
                {
                    item.completed = !item.completed
                    return {...item}
                }
                console.log(item)
                return item
                
            })
            )
    }

  return (
    <div className='container'>
        <form onSubmit={formSubmit} className=' my-7 -mt-7 mx-14 flex px-16'>
            <input ref={inputRef} className='mx-2 rounded-sm border-2 border-gray-400' type='text' placeholder='Enter a Task...' value={input} onChange={inputChange}/>

            <button type='submit' className='bg-orange-500  text-yellow-100 px-3 rounded-md'>{editTodo ? 'Ok' : 'Add'}</button>
        </form>

        <div className=' flex flex-col  items-center my-5 '>
            {
                tasks.map(task => (
                    // <div className='space-y-4 border-2 border-gray-200'>
                    <ul key={task.id} className='space-y-3  mx-48 flex'>
                        <input type='text' 
                        value={task.list}
                        className={ task.completed  ? "line-through bg-gray-300 rounded-md my-1 px-12 py-2 mx-2 border-2 font-serif text-lg border-blue-400" : "bg-gray-300 rounded-md font-serif text-lg my-1 px-12 py-2 mx-2 border-2 border-blue-400 "}  
                        onChange={e => e.preventDefault()} />

                        <button onClick={() => editTask(task)} className='bg-yellow-500 text-white rounded-md  px-2 mx-1'>Edit</button>

                        <button onClick={() => deleteTask(task)} className='bg-red-700 text-white rounded-md px-2  mx-1'> Delete</button>

                        <button  className="bg-green-500 rounded-md px-2   text-white " onClick={() =>doneTask(task)}> Done</button>
                        
                        
                    </ul>
                    //</div>
                    
                ))
            }
            
            
        </div>
        
        

    </div>
  )
}

export default Form