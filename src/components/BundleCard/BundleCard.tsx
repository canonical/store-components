import React from "react";

import PackageCard from "components/PackageCard";

function BundleCard({ data }) {
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
