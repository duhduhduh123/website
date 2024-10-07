export const Footer = () => {
  const projects = [
    {
      title: "Live Poll Voting Website",
      description: "Designed and implemented real-time voting functionality, handling user authentication and dynamic updates. Worked with React Router for seamless navigation and integrated the app with a server to manage API requests and data persistence. Collaborated with team members using Git for version control, ensuring smooth communication and code integration throughout the development process. Debugged and optimized the app for performance and scalability.",
      link: "https://github.com/duhduhduh123/liveChatBot"
    },
    {
      title: "Live Chat Bot for UW CS Students",
      description: "Developed a chatbot application designed to assist University of Washington Computer Science students with common queries. Utilized natural language processing (NLP) techniques to enhance user interaction and improve response accuracy. Integrated the chatbot with a user-friendly interface built using React, ensuring a seamless experience for users. Collaborated with team members to implement server-side logic for handling user data and queries efficiently. Conducted thorough testing and user feedback sessions to refine functionality and optimize performance.",
      link: "https://github.com/duhduhduh123/LiveVotingPoll"
    },
    {
      title: "David Lym Personal Website",
      description: "Developed a personal website using JavaScript and React to showcase my projects and skills. Utilized React’s component-based architecture to create a dynamic and responsive user interface. Leveraged Google resources and documentation to troubleshoot issues and optimize performance, ensuring a smooth user experience. Employed various React libraries and tools to enhance functionality, including routing and state management. Conducted user testing and implemented feedback to refine the website's design and usability, ultimately creating a polished and professional online presence.",
    },
    // Add more projects as needed
  ];

  return (
    <footer id="projects" className="footer">
      <div className="footer-bx">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                {project.title}
              </a>
            </h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};