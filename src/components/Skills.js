import "./SkillsStyles.css"
import SkillsData from "./SkillData";

import skil1 from "../assets/Java.jpg"
import skil2 from "../assets/Python.jpg"
import skil3 from "../assets/htmlcss2.png"
import skil4 from "../assets/androidstd.png"
import skil5 from "../assets/mysql2.png"

  /*
    Created a page for skills exported to homepage
    
    imported assets as per skill

    Created Skills-Card class to store relative skills - title and image
  */


function Skills(){
    return(
        <div className="Skills">
            <h1>My Skills</h1>
        <div className="Skills-Card">
            <SkillsData
            image={skil1}
            heading = "Java"
            />
             <SkillsData
            image={skil2}
            heading = "Python"
            />
             <SkillsData
            image={skil3}
            heading = "HTML & CSS"
            />
             <SkillsData
            image={skil4}
            heading = "Android Studio"
            />
             <SkillsData
            image={skil5}
            heading = "mySQL"
            />


        </div>
        </div>
    )
}

export default Skills;