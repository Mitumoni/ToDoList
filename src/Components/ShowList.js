import  React   from "react";


const ShowList = ({tasks , setTasks , setInput , setEditTask}) => {

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
    <div>

        
        <div className=' flex flex-col  items-center my-5 '>
            {
                tasks.map(task => (
                    
                    <ul key={task.id} className='space-y-3  mx-48 flex'>
                        <input type='text' 
                        value={task.list}
                        className={ task.completed  ? "line-through bg-gray-300 rounded-md my-1 px-12 py-2 mx-2 border-2 font-serif text-lg border-blue-400 " : "bg-gray-300 rounded-md font-serif text-lg my-1 px-12 py-2 mx-2 border-2 border-blue-400 "}  
                        onChange={e => e.preventDefault()} />

                        <button onClick={() => editTask(task)} className='bg-yellow-500 text-white rounded-md  px-2 mx-1'>Edit</button>

                        <button onClick={() => deleteTask(task)} className='bg-red-700 text-white rounded-md px-2  mx-1'> Delete</button>

                        <button  className="bg-green-500 rounded-md px-2   text-white " onClick={() =>doneTask(task)}> Done</button>
                        
                        
                    </ul>
                    
                    
                ))
            }
            
            
        </div>
    </div>
  )
}

export default ShowList