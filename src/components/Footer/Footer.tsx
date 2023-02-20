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

type OptionalLink = {
  name: string;
  href: string;
};

export type Props = {
  socialLinks: SocialLink[];
  additionalLinks: AdditionalLink[];
  optionalLinks: OptionalLink[];
};

function Footer({ socialLinks, additionalLinks, optionalLinks }: Props) {
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
        <Col size={3}>
          <ul className="p-list u-align-center">
            {additionalLinks &&
              additionalLinks.map((additionalLink) => (
                <li className="p-list__item" key={additionalLink?.name}>
                  <a href={additionalLink?.href}>{additionalLink?.name}</a>
                </li>
              ))}
          </ul>
        </Col>
        <Col size={6}>
          <p className="u-align--left">
            Ubuntu and Canonical are registered trademarks of Canonical Ltd.
          </p>
          {optionalLinks && optionalLinks.length > 0 && <hr />}
          {optionalLinks &&
            optionalLinks.map((optionalLink) => (
              <li className="p-inline-list__item" key={optionalLink?.name}>
                <a href={optionalLink?.href}>{optionalLink?.name}</a>
              </li>
            ))}
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
