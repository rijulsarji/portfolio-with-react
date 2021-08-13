import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import './home.css';
import CardComponent from './CardComponent.js';

// skill images
import Android from './IMAGES/Skill Icons/Android.png'
import Hackathon from './IMAGES/Skill Icons/Hackathon.png';
import Hackerrank from './IMAGES/Skill Icons/Hackerrank.png';
import Python from './IMAGES/Skill Icons/Python.png';
import WebDev from './IMAGES/Skill Icons/WebDev.png'

// project images
import Amanda from './IMAGES/Project Logos/Amanda.png';
import pyGame from './IMAGES/Project Logos/pyGame.png';
import Cindy from './IMAGES/Project Logos/Cindy.png';
import MoodyAI from './IMAGES/Project Logos/MoodyAi.png';
import Granny from './IMAGES/Project Logos/Grannys.png';
import Todo from './IMAGES/Project Logos/Todo.png';
import Loader from "./Loader";

function Home() {

        const [hide, setHide] = useState("none");
        var x=sessionStorage.getItem("isLoaded");
        console.log(x);

        useEffect(() => {
            if(x==0) {
                setTimeout(() => {
                    setHide("body1")
                }, 2900)
            }
            else {
                setHide("body1");
            }
        }, [])
                
        useEffect(() => {
            document.getElementById("menu1").style.right = "-360px";
        }, [])

        function openn() {
            document.getElementById('menu1').style.transition = "right 0.5s linear";
            document.getElementById('menu1').style.right= '0px';
        }

        function closee() {
            document.getElementById('menu1').style.transition = "right 0.5s linear";
            document.getElementById('menu1').style.right= '-360px';
        }

    return(
        <div>
            <Loader />
        <div id={hide}>
            <div className="top1">
                <div className="logo1">
                    <div className="rs1" id="rs1">
                        RS.
                    </div>
                </div>

                <div className="project"><a href="#projecttab"></a></div>
                
                <div className="menuButton1" onClick={openn} >

                    {/* <!-- button animations --> */}
                    <div className="line1"></div>
                    <div className="line1"></div>
                    <div className="line1"></div>
                </div>
            </div>

            <div id="menu1">
                <div className="navbar1" >

                    <div className="cross1" onClick={closee} >
                        <i className="fas fa-times" ></i>
                    </div>

                    <Link to="#bgimg" className="links1" onClick={closee} id="link11">Home</Link>
                    <Link to="/achievement" className="links1">My Achievements</Link>
                    <Link to="/about" className="links1">About Me</Link>

                    {/* <!-- Social media buttons --> */}

                    <div className="social1"> 

                        <a href="https://github.com/rijulsarji/" rel="noopener noreferrer" id="social11" >
                        <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/rijul-sarji/" rel="noopener noreferrer" id="social12" >
                        <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://www.instagram.com/rijul_sarji/" rel="noopener noreferrer" id="social13" >
                        <i className="fab fa-instagram"></i>
                        </a>

                    </div>
                </div>
            </div>
    
            {/* <!-- background image --> */}
            <div className="bgimage" id="bgimg">
                <div className="intro">
                    <div id="myIntro"><p>Hello there ! I am Rijul.  <br />

                    Wanna know more about me? <br />
                    You have come to the right place !
                    </p></div>
                    <div className="aboutt"><Link to='/about'> <i className="fas fa-long-arrow-alt-right"></i> About Me </Link>
                    </div>

                    <div className="down">
                        <div>
                            <a href="#skills">
                            <i className="fas fa-arrow-down"></i> Scroll to know more</a>
                        </div>
                        <div id="projectLink" >
                            <a href="#projects"> <i className="fas fa-arrow-down"></i> My Projects</a>
                        </div>
                    </div>
                </div>
            </div>

            <p  id="skills"></p>

            <p className="title">My Basket of Triumphs</p>    
            
            <div className="skillset">
                <div className="skill" id="hackerrank">
                    <img src={Hackerrank} alt="" />
                    <br />
                    <h1>Competitive Coding</h1>
                    <br />
                    <p>Earned HackerRank badges in multiple languages</p>
                </div>

                <div className="skill" id="python" >
                    <img src={Python} alt="" />
                    <br />
                    <h1>Python Language</h1>
                    <br />
                    <p id="pythonP">Well acquainted with basic libraries in python</p>
                </div>

                <div className="skill" id="android">
                    <img src={Android} alt="" />
                    <br />
                    <h1 id="androidH1">Android App Development</h1>
                    <br />
                    <p>Experience in developing apps using Android Studio and Java</p>
                </div>
                
                <div className="skill" id="web">
                    <img src={WebDev} alt="" />
                    <br />
                    <h1>Web Development</h1>
                    <br />
                    <p id="webP">Experience in designing webpages using HTML, CSS and JavaScript</p>
                </div>

                <div className="skill" id="hackathon">
                    <img src={Hackathon} alt="" />
                    <br />
                    <h1 id="hackathonH1">Hackathon Participation</h1>
                    <br />
                    <p>Participated in three Hackathons so far, and won 2nd prize in one of them</p>
                </div>

                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                
            </div>



            <p  id="projects"></p>

            <p className="title" id="projecttab" >My Projects</p>

            <div>
                <div className="card-container">
                    
                    <CardComponent 
                        projTitle = "Amanda - The Voice Assistant"
                        projDate = "September 2020"
                        imgLink = {Amanda}
                        tags1 = "Python"
                        tags2 = "gTTS"
                        cardNum = '1'
                    />


                    {/* <!-- repeat the card here. --> */}

                    <CardComponent 
                        projTitle = "2D Shooting Game"
                        projDate = "October 2020"
                        imgLink = {pyGame}
                        tags1 = "Python"
                        tags2 = "Pygame"
                        cardNum = '2'
                    />

                    


                    <CardComponent 
                        projTitle = "Moody AI"
                        projDate = "February 2021"
                        imgLink = {MoodyAI}
                        tags1 = "Python"
                        tags2 = "Sound Recognition"
                        cardNum = '3'
                    />




                    <CardComponent 
                        projTitle = "BMI Calculator"
                        projDate = "March 2021"
                        imgLink = {Cindy}
                        tags1 = "Java"
                        tags2 = "Android Studio"
                        cardNum = '4'
                    />

                    

                    <CardComponent 
                        projTitle = "To Do List"
                        projDate = "April 2021"
                        imgLink = {Todo}
                        tags1 = "HTML & CSS"
                        tags2 = "JavaScript"
                        cardNum = '6'
                    />

                    <CardComponent 
                        projTitle = "Granny's Advice"
                        projDate = "June 2021"
                        imgLink = {Granny}
                        tags1 = "React"
                        tags2 = "HTML & CSS"
                        cardNum = '5'
                    />

                </div>
            </div>
            
            <div className="bottom">
                <div><p>Copyright <i className="far fa-copyright"></i> 2021</p></div>
                <div><a href="#bgimg" id="goUpward">&uarr;Back To Top</a></div>
                <div id="experience"><a href="https://forms.gle/C4Etns3e4jEupDni8" rel="noopener noreferrer">How was the experience?</a></div>
            </div>


        </div>
        </div>
    )
}

export default Home;