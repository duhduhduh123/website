import { Col, Container, Row } from "react-bootstrap";

export const Projects = () => {

  const projects = [
    {
      title: "Something here",
      description: "designed blah ",
      imgUrl: projectsImgageURL,
    },
    {
      title: "b",
      description: "designed blah ",
      imgUrl: projectsImgageURL,
    },
    {
      title: "c",
      description: "designed blah ",
      imgUrl: projectsImgageURL,
    },
  ];

  return(
     <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Text dummy goes here</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant = "pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab Three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((projject, index) => {
                      return(
                        <p>{projects.title}</p>
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
     </section>
  )
}