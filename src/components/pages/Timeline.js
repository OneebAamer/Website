import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export function Timeline() {
    let expediaLogo = <img src="https://companieslogo.com/img/orig/EXPE-ec99ca4b.png?t=1648150031" alt="Expedia Logo" height={60} width={60}/>
    let jpMorganLogo = <img src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg" alt="JPMorgan Logo" height={60} width={60}/>
    let GELogo = <img src="https://media.licdn.com/dms/image/D4E0BAQGdQ5_kKKfGOA/company-logo_200_200/0/1681642473348?e=1700697600&v=beta&t=JMktU3xGZEHGpqnGmL_VVK5sSGlZg6jkNW0BLkARVKk" alt="Green Enterprise Logo" height={60} width={60}/>
    let KCLLogo = <img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lnzscox1r0sfx8ttlujt" alt="KCL Logo" height={60} width={60}/>
    let UnityLogo = <img src="https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png" alt="Unity Logo" height={57} width={55}/>

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            />
            <VerticalTimelineElement
                date="2014 - 2016"
                dateClassName={"text-white"}
                iconStyle={{ background: '#ff9900', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Freelancing</h3>
                <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                <p>
                    Started my coding journey by programming mods for a video game called Minecraft, writing in PHP.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2020 - 2022"
                dateClassName={"text-white"}
                iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                icon={UnityLogo}
            >
                <h3 className="vertical-timeline-element-title">Unity Game Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                <p>
                    Began developing games in C# using Unity's Game Engine, and even published one to the store. Worked with Unity's Relay System to integrate multiplayer with Peer to Peer connections
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2021 - 2024"
                dateClassName={"text-white"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={KCLLogo}
            >
                <h3 className="vertical-timeline-element-title">BSc Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">King's College London</h4>
                <p>
                    Currently enrolled at King's College London, studying Computer Science and on track for a first.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="October 2022"
                dateClassName={"text-white"}
                icon={jpMorganLogo}
            >
                <h3 className="vertical-timeline-element-title">Code for Good Hackathon</h3>
                <h4 className="vertical-timeline-element-subtitle">J.P. Morgan Chase & Co, London</h4>
                <p>
                    • Led a group of 6 to design a mobile app for a charity organization within 24 hours.
                </p>
                <p>
                    • Used Expo and React-Native for frontend deployment onto mobile devices. Python and Django used for
                    the Backend, with REST API to connect to the frontend.
                </p>
                <p>
                    • Integrated AWS EC2 to host backend connection and SQLite for the database.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="August 2022 - January 2023"
                dateClassName={"text-white"}
                icon={GELogo}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Green Enterprise</h4>
                <p>
                    Worked on their project, Opus. Started working on frontend functionality, eventually moving onto backend and implementing AWS S3 file storage to store user images.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Summer of 2023"
                dateClassName={"text-white"}
                iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff', borderRadius: '50%' }}
                icon={expediaLogo}
            >
                <h3 className="vertical-timeline-element-title">Mobile Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Expedia Group, London</h4>
                <p>
                    Learnt SwiftUI and Agile Development as well as gaining valuable insight into production environments.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}