import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  color: ${theme.colors.darkSlate};
  background-color: white;
  border: 1px solid ${theme.colors.darkSlate};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.Montserrat};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 18px 23px;
  width:45%;
  height:100%;

  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.colors.darkSlate};
    border-color:${theme.colors.actualWhite};
    color:white;
    font-style:bold;
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
