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
  className?: string;
};

function TopicCard({ data, truncateTitle, truncateContent, className }: Props) {
  return (
    <Card
      style={{ borderTop: "3px solid #f2a031", minHeight: "182px" }}
      onClick={() => {
        window.location.href = `/topics/${data.slug}`;
      }}
      className={className}
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
