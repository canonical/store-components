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
  height?: string;
  showChannel?: boolean;
};

function InnerCard({
  data,
  isBundle,
  showFeaturedPackages,
  showLibraries,
  showPlatforms,
  showRatings,
  showVerification,
  height,
  showChannel,
}: PackageCardProps) {
  let featuredCharms = [];

  if (data.package.charms) {
    featuredCharms = data.package.charms.slice(0, 5);
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

  if (data.package.display_name === "") {
    data.package.display_name = data.package.name.replace(/-/g, " ");
  }

  return (
    <>
      <div
        className="sc-package-card"
        style={{ width: "100%", height: height }}
      >
        <div className="sc-package-card__body">
          {isBundle && (
            <div className="sc-package-card__header">
              <h3 className="p-muted-heading u-no-margin--bottom">Bundle</h3>
            </div>
          )}

          {data.package.display_name && (
            <h2 className="sc-package-card__heading p-heading--5 u-no-margin--bottom">
              {data.package.name ? (
                <a
                  className="sc-package-card__heading-link"
                  href={`/${data.package.name}`}
                >
                  {data.package.display_name}
                </a>
              ) : (
                <>{data.package.display_name}</>
              )}
            </h2>
          )}

          {data.publisher && (
            <p
              className={`u-text--muted u-no-padding--top ${
                showChannel ? "u-no-margin--bottom" : ""
              }`}
            >
              <em>{data.publisher.display_name} </em>
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
          )}

          {showChannel && data.package.channel && (
            <p className="u-text--muted" data-testid="package-channel">
              {data.package.channel.track === "latest" ? "latest/" : ""}
              {data.package.channel.risk}
            </p>
          )}

          <p
            className={`u-line-clamp ${
              !showRatings && !showFeaturedPackages && !showPlatforms
                ? "u-no-margin--bottom"
                : ""
            }`}
          >
            {data.package.description}
          </p>

          {showRatings && (
            <div className="star-rating" data-testid="ratings">
              {stars}
              <span className="total-ratings u-text--muted">
                {totalRatings}
              </span>
            </div>
          )}

          {showFeaturedPackages && data.package.charms && (
            <div
              data-testid="featured-packages"
              className="sc-charm-bundle-icons"
            >
              {featuredCharms.map((charm) => (
                <img
                  src={`/${charm.name}/icon`}
                  alt=""
                  title={charm.display_name}
                  key={charm.name}
                  width={32}
                  height={32}
                  className="sc-charm-bundle-icon"
                />
              ))}
              {data.package.charms.length - featuredCharms.length > 0 && (
                <span className="sc-charm-bundle-count u-text--muted">
                  +{data.package.charms.length - featuredCharms.length}
                </span>
              )}
            </div>
          )}

          {showPlatforms &&
            data.package.platforms &&
            data.package.platforms.length > 0 && (
              <div className="sc-package-card__footer">
                <hr />
                <div className="sc-package-card__footer-content">
                  {showLibraries && (
                    <a
                      href={`/${data.package.name}/libraries`}
                      className="sc-package-card__footer-link"
                    >
                      Libraries
                    </a>
                  )}
                  <div className="sc-platform u-align--right">
                    {data.package.platforms.includes("vm") && (
                      <img
                        className="sc-platform-icon"
                        src="https://assets.ubuntu.com/v1/bf61e269-machine-badge.svg"
                        width={24}
                        height={24}
                        alt="Machine"
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
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default InnerCard;
