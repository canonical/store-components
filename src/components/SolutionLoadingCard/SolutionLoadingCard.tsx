import React from "react";
import { Card } from "@canonical/react-components";

import "../SolutionCard/SolutionCard.scss";
import "./SolutionLoadingCard.scss";

function SolutionLoadingCard() {
  return (
    <Card
      aria-busy="true"
      aria-label="Loading solution"
      className="sc-solution-card sc-solution-loading-card u-no-margin--bottom"
    >
      <div className="sc-solution-card__body">
        <div className="p-media-object u-no-margin--bottom">
          <span className="p-media-object__image sc-solution-loading-card__placeholder sc-solution-loading-card__icon" />
          <div className="p-media-object__details sc-solution-loading-card__identity">
            <span className="sc-solution-loading-card__placeholder sc-solution-loading-card__title" />
            <span className="sc-solution-loading-card__placeholder sc-solution-loading-card__publisher" />
          </div>
        </div>
        <div className="sc-solution-card__summary sc-solution-loading-card__summary">
          <span className="sc-solution-loading-card__placeholder" />
          <span className="sc-solution-loading-card__placeholder" />
          <span className="sc-solution-loading-card__placeholder sc-solution-loading-card__summary-end" />
        </div>
      </div>
      <footer className="sc-solution-card__footer">
        <div className="sc-solution-card__qualities">
          <span className="sc-solution-loading-card__placeholder sc-solution-loading-card__footer-placeholder" />
        </div>
        <div className="sc-solution-card__metadata">
          <span className="sc-solution-loading-card__placeholder sc-solution-loading-card__footer-placeholder" />
        </div>
      </footer>
    </Card>
  );
}

export default SolutionLoadingCard;
