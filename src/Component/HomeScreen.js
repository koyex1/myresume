import React from 'react'
import img2 from '../Assets/dp1.png'
import BackendSvg from '../Svg/BackendSvg'
import CircleSvg from '../Svg/CircleSvg'
import ContactMeSvg from '../Svg/ContactMeSvg'
import HtmlSvg from '../Svg/HtmlSvg'
import NewpaperSvg from '../Svg/NewpaperSvg'
import ServiceSvg from '../Svg/ServiceSvg'
import SkillsSvg from '../Svg/SkillsSvg'
import WorksSvg from '../Svg/WorksSvg'
import 'boxicons'
import GraduateSvg from '../Svg/GraduateSvg'
import JavascriptSvg from '../Svg/JavascriptSvg'
import JavaSvg from '../Svg/JavaSvg'
import PythonSvg from '../Svg/PythonSvg'
import { useInView } from 'react-intersection-observer';
import resume from '../Assets/OLUMIDE-KOYENIKAN.pdf'
import { Link } from 'react-router-dom'



function HomeScreen() {
    const [refTwo, inViewTwo ] = useInView({threshold: 0})


    const [refOne, inViewOne ] = useInView({threshold: 0})

    const [refThree, inViewThree ] = useInView({threshold: 0})


    const handleEdu = () =>{
        window.open("http://edudigitals.herokuapp.com", '_blank')
    }

    const handleCrazy = () =>{
        window.open("http://crazygraph.herokuapp.com" , '_blank' )
    }

    const handleGit = () =>{
        window.open("http://github.com/koyex1" , '_blank' )
    }

    const handleVideo = () =>{
        window.open("https://drive.google.com/file/d/1jfgQ_UjGHL5g_7-F09B-Okv0wYGcI8gD/view?usp=sharing" , '_blank' )

    }




    return (
        <>
            <div className="firstSection">
                <div className="centerFirstSection">
                    <div className="imageBackground">
                        <div class="custom-shape-divider-top-1627604960">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">     <path fill="#FFBC42" d="M16.1,-27.4C21.8,-24.6,27.9,-22.1,32.6,-17.6C37.3,-13.1,40.6,-6.5,41.2,0.4C41.9,7.3,39.9,14.6,35.8,20.2C31.8,25.9,25.6,29.8,19.3,34.5C13,39.2,6.5,44.5,-0.9,46C-8.2,47.5,-16.4,45.1,-22.7,40.4C-29,35.8,-33.4,28.8,-37.5,21.7C-41.7,14.5,-45.5,7.3,-43.6,1.1C-41.6,-5,-33.9,-10,-28.1,-14.3C-22.3,-18.5,-18.5,-21.9,-14.1,-25.5C-9.8,-29.1,-4.9,-32.8,0.2,-33.1C5.2,-33.4,10.4,-30.3,16.1,-27.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" ></path>              </svg>                        </div>
                        <img alt="olumide" src={img2} />
                    </div>
                    <div className="firstNameText">
                        <div className="firstBlock">Hi there</div>
                        <div className="secondBlock">I AM OLUMIDE</div>
                        <div className="thirdBlock">AUTOMATION/QA TESTER, FRONTEND AND BACKEND DEVELOPER</div>
                    </div>
                </div>
                <div className="socialMedia">
                    <div><Link onClick={handleGit} ><box-icon color="#FFBC42" size="lg" name='github' type='logo' ></box-icon></Link></div>
                    <div><box-icon color="#FFBC42" size="lg" type='logo' name='linkedin-square'></box-icon></div>
                </div>
            </div>

            <div className="secondSection">

                <div className="centerSecondSection">

                    <div className="aboutSvg">
                        <div className="itemsSvg">
                            <NewpaperSvg />
                        </div>


                        <div className="svgIndex">

                            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <path fill="#73D2DE" d="M14,-5.2C21.9,-1.2,34.7,4.8,35.2,10.3C35.8,15.9,24.1,20.9,15.9,19.7C7.7,18.6,2.9,11.2,-3.2,7.8C-9.4,4.4,-17,5,-22,0.1C-26.9,-4.7,-29.4,-15,-25.3,-18.1C-21.2,-21.2,-10.6,-17,-3.8,-14C3,-11,6.1,-9.1,14,-5.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>              </svg>

                        </div>
                    </div>



                    <div className="aboutMe">
                        <div className="title"> ABOUT ME</div>
                        <div className="aboutBody">
                            <p>Hi, I'm a Automation/QA Tester and Frontend/Backend developer, passionate about creating magic. I have a lot of experience in this area of work, with multiple quality projects</p>
                            <div>
                                <p>Name: Olumide Koyenikan</p>
                                <p>Email: olumide.koyenikan@gmail.com</p>
                                <p>4+ Years Experience</p>
                                <p>Several projects completed</p>
                                <p>Ready for all kinds of jobs</p>
                                <p>Rapid Learner</p>
                            </div>







                        </div>

                    </div>
                    <a href={resume} className="downloadCV" download>Download Resume</a>
                    <div className="divider"></div>

                </div>

            </div>


            <div className="secondSection">

                <div className="centerSecondSection">

                    <div className="aboutSvg">
                        <div className="itemsSvg">
                            <SkillsSvg />
                        </div>


                        <div className="svgIndex">

                            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <path fill="#73D2DE" d="M14,-5.2C21.9,-1.2,34.7,4.8,35.2,10.3C35.8,15.9,24.1,20.9,15.9,19.7C7.7,18.6,2.9,11.2,-3.2,7.8C-9.4,4.4,-17,5,-22,0.1C-26.9,-4.7,-29.4,-15,-25.3,-18.1C-21.2,-21.2,-10.6,-17,-3.8,-14C3,-11,6.1,-9.1,14,-5.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>              </svg>

                        </div>
                    </div>


                    <div className="aboutMe">
                        <div className="title"> SKILLS </div>
                        <div className="circleBars">
                            <div className="circleSvg">
                                <CircleSvg />
                                <div className="codeImages">
                                    <JavascriptSvg />
                                </div>

                            </div>
                            <div className="circleSvg">
                                <CircleSvg />
                                <div className="codeImages">
                                    <JavaSvg />
                                </div>

                            </div>
                            <div className="circleSvg">
                                <CircleSvg />
                                <div className="codeImages">
                                    <PythonSvg />
                                </div>

                            </div>


                        </div>

                        <div className="rectBars">
                            <div className="labels">Angular</div>
                            <div className="rectRail  ">
                                <div className="rectMeter Angular "></div>
                            </div>
                            <div className="labels">40%</div>

                        </div>
                        <div className="rectBars">
                            <div className="labels">Node</div>
                            <div className="rectRail ">
                                <div className="rectMeter Node "></div>
                            </div>
                            <div className="labels">95%</div>

                        </div>
                        <div className="rectBars">
                            <div className="labels">React</div>
                            <div className="rectRail ">
                                <div className="rectMeter  React"></div>
                            </div>
                            <div className="labels">95%</div>

                        </div>


                        <div className="rectBars">
                            <div className="labels">springBoot</div>
                            <div className="rectRail ">
                                <div className="rectMeter springBoot"></div>
                            </div>
                            <div className="labels">55%</div>

                        </div>

                        <div className="rectBars">
                            <div className="labels">MySql</div>
                            <div className="rectRail ">
                                <div className="rectMeter MySql"></div>
                            </div>
                            <div className="labels">95%</div>

                        </div>

                        <div className="rectBars">
                            <div className="labels">MongoDB</div>
                            <div className="rectRail ">
                                <div className="rectMeter MongoDB"></div>
                            </div>
                            <div className="labels">95%</div>

                        </div>

                        <div className="rectBars">
                            <div className="labels">Selenium</div>
                            <div className="rectRail  ">
                                <div className="rectMeter Selenium "></div>
                            </div>
                            <div className="labels">90%</div>

                        </div>

                        <div className="rectBars">
                            <div className="labels">RestAssured</div>
                            <div className="rectRail  ">
                                <div className="rectMeter RestAssured "></div>
                            </div>
                            <div className="labels">90%</div>

                        </div>

                        <div className="rectBars">
                            <div className="labels">Appium</div>
                            <div className="rectRail  ">
                                <div className="rectMeter Appium "></div>
                            </div>
                            <div className="labels">60%</div>

                        </div>


                        <div>
                            <div style={{ marginTop: '7px' }} className="smallSvg center" >
                                <GraduateSvg />
                            </div>
                            <div className="educationContainer">

                                <div>University of Benin</div>
                                <div>
                                    <p>Electrical/Electronic Engineering</p>
                                    <p>2012 - 2017</p>
                                    <p> First Class Honors</p>
                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="divider"></div>

                </div>

            </div>

            <div className="secondSection">

                <div className="centerSecondSection">

                    <div className="aboutSvg">
                        <div className="itemsSvg">
                            <ServiceSvg />
                        </div>


                        <div className="svgIndex">

                            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <path fill="#73D2DE" d="M14,-5.2C21.9,-1.2,34.7,4.8,35.2,10.3C35.8,15.9,24.1,20.9,15.9,19.7C7.7,18.6,2.9,11.2,-3.2,7.8C-9.4,4.4,-17,5,-22,0.1C-26.9,-4.7,-29.4,-15,-25.3,-18.1C-21.2,-21.2,-10.6,-17,-3.8,-14C3,-11,6.1,-9.1,14,-5.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>              </svg>

                        </div>
                    </div>


                    <div className="aboutMe">
                        <div className="title"> SERVICES </div>
                        <div>
                            <div className="serviceItem">
                                <div style={{ marginTop: '7px' }} className="smallSvg">
                                    <HtmlSvg />
                                </div>
                                <div>
                                    <div > FRONTEND DESIGN</div>
                                    <div className="servicesDetails">The service that I offer is of high quality</div>
                                </div>

                            </div>
                            <div className="serviceItem">
                                <div style={{ marginTop: '17px' }} className="smallSvg">
                                    <BackendSvg />
                                </div>
                                <div>
                                    <div  >  BACKEND DEVELOPMENT</div>
                                    <div className="servicesDetails">The service that I offer is of high quality garnered from several complex projects with complex architectures using different languages</div>
                                </div>

                                

                            </div>
                            <div className="serviceItem">
                                <div style={{ marginTop: '17px' }} className="smallSvg">
                                    <BackendSvg />
                                </div>
                                

                                <div>
                                    <div  >  AUTOMATION/QA TESTING</div>
                                    <div className="servicesDetails">Experience Testing Web, Mobile, Desktop apps using testing tools like JIRA, Jmeter, Database Management tools, TestRail, GitHub, Git Bash, Selenium, Gherkin (Cucumber), Allure (Test Analysis Tool), BrowserStack, TeamViewer, POSTMAN, SOAPUI, PuTTY, powershell, Manual Test Exectution tools for easy test documentation, and a Private End-to-End Test Execution platforms.</div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="divider"></div>

                </div>

            </div>

            <div className="secondSection">

                <div className="centerSecondSection">
                    <div className="aboutSvg">

                        <div className="itemsSvg">
                            <WorksSvg />
                        </div>


                        <div className="svgIndex">

                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#73D2DE" d="M11.7,-20.5C12,-20,7.1,-10.6,12.3,-5.7C17.5,-0.8,32.8,-0.4,39.4,3.8C46,8,43.9,16.1,36.5,17.1C29.1,18.2,16.3,12.2,9.4,15.9C2.4,19.6,1.2,32.9,-2.5,37.3C-6.3,41.8,-12.6,37.2,-14.5,30.6C-16.4,24,-13.9,15.3,-13.6,9.8C-13.3,4.4,-15.2,2.2,-20.1,-2.8C-24.9,-7.8,-32.7,-15.6,-32.6,-20.4C-32.5,-25.2,-24.6,-27.1,-17.9,-23.8C-11.1,-20.6,-5.6,-12.3,0,-12.4C5.6,-12.5,11.3,-20.9,11.7,-20.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" >
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="aboutMe">
                        <div className="title"> WORKS </div>
                        <div>

                            <div className="projectOne">
                                <div ref={refOne}  className={"centerProject"}>
                                    React JS
                                </div>
                                <div className="numberTag">
                                <div>01</div>
                                    <div className={inViewOne?"popover":"hide"}>
                                         <Link onClick={handleCrazy} >view</Link>
                                        
                                    </div>
                                </div>
                                <div ref={refOne}></div>

                            </div>
                            <div className="projectOne">
                                <div  className="centerProject">
                                    React & Node JS
                                </div>
                                <div className="numberTag">
                                    <div>02</div>
                                    <div className={inViewTwo?"popover":"hide"}>
                                         <Link onClick={handleEdu} >view</Link> 
                                        
                                    </div>

                                </div>
                                    <div ref={refTwo}></div>
                            </div>

                            <div className="projectOne">
                                <div  className="centerProject">
                                Java Selenium + RestAssured + DB Testing (Using Jenkins, ReactJS, SpringBoot Websocket, Allure, TestNG, cucumber BDD and GitHub)
                                </div>
                                <div className="numberTag">
                                    <div>03</div>
                                    <div className={inViewThree?"popover":"hide"}>
                                         <Link onClick={handleVideo} >view</Link> 
                                        
                                    </div>

                                </div>
                                <div ref={refThree}></div>

                            </div>

                        </div>


                    </div>
                    <div className="divider"></div>

                </div>

            </div>

            <div  className="secondSection">
                <div ></div>

                <div className="centerSecondSection">

                    <div className="aboutSvg">
                        <div className="itemsSvg">
                            <ContactMeSvg />
                        </div>


                        <div className="svgIndex">

                            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <path fill="#73D2DE" d="M14,-5.2C21.9,-1.2,34.7,4.8,35.2,10.3C35.8,15.9,24.1,20.9,15.9,19.7C7.7,18.6,2.9,11.2,-3.2,7.8C-9.4,4.4,-17,5,-22,0.1C-26.9,-4.7,-29.4,-15,-25.3,-18.1C-21.2,-21.2,-10.6,-17,-3.8,-14C3,-11,6.1,-9.1,14,-5.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>              </svg>

                        </div>
                    </div>


                    <div className="aboutMe">
                        <div className="title"> CONTACT ME</div>
                        <div className="aboutBody">
                            <p>Email: olumide.koyenikan@gmail.com</p>
                            <p>Tel: +2349063303923</p>
                            <p>Benin city, Nigeria</p>

                        </div>


                    </div>
                </div>

            </div>


        </>
    )
}

export default HomeScreen
