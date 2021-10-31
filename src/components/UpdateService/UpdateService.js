import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateService(props) {
  const [service, setService] = useState({});
  const { id } = useParams();
  const url = `https://dry-fortress-78843.herokuapp.com/services/${id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>Update Your Service</h1>
      <h3>Update: {service.name}</h3>
    </div>
  );
}

export default UpdateService;
