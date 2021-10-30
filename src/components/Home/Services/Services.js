import React, { useEffect, useState } from "react";

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
      {services.map((service) => (
        <h3>{service.name}</h3>
      ))}
    </div>
  );
}

export default Services;
