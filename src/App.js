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
      <section>
        <h1>About Me</h1> 
        <p>Hi I'm Guillermo, an AI enthusiast with experience in NLP, machine learning, and full-stack web development.</p>
      </section>
      <section>
        <h2>My Projects</h2>
        <div>
          {projects.map((callback,index) => (
            <div>Project Card</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
