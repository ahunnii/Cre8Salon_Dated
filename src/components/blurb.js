import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { srConfig } from '@config';

import styled from 'styled-components';
import { mixins, Section, Heading, theme } from '@styles';

import sr from '@utils/sr';
import HeroGallery from '@components/heroCarousel';

const BlurbContainer = styled(Section)`
  text-align: center;
  margin-top: 35px;
  a {
    ${mixins.bigButton};
  }
  h2 {
    font-weight: 100;
    color: black;
    margin: 50px auto;
    font-family: ${theme.fonts.Montserrat};
  }
`;

class Blurb extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    sr.reveal(this.blurb, srConfig());
  }

  render() {
    const { data } = this.props;
    const { html } = data[0].node;

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HeroGallery></HeroGallery>
        <BlurbContainer id="blurb" ref={el => (this.blurb = el)}>
          <Heading>Our Mission:</Heading>
          <h2 dangerouslySetInnerHTML={{ __html: html }} />
          <a href="https://www.facebook.com/Cre8Salon.Inc" target="blank">
            {' '}
            Like Us of Facebook!
          </a>
        </BlurbContainer>
      </div>
    );
  }
}

export default Blurb;
