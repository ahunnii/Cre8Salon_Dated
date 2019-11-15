import React from 'react';

import styled from 'styled-components';
import { theme, mixins } from '@styles';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${theme.colors.darkSlate};
  color: ${theme.colors.tangerine};
  text-align: center;
  height: auto;
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const GithubLink = styled.a`
  color: ${theme.colors.actualWhite};
  font-family: ${theme.fonts.Montserrat};
  font-size: ${theme.fontSizes.xsmall};
  font-weight: 400;
`;

const Footer = () => (
  <FooterContainer>
    <Copy>
      <GithubLink
        href="https://www.andrewhunnii.com"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Made with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        by Andrew Hunn
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
