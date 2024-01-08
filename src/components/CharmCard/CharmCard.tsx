import React from "react";

import PackageCard from "components/PackageCard";

import type { Package } from "types/package";

type Props = {
  data: Package;
};

function CharmCard({ data }: Props) {
  return <PackageCard data={data} showIcon showVerification showPlatforms />;
}

export default CharmCard;
