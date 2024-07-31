import React, {useContext} from 'react'
import sytles from './HeroStyle.module.css'
import heroimg from "../../assets/Design uten navn.png"
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLigth from '../../assets/twitter-light.svg'
import GithubLigth from '../../assets/github-light.svg'
import LinkedInLigth from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import GithubDark from '../../assets/github-dark.svg'
import LinkedInDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/paramaguru Resume new(1).pdf'
//import {useTheme} from '../../common/ThemeContext'
import {ThemeContext} from '../../common/ThemeContext'
const hero = () => {
   const {theme, toggleTheme} = useContext(ThemeContext);
   console.log(theme);

   const themeIcon = theme === 'ligth' ? sun : moon;
   const twitterIcon = theme === 'ligth' ? twitterLigth : twitterDark;
   const GithubIcon = theme === 'ligth' ? GithubLigth : GithubDark;
   const LinkedInIcon = theme === 'ligth' ? LinkedInLigth : LinkedInDark;
   
  return (
    <section id="hero" className={sytles.container}>
        <div className={sytles.colorModeContainer}>
          <img src={heroimg} className={sytles.hero} alt="profile photo" />
          <img className={sytles.colorMode}src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
        </div>
        <div className={sytles.info}>
          <h1>
            Paramaguru A.S
          </h1>
          <h2>
            Software Developer
          </h2>
          <span>
            <a href="https://x.com/home?lang=en" target='_blank'>
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://github.com/paramaguru077" target='_blank'>
              <img src={GithubIcon} alt="GitHub" />
            </a>
            <a href="www.linkedin.com/in/paramaguru-" target='_blank'>
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </span>
          
          <p style={{fontFamily:"sans-serif",
            letterSpacing:"2px",fontWeight:"bold",
            marginBottom:"90px"
          }}>
As a software developer with a keen eye for detail and a passion for innovation, I specialize in crafting intuitive and engaging user experiences using JavaScript and React. My expertise in Java Data Structures and Algorithms (DSA) enables me to build highly optimized and scalable solutions. 
</p>

          
          <a href={CV} download >
            <button className='hover'  > Resume</button>
          </a>
        </div>
    </section>
  )
}

export default hero
