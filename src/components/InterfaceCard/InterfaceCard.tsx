import React from "react";

import PackageCard from "components/PackageCard";

function InterfaceCard({ data }) {
  return <PackageCard item={data} showIcon showLibraries />;
}

export default InterfaceCard;
