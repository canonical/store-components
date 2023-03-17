import React, { useState } from "react";
import { Pagination, Row, Col } from "@canonical/react-components";

import PackageCard from "components/PackageCard";
import type { Package as PackageProps } from "../../types/package";

export type Props = {
  packages: Array<PackageProps>;
  itemsPerPage: number;
};

function CardList({ packages, itemsPerPage }: Props) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [packagesToShow, setPackagesToShow] = useState(
    packages.slice(0, itemsPerPage)
  );

  return (
    <>
      <Row>
        {packagesToShow.length > 0 &&
          packagesToShow.map((item) => (
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
          paginate={(pageNumber) => {
            const index = pageNumber - 1;
            setCurrentPageNumber(pageNumber);
            setPackagesToShow(
              packages.slice(
                itemsPerPage * index,
                itemsPerPage * index + itemsPerPage
              )
            );
          }}
          currentPage={currentPageNumber}
          scrollToTop
          centered
        />
      </div>
    </>
  );
}

export default CardList;
