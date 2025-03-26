import { Navbar, Nav, Form, FormControl, Button,Dropdown, Modal } from "react-bootstrap";
import { Link,useNavigate  } from "react-router-dom";
import { useState } from "react";


function NavbarComponent({ darkMode, setDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/" className="fw-bold">
      
🎬 TicketMate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
          <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
          <Nav.Link as={Link} to="/mytickets">MyTickets</Nav.Link>
        </Nav>
        
        {/* Search Bar */}
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl 
            type="search" 
            placeholder="Search movies/events" 
            className="me-2" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            variant={darkMode ? "outline-light" : "outline-dark"} 
            disabled={!searchQuery.trim()} // Disable if input is empty
            type="submit">
            Search
          </Button>
        </Form>

        {/* Dark Mode Toggle */}
        <Button 
          variant={darkMode ? "light" : "dark"} 
          className="ms-3 me-3" 
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <Nav.Link as={Link} to="/auth">SignUp/In</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
