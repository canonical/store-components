import React from "react";

import PackageCard from "components/PackageCard";

function DefaultCard({ data }) {
  const isFeatured = data?.categories.find((cat) => {
    return cat.featured;
  });

  return (
    <PackageCard
      data={data}
      showIcon
      showVerification
      isHighlighted={isFeatured || false}
    />
  );
}

export default DefaultCard;
