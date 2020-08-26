import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

//App components
import Course from './courses/Course'
import CSS from './courses/CSS'
import HTML from './courses/HTML'
import JavaScript from './courses/JavaScript'


const Courses = () => (
  <BrowserRouter>
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li><Link to='/courses/html'>HTML</Link></li>
          <li><Link to='/courses/css'>CSS</Link></li>
          <li><Link to='/courses/javascript'>JavaScript</Link></li>
        </ul>
      </div>

      {/* Write routes here... */}
      <Route path="/courses/html" component={HTML} />
      <Route path="/courses/css" component={CSS} />
      <Route path="/courses/javascript" component={JavaScript} />
    </div>
  </BrowserRouter>
);

export default Courses;