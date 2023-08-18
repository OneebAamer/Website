import Card from "react-bootstrap/Card";

export function Projects() {
    return (
        <div className='inline-grid grid-cols-2 md:grid-cols-3 gap-4'>
            <Card className={"w-1/2"} onClick= {() => window.open("https://github.com/shivam-909/seg-large-group/tree/master")}>
                <Card.Body>
                    <Card.Title>Job Finder Website</Card.Title>
                    <Card.Text>
                        Created a job finder website with an optimised search algorithm, and using REST API. Authentication handled with JWT Tokens and Unit Testing done with React Testing Library and Jest. Implemented AWS S3 for files and Firebase for database storage.
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
    );
}