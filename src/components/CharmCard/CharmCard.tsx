import React from "react";
import { Card } from "@canonical/react-components";

import "./CharmCard.scss";

const FALLBACK_ICON =
  "https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg";

export type Props = {
  data: any;
  href?: string;
  platformIcons?: Record<string, React.ReactNode>;
};

const formatLastUpdated = (lastUpdated: string) => {
  const date = new Date(lastUpdated);

  if (Number.isNaN(date.getTime())) {
    return lastUpdated;
  }

  const elapsedDays = Math.round(
    (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  if (Math.abs(elapsedDays) < 30) {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      elapsedDays,
      "day"
    );
  }

  const elapsedMonths = Math.round(elapsedDays / 30.4375);
  if (Math.abs(elapsedMonths) < 12) {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      elapsedMonths,
      "month"
    );
  }

  return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
    Math.round(elapsedMonths / 12),
    "year"
  );
};

const platformDetails = {
  kubernetes: {
    alt: "Kubernetes",
    src: "https://assets.ubuntu.com/v1/f1852c07-Kubernetes.svg",
  },
  vm: {
    alt: "Machine",
    src: "https://assets.ubuntu.com/v1/99dc6866-machine.svg",
  },
};

function CharmCard({
  data,
  href = `/${data.package.name}`,
  platformIcons,
}: Props) {
  const { package: charm } = data;
  const displayName = charm.display_name || charm.name.replace(/-/g, " ");
  const showFooter = Boolean(charm.channel?.name || charm.last_updated);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      window.location.href = href;
    }
  };

  return (
    <Card className="sc-charm-card u-no-margin--bottom" onClick={handleClick}>
      <div className="sc-charm-card__body">
        <div className="p-media-object u-no-margin--bottom">
          <img
            alt=""
            className="p-media-object__image"
            data-testid="package-icon"
            height={44}
            src={charm.icon_url || FALLBACK_ICON}
            width={44}
          />
          <div className="p-media-object__details">
            <h6 className="p-heading--5 u-no-margin--bottom">
              <a className="p-link--soft" href={href}>
                {displayName}
              </a>
            </h6>
            {data.publisher && (
              <p className="u-text--muted u-text--small u-no-margin--bottom u-no-padding--top">
                {data.publisher.display_name || data.publisher.name}
                {data.publisher.validation === "verified" && (
                  <img
                    alt="Verified account"
                    className="sc-charm-card__verified u-vertical-align--middle"
                    height={14}
                    src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                    title="Verified account"
                    width={14}
                  />
                )}
                {(data.publisher.validation === "star" ||
                  data.publisher.validation === "starred") && (
                  <img
                    alt="Star developer"
                    className="sc-charm-card__verified u-vertical-align--middle"
                    height={14}
                    src="https://assets.ubuntu.com/v1/d810dee9-Orange+Star.svg"
                    title="Star developer"
                    width={14}
                  />
                )}
              </p>
            )}
          </div>
        </div>

        <p className="u-text--small u-line-clamp--2 u-no-margin--bottom u-no-padding--top">
          {charm.summary || charm.description}
        </p>

        <div className="sc-charm-card__qualities u-align--bottom">
          <div className="sc-charm-card__categories">
            {data.categories?.[0] && (
              <span
                className="p-chip is-readonly u-no-margin--right u-no-margin--bottom"
                data-testid="primary-category"
              >
                <span className="p-chip__value">
                  {data.categories[0].display_name}
                </span>
              </span>
            )}
            {data.categories && data.categories.length > 1 && (
              <span
                className="p-chip is-readonly u-no-margin--right u-no-margin--bottom"
                title={data.categories
                  .slice(1)
                  .map((category) => category.display_name)
                  .join(", ")}
              >
                <span className="p-chip__value">
                  +{data.categories.length - 1}
                </span>
              </span>
            )}
          </div>

          {charm.platforms && charm.platforms.length > 0 && (
            <div
              className={`sc-charm-card__platforms ${
                data.categories?.length
                  ? "sc-charm-card__platforms--divided"
                  : ""
              }`}
              data-testid="charm-platforms"
            >
              {charm.platforms.map((platform) => {
                const platformIcon = platformIcons?.[platform];
                const details = platformDetails[platform];

                return platformIcon ? (
                  <span key={platform} title={`Deployable on ${platform}`}>
                    {platformIcon}
                  </span>
                ) : details ? (
                  <img
                    alt={details.alt}
                    height={24}
                    key={platform}
                    src={details.src}
                    title={`Deployable on ${details.alt}`}
                    width={24}
                  />
                ) : (
                  <span className="u-text--small" key={platform}>
                    {platform}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showFooter && (
        <footer className="sc-charm-card__footer">
          {charm.channel?.name && (
            <span title={`Default channel ${charm.channel.name}`}>
              {charm.channel.name}
            </span>
          )}
          {charm.last_updated && (
            <span>
              <i
                aria-hidden="true"
                className="p-icon--revisions"
                data-testid="revisions-icon"
              />
              <time dateTime={charm.last_updated}>
                {formatLastUpdated(charm.last_updated)}
              </time>
            </span>
          )}
        </footer>
      )}
    </Card>
  );
}

export default CharmCard;
