import React from "react";
import { useRef } from "react";
import "./Add.css";

function AddService(props) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const urlRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const url = urlRef.current.value;

    const newService = { name, description, url };
    console.log(newService);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.insertedId);
        // if (data.insertedId) {
        //   alert("New service is inserted");
        //   e.target.reset();

        // }
      });
  };

  return (
    <div>
      <h1>Add Services You Want</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Give Name" ref={nameRef} />
        <input
          type="text"
          placeholder="Give description of the services"
          ref={descriptionRef}
        />
        <input
          type="text"
          placeholder="Give URL of the images"
          name=""
          id=""
          ref={urlRef}
        />
        <input type="submit" value="Submitted" />
      </form>
    </div>
  );
}

export default AddService;
