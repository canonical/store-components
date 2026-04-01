import React from "react";

import PackageCard from "components/PackageCard";

import type { Package } from "types/package";

type Props = {
  data: Package;
  highlighted?: boolean;
  highlightColor?: string;
};

function DefaultCard({ data, highlighted, highlightColor }: Props) {
  let isFeatured = false;

  if (data.categories && data.categories.length > 0) {
    const featuredPackage = data.categories.find(
      (cat) => cat.name === "featured"
    );
    if (featuredPackage) {
      isFeatured = true;
    }
  }

  return (
    <PackageCard
      data={data}
      showIcon
      showVerification
      isHighlighted={isFeatured || highlighted}
      highlightColor={highlightColor}
    />
  );
}

export default DefaultCard;
