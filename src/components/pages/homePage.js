import Typing from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function HomePage() {
    return (
      <div className='textStuff'>
        <Parallax pages={3.9}>
          <ParallaxLayer className='infrontClass' speed={2.5} blur={5}>
            <div className='titleText'>
             <displayName>
             <Typing
               sequence={["Hi, I'm Oneeb"]}
               speed={10}
             />
             </displayName>
           </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' factor={1.1} offset={1.5} speed={1} style={{ backgroundColor: '#0bc2f0b6' }}>
            <bigText>
              About Me
            </bigText>
            <aboutText>
            I am a Computer Science student completing an MSci at King's College London.
            </aboutText>
            <aboutText2>
            So how did this all begin? I started off by programming plugins for a video game called Minecraft in PHP.
            After a couple years of doing so, I became interested in game development. I began programming my own games in Unity written in C#, one of which I published recently on the Google Play Store.
            I am now currently learning web-development with modules such as React and Node.js (this website is an example) and
            I have learnt Python and Java fluently in school and university. Ever since I began coding plugins for Minecraft, I knew that I wanted to pursue a career in Computer Science, as a software engineer.
            </aboutText2>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={2.5} factor={1.3} speed={1} style={{ backgroundColor: '#2d3748bd' }}>
            <bigText>
              Projects
            </bigText>
            <div className='projectCards'>
              <Card onClick= {() => window.open("https://github.com/OneebAamer/website")}>
                <Card.Body>
                  <Card.Title>Website</Card.Title>
                  <Card.Text>
                    Created this website using Node.js and React. Took around 4 days to complete, and used 
                    Netlify to host the domain.
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
              <Card onClick= {() => window.open("https://github.com/OneebAamer/TNTRun-V1.0.0")}>
                <Card.Body>
                  <Card.Title>TNTRun plugin</Card.Title>
                  <Card.Text>
                  Used PocketMine-MP API to create my own plugin for players to use in online games. 
                  Written in PHP, The code allows players to play a mini-game where they must keep running to avoid losing.
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
              <Card onClick= {() => window.open("https://github.kcl.ac.uk/K21003974/PuttHack")}>
                <Card.Body>
                  <Card.Title>Property Viewer</Card.Title>
                  <Card.Text>
                    Worked in a group of 4 to design a simple property viewer application. 
                    Written in Java using modules such as JavaFX to design the UI and implement features such as dark mode and integrated maps.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={3.3} speed={1}>
            <bigText>
              Contact Me
            </bigText>
            <aboutText>
              Vist my <a id="link" href="https://www.linkedin.com/in/oneeb-aamer">LinkedIn</a>, <a id="link" href="https://github.com/OneebAamer">Github</a> or Email me: oneeb47@gmail.com
            </aboutText>
          </ParallaxLayer>
          <ParallaxLayer factor={4} speed={0.5} blur={0}>
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
              <li id="floats">//</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">//</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">//</li>
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
              <li id="floats">//</li>
              <li id="floats">||</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">&gt;</li>
              <li id="floats">%</li>
              <li id="floats">&amp;&amp;</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">=&gt;</li>
              <li id="floats">//</li>
              <li id="floats">||</li>
              <li id="floats">/=</li>
              <li id="floats">&lt;/&gt;</li>
              <li id="floats">-</li>
              <li id="floats">%</li>
              <li id="floats">==</li>
              <li id="floats">@</li>
              <li id="floats">#</li>
              <li id="floats">//</li>
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
  