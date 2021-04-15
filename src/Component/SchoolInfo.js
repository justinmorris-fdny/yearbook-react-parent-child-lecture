import React from 'react';
import '../App.css';
import SchoolPhoto from './SchoolPhoto.js';
import StudentInfo from './StudentInfo.js';

function SchoolInfo() {
  return(
    <div className="container">
      <h3>This is the Album component.</h3>
      <SchoolPhoto />
      <StudentInfo />
    </div>
  );
}

export default SchoolInfo;