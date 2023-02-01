import React from "react";
import classNames from "classnames";
import { Card } from "@canonical/react-components";

import "./PackageCard.scss";

import type { Package as PackageProps } from "../../types/package";

type PackageCardProps = {
  item: PackageProps;
  highlighted?: boolean;
};

export type Props = PackageCardProps;

function PackageCard({ item, highlighted }: PackageCardProps) {
  const hasIcon = item?.package?.icon_url;
  const isBundle = item?.package?.type === "bundle";
  const isInterface = item?.package?.type === "interface";
  const outerCardStyle = {
    height: "100%",
  };

  let featuredCharms = [];

  if (highlighted) {
    outerCardStyle["borderTop"] = "3px solid #f2a031";
  }

  if (isBundle) {
    outerCardStyle["borderTop"] = "3px solid #0f95a1";

    if (item?.package?.charms) {
      featuredCharms = item?.package?.charms.slice(0, 7);
    }
  }

  return (
    <Card style={outerCardStyle}>
      <div
        className={classNames("u-no-margin--bottom", {
          "p-media-object": hasIcon,
        })}
        style={{ height: "100%" }}
      >
        {hasIcon && (
          <img
            src={item?.package?.icon_url}
            width={48}
            height={48}
            alt=""
            className="p-media-object__image"
          />
        )}

        <div
          className={classNames("sc-package-card", {
            "p-media-object__details": hasIcon,
          })}
          style={{ width: "100%" }}
        >
          <div className="sc-package-card__body">
            <h2 className="p-heading--4 u-no-margin--bottom">
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

            {isBundle && (
              <>
                {featuredCharms.map((charm) => (
                  <span
                    className="sc-charm-bundle-icon"
                    key={charm?.name}
                    title={charm?.display_name}
                  >
                    {charm?.display_name.slice(0, 2)}
                  </span>
                ))}
                <span className="sc-charm-bundle-count u-text--muted">
                  +{item?.package?.charms?.length - featuredCharms.length}
                </span>
              </>
            )}
          </div>
          {isInterface && (
            <div className="sc-package-card__footer">
              <hr />
              <a href={`/${item?.package?.name}/libraries`}>Libraries</a>
            </div>
          )}

          {item?.package?.platforms && item?.package?.platforms.length && (
            <div className="sc-package-card__footer">
              <hr />
              <div className="u-align--right">
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
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default PackageCard;
