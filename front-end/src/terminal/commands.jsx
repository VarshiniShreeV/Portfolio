import React from 'react';

export function parseCommand(command) {
  switch (command.toLowerCase()) {
    case 'help':
      return <p>Available commands: 
        about, 
        projects, 
        resume, 
        feedback,
        contact, 
        clear</p>;
    case 'about':
      return <p>Hi! I'm Varshini Shree, a CSE junior passionate about full-stack development.</p>;
    case 'projects':
      return (
        <ul>
          <li>Project 1: </li>
          <li>Project 2: </li>
        </ul>
      );
    case 'resume':
      return <a href="/resume.pdf" download>Download Resume</a>;
    case 'feedback':
      return <p>Leave your feedback at: varshinishreevelumani@gmail.com</p>;
    case 'contact':
      return <p>Reach out to varshinishreevelumani@gmail.com ; Mobile No: 9344073334 </p>
    case 'clear':
      window.location.reload();
      return <></>; //Return empty return instead of null
    default:
      return <p>Command not found. Type 'help' to see available commands.</p>;
  }
}
