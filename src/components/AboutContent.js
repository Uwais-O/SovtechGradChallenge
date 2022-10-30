import "./AboutContentStyles.css"
import React from 'react'
import pic1 from "../assets/prime.jpg"
import pic2 from "../assets/prime.jpg"


  /*
    Created a route page for about section
    
    Divided it into first and second and entered respective info for each

    Divided content so it could be styled next to each other
  */

const AboutContent = () => {
  return (
  
    <div className="about">
        <div className="first">
          
            
            <h1>About me</h1>
            <p>Hi! My name is Uwais Osman. I am an enthusiastic and self-driven programmer who is consistently striving to learn more and expand my skills in the field of Software development and design. I am very passionate about creating new and innovative ideas as well as solutions to everyday problems through the medium of code. Software development has ushered society towards a better and stronger future, I aim to use my growing knowledge as a means to stand at the forefront of human advancement and am excited to contribute my ideas and skills to the already diverse pool of intelligent thinkers.
            <br /><br />
            In my past time I find comfort in reading and write. My hobbies include designing and research as well working out. I am someone who loves learning, especially when it comes to something I am extremely passionate about -Software.
            <br /><br/>
            <h1>My Story</h1>
            <p>
            I have always been interested in creating my own programs and bringing my ideas to life for as long as I can remember. After completing one year of a BSC in Physics at the University of Pretoria, I applied for a transfer to Computer Science to fulfil my goal of becoming a software engineer. However , after getting accepted, I was unable to continue my studies due to finances. Thereafter I decided to invest my savings into pursuing a Software Engineering qualification with Hyperiondev, as I was not ready to give up on my dreams.
            </p>

            </p>
        </div>
        <div className="second">
            <h1>Sovtech Sovtech Sovtech !</h1>
            <p>At the beginning of my software developer journey, I was immediately attracted to Sovtech. After finding out and researching the company from reading about them in a HyperionDev blog post I knew that Sovtech would be my first choice after graduating. The culture and values resonated with me as a social and hardworking person, from the specs to work environment I felt a strong desire to be part of this ‘always-hiring’ family. <br /><br /> 
I would love an opportunity to be a part of this company as I would love to learn and expand my skills. I want to be able to prove myself worthy of the title Software Developer. I was also attracted to the tech stack utilized by the company. As someone who’s only prior experience has been Java, Python and basic HTML and CSS, I found the task of designing this webpage both challenging and fascinating. I am eager to dive further and grasp firmly onto technologies like JavaScript and React. <br /><br />
My goal is to translate and increase my software skills into the world of work and attempt to become the ideal employee. I would love a chance to be part of something as innovative and progressive as Sovtech. <br /><br />
I consistently aim to produce my best and excel in this field and am excited and grateful for the opportunity to apply and showcase my portfolio for consideration. I am motivated by success and made stronger by mistakes. 
</p>
        </div>

        </div>
    
  )
}

export default AboutContent