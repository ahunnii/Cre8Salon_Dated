import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'styled-components';
import { theme, mixins, media, Nav } from '@styles';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.actualWhite};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${theme.fonts.Montserrat};
  box-shadow: -2px 0px 4px ${theme.colors.transNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.large};
  counter-increment: item 1;

  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${theme.fontSizes.large};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.smallish};
  `};
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;

class Menu extends Component {
  static propTypes = {
    isHome: PropTypes.bool,
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  render() {
    const { isHome, menuOpen, navLinks, handleMenuClick } = this.props;

    return (
      <MenuContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}>
        <Sidebar>
          <NavLinks>
            {isHome && (
              <NavList>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <NavListItem key={i}>
                      <NavLink href={url}>{name}</NavLink>
                    </NavListItem>
                  ))}
              </NavList>
            )}
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;
