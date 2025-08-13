
import './App.css';
import Navbar from './components/navigationbar';
import Landing from './components/landing';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {


  return (
    <div className="App">

  
      <Landing/>
      

      <Navbar/>

      <main>

        <AboutMe/>

        <Projects/>

        <Contact/>






      </main>


    </div>
  );
}

export default App;
