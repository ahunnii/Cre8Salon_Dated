import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';



import styled from 'styled-components';
import { theme, mixins, media, Nav } from '../styles';
import Spinner from 'react-spinkit';

const Wrapper = styled.div`
  iframe{
    ${media.tablet`height:500px; `};
  }


`;
class MapRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

render() {
    return (
      <Wrapper className="container rsvp-wrapper">
        {this.state.loading ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="white"
            fadeIn="none"
          />
        ) : null}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.295950581796!2d-83.6512129!3d42.4421222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0f9c1f10e62e688!2sCre8+Salon!5e0!3m2!1sen!2sus!4v1544914934960"
          width="100%"
          height="100%"
          onLoad={this.hideSpinner}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </Wrapper>
    );
  }
}
export default MapRender;
