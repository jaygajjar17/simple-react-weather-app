import React from "react";
import Button from "react-bootstrap/Button";
const FormIn = (props) => {
  return (
    <div>
      <form onSubmit={props.loadInfo}>
        <input
          className="w3-input"
          type="text"
          name="city"
          autoComplete="off"
          placeholder="city"
        />

        <Button variant="warning" type="submit">
          find
        </Button>
      </form>
    </div>
  );
};

export default FormIn;
