import React from "react";

import PackageCard from "components/PackageCard";

import type { Package } from "types/package";

type Props = {
  data: Package;
};

function DefaultCard({ data }: Props) {
  let isFeatured = false;

  if (data.categories && data.categories.length > 0) {
    const featuredPackage = data.categories.find((cat) => cat.featured);
    if (featuredPackage) {
      isFeatured = true;
    }
  }

  return (
    <PackageCard
      data={data}
      showIcon
      showVerification
      isHighlighted={isFeatured}
    />
  );
}

export default DefaultCard;
