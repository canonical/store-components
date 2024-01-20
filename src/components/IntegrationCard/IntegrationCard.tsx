import React from "react";

import PackageCard from "components/PackageCard";

function IntegrationCard({ data }) {
  return (
    <PackageCard
      data={data}
      showIcon
      showVerification
      showPlatforms
      showChannel
    />
  );
}

export default IntegrationCard;
