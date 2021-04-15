import React from 'react';
import '../App.css';
// import components
import SchoolInfo from './SchoolInfo.js';

function StudentYear() {
  return(
    <div className="container">
      <h2>This is an StudentYear component.</h2>
      <SchoolInfo/>
    </div>
  );
}

export default StudentYear;