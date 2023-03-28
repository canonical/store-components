import React from "react";

import type { Package as PackageProps } from "../../types/package";

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

function InnerCard({
  data,
  isBundle,
  showFeaturedPackages,
  showLibraries,
  showPlatforms,
  showRatings,
  showVerification,
}: PackageCardProps) {
  let featuredCharms = [];

  if (data.package.charms) {
    featuredCharms = data.package.charms.slice(0, 7);
  }

  const stars = [];
  let ratings = null;
  let totalRatings = null;

  if (data.ratings && data.ratings.value) {
    ratings = data.ratings.value;
  }

  if (data.ratings && data.ratings.count) {
    totalRatings = data.ratings.count;
  }

  for (let i = 1; i <= 5; i++) {
    let className = "p-icon--star-empty";

    if (i <= ratings) {
      className = "p-icon--star-filled";
    } else if (i - ratings === 0.5) {
      className = "p-icon--star-half-filled";
    }

    stars.push(<i className={className} key={i}></i>);
  }

  return (
    <>
      <div className="sc-package-card" style={{ width: "100%" }}>
        {isBundle && (
          <div className="sc-package-card__header">
            <h3 className="p-muted-heading">Bundle</h3>
          </div>
        )}

        <div className="sc-package-card__body">
          <h2 className="p-heading--4 u-no-margin--bottom">
            <a href={`/${data.package.name}`}>{data.package.display_name}</a>
          </h2>

          <p className="u-text--muted">
            {data.publisher.display_name}{" "}
            {showVerification && (
              <>
                {data.publisher.validation === "verified" && (
                  <img
                    src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                    width={14}
                    height={14}
                    alt="Verified account"
                    title="Verified account"
                  />
                )}
                {data.publisher.validation === "star" && (
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

          <p>{data.package.description}</p>

          {showRatings && (
            <div className="star-rating" data-testid="ratings">
              {stars}
              <span className="total-ratings u-text--muted">
                {totalRatings}
              </span>
            </div>
          )}

          {showFeaturedPackages && data.package.charms && (
            <div data-testid="featured-packages">
              {featuredCharms.map((charm) => (
                <span
                  className="sc-charm-bundle-icon"
                  key={charm.name}
                  title={charm.display_name}
                >
                  {charm.display_name.slice(0, 2)}
                </span>
              ))}
              {data.package.charms.length - featuredCharms.length > 0 && (
                <span className="sc-charm-bundle-count u-text--muted">
                  +{data.package.charms.length - featuredCharms.length}
                </span>
              )}
            </div>
          )}
        </div>

        {showLibraries && (
          <div className="sc-package-card__footer">
            <hr />
            <a href={`/${data.package.name}/libraries`}>Libraries</a>
          </div>
        )}

        {showPlatforms && data.package.platforms && (
          <div className="sc-package-card__footer">
            <hr />
            <div className="u-align--right">
              {data.package.platforms.includes("vm") && (
                <img
                  className="sc-platform-icon"
                  src="https://assets.ubuntu.com/v1/a911ecf6-vm-badge.svg"
                  width={24}
                  height={24}
                  alt="VM"
                />
              )}

              {data.package.platforms.includes("kubernetes") && (
                <img
                  className="sc-platform-icon"
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
    </>
  );
}

export default InnerCard;
