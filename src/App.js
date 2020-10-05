import React from 'react';
import ProjectsIndex from './Projects/ProjectsIndex';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';
import KingQuizApp from './Projects/KingQuizApp';
import ToDoList from './Projects/ToDoList';
import AboutMe from './AboutMe';
import NotFound from './NotFound';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route exact path="/" component={Homepage} />
        <Route path="/projectsindex" component={ProjectsIndex} />
        <Route path="/kingquizapp" component={KingQuizApp} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/aboutme" component={AboutMe} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
