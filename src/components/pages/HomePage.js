import {TypeAnimation} from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {Timeline} from "./Timeline";
import {Projects} from "./Projects";
function HomePage() {
    return (
      <div>
        <Parallax pages={4.9}>
          <ParallaxLayer className='infrontClass' speed={2.5} blur={5}>
            <div className='titleText'>
             <TypeAnimation
               sequence={["Hi, I'm Oneeb"]}
               speed={10}
             />
           </div>
          </ParallaxLayer>
          <ParallaxLayer speed={-3} factor={1}>
            <div className={"rotate-180 text-white absolute bottom-0 text-[10vmin] w-full"}>
              <div className={"left-[50%] absolute w-full"}>
                ^
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' factor={2.5} offset={1.5} speed={1} style={{ backgroundColor: '#2d3748bd' }}>
            <div className={"bigText"}>
              About Me
            </div>
            <div className={""}>
              <Timeline/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={3} factor={1.3} speed={1} style={{ backgroundColor: '#2d3748bd' }}>
            <div className={"bigText"}>
              Projects
            </div>
            <Projects/>
          </ParallaxLayer>
          <ParallaxLayer className='infrontClass' offset={4} speed={1} factor={0.1}>
            <div className={"bigText"}>
              Contact Me
            </div>
            <div>
              <div className={"contactText"}>
                Vist my <a id="link" href="https://www.linkedin.com/in/oneeb-aamer">LinkedIn</a>, <a id="link" href="https://github.com/OneebAamer">Github</a> or Email me: oneeb47@gmail.com
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer factor={4} speed={0.1} blur={10}>
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
  