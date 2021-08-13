import React, {useEffect} from 'react';
import './achievement.css';

// hackerrank logos
import cpp from './IMAGES/Achievement/CPP.png';
import cLang from './IMAGES/Achievement/C-language.png';
import hackathon from './IMAGES/Achievement/Hack 2.png';
import techCrawler from './IMAGES/Achievement/Hackathon.png';
import Nasa from './IMAGES/Achievement/Nasa Hack.png';
import Nielit from './IMAGES/Achievement/Nielit.png';
import PPS from './IMAGES/Achievement/PPS.png';
import python from './IMAGES/Achievement/Python.png'
import { Link } from 'react-router-dom';

function Achievement() {
        
        useEffect(() => {
            document.getElementById("menu2").style.right = "-360px";
            
        }, [])
        
        function openn() {
            document.getElementById('menu2').style.transition = "right 0.5s linear";
            document.getElementById('menu2').style.right= '0px';
        }

        function closee() {
            document.getElementById('menu2').style.transition = "right 0.5s linear";
            document.getElementById('menu2').style.right= '-360px';
        }
    

    return(
        <div id="body2">

            <div className="top2">
                <div className="logo2">
                    <div className="rs2">
                        RS.
                    </div>
                </div>

                <div className="project"><a href="#projecttab"></a></div>

                <div id="button2" onClick={openn} className="menuButton2" >
                    {/* <!-- button animations --> */}
                    <div className="line2"></div>
                    <div className="line2"></div>
                    <div className="line2"></div>
                </div>
            </div>


            <div id="menu2">
                {/* <!-- Right Nav Bar --> */}
                <div className="navbar">

                    <div className="cross2" onClick={closee}>
                        <i className="fas fa-times" ></i>
                    </div>

                    <Link to="/" className="links2" id="link21">Home</Link>
                    <Link to="#goBack" onClick={closee}className="links2">My Achievements</Link>
                    <Link to="/about"  className="links2">About Me</Link>

            {/* <!-- Social media buttons --> */}
                    <div className="social2"> 

                        <a href="https://github.com/rijulsarji/" rel="noopener noreferrer" id="social21" >
                        <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/rijul-sarji/" rel="noopener noreferrer" id="social22" >
                        <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://www.instagram.com/rijul_sarji/" rel="noopener noreferrer" id="social23" >
                        <i className="fab fa-instagram"></i>
                        </a>

                    </div>
                </div>
            </div>

            <p className="title2" id="goBack">My Achievements</p>

            <div className="board">
                <div className="achievement">
                    <div className="hackerrank">
                        <div className="badge">
                            <img src={cpp} alt="" />
                            <p>5 <i className="fas fa-star"></i> <br /> C++</p>
                        </div>

                        <div className="badge">
                            <img src={PPS} alt="" />
                            <p id="star3">3 <i className="fas fa-star"></i> <br /> Problem Solving</p>
                        </div>

                        <div className="badge">
                            <img src={python} alt="" />
                            <p>3 <i className="fas fa-star"></i> <br /> Python</p>
                        </div>

                        <div className="badge">
                            <img src={cLang} alt="" />
                            <p id="CStar">3 <i className="fas fa-star"></i> <br /> C Language</p>
                        </div>

                    </div>
                </div>
                <div className="achievement">
                    <div className="hack">
                        <img src={techCrawler} alt=""/>
                        <p>TechCrawler Hackathon <br /> 2nd Prize</p>
                    </div>
                </div>
                <div className="achievement">
                    <div className="aarhack">
                        <img src={hackathon} id="hack2" alt=""/>
                        <p>Participated in Hybrid Hackathon</p>
                    </div>
                </div>
                <div className="achievement">
                    <div className="nasahack">
                        <img src={Nasa} id="nasaHack" alt=""/>
                        <p id="nasaP">Participated in Nasa Space Apps Challenge</p>
                    </div>
                </div>
                <div className="achievement">
                    <img src={Nielit} id="nielit" alt=""/>
                    <p>NIELIT Python Certificate Course</p>
                </div>
            </div>

            </div>
    )
}

export default Achievement;