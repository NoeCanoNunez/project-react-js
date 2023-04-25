import React from 'react'
import { Task } from "../../models/task.class";
import TaskComponent from '../pure/forms/task';
import { LEVELS } from '../../models/level.enum.js';

const TaskListComponent = (props) => {
    
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
  
  
    return (
    <div>
        <div>
            Your Tasks:
        </div>
        <TaskComponent task={defaultTask}/>
    </div>
  )
}

export default TaskListComponent
