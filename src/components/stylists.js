import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import sr from '@utils/sr';

import Img from 'gatsby-image';

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  p {
    line-height: 1.5;
    font-family: ${theme.fonts.Montserrat};
    margin-top: 35px;
    margin-bottom: 30px;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${theme.colors.darkSlate};
`;
const Project = styled.div`
  transition: ${theme.transition};
`;

const ProjectTop = styled.div`
  padding: 25px;
  margin-bottom: auto;
`;

const ProjectName = styled.h5`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.backgroundGrey};
  font-family: ${theme.fonts.Montserrat};
  text-transform: uppercase;
`;
const ProjectSub = styled.h6`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.backgroundGrey};
  font-family: ${theme.fonts.Montserrat};
  text-transform: uppercase;
  margin-top: 0px;
  padding-top: 0px;
`;

const ProjectDescription = styled.div`
  font-size: 15px;
  line-height: 1.5;
  font-family: ${theme.fonts.Montserrat};
  height: 100%;
  margin: 5px auto;
  p {
    color: white;
  }
`;

const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  height: 500px;
`;

class Stylists extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
    this.restRefs = [];
  }

  state = {
    showMore: false,
  };

  componentDidMount() {
    sr.reveal(this.stylists, srConfig());
    this.revealRefs.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });

  render() {
    const GRID_LIMIT = 9;
    const { showMore } = this.state;
    const { data } = this.props;
    const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;

    return (
      <ProjectsContainer>
        <span id="stylists" ref={el => (this.stylists = el)}></span>

        <Heading>Meet Our Staff</Heading>

        <p>&nbsp;</p>
        <ProjectsGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title, avatar, external } = frontmatter;
                return (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                    exit={false}>
                    <Project
                      key={i}
                      ref={el => (this.revealRefs[i] = el)}
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}>
                      <ProjectInner>
                        <FeaturedImg fluid={avatar.childImageSharp.fluid} />

                        <ProjectTop>
                          <ProjectName>{title}</ProjectName>
                          <ProjectSub>{external}</ProjectSub>
                          <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </ProjectTop>
                      </ProjectInner>
                    </Project>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ProjectsGrid>
      </ProjectsContainer>
    );
  }
}
export default Stylists;
