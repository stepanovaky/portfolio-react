import React from 'react';
import ToDoList from './Projects/ToDoList';

function Homepage() {
    return(
        <div className="homepage">
            <h1>Featured Project</h1>
            <ToDoList />
        </div>
    )
}

export default Homepage;