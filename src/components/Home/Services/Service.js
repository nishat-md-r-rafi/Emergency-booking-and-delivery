import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";

function Service(props) {
  const { _id, name, description, img } = props.service;
  console.log(_id, name, description, img);
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              className="btn btn-primary"
              onClick={() => handleClick(_id)}
            >
              See Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
