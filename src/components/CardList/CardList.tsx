import React from "react";
import { Pagination, Row, Col } from "@canonical/react-components";

import PackageCard from "components/PackageCard";
import type { Package as PackageProps } from "../../types/package";

export type Props = {
  packages: Array<PackageProps>;
  itemsPerPage: number;
};

function CardList({ packages, itemsPerPage }: Props) {
  return (
    <>
      <Row className="u-equal-height">
        {packages &&
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
      <div className="u-fixed-width">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={packages.length}
          paginate={() => {}}
          currentPage={2}
          scrollToTop
          centered
        />
      </div>
    </>
  );
}

export default CardList;
