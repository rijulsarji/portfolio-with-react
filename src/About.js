import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
        
        useEffect(() => {
            
            document.getElementById("menu3").style.right = "-360px";
            
        }, [])
        
        function openn() {
            document.getElementById("menu3").style.transition = "right 0.5s linear";
            document.getElementById("menu3").style.right= '0px';
        }

        function closee() {
            document.getElementById("menu3").style.transition = "right 0.5s linear";
            document.getElementById("menu3").style.right= '-360px';
        }

    return (
        <div id="body3">

            <div className="top3">
                <div className="logo3">
                    <div className="rs3" id="rs3">
                        RS.
                    </div>
                </div>

                <div className="project"><a href="#projecttab"></a></div>
                
                <div className="menuButton3" onClick={openn} >

                    {/* <!-- button animations --> */}
                    <div className="line3"></div>
                    <div className="line3"></div>
                    <div className="line3"></div>
                </div>
            </div>

            <div id="menu3" >
                <div className="navbar3" >

                    <div className="cross3" onClick={closee} >
                        <i className="fas fa-times" ></i>
                    </div>

                    <Link to="/" className="links3" id="link31">Home</Link>
                    <Link to="/achievement" className="links3">My Achievements</Link>
                    <Link to="#titleHeading" onClick={closee} className="links3">About Me</Link>

                    {/* <!-- Social media buttons --> */}

                    <div className="social3"> 

                        <a href="https://github.com/rijulsarji/" rel="noopener noreferrer" id="social31" >
                        <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/rijul-sarji/" rel="noopener noreferrer" id="social32" >
                        <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://www.instagram.com/rijul_sarji/" rel="noopener noreferrer" id="social33" >
                        <i className="fab fa-instagram"></i>
                        </a>

                    </div>
                </div>
            </div>

            <p className="title3" id="titleHeading">About Me</p>

            <div className="text3">
                <div className="intro3">
                    <span className="subtitle">Hey Buddy</span>
                    <h1>My name is Rijul Sarji. <br/>I make projects.</h1>
                    <p>I am a first year student currently pursuing B.Tech in Computer Science at SRM Institute of Science & Technology, Kattankulathur. I reside in Delhi. I am well exposed to front end UI/UX as well as back end python at an intermediate level. <br/><br/> As a front end designer, I like to set forth the optimum experience to the end user, and as a back end developer, I provide best methods for efficiency. I have the zeal to solve complex problems as well. <br/><br/> You can find me on a turf playing football or at Devfolio Hackathons.</p>
                </div>

                <div className="contact">
                    <span className="subtitle">Get In Touch</span>
                    <div id="contactDiv" >
                    <span className="details" id="detailsEmail">rijulsarji@gmail.com</span>
                    </div>
                    <div id="contactSubtitle"></div>
                    <span className="subtitle" id="subtitleSpan" >Miscellaneous</span>
                    <br/><br/>
                        <span className="details" >
                        <p id="detailsP" >
                            Up to the minute with the latest tech. <br/>
                            Love listening old rock and soft pop. <br/>
                            Always perceiving and observing for new innovations. <br/>
                            Enthusiastic about cars. <br/>
                        </p>
                        </span>
                    </div>
                </div>
            </div>

        // </div>
    )
}

export default About;