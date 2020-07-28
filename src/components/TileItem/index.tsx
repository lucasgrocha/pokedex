import React from "react";

interface Props {
  name: string;
  url: string;
}

const TileItem: React.FC<Props> = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.url}</p>
    </div>
  );
};

export default TileItem;
