import React from "react";
import { Card } from "@canonical/react-components";

import "./SolutionCard.scss";

const FALLBACK_ICON =
  "https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg";
const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
});

type Category =
  | string
  | {
      display_name?: string;
      name?: string;
      slug?: string;
    };

export type Solution = {
  categories?: Category[];
  charms?: string[];
  icon: string | null;
  last_updated: string | null;
  name: string;
  platform?: string;
  platform_version?: string[];
  publisher:
    | string
    | {
        display_name?: string;
        username?: string;
      };
  summary: string;
  title: string;
};

export type Props = {
  charmIcons?: Record<string, string>;
  data: Solution;
  publisherVerified?: boolean;
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
    return relativeTimeFormatter.format(elapsedDays, "day");
  }

  const elapsedMonths = Math.round(elapsedDays / 30.4375);
  if (Math.abs(elapsedMonths) < 12) {
    return relativeTimeFormatter.format(elapsedMonths, "month");
  }

  return relativeTimeFormatter.format(Math.round(elapsedMonths / 12), "year");
};

const getCategoryName = (category: Category) => {
  if (typeof category !== "string") {
    return category.display_name || category.name || category.slug || "";
  }

  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatPlatformVersion = (version: string) => {
  const minimumVersion = version.match(/^>=\s*(.+)$/);
  return minimumVersion ? `${minimumVersion[1]}+` : version;
};

function SolutionCard({ charmIcons, data, publisherVerified }: Props) {
  const href = `/solutions/${data.name}`;
  const publisher =
    typeof data.publisher === "string"
      ? data.publisher
      : data.publisher.display_name || data.publisher.username;
  const categories = (data.categories || [])
    .map(getCategoryName)
    .filter(Boolean);
  const visibleCharms = (data.charms || []).slice(0, 5);
  const platform = data.platform === "machine" ? "vm" : data.platform;
  const showFooter = Boolean(
    categories.length || platform || data.last_updated || visibleCharms.length
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      window.location.href = href;
    }
  };

  return (
    <Card
      className="sc-solution-card u-no-margin--bottom"
      onClick={handleClick}
    >
      <div className="sc-solution-card__body">
        <div className="p-media-object u-no-margin--bottom">
          <img
            alt=""
            className="p-media-object__image sc-solution-card__icon"
            height={44}
            src={data.icon || FALLBACK_ICON}
            width={44}
          />
          <div className="p-media-object__details">
            <h3 className="p-heading--5 u-no-margin u-no-padding u-truncate">
              <a className="p-link--soft" href={href}>
                {data.title}
              </a>
            </h3>
            {publisher && (
              <p className="sc-solution-card__publisher p-text--small u-no-margin u-no-padding u-text--muted">
                <span className="u-truncate">{publisher}</span>
                {publisherVerified && (
                  <img
                    alt="Verified account"
                    height={14}
                    src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                    title="Verified account"
                    width={14}
                  />
                )}
              </p>
            )}
          </div>
        </div>
        <p className="sc-solution-card__summary u-no-margin u-no-padding">
          {data.summary}
        </p>
      </div>

      {showFooter && (
        <footer className="sc-solution-card__footer">
          <div className="sc-solution-card__qualities">
            {categories.length > 0 && (
              <div className="sc-solution-card__categories">
                {categories.map((category) => (
                  <span
                    className="sc-solution-card__category p-chip is-readonly u-no-margin--bottom u-no-margin--right"
                    key={category}
                  >
                    <span className="p-chip__value">{category}</span>
                  </span>
                ))}
                {categories.length > 1 && (
                  <span
                    aria-label={`${categories.length - 1} more categories`}
                    className="sc-solution-card__category-count p-chip is-readonly u-no-margin--bottom u-no-margin--right"
                  >
                    <span className="p-chip__value">
                      +{categories.length - 1}
                    </span>
                  </span>
                )}
              </div>
            )}
            {platform && (
              <div
                className={`sc-solution-card__platform ${
                  categories.length ? "sc-solution-card__platform--divided" : ""
                }`}
                data-testid="solution-platform"
              >
                <img
                  alt={platform === "kubernetes" ? "Kubernetes" : "Machine"}
                  height={24}
                  src={
                    platform === "kubernetes"
                      ? "https://assets.ubuntu.com/v1/f1852c07-Kubernetes.svg"
                      : "https://assets.ubuntu.com/v1/99dc6866-machine.svg"
                  }
                  width={24}
                />
                {data.platform_version?.[0] && (
                  <span>{formatPlatformVersion(data.platform_version[0])}</span>
                )}
              </div>
            )}
          </div>

          <div className="sc-solution-card__metadata">
            {data.last_updated && (
              <span className="sc-solution-card__updated">
                <i aria-hidden="true" className="p-icon--revisions" />
                <time dateTime={data.last_updated}>
                  {formatLastUpdated(data.last_updated)}
                </time>
              </span>
            )}
            {visibleCharms.length > 0 && (
              <div
                aria-label={`${data.charms?.length || 0} included charms`}
                className={`sc-solution-card__charms ${
                  data.last_updated ? "sc-solution-card__charms--divided" : ""
                }`}
              >
                <span className="sc-solution-card__charm-icons">
                  {visibleCharms.map((charm) => (
                    <img
                      alt=""
                      height={24}
                      key={charm}
                      src={charmIcons?.[charm] || FALLBACK_ICON}
                      title={charm}
                      width={24}
                    />
                  ))}
                  {(data.charms?.length || 0) > visibleCharms.length && (
                    <span>
                      +{(data.charms?.length || 0) - visibleCharms.length}
                    </span>
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="sc-solution-card__charm-count"
                >
                  <i aria-hidden="true" className="p-icon--bundle" />
                  <span>
                    {data.charms?.length || 0}{" "}
                    {data.charms?.length === 1 ? "Charm" : "Charms"}
                  </span>
                </span>
              </div>
            )}
          </div>
        </footer>
      )}
    </Card>
  );
}

export default SolutionCard;
