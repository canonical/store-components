import React from "react";
import { Card } from "@canonical/react-components";

import IconCard from "./IconCard";
import InnerCard from "./InnerCard";

import "./PackageCard.scss";

import type { Package as PackageProps } from "../../types/package";

export type Props = PackageCardProps;

type PackageCardProps = {
  data: PackageProps;
  isBundle?: boolean;
  isHighlighted?: boolean;
  showFeaturedPackages?: boolean;
  showIcon?: boolean;
  showLibraries?: boolean;
  showPlatforms?: boolean;
  showRatings?: boolean;
  showVerification?: boolean;
};

function PackageCard({
  data,
  isBundle,
  isHighlighted,
  showFeaturedPackages,
  showIcon,
  showLibraries,
  showPlatforms,
  showRatings,
  showVerification,
}: PackageCardProps) {
  const innerCardProps = {
    isBundle: isBundle,
    showFeaturedPackages: showFeaturedPackages,
    showLibraries: showLibraries,
    showPlatforms: showPlatforms,
    showRatings: showRatings,
    showVerification: showVerification,
  };

  const outerCardStyle = {
    height: "100%",
  };

  if (isHighlighted) {
    outerCardStyle["borderTop"] = "3px solid #f2a031";
  }

  if (isBundle) {
    outerCardStyle["borderTop"] = "3px solid #0f95a1";
  }

  const handleClick = () => {
    window.location.href = `/${data.package.name}`;
  };

  return (
    <Card style={outerCardStyle} onClick={handleClick}>
      {showIcon ? (
        <IconCard
          iconUrl={
            data.package.icon_url ||
            "https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg"
          }
        >
          <InnerCard data={data} {...innerCardProps} height="100%" />
        </IconCard>
      ) : (
        <div className="u-no-margin--bottom" style={{ height: "100%" }}>
          <InnerCard data={data} {...innerCardProps} />
        </div>
      )}
    </Card>
  );
}

export default PackageCard;
