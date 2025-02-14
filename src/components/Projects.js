import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/car_rental.jpg";
import projImg2 from "../assets/img/Extra_hours.jpg";
import projImg3 from "../assets/img/image_editing.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const academicprojects = [
    {
      title: "Car Rental",
      description: " Sbring Boot & UML & React ",
      imgUrl: projImg1,
    },
    {
      title: "Education System ",
      description: "PHP & MySQL ",
      imgUrl: projImg2,
    },
    {
      title: "Images Editing",
      description: "Python",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const professionalprojects = [
    {

    }
  ]
  const personalprojects = [
    {

    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 
              "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section, you will find a selection of 
                    projects that showcase my skills and experience 
                    across different domains. I have categorized them 
                    into three main types:<br/><br/>

                    1-Academic Projects – These projects are related to
                     my education, university coursework, and overall
                      academic journey. They reflect my learning 
                      process, problem-solving abilities, and technical
                       knowledge gained throughout my studies.<br/><br/>

                    2-Professional Projects – This category includes 
                    projects I have worked on during internships or 
                    jobs. They demonstrate my ability to contribute 
                    to real-world applications, collaborate with teams,
                     and apply industry best practices in a 
                     professional setting.<br/><br/>

                    3-Personal Projects – These are projects I have 
                    developed in my free time out of curiosity and 
                    passion for technology. They highlight my 
                    creativity, self-motivation, and willingness to 
                    explore new ideas and technologies beyond academic
                     or professional requirements.<br/><br/>
                    </p>
                <Tab.Container id="projects-tabs" 
                defaultActiveKey="first">
                  <Nav variant="pills" 
                  className="nav-pills mb-5 justify-content-center 
                  align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Academic Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professional Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className=
                  {isVisible ? "animate__animated animate__slideInUp" 
                  : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          academicprojects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          professionalprojects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          personalprojects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
