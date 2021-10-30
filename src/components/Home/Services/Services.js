import React, { useEffect, useState } from "react";
import Service from "./Service";
import { Container, Row } from "react-bootstrap";
function Services(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dry-fortress-78843.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>Our Services</h1>
      <Container>
        <Row xs={2} md={3} lg={3}>
          {services.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
