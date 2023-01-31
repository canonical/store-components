import React from "react";
import { Card } from "@canonical/react-components";

import type { Package as PackageProps } from "../../types/package";

type PackageCardProps = {
  item: PackageProps;
  highlighted?: boolean;
};

export type Props = PackageCardProps;

function PackageCard({ item, highlighted }: PackageCardProps) {
  const hasIcon = item?.package?.icon_url;
  const isBundle = item?.package?.type === "bundle";
  const style = {
    height: "100%",
  };

  if (highlighted) {
    style["borderTop"] = "3px solid #f2a031";
  }

  if (isBundle) {
    style["borderTop"] = "3px solid #0f95a1";
  }

  return (
    <Card style={style}>
      <div className={hasIcon ? "p-media-object" : ""}>
        {hasIcon && (
          <img
            src={item?.package?.icon_url}
            width={48}
            height={48}
            alt=""
            className="p-media-object__image"
          />
        )}

        <div className={hasIcon ? "p-media-object__details u-truncate" : ""}>
          <h2 className="p-heading--4 u-truncate u-no-margin--bottom">
            <a href={`/${item?.package?.name}`}>
              {item?.package?.display_name}
            </a>
          </h2>
          <p className="u-text--muted">
            {item?.publisher?.display_name}{" "}
            {item?.publisher?.validation && (
              <>
                {item?.publisher?.validation === "verified" && (
                  <img
                    src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                    width={14}
                    height={14}
                    alt="Verified account"
                    title="Verified account"
                  />
                )}
                {item?.publisher?.validation === "star" && (
                  <img
                    src="https://assets.ubuntu.com/v1/d810dee9-Orange+Star.svg"
                    width={14}
                    height={14}
                    alt="Star developer"
                    title="Star developer"
                  />
                )}
              </>
            )}
          </p>
          <p>{item?.package?.description}</p>
          {item?.package?.platforms && (
            <div>
              {item?.package?.platforms.includes("vm") && (
                <img
                  src="https://assets.ubuntu.com/v1/a911ecf6-vm-badge.svg"
                  width={24}
                  height={24}
                  alt="VM"
                />
              )}

              {item?.package?.platforms.includes("kubernetes") && (
                <img
                  src="https://assets.ubuntu.com/v1/f1852c07-Kubernetes.svg"
                  width={24}
                  height={24}
                  alt="Kubernetes"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default PackageCard;
