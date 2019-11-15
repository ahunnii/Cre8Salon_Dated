import React from 'react';

import styled from 'styled-components';
import { theme, mixins, media } from '../styles';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${theme.colors.darkSlate};
  color: ${theme.colors.tangerine};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const GithubLink = styled.a`
  color: ${theme.colors.actualWhite};
  font-family: ${theme.fonts.Montserrat};
  font-size: ${theme.fontSizes.xsmall};
  font-weight:400;
`;

const Footer = () => (
  <FooterContainer>

    <Copy>
      <GithubLink
        href="https://www.andrewhunnii.com"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Made with ❤️ by Andrew Hunn
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
