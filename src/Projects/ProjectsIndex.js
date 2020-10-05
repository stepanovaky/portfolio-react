import React from 'react';
import KingQuizApp from './KingQuizApp';
import ToDoList from './ToDoList';

function ProjectsIndex() {
    return(
        <div className="projects-index">
            <h1>Projects</h1>
            <ul className="projects-list">
                <li><ToDoList /></li>
                <li><KingQuizApp /></li>
            </ul>
        </div>
    )
}

export default ProjectsIndex;