import React from "react";

import PackageCard from "components/PackageCard";

function CharmCard({ data }) {
  return <PackageCard item={data} showIcon showVerification showPlatforms />;
}

export default CharmCard;
