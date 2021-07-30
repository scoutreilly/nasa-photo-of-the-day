import React from "react";
import Card from "../Components/Card";
import Image from "../Components/Image";

function SpaceCard(props) {
  return (
    <Card className="spaceCard">
      <h1 className="title">{props.title}</h1>
      <Image src={props.imgUrl} alt="wispImage" />
      <p>{props.date}</p>
      <p>{props.description}</p>
      <h3>{props.copyright}</h3>
    </Card>
  );
}

export default SpaceCard;
