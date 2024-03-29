import React from "react";

import PackageCard from "components/PackageCard";

function InterfaceCard({ data }) {
  return <PackageCard data={data} showIcon showLibraries showPlatforms />;
}

export default InterfaceCard;
