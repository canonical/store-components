import React from "react";
import { Row, Col, Strip } from "@canonical/react-components";

export type Props = {
  copyrightYear: number;
};

function Footer({ copyrightYear }) {
  return (
    <Strip type="dark">
      <Row className="u-equal-height">
        <Col size={3}>
          <p>© {copyrightYear} Canonical Ltd.</p>
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
