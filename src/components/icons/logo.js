import React from 'react';
import { theme, Heading,media} from '../../styles';
import styled from 'styled-components';
import Icon from '../../images/logo.jpg';
const LoaderHeading = styled(Heading)`
font-size:40px;

${media.phone`font-size: 30px;margin-left:5%;`};
text-align:left;
font-weight:600;
white-space: nowrap;
color:${theme.colors.actualWhite};
span{
  font-size:55px;
  ${media.phone`font-size: 45px; `};
  color:${theme.colors.darkestGrey};
  margin-right:3%;
  vertical-align:baseline;
  margin-top:3%;

}

`;
const IconLogo = () => (
  <img src = {Icon}></img>
  //<LoaderHeading>CRE<span>8</span>SALON</LoaderHeading>
);

export default IconLogo;
