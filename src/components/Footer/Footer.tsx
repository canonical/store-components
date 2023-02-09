import React from "react";
import { Row, Col, Strip } from "@canonical/react-components";

function Footer() {
  return (
    <Strip type="dark">
      <Row className="u-equal-height">
        <Col size={3}>
          <p>© {new Date().getFullYear()} Canonical Ltd.</p>
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
