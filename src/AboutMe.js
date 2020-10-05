import React from 'react';
import Selfie from './Images/Selfie.JPG'
import './AboutMe.css';

function AboutMe() {


    return (
        <div className="about" >
            <h2>Hi, I'm Katerina and I am a web developer.</h2>
            <img src={Selfie} alt="Katerina" />
            <h1>About Me</h1>
            <p>I am a web developer and student of the Engineering Flex bootcamp program at Thinkful. I enjoy coding because each project is a challenge and a puzzle for me.</p>
            <p>I am looking forward to working with a team of developers and honing my technical skills even further.</p>
            <p>When I am not coding, I am home with my small menagerie of animals. Outside of coding it is my goal to become a Court Appointed Special Advocate and help foster children.</p>



            
        </div>
    )

}

export default AboutMe;