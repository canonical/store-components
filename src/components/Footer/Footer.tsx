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

type CharmedOperatorFramework = {
  heading: string;
  name: string;
  href: string;
  bold_name: string;
};

type CharmedOperator = {
  heading: string;
  name: string;
  href: string;
  bold_name: string;
};

type Compare = {
  heading: string;
  name: string;
  href: string;
  bold_name: string;
};

type Blog = {
  heading: string;
  name: string;
  href: string;
  bold_name: string;
};

export type Props = {
  socialLinks: SocialLink[];
  additionalLinks: AdditionalLink[];
  optionalLinks: OptionalLink[];
  charmedOperatorFrameworkLinks: CharmedOperatorFramework[];
  charmedOperatorLinks: CharmedOperator[];
  compareLinks: Compare[];
  blogLinks: Blog[];
};

function Footer({
  socialLinks,
  additionalLinks,
  optionalLinks,
  charmedOperatorFrameworkLinks,
  charmedOperatorLinks,
  compareLinks,
  blogLinks,
}: Props) {
  return (
    <Strip type="light">
      {charmedOperatorFrameworkLinks &&
        charmedOperatorFrameworkLinks.length > 0 && (
          <Row className="children-footer u-equal-height">
            <Col size={3}>
              <ul className="p-list">
                {charmedOperatorFrameworkLinks && (
                  <h2 className="p-heading--5">
                    {charmedOperatorFrameworkLinks[0].heading}
                  </h2>
                )}
                {charmedOperatorFrameworkLinks &&
                  charmedOperatorFrameworkLinks.map((childrenLink) => {
                    return (
                      <li className="p-list__item" key={childrenLink?.name}>
                        <a className="p-link--soft" href={childrenLink?.href}>
                          <small>{childrenLink?.name}</small>
                        </a>
                        <a
                          className="p-heading--5 -link--soft"
                          href={childrenLink?.href}
                        >
                          <small>{childrenLink?.bold_name}</small>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col size={3}>
              <ul className="p-list">
                {charmedOperatorLinks && (
                  <h2 className="p-heading--5">
                    {charmedOperatorLinks[0].heading}
                  </h2>
                )}
                {charmedOperatorLinks &&
                  charmedOperatorLinks.map((childrenLink) => {
                    return (
                      <li className="p-list__item" key={childrenLink?.name}>
                        <a className="p-link--soft" href={childrenLink?.href}>
                          <small>{childrenLink?.name}</small>
                        </a>
                        <a
                          className="p-heading--5 -link--soft"
                          href={childrenLink?.href}
                        >
                          <small>{childrenLink?.bold_name}</small>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col size={3}>
              <ul className="p-list">
                {compareLinks && (
                  <h2 className="p-heading--5">{compareLinks[0].heading}</h2>
                )}
                {compareLinks &&
                  compareLinks.map((childrenLink) => {
                    return (
                      <li className="p-list__item" key={childrenLink?.name}>
                        <a className="p-link--soft" href={childrenLink?.href}>
                          <small>{childrenLink?.name}</small>
                        </a>
                        <a
                          className="p-heading--5 -link--soft"
                          href={childrenLink?.href}
                        >
                          <small>{childrenLink?.bold_name}</small>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col size={3}>
              <ul className="p-list">
                {blogLinks && (
                  <h2 className="p-heading--5">{blogLinks[0].heading}</h2>
                )}
                {blogLinks &&
                  blogLinks.map((childrenLink) => {
                    return (
                      <li className="p-list__item" key={childrenLink?.name}>
                        <a className="p-link--soft" href={childrenLink?.href}>
                          <small>{childrenLink?.name}</small>
                        </a>
                        <a
                          className="p-heading--5 -link--soft"
                          href={childrenLink?.href}
                        >
                          <small>{childrenLink?.bold_name}</small>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Col>
          </Row>
        )}
      {charmedOperatorFrameworkLinks &&
        charmedOperatorFrameworkLinks.length > 0 && <hr />}
      <Row className="main-footer u-equal-height">
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
