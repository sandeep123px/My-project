import React from "react";
import "./App.css";
import NavigationBar from "./layout/Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CoursesState from "./context/CourseState"
import AfterResult from "./afterResult";
import ApiCalls from './apiCalls'

function App() {
  return (
   
    <CoursesState>
    <div className="bg">
      <Router>
        <Route path="/result" component={AfterResult}/>
        <Route path="/api" component={ApiCalls}/>
        <NavigationBar />
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
         
          </Switch>
         
        </main>
       
      </Router>
    </div>
    </CoursesState>
  );
}

export default App;
