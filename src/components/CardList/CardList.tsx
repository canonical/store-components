import React from "react";
import { Row, Col } from "@canonical/react-components";

import PackageCard from "components/PackageCard";
import type { Package as PackageProps } from "../../types/package";

export type Props = {
  packages: Array<PackageProps>;
};

function CardList({ packages }: Props) {
  return (
    <>
      <Row>
        {packages.length > 0 &&
          packages.map((item) => (
            <Col
              size={3}
              key={item?.package?.name}
              style={{ marginBottom: "1.5rem" }}
            >
              <PackageCard item={item} />
            </Col>
          ))}
      </Row>
    </>
  );
}

export default CardList;
