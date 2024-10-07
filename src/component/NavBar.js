import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/network.svg';
import navBut1 from '../assets/img/instagram.svg';
import navBut2 from '../assets/img/icon2.png';
import navBut3 from '../assets/img/facebook.svg';






export const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects]' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/david.lyms/?locale=制作一个克罗地亚中学教員免許状联系%7B威信%2BTG%2F飞机%3A%40buth2788%7DYImGk%3F%3F%3F%3F%3F%3Fѧ%3F%3FƾmGkEi&hl=am-et" target="_blank" rel="noopener noreferrer"><img src={navBut1} alt="" /></a>
              <a href="https://www.linkedin.com/in/david-brandon-lym-33278a24b" target="_blank" rel="noopener noreferrer"><img src={navBut2} alt="" /></a>
              <a href="https://www.facebook.com/boil.boin.1/" target="_blank" rel="noopener noreferrer"><img src={navBut3} alt="" /></a>
            </div>
              <button className="vvd">
               <a href="mailto:davidbrandonlym@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>Contact Me</span>
               </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}