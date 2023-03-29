import React from "react";

import PackageCard from "components/PackageCard";

function DefaultCard({ data }) {
  return <PackageCard data={data} showIcon showVerification />;
}

export default DefaultCard;
