import './Todo.css';
import React, { useState } from 'react';

const Todo = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            Task: 'Task 1',
        },
        {
            id: 1,
            Task: 'Task 2',
        },
        {
            id: 1,
            Task: 'Task 3',
        }
    ]);
    const [Task, setTask] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const handleAddItem = () => {
        const newItem = {
            id: items.length + 1,
            Task: Task,
        };
        setItems([...items, newItem]);
        setTask('');
    };

    const handleEditItem = () => {
        const updatedItems = items.map((item) => {
            if (item.id === editItemId) {
                return {
                    id: item.id,
                    Task: Task,
                };
            }
            return item;
        });

        setItems(updatedItems);
        setTask('');
        setEditMode(false);
        setEditItemId(null);
    };

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    const handleEditTask = (id, Task) => {
        setEditMode(true);
        setEditItemId(id);
        setTask(Task);
    };

    return (
        <div className='bg'>

            <div className='todo-bg'>
               
                <div className='task-header'>
                    <h1>ToDo List</h1>
                    <div>
                        <input
                            type="text"
                            value={Task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Enter the task here..."
                            required
                        />
                        <button onClick={editMode ? handleEditItem : handleAddItem} className='add-task-btn'>
                            {editMode ? 'Save Changes' : 'Add Item'}
                        </button>
                    </div>
                </div>

                <div className='tasks-bg'>
                    {items.map((item) => (
                        <div key={item.id} className='task-details-div'>
                            <div>{item.Task}</div>

                            <div>
                            <button onClick={() => handleEditTask(item.id, item.Task)}>Edit</button>{' '}
                            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default Todo;
