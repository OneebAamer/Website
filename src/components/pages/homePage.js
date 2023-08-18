import {TypeAnimation} from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Card from 'react-bootstrap/Card';
import {Timeline} from "./timeline";
function HomePage() {
    return (
      <div className='textStuff'>
        <Parallax pages={5}>
          <ParallaxLayer className='infrontClass' speed={2.5} blur={5}>
            <div className='titleText'>
             <displayName>
             <TypeAnimation
               sequence={["Hi, I'm Oneeb"]}
               speed={10}
             />
             </displayName>
           </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' factor={2.3} offset={1.5} speed={1} style={{ backgroundColor: '#2d3748bd' }}>
            <bigText>
              About Me
            </bigText>
            {/*<img src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2018/03/04123237/ps_expedia_01.jpg" alt="Expedia Logo"/>*/}
            <div className={"absolute top-[70%]"}>
              <Timeline/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={3} factor={1.3} speed={1} style={{ backgroundColor: '#2d3748bd' }}>
            <bigText>
              Projects
            </bigText>
            <div className='projectCards'>
              <Card onClick= {() => window.open("https://github.com/shivam-909/seg-large-group/tree/master")}>
                <Card.Body>
                  <Card.Title>Job Finder Website</Card.Title>
                  <Card.Text>
                    Created a job finding website with a functional search algorithm, and using REST API to connect a frontend and backend.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/NeuralNetwork")}>
                <Card.Body>
                  <Card.Title>Neural Network</Card.Title>
                  <Card.Text>
                    Programmed a basic Neural Network in Python using no external libraries other than Numpy. Uses techniques such as ReLU activation and Loss Regression to calculate the difference in outputs and expected results
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/website")}>
                <Card.Body>
                  <Card.Title>Website</Card.Title>
                  <Card.Text>
                    This website was created using React and Node.js. I used Netlify to host the domain.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/Tag")}>
                <Card.Body>
                  <Card.Title>Tag</Card.Title>
                  <Card.Text>
                    An online multiplayer game created in Unity using Unity's relay system. Written in
                    C# and learnt Server side and client side communications. 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/Quacky")}>
                <Card.Body>
                  <Card.Title>Quacky</Card.Title>
                  <Card.Text>
                    An endless arcade mobile game written in C# using Unity and published to the Google Play Store.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/Asteroid-Classifier")}>
                <Card.Body>
                  <Card.Title>Asteroid Classifier</Card.Title>
                  <Card.Text>
                  A simple Asteroid Classification Identifier written in Python. Solution for PacHack 2022. 
                  Designed an algorithm to predict an asteroid's class based on training data.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={4} speed={1}>
            <bigText>
              Contact Me
            </bigText>
            <aboutText>
              Vist my <a id="link" href="https://www.linkedin.com/in/oneeb-aamer">LinkedIn</a>, <a id="link" href="https://github.com/OneebAamer">Github</a> or Email me: oneeb47@gmail.com
            </aboutText>
          </ParallaxLayer>
          <ParallaxLayer factor={4} speed={0.5} blur={100}>
            <div>
            <ul id="elements">
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">!</li>
              <li id="floats">!</li>
              <li id="floats">*</li>
              <li id="floats">*</li>
              <li id="floats">*</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">=&gt;</li>
              <li id="floats">||</li>
              <li id="floats">/=</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">%</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">/=</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">%</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">$</li>
              <li id="floats">$</li>
              <li id="floats">$</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">+</li>
              <li id="floats">!</li>
              <li id="floats">!</li>
              <li id="floats">!</li>
              <li id="floats">*</li>
              <li id="floats">*</li>
              <li id="floats">*</li>
              <li id="floats">*</li>
            </ul>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
  export default HomePage;
  