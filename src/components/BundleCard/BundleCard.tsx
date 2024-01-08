import React from "react";

import PackageCard from "components/PackageCard";

import type { Package } from "types/package";

type Props = {
  data: Package;
};

function BundleCard({ data }: Props) {
  return (
    <PackageCard
      data={data}
      showIcon={false}
      showVerification
      showFeaturedPackages
      isBundle
    />
  );
}

export default BundleCard;
