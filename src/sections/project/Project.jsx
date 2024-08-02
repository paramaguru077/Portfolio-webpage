import styles from './ProjectStyle.module.css';
import weather from '../../assets/weather app.jpeg';
import noteapp from '../../assets/noteapp.jpeg';
import searchimage from '../../assets/search engine.jpeg';
import texttospeech from '../../assets/texttospeech.jpeg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://paramaguru077.github.io/weather-app/wp.html"
          h3="Weather "
          p="Weather web App"
        />
        <ProjectCard
          src={noteapp}
          link="https://paramaguru077.github.io/notes-app/"
          h3="Note app"
          p="Note web app"
        />
        <ProjectCard
          src={searchimage}
          link="https://paramaguru077.github.io/Searchimage/"
          h3="Searchimage"
          p="Search image web"
        />
        <ProjectCard
          src={texttospeech}
          link="https://paramaguru077.github.io/text-to-voice-converter/"
          h3="TexttoSpeech"
          p="TexttoSpeech image web"
        />
      </div>
    </section>
  );
}

export default Projects;