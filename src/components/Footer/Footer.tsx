import React from "react";
import { Row, Col, Strip } from "@canonical/react-components";

import "./Footer.scss";

type SocialLink = {
  name: string;
  iconUrl: string;
  href: string;
  altText: string;
};

type AdditionalLink = {
  name: string;
  href: string;
};

export type Props = {
  socialLinks: SocialLink[];
  additionalLinks: AdditionalLink[];
};

function Footer({ socialLinks, additionalLinks }: Props) {
  return (
    <Strip type="light">
      <Row className="u-equal-height">
        <Col size={3}>
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
        <Col size={6}>
          <ul className="p-list">
            {additionalLinks &&
              additionalLinks.map((additionalLink) => (
                <li className="p-list__item" key={additionalLink?.name}>
                  <a href={additionalLink?.href}>{additionalLink?.name}</a>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
