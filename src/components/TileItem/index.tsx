import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  url: string;
}

const TileItem: React.FC<Props> = (props) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card>
        <Card.Body style={{ padding: "10px 1.5rem" }}>
          <h4>{props.name}</h4>
          <Link to={`details/${props.name}`}>Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TileItem;
