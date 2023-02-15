import React from "react";
import { Row, Col, Strip, Link } from "@canonical/react-components";

import "./Footer.scss";

type SocialLink = {
  name: string;
  iconUrl: string;
  href: string;
  altText: string;
};

export type Props = {
  socialLinks: SocialLink[];
};

function Footer({ socialLinks }: Props) {
  return (
    <Strip type="light">
      <Row className="u-equal-height">
        <Col size={4}>
          <a className="p-link--soft" href="#">
            Back to top
            <i className="p-icon--chevron-up"></i>
          </a>
          <p>© {new Date().getFullYear()} Canonical Ltd.</p>
          <ul className="p-inline-list">
            {socialLinks &&
              socialLinks.map((socialLink) => (
                <li className="p-inline-list__item" key={socialLink?.name}>
                  <a href={socialLink?.href}>
                    <img
                      src={socialLink?.iconUrl}
                      width={24}
                      height={24}
                      alt={socialLink?.altText}
                    />
                  </a>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
