import React from "react";

function IconCard({ iconUrl, displayName, children }) {
  return (
    <div
      className="p-media-object u-no-margin--bottom"
      style={{ height: "100%" }}
    >
      <a href={`/${displayName}`}>
        <img
          src={iconUrl}
          width={48}
          height={48}
          alt=""
          className="p-media-object__image"
          data-testid="package-icon"
        />
      </a>
      <div
        className="sc-package-card p-media-object__details"
        style={{ width: "100%" }}
      >
        {children}
      </div>
    </div>
  );
}

export default IconCard;
