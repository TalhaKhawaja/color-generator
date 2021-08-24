import React from "react";
import { Button } from "react-bootstrap";
import { random_hex } from "../utils/generate-color";

const GenerateButton = () => {
  return (
    <div>
      <Button id="genBtn" variant="outline-primary" onClick={random_hex}>
        Generate!
      </Button>{" "}
    </div>
  );
};

export default GenerateButton;
