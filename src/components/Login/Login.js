import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

function Login(props) {
  const { logInUsingGoogle } = useAuth();
  return (
    <div>
      <h1>Please Login To Get The Services</h1>
      <Button className="btn btn-primary" onClick={logInUsingGoogle}>
        Register Using Google{" "}
      </Button>
    </div>
  );
}

export default Login;
