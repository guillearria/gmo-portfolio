import Footer from './components/Footer';
import PoemAuthorList from './components/PoemAuthorList';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const projects = [
    {
      title: "sample",
      description: "sample",
      link: "sample",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "sample",
      description: "sample",
      link: "sample",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "sample",
      description: "sample",
      link: "sample",
      image: "https://via.placeholder.com/200"
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <h1>About Me</h1> 
        <p>Hi I'm Guillermo, an AI enthusiast with experience in NLP, machine learning, and full-stack web development.</p>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Connect with me on <a href="https://www.linkedin.com/in/guillearria/">LinkedIn</a></p>
      </section>
      <section>
        <PoemAuthorList />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
