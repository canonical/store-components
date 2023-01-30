import React from "react";
import { Pagination, Row, Col } from "@canonical/react-components";

import PackageCard from "components/PackageCard";
import type { Package as PackageProps } from "../../types/package";

export type Props = {
  packages: Array<PackageProps>;
  itemsPerPage: number;
};

function CardList({ packages, itemsPerPage }: Props) {
  // This won't be necessary once
  // https://github.com/canonical/react-components/pull/880
  // is merged and released
  const style = `.p-pagination--centered .p-pagination { 
    text-align: center; 
    justify-content: center;
  }`;

  return (
    <>
      <style>{style}</style>
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
          // This won't be necessary once
          // https://github.com/canonical/react-components/pull/880
          // is merged and released
          className="p-pagination--centered"
        />
      </div>
    </>
  );
}

export default CardList;
