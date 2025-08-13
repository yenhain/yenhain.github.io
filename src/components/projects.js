import ProjectCard from "./projectcards";
import abm2 from './images/Screenshot from 2025-04-28 10-15-48.png';
import abm from './images/Screenshot from 2025-04-28 10-15-48.png';
import grm from './images/0frame00225.jpg';
import gol from './images/Gameoflife.png';
import grmVideo from './videos/outputFINAL.mp4';
import golvideo from './videos/gol.mp4';


export default function Projects() {
  return (
    <section id="projects" style={{ minHeight: '100vh' }}>
      <div className="App-body">
        <h2>Projects</h2>
        <br/>
        {/* Render project cards here */}
      </div>

      <div className="project-layout">


        <ProjectCard
          title="ABM: Multi Agent Systems V2"
          repoLink="https://github.com/yourusername/ABM-MultiAgentSystems"
          demoLink="https://yourprojectdemo.com"
          imgSrc={abm2}
          imgAlt="Screenshot of ABM: Multi Agent Systems 2"
          description="An advanced agent-based modeling simulation platform focused on complex multi-agent interactions and emergent behavior analysis."
          technologies="Python, Mesa, NumPy"
          features={[
            "Implements scalable agent-based simulations",
            "Customizable agent behaviors and environments",
            "Visualization of emergent patterns"
          ]}
        />


        <ProjectCard
          title="ABM: Multi Agent Systems"
          repoLink="https://github.com/yourusername/ABM-MultiAgentSystems"
          demoLink="https://yourprojectdemo.com"
          imgSrc={abm}
          imgAlt="Screenshot of ABM: Multi Agent Systems"
          
          description="A foundational agent-based modeling framework for simulating and analyzing interactions among autonomous agents."
          technologies="Python, Mesa"
          features={[
            "Simulates multi-agent cooperation",
            "Interactive visualisation of agent movement",
            "Parameter tuning for scenario analysis"
          ]}
        />


        <ProjectCard
          title="Graphics Render Machine"
          repoLink="https://github.com/yenhain/Graphics-Render"
          demoLink=""
          imgSrc={grm}
          imgAlt="Screenshot of Graphics Render Machine"
          videoSrc={grmVideo}
          description="A custom graphics rendering engine for visualizing 2D and 3D objects, supporting real-time rendering and user interaction."
          technologies="C++, OpenGL, SDL2"
          features={[
            "Real-time 3D rendering machine",
            "User-controlled camera and lighting",
            "Support for multiple object formats"
          ]}
        />

        <ProjectCard
          title="Game Of Life"
          repoLink="https://github.com/yenhain/Conways-Game-Of-Life/tree/main"
          demoLink=""
          imgSrc={gol}
          imgAlt="Screenshot of Game Of Life"
          videoSrc={golvideo}
          description="An implementation of Conway’s Game of Life, enabling users to visualise cellular automata and emergent patterns."
          technologies="Go, SDL2"
          features={[
            "Real-time simulation controls",
            "Customisable grid sizes and initial states",
            "Visualisation of evolving patterns"
          ]}
        />

      </div>


    </section>
  );
}

