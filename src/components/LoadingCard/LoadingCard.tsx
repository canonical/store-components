import React from "react";
import { Card } from "@canonical/react-components";

import "./LoadingCard.scss";

type Props = {
  height?: number;
};

function LoadingCard({ height }: Props) {
  const cardHeight = height ? `${height}px` : "290px";

  return (
    <Card style={{ height: cardHeight }}>
      <svg width="100%" height="100%" className="p-card--placeholder">
        <defs>
          <clipPath id="animation-mask">
            <circle cx="36" cy="36" r="20" />
            <rect x="16" y="69.5" width="60%" height="18" />
            <rect x="16" y="95" width="25%" height="18" />
            <rect x="16" y="153" width="70%" height="16" />
            <rect x="16" y="170" width="20%" height="16" />
          </clipPath>
        </defs>
      </svg>
    </Card>
  );
}

export default LoadingCard;
