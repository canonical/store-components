import React from "react";
import { Card } from "@canonical/react-components";

import "./TopicCard.scss";

type Props = {
  data: {
    slug: string;
    name: string;
    description: string;
  };
  truncateTitle?: boolean;
  truncateContent?: boolean;
};

function TopicCard({ data, truncateTitle, truncateContent }: Props) {
  return (
    <Card
      style={{ borderTop: "3px solid #f2a031" }}
      onClick={() => {
        window.location.href = `/topics/${data.slug}`;
      }}
    >
      <h3 className={`p-muted-heading ${truncateTitle ? "u-truncate" : ""}`}>
        <a className="p-link--soft" href={`/topics/${data.slug}`}>
          {data.name}
        </a>
      </h3>
      <hr />
      <p className={truncateContent ? "u-line-clamp" : ""}>
        {data.description}
      </p>
    </Card>
  );
}

export default TopicCard;
