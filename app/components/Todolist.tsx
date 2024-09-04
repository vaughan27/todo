import { ITask } from "@/types/tasks";
import Task from './Task';

interface TodolistProps {
    tasks: ITask[]
}
 const Todolist: React.FC<TodolistProps> = ({tasks}) => {
    

    return (
        <>
          <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}
               
                
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Todolist;