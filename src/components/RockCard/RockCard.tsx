import React from "react";
import { Card } from "@canonical/react-components";

import type { Rock } from "../../types/rock";
import "./RockCard.scss";

export type Props = PackageCardProps;

type PackageCardProps = {
  data: Rock;
  showVerification?: boolean;
};

function RockCard({ data, showVerification }: PackageCardProps) {
  const outerCardStyle: React.CSSProperties = {
    height: "100%",
  };

  const handleClick = () => {
    window.location.href = `/${data.package.name}`;
  };

  return (
    <Card style={outerCardStyle} onClick={handleClick}>
      <div className="sc-rock-card">
        <div className="p-media-object sc-rock-card__body">
          <img
            src={
              data.package.icon_url ||
              "https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg"
            }
            width={48}
            height={48}
            className="p-media-object__image"
            data-testid="package-icon"
            alt="Package icon"
          />
          <div className="sc-rock-card__details-wrapper">
            <div className="p-media-object__details">
              {data.package.display_name && (
                <h2 className="p-heading--5 u-no-margin--bottom u-no-padding--top">
                  {data.package.display_name}
                </h2>
              )}

              {data.publisher && (
                <p className="u-text--muted u-no-padding--top">
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
                          className="sc-package-publisher-icon"
                        />
                      )}

                      {(data.publisher.validation === "star" ||
                        data.publisher.validation === "starred") && (
                        <img
                          src="https://assets.ubuntu.com/v1/d810dee9-Orange+Star.svg"
                          width={14}
                          height={14}
                          alt="Star developer"
                          title="Star developer"
                          className="sc-package-publisher-icon"
                        />
                      )}
                    </>
                  )}
                </p>
              )}
              <p className={"u-line-clamp"}>{data.package.summary}</p>
            </div>
            <button className="p-chip--caution sc-rock-support-chip">
              <span className="p-chip__value">{data.package.support}</span>
            </button>
          </div>
        </div>
        {(data.package.last_updated || data.package.cves) && (
          <div className="sc-rock-card__footer">
            <hr />
            <div className="sc-rock-card__footer-content">
              {data.package.cves && (
                <p
                  className="u-text--small u-no-padding--top u-no-margin--bottom"
                  data-testid="package-channel"
                >
                  {data.package.cves}&nbsp;&nbsp;
                  <i className="p-icon--priority-critical"></i>
                </p>
              )}
              {data.package.last_updated && (
                <p
                  className="u-text--muted u-no-margin--bottom"
                  data-testid="package-channel"
                >
                  <i className="p-icon--change-version"></i>&nbsp;
                  <em>
                    Updated&nbsp;
                    {data.package.last_updated}
                  </em>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default RockCard;
