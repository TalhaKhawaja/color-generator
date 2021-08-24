import { Button } from "react-bootstrap";
import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Hex = ({ hexCode, handleClick, handleInput }) => {
  return (
    <div>
      <div>
        <h1>Hex</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Hex</InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            maxLength="6"
            onChange={handleInput}
            value={hexCode}
          />
        </InputGroup>
      </div>
      <div>
        <Button id="genBtn" variant="primary" onClick={handleClick}>
          Generate!
        </Button>{" "}
      </div>
    </div>
  );
};

export default Hex;
