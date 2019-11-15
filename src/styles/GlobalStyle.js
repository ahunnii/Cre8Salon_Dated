import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import * as fonts from './fonts';


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Raleway';
  src: url(${fonts.RalewayLightTTF})format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src: url(${fonts.RalewayLightItalicTTF}) format('truetype');
  font-weight: 300;
  font-style: italic;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src:url(${fonts.RalewayRegularTTF}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src:url(${fonts.RalewayThinTTF}) format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src:url(${fonts.RalewayMediumTTF}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src: url(${fonts.RalewayMediumItalicTTF}) format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: auto;
  }
  @font-face {
  font-family: 'Raleway';
  src:url(${fonts.RalewaySemiBoldTTF}) format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: auto;
  }
  @font-face {
    font-family: 'Raleway';
    src:url(${fonts.RalewayBlackTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
    }


  @font-face {
  font-family: 'Raleway';
  src: url(${fonts.RalewaySemiBoldItalicTTF}) format('truetype');
  font-weight: 600;
  font-style: italic;
  font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreLightWOFF2}) format('woff2'),
    url(${fonts.CalibreLightWOFF}) format('woff'),
    url(${fonts.CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreLightItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreLightItalicWOFF}) format('woff'),
    url(${fonts.CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreRegularWOFF2}) format('woff2'),
    url(${fonts.CalibreRegularWOFF}) format('woff'),
    url(${fonts.CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreRegularItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreRegularItalicWOFF}) format('woff'),
    url(${fonts.CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreMediumWOFF2}) format('woff2'),
    url(${fonts.CalibreMediumWOFF}) format('woff'),
    url(${fonts.CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreMediumItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreMediumItalicWOFF}) format('woff'),
    url(${fonts.CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreSemiboldWOFF2}) format('woff2'),
    url(${fonts.CalibreSemiboldWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoRegularWOFF2}) format('woff2'),
    url(${fonts.SFMonoRegularWOFF}) format('woff'),
    url(${fonts.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fonts.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoMediumWOFF2}) format('woff2'),
    url(${fonts.SFMonoMediumWOFF}) format('woff'),
    url(${fonts.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fonts.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fonts.SFMonoSemiboldWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

  -------------------
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratLightWOFF2}) format('woff2'),
    url(${fonts.MontserratLightWOFF}) format('woff'),
    url(${fonts.MontserratLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratLightItalicWOFF2}) format('woff2'),
    url(${fonts.MontserratLightItalicWOFF}) format('woff'),
    url(${fonts.MontserratLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratRegularWOFF2}) format('woff2'),
    url(${fonts.MontserratRegularWOFF}) format('woff'),
    url(${fonts.MontserratRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratMediumWOFF2}) format('woff2'),
    url(${fonts.MontserratMediumWOFF}) format('woff'),
    url(${fonts.MontserratMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratMediumItalicWOFF2}) format('woff2'),
    url(${fonts.MontserratMediumItalicWOFF}) format('woff'),
    url(${fonts.MontserratMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratSemiboldWOFF2}) format('woff2'),
    url(${fonts.MontserratSemiboldWOFF}) format('woff'),
    url(${fonts.MontserratSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${fonts.MontserratSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.MontserratSemiboldItalicWOFF}) format('woff'),
    url(${fonts.MontserratSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${fonts.OpenSansRegularWOFF2}) format('woff2'),
    url(${fonts.OpenSansRegularWOFF}) format('woff'),
    url(${fonts.OpenSansRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${fonts.OpenSansSemiboldWOFF2}) format('woff2'),
    url(${fonts.OpenSansSemiboldWOFF}) format('woff'),
    url(${fonts.OpenSansSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${fonts.OpenSansSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.OpenSansSemiboldItalicWOFF}) format('woff'),
    url(${fonts.OpenSansSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  p{
    text-transform:uppercase;

  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.actualWhite};
    color: ${theme.colors.black};
    line-height: 1.25;
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.xlarge};
    ${media.phablet`font-size: ${theme.fontSizes.large};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {

  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.black};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.actualWhite};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${theme.colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 10px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }

`;

export default GlobalStyle;
