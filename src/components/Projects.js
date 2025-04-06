import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/kadalisatyasri',
      image: 'project1.jpg'
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;