import React from 'react';
import ToDoListScreenshot from '../Images/To-Do-List-Screenshot.png';
import './ToDoList.css';

function ToDoList() {
    return (
        <div className="to-do-list">
            <h2>To Do List</h2>
            <img src={ToDoListScreenshot} alt="screenshot of To Do List" />
            <p>Keep yourself organized with this To Do List</p>
            <p>This To Do List was created to help users organize their tasks based on level of importance.</p>
            <p>I was inspired to create this app based on the Eisenhower Model, which has helped me numerous times in the past.</p>
            <p>I used HTML, CSS, JavaScript and jQuery to create this app.</p>
            <p><a href="https://stepanovaky.github.io/to-do-list/">Live Link</a></p>
            <p><a href="https://github.com/stepanovaky/to-do-list">Link to Github Repository</a></p>
        </div>
    )
}

export default ToDoList;