import React from "react";

import PackageCard from "components/PackageCard";

function CharmCard({ data }) {
  return <PackageCard data={data} showIcon showVerification showPlatforms />;
}

export default CharmCard;
