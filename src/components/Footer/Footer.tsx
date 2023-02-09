import React from "react";
import { Row, Col, Strip } from "@canonical/react-components";

export type Props = {
  copyrightYear: number;
  companyName: string;
};

const Footer: React.FC<Props> = ({ copyrightYear, companyName }) => {
  return (
    <>
      <Strip type="dark">
        <Row className="u-equal-height">
          <Col size={3}>
            <p>
              © {copyrightYear} {companyName}
            </p>
          </Col>
        </Row>
      </Strip>
    </>
  );
};

export default Footer;
