import React from "react";

import PackageCard from "components/PackageCard";

import type { Package } from "types/package";

type Props = {
  data: Package;
};

function InterfaceCard({ data }: Props) {
  return <PackageCard data={data} showIcon showLibraries showPlatforms />;
}

export default InterfaceCard;
