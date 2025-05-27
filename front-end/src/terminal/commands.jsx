import React from 'react';

export function parseCommand(command) {
  switch (command.toLowerCase()) {
    case 'help':
      return <p>Available commands: about, projects, resume, feedback, clear</p>;
    case 'about':
      return <p>Hi! I'm Varshini Shree, a CSE junior passionate about full-stack development.</p>;
    case 'projects':
      return (
        <ul>
          <li>Project 1: Chat App</li>
          <li>Project 2: Library Finder</li>
        </ul>
      );
    case 'resume':
      return <a href="/resume.pdf" download>Download Resume</a>;
    case 'feedback':
      return <p>Leave your feedback at: feedback@example.com</p>;
    case 'clear':
      window.location.reload();
      // Instead of returning null, return empty fragment or message
      return <></>;
    default:
      return <p>Command not found. Type 'help' to see available commands.</p>;
  }
}
