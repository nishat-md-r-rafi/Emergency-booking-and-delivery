import { button } from "bootstrap";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ManageAllOrders(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dry-fortress-78843.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/services/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          alert("Service is deleted successfully");
          const restServices = services.filter((service) => service._id != id);
          setServices(restServices);
        }
      });
  };
  return (
    <div>
      <h1>Manage All the Orders Here</h1>
      <ol>
        {services.map((service) => (
          <li key={service._id}>
            {service.name} ::
            <button
              className="btn btn-primary"
              onClick={() => {
                handleDelete(service._id);
              }}
            >
              *
            </button>
            <Link to={`services/update/${service._id}`}>
              <button className="btn btn-primary">Confirm</button>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ManageAllOrders;
