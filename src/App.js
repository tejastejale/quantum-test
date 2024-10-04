import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormLabel,
} from "react-bootstrap";
import image from "./Assets/image.png";
import Testimonials from "./Components/Testimonials";
// SVG Components

const customStyles = `
  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .indicator-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    border: none;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .indicator-dot.active {
    background-color: #007bff;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #7C4DFF;
    transition: color 0.3s;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: #FF6B6B;
  }
  .btn-primary, .btn-outline-primary {
    transition: all 0.3s ease;
  }
  .btn-primary:hover {
    background-color: #FF6B6B;
    border-color: #FF6B6B;
  }
  .btn-outline-primary:hover {
    background-color: #7C4DFF;
    color: white;
  }
  .feature-card {
    background-color: #7C4DFF;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  .testimonial-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #7C4DFF;
  }
  .btn-primary {
    background-color: #7C4DFF;
    border-color: #7C4DFF;
  }
  .testimonial-img, .testimonial-text {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .hero-section {
    animation: fadeIn 1s ease-in-out;
  }
  .hero-text {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }
  .hero-svg {
    opacity: 0;
    animation: fadeIn 1.5s forwards;
    animation-delay: 0.8s;
  }
`;

// Header Component
const Header = () => (
  <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand
        href="#home"
        style={{ color: "#7C4DFF", fontWeight: "bold" }}
      >
        Jillion Technologies
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// Hero Section Component
const HeroSection = () => (
  <Container className="my-5 hero-section">
    <Row className="align-items-center">
      <Col md={6}>
        <h1 style={{ color: "#7C4DFF" }} className="mb-3">
          WE MAKE YOUR IDEA'S
        </h1>
        <h2 style={{ color: "#FF6B6B" }} className="mb-4">
          INTO REALITY
        </h2>
        <p className="mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </p>
        <Button variant="primary" className="me-3">
          Get Started
        </Button>
        <Button variant="outline-primary">Contact Us</Button>
      </Col>
      <Col md={6}>
        <img src={image} alt={"..."} className="w-75 d-flex m-auto" />
      </Col>
    </Row>
  </Container>
);

// Features Component
const Features = () => (
  <Container className="my-5 " id="features">
    <h2 className="text-center mb-5">Features</h2>
    <Row className="my-5">
      <Col md={6}>
        <img alt={"..."} src={image} className="w-100" />
      </Col>
      <Col md={6}>
        <div className="mt-5 text-gray">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="my-5 d-flex flex-column flex-md-row">
      <Col md={6} className="order-md-2 mb-3 mb-md-0">
        <img alt={"..."} src={image} alt="Description" className="w-100" />
      </Col>
      <Col md={6} className="order-md-1">
        <div className="mt-5 text-gray">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="my-5">
      <Col md={6}>
        <img alt={"..."} src={image} className="w-100" />
      </Col>
      <Col md={6}>
        <div className="mt-5 text-gray">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

// Products Component
const Products = () => (
  <Container className="my-5" id="products">
    <h2 className="text-center mb-5">Products</h2>
    <Row>
      {[1, 2, 3].map((item) => (
        <Col md={4} key={item} className="mb-5">
          <Card>
            <img alt={"..."} src={image} className="w-100" key={item} />

            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

// Testimonials Component
const Testimonial = () => (
  <Container className="my-5" id="testimonials">
    <h2 className="text-center mb-5">TESTIMONIALS</h2>
    <Testimonials />
  </Container>
);

// Contact Form Component
const ContactForm = () => (
  <Container className="my-5 " id="contact">
    <h2 className="text-center mb-5">Contact Us</h2>
    <Row className="justify-content-center">
      <Col md={6}>
        <img alt={"..."} src={image} className="w-75" />
      </Col>
      <Col md={6}>
        <Form className="d-flex flex-column justify-content-center h-100">
          <Form.Group className="mb-3">
            <FormLabel>Name</FormLabel>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            {" "}
            <FormLabel>Email</FormLabel>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3">
            {" "}
            <FormLabel>Message</FormLabel>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button
            // variant="primary"
            type="submit"
            className="btn-primary"
            style={{ width: "fit-content" }}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

// Footer Component (same as before)
const Footer = () => (
  <footer
    className="text-white py-5"
    style={{
      background: "linear-gradient(to right, rgb(136,101,246), rgb(56,5,218))",
    }}
  >
    <Container>
      <Row>
        <Col className="w-100 text-center">
          <h5 className="mb-3">CONTACT US</h5>
          <ul className="list-unstyled">
            <li>
              <strong>E mail</strong> <p>contact@JILLIONTECHNOLOGIES.com</p>
            </li>
            <li>
              <strong>Phone</strong> <p>123456789</p>
            </li>
            <li>
              <strong>Address</strong> <p>C-260, Sector-63, Noida, UP-201301</p>
            </li>
          </ul>
        </Col>
        <Col className="w-100 text-center">
          <h5 className="mb-3">COMPANY</h5>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Career</li>
          </ul>
        </Col>
        <Col className="w-100 text-center">
          <h5 className="mb-3">SERVICE</h5>
          <ul className="list-unstyled">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>E-commerce Development</li>
            <li>Customer Software Development</li>
          </ul>
        </Col>
        <Col className="w-100 text-center">
          <h5 className="mb-3">SUPPORT</h5>
          <ul className="list-unstyled">
            <li>Contact</li>
            <li>Terms & Policy</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Main App Component
function App() {
  return (
    <>
      <style>{customStyles}</style>
      <Header />
      <HeroSection />
      <Features />
      <Products />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
