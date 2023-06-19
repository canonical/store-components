import React from "react";
import { Card } from "@canonical/react-components";

function TopicCard({ data }) {
  return (
    <Card
      style={{ borderTop: "3px solid #f2a031" }}
      onClick={() => {
        window.location.href = `/topics/${data.slug}`;
      }}
    >
      <h3 className="p-muted-heading">{data.name}</h3>
      <hr />
      <p>{data.description}</p>
    </Card>
  );
}

export default TopicCard;
