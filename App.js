
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 p.m.',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30 p.m',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: '5th Feb at 3:30 p.m.',
        reminder: false,
    }
])



        // Add Task 
  const addTask = (task) => {
    const id  = Math.floor(Math.random()*100) +1;
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }
       // delete task 

  const deleteTask  = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id ))
  }


      // Toggle reminder 
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task ))
  }


  return (
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> ) : ( 'No Tasks To Show' ) }
    </div>
  );
}

export default App;
