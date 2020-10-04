import React from 'react';
import KingQuizApp from './KingQuizApp';
import ToDoList from './ToDoList';

function ProjectsIndex() {
    return(
        <div className="projects-index">
            <ul>
                <li><KingQuizApp /></li>
                <li><ToDoList /></li>
            </ul>
        </div>
    )
}

export default ProjectsIndex;