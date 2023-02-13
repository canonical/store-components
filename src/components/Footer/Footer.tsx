import React from "react";
import { Row, Col, Strip } from "@canonical/react-components";

type SocialLink = {
  iconUrl: string;
  href: string;
  altText: string;
};

export type Props = {
  socialLinks: SocialLink[];
};

function Footer({ socialLinks }: Props) {
  return (
    <Strip type="dark">
      <Row className="u-equal-height">
        <Col size={3}>
          <p>© {new Date().getFullYear()} Canonical Ltd.</p>
          <ul className="p-inline-list">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.href}>
                <a href={socialLink.href}>
                  <img src={socialLink.iconUrl} alt={socialLink.altText} />
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
