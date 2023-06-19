import React from "react";
import { Card } from "@canonical/react-components";

type Props = {
  data: {
    slug: string;
    name: string;
    description: string;
  };
  truncateTitle?: boolean;
  truncateContent?: number;
};

function TopicCard({ data, truncateTitle, truncateContent }: Props) {
  const truncateTitleStyles = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const truncateContentStyles = {
    display: "-webkit-box",
    WebkitLineClamp: truncateContent,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <Card
      style={{ borderTop: "3px solid #f2a031" }}
      onClick={() => {
        window.location.href = `/topics/${data.slug}`;
      }}
    >
      <h3
        style={truncateTitle ? truncateTitleStyles : null}
        className="p-muted-heading"
      >
        {data.name}
      </h3>
      <hr />
      <p style={truncateContent ? truncateContentStyles : null}>
        {data.description}
      </p>
    </Card>
  );
}

export default TopicCard;
