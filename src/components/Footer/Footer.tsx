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
            <li className="p-list__item">
              <Link
                className="p-link"
                href="https://ubuntu.com/legal/terms-and-policies"
              >
                Terms of service
              </Link>
            </li>
            <li className="p-list__item">
              <Link
                className="p-link"
                href="https://ubuntu.com/legal/data-privacy?_ga=2.40064295.449174614.1676317399-1455078266.1676317399"
              >
                Data privacy
              </Link>
            </li>
            <li className="p-list__item">
              <Link className="p-link" href="https://charmhub.io/">
                Manage your tracker settings
              </Link>
            </li>
            <li className="p-list__item">
              <Link
                className="p-link"
                href="https://discourse.charmhub.io/t/status-values/1168"
              >
                Service status
              </Link>
            </li>
            <li className="p-list__item">
              <Link
                className="p-link"
                href="https://juju.is/docs/sdk/set-up-a-charm-project"
              >
                Other functions
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Strip>
  );
}

export default Footer;
