import React from "react";

import PackageCard from "components/PackageCard";

function BundleCard({ data }) {
  return (
    <PackageCard
      data={data}
      showIcon
      showVerification
      showFeaturedPackages
      isBundle
    />
  );
}

export default BundleCard;
