import React from "react";

import type { Package as PackageProps } from "../../types/package";

type PackageCardProps = {
  item: PackageProps;
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
  item,
  isBundle,
  showFeaturedPackages,
  showLibraries,
  showPlatforms,
  showRatings,
  showVerification,
}: PackageCardProps) {
  let featuredCharms = [];

  if (item.package.charms) {
    featuredCharms = item.package.charms.slice(0, 7);
  }

  const stars = [];
  let ratings = null;
  let totalRatings = null;

  if (item.ratings && item.ratings.value) {
    ratings = item.ratings.value;
  }

  if (item.ratings && item.ratings.count) {
    totalRatings = item.ratings.count;
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
            <a href={`/${item.package.name}`}>{item.package.display_name}</a>
          </h2>

          <p className="u-text--muted">
            {item.publisher.display_name}{" "}
            {showVerification && (
              <>
                {item.publisher.validation === "verified" && (
                  <img
                    src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                    width={14}
                    height={14}
                    alt="Verified account"
                    title="Verified account"
                  />
                )}
                {item.publisher.validation === "star" && (
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

          <p>{item.package.description}</p>

          {showRatings && (
            <div className="star-rating" data-testid="ratings">
              {stars}
              <span className="total-ratings u-text--muted">
                {totalRatings}
              </span>
            </div>
          )}

          {showFeaturedPackages && item.package.charms && (
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
              {item.package.charms.length - featuredCharms.length > 0 && (
                <span className="sc-charm-bundle-count u-text--muted">
                  +{item.package.charms.length - featuredCharms.length}
                </span>
              )}
            </div>
          )}
        </div>

        {showLibraries && (
          <div className="sc-package-card__footer">
            <hr />
            <a href={`/${item.package.name}/libraries`}>Libraries</a>
          </div>
        )}

        {showPlatforms && item.package.platforms && (
          <div className="sc-package-card__footer">
            <hr />
            <div className="u-align--right">
              {item.package.platforms.includes("vm") && (
                <img
                  className="sc-platform-icon"
                  src="https://assets.ubuntu.com/v1/a911ecf6-vm-badge.svg"
                  width={24}
                  height={24}
                  alt="VM"
                />
              )}

              {item.package.platforms.includes("kubernetes") && (
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
