import { Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from '../assets/img/javascript-js.svg';
import reacting from '../assets/img/react-javascript-js-framework-facebook.svg';
import snake from '../assets/img/python.svg';
import cafe from '../assets/img/java-original-wordmark.svg';
import gamec from '../assets/img/nintendo-gamecube.svg';



import colorSharp from '../assets/img/blurred-coloured-background_1107-154.jpg.avif';


export const Skills = () => {
  const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };

  return(
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills/Hobbies
              </h2>
              <p> put something here look and see</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reacting} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={snake} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={cafe} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={gamec} alt="Image" />
                  <h5>SmashBros Melee</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>

      </Container>
      <img className="background-image-left" src ={colorSharp} />
    </section>
  )
}