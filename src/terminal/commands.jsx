export function parseCommand(command) {
  const wrap = (children) => <div className="terminal-response">{children}</div>;

  switch (command.trim().toLowerCase()) {
    case 'help':
      return wrap(
        <>
          Available commands:<br />
          ➤ whoami<br />
          ➤ about<br />
          ➤ skills<br />
          ➤ projects<br />
          ➤ resume<br />
          ➤ education<br />
          ➤ experience<br />
          ➤ certifications<br />
          ➤ feedback<br />
          ➤ contact<br />
          ➤ blog<br />
          ➤ clear
        </>
      );

    case 'whoami':
      return wrap(
        <>
          Name: Varshini Shree V<br />
          Role: Aspiring Full Stack Developer<br />
          Interests: Web & Desktop Development, Web Scraping, Cloud Automation<br />
          Location: Coimbatore, India
        </>
      );

    case 'about':
      return wrap(
        <>
          I'm Varshini Shree, a CSE junior from KGiSL Institute of Technology, actively building real-world software through internships and personal projects.<br />
          I'm curious, adaptable, and passionate about solving problems using scalable tools and clean code.
        </>
      );

    case 'skills':
      return wrap(
        <>
          <strong>Languages:</strong> Python, JavaScript, HTML, CSS, SQL<br />
          <strong>Technologies:</strong> Git, Linux, Docker, Streamlit, Flask, PyQt5, Selenium, BeautifulSoup, React<br />
          <strong>Soft Skills:</strong> Problem Solving, Communication, Collaboration, Adaptability
        </>
      );

    case 'projects':
      return wrap(
        <ul>
          <li>
            <strong>Notes App</strong> [<a href="https://github.com/VarshiniShreeV/Notes_App" target="_blank" rel="noopener noreferrer">GitHub</a>] – A simple note-taking app built with Flask supporting CRUD functionality.
          </li>
          <li>
            <strong>Web Scrapers Collection</strong> [<a href="https://github.com/VarshiniShreeV/Scrapers" target="_blank" rel="noopener noreferrer">GitHub</a>] – Scraped and visualized data from Behance, Deals Heaven, and US Libraries.
          </li>
          <li>
            <strong>Mini Desktop Tools</strong> [<a href="https://github.com/VarshiniShreeV/OIBSIP" target="_blank" rel="noopener noreferrer">GitHub</a>] – Desktop tools (BMI calculator, password generator, chat app) made using PyQt5.
          </li>
          <li>
            <strong>Simple Calculator</strong> [<a href="https://github.com/VarshiniShreeV/Simple-calculator" target="_blank" rel="noopener noreferrer">GitHub</a>] – A responsive calculator UI built with HTML and CSS.
          </li>
          <li>
            <strong>Portfolio Website</strong> [<a href="https://varshinishreev.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Live Link</a>] – ReactJS-based personal site with project highlights and resume.
          </li>
          <li>
            <strong>Attendance Management System</strong> [<a href="https://github.com/RohiniSivapalan/AMS" target="_blank" rel="noopener noreferrer">GitHub</a>] – Collaborative project for student tracking and reporting at the School of Innovation.
          </li>
        </ul>
      );

    case 'resume':
      return wrap(
        <p>
          <a href="./resume.pdf" download="Varshini Shree V - Resume" target="_blank" rel="noopener noreferrer">
            ⬇ Download Resume
          </a>
        </p>
      );

    case 'education':
      return wrap(
        <>
          
          <strong>B.E. Computer Science and Engineering</strong><br />
          KGiSL Institute of Technology, Coimbatore (2022–2026)<br />
          CGPA: 8.45 / 10

          <strong>HSC</strong><br />
          Vijayalakshmi Matric Higher Secondary School, Sirumugai (2020–2022)<br />
          90.6 % <br />

          <strong>B.E. Computer Science and Engineering</strong><br />
          L.E.F Christian Matriculation School, Mettupalayam (2019–2020)<br />
          91.4 % <br />
        </>
      );

    case 'experience':
      return wrap(
        <>
          <strong>Infosys Springboard (Oct–Dec 2024)</strong><br />
          Python Developer Intern (Remote) – Built web scrapers using Selenium, created Streamlit dashboards, and worked in Agile teams.<br /><br />
          <strong>Oasis Infobyte (Oct–Nov 2023)</strong><br />
          Python Developer Intern (Remote) – Created GUI apps using PyQt5 and developed a Flask-based chat application.
        </>
      );

    case 'certifications':
      return wrap(
        <>
          • <a href="https://drive.google.com/file/d/19sgbN58Iw8aKz067g2AuL4T4NbKiujHU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Python Foundation – Infosys Springboard</a><br />
          • Git & GitHub – Coursera<br />
          • <a href="https://drive.google.com/file/d/16f-FBOGqdO6PV8YjM8uV1QO2qPLJnzHX/view?usp=drive_link" target="_blank" rel="noopener noreferrer">LFS101x – Linux Foundation</a><br />
          • <a href="https://drive.google.com/file/d/1WCKr4tUGIaHz6qvNRXutOFLhSSl8OTFB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Linguaskill – Cambridge English</a><br />
          • Internship Certificates:<br />
          – <a href="https://drive.google.com/file/d/1WtYrmcxTmhqutqI2P8LJLU3NC1yxICys/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Infosys Springboard</a><br />
          – <a href="https://drive.google.com/file/d/1EkJqaAW7Zja49qD7nvvinFvXsKiK6JY0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Oasis Infobyte</a>
        </>
      );

    case 'feedback':
      return wrap(
        <>
          I'm open to suggestions! Drop your feedback at:<br />
          📧 varshinishreevelumani@gmail.com
        </>
      );

    case 'contact':
      return wrap(
        <>
          📧 Email: <a href="mailto:varshinishreevelumani@gmail.com">varshinishreevelumani@gmail.com</a><br />
          📱 Mobile: +91 9344073334<br />
          🔗 LinkedIn: <a href="https://linkedin.com/in/varshini-shree-velumani-58a87b253" target="_blank" rel="noopener noreferrer">linkedin.com/in/varshini-shree</a><br />
          🌐 GitHub: <a href="https://github.com/VarshiniShreeV" target="_blank" rel="noopener noreferrer">github.com/VarshiniShreeV</a><br />
          💼 Portfolio: <a href="https://varshinishreev.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">varshinishreev.github.io/Portfolio</a>
        </>
      );

    case 'blog':
      return wrap(
        <>
          📝 <a href="https://medium.com/@varshinishreevelumani" target="_blank" rel="noopener noreferrer">View my Blog on Medium</a>
        </>
      );

    case 'clear':
      window.location.reload();
      return <></>;

    default:
      return wrap("❌ Command not found. Type 'help' to see available commands.");
  }
}
