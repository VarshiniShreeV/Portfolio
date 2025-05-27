export function parseCommand(command) {
  switch (command.toLowerCase()) {
    case 'help':
      return <p>Available commands: 
        whoami,
        about, 
        skills,
        projects, 
        resume, 
        education,
        experience,
        certifications,
        feedback,
        contact, 
        blog,
        clear</p>;
    case 'whoami':
      return <p>Name : Varshini Shree V
        Role : --
        Interests : --
        Location : --
      </p>;
    case 'about':
      return <p>Hi! I'm Varshini Shree, a CSE junior passionate about full-stack development.</p>;
    case 'skills':
      return <p> Languages: Python, JavaScript
        Frameworks: Streamlit, Flask, Tailwind CSS, Django
        API : FastAPI
        DB : MYSQL, Firebase
        Tools: Git, Docker, Selenium, Figma, VSCode
        Domains: Cloud Computing, Automation</p>
    case 'projects':
      return (
        <ul>
          <li>Project 1: </li>
          <li>Project 2: </li>
        </ul>
      );
    case 'resume':
      return <a href="/resume.pdf" download>Download Resume</a>;
    case 'education':
      return <p>BE Computer Science Engineering @ KGISL Institute of Technology</p>;
    case 'experience':
      return <p>1.Infosys Springboard</p>;
    case 'certifications':
      return <p>1.
        2
        3
      </p>;
    case 'feedback':
      return <p>Leave your feedback at: varshinishreevelumani@gmail.com</p>;
    case 'contact':
      return <p>Reach out to varshinishreevelumani@gmail.com ; Mobile No: 9344073334 
        📧 Email: varshiniv@example.com
🔗 LinkedIn: linkedin.com/in/varshini-shree
🌐 GitHub: github.com/varshini-shree
      </p>;
    case 'blog':
      return <a href='https://medium.com/@varshinishreevelumani'>Medium</a>
    case 'clear':
      window.location.reload();
      return <></>; //Return empty return instead of null
    default:
      return <p>Command not found. Type 'help' to see available commands.</p>;
  }
}
