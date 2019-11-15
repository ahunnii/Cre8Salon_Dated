import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/layout';
import Blurb from '@components/blurb';

// import About from '@components/about';
import Stylists from '@components/stylists';
import Contact from '@components/contact';
import Services from '@components/services';
import styled from 'styled-components';
import { mixins, Main } from '@styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;
const Border = styled.hr`
  width: 85vw;
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
`;

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Blurb data={data.blurb.edges} />
      <Border></Border>
      <Services data={data.services.edges} />
      <Border></Border>
      <Stylists data={data.stylists.edges} />
      <Border></Border>
      {/* <About data={data.about.edges} /> */}
      {/* <Border></Border> */}
      <Contact data={data.contact.edges} />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    blurb: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blurb/" } }) {
      edges {
        node {
          frontmatter {
            title
            tech
            blurb
          }
          html
        }
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            show
          }
          html
        }
      }
    }
    stylists: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stylists/" } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            status
            show
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
