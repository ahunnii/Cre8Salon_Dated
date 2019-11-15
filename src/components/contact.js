import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { srConfig, email } from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';

import ScrollReveal from 'scrollreveal';
import MapRender from '../components/map';

const ContactContainer = styled(Section)`

  p{
    font-family:${theme.fonts.Montserrat};
    margin-top:35px;
  }
  table{

    width:100%;
    border-spacing: 3px 1rem;
    padding-bottom:0px;
  }

  h3{
    text-transform:uppercase;
    font-size:25px;
    font-weight:600;
  }

  strong{
    font-family:${theme.fonts.Raleway};
    color:${theme.colors.darkSlate};
    text-transform:uppercase;
    font-weight:900;
    letter-spacing:.08em;
    font-size: 20px;
    line-height: 1.25;

  }
  span{
    font-family:${theme.fonts.Montserrat};
    white-space: nowrap;
    width:30px;
    font-size: 20px;
  line-height: 1.25;

  }
  flex-direction: column;
  align-items: flex-start;

`;
const SubHeading = styled(Heading)`
  display: block;
  color: ${theme.colors.darkestGrey};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.Montserrat};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${theme.fontSizes.small};
    ${media.desktop`font-size: ${theme.fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }

`;

const GridLayout = styled.div`



a{
  ${mixins.bigButton};
  height:auto;
  text-align:center;

  ${media.tablet`width:85vw;`};
}
a.telephone{
  ${mixins.smallButton};
  text-align:left;
  ${media.tablet`width:auto;`};
}
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 15px;
position: relative;
${media.desktop`grid-template-columns: 1fr`};


`;




class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;

    return (

        <ContactContainer id="contact" ref={el => (this.contact = el)}>
          <Heading>{title}</Heading>
          <GridLayout>
            <section>
            <p dangerouslySetInnerHTML={{ __html: html }} />
            <a href="https://www.facebook.com/Cre8Salon.Inc" target="blank"> Like Us of Facebook!</a>

              </section>
              <MapRender></MapRender>


            </GridLayout>

        </ContactContainer>

    );
  }
}

export default Contact;
