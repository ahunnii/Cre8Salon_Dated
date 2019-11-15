import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, Section, Heading } from '@styles';
import sr from '@utils/sr';

const AboutContainer = styled(Section)`
  p {
    line-height: 1.5;
    font-family: ${theme.fonts.Montserrat};
    margin-top: 35px;
  }
`;

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    sr.reveal(this.about, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <Heading>{title}</Heading>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </AboutContainer>
    );
  }
}
export default About;
