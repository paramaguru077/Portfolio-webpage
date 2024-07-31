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
          link="https://github.com/paramaguru077/weather-app.git"
          h3="Weather "
          p="Weather web App"
        />
        <ProjectCard
          src={noteapp}
          link="https://github.com/paramaguru077/notes-app.git"
          h3="Note app"
          p="Note web app"
        />
        <ProjectCard
          src={searchimage}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Searchimage"
          p="Search image web"
        />
        <ProjectCard
          src={texttospeech}
          link="https://github.com/paramaguru077/text-to-voice-converter.git"
          h3="TexttoSpeech"
          p="TexttoSpeech image web"
        />
      </div>
    </section>
  );
}

export default Projects;