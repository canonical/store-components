import React from "react";
import { Card, Pagination, Row, Col } from "@canonical/react-components";

type CardProps = {
  package: {
    description: string;
    display_name: string;
    icon_url: string;
    name: string;
    platforms?: Array<string> | null;
    type: "snap" | "charm" | "bundle";
  };
  publisher: {
    display_name: string;
    name: string;
    validation?: "star" | "verified" | null;
  };
  categories: [
    {
      display_name: string;
      name: string;
    }
  ];
};

export type Props = {
  packages: Array<CardProps>;
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
              <Card style={{ height: "100%" }}>
                <img
                  src={item?.package?.icon_url}
                  width={48}
                  height={48}
                  alt=""
                />

                <h2 className="p-heading--4 u-truncate u-no-margin--bottom">
                  <a href={`/${item?.package?.name}`}>
                    {item?.package?.display_name}
                  </a>
                </h2>
                <p className="u-text--muted">
                  {item?.publisher?.display_name}{" "}
                  {item?.publisher?.validation && (
                    <>
                      {item?.publisher?.validation === "verified" && (
                        <img
                          src="https://assets.ubuntu.com/v1/ba8a4b7b-Verified.svg"
                          width={14}
                          height={14}
                          alt="Verified account"
                          title="Verified account"
                        />
                      )}
                      {item?.publisher?.validation === "star" && (
                        <img
                          src="https://assets.ubuntu.com/v1/d810dee9-Orange+Star.svg"
                          width={14}
                          height={14}
                          alt="Star developer"
                          title="Star developer"
                        />
                      )}
                    </>
                  )}
                </p>
                <p>{item?.package?.description}</p>
                {item?.package?.platforms && (
                  <div>
                    {item?.package?.platforms.includes("vm") && (
                      <img
                        src="https://assets.ubuntu.com/v1/a911ecf6-vm-badge.svg"
                        width={24}
                        height={24}
                        alt="VM"
                      />
                    )}

                    {item?.package?.platforms.includes("kubernetes") && (
                      <img
                        src="https://assets.ubuntu.com/v1/f1852c07-Kubernetes.svg"
                        width={24}
                        height={24}
                        alt="Kubernetes"
                      />
                    )}
                  </div>
                )}
              </Card>
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
