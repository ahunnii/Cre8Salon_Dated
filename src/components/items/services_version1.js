import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { srConfig } from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, Button, Heading } from '../styles';

import ScrollReveal from 'scrollreveal';
import PriceModal from './items/pricemodal';
import { Parallax} from 'react-parallax';


const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  margin-top:0px;
  padding-top:0px;
  h1{
    text-align:center;
    margin-bottom:0;
  }
  hr{
    margin-bottom:50px;
    width:15vw;
    color:${theme.colors.orange};
    }
    ${media.phone`margin-top: 0px; padding-top:0px;`};
    ${media.tablet`margin-top: 0px; padding-top:0px;`};

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

  `;
const Project = styled.div`
  transition: ${theme.transition};

  &:hover,
  &:focus {
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${theme.colors.shadowNavy};
      box-shadow: 0 19px 38px ${theme.colors.darkestNavy} 0 15px 12px ${theme.colors.shadowNavy};
    }
  }
`;
const ProjectTop = styled.div`padding:25px; height:400px`;
const ProjectBottom = styled.div``;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const ProjectName = styled.h1`
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  right:0.5em;
  font-family: ${theme.fonts.Montserrat};
  color: ${theme.colors.actualWhite};
  font-weight:100;
  font-shadow: 0 0 0 2px #000;
`;

const ProjectPara = styled.span`
  color:black;
  font-size:12px;

  li{
    font-size:15px;
    text-align:left;
  }
  hr{
    margin-bottom:5px;
    margin-top:5px;

  }
  strong{
    color:${theme.colors.tangerine};
  }
`;
const ProjectLink = styled.a``;
const ProjectDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;
  visibility: hidden;
  color:${theme.colors.darkerRed};
  a {
    ${mixins.inlineLink};
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: -5;
`;

const ServicesImage = styled(Section)`
  width:100%;
  margin-top:0;
  text-align:center;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  h1, p{
    color:white;
  }
`;

const Paragraph = styled.p`

  margin-top:35px;
  margin-bottom:35px;

  ${media.tablet`margin-top: 40px; margin-bottom:40px;`};
  ${media.phone`margin-top: 45px; margin-bottom:45px;`};

`;


class Services extends Component {
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
    ScrollReveal().reveal(this.services, srConfig());
    this.revealRefs.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)));
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });

  render() {
    const GRID_LIMIT = 6;
    const { showMore } = this.state;
    const { data } = this.props;
    const services = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstSix = services.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? services : firstSix;
    const parallaxImage = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/29543130_1495443247251190_899218474709824559_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-2.xx&oh=a6b36ad16e69e75f64f00eea397a4181&oe=5C9EC4CF";


    return (

      <div >
        <span id="services"ref={el => (this.services = el)}></span>
        <Parallax strength={200} bgImage={parallaxImage}>
          <ServicesImage>
            <Heading  >Services</Heading>
          </ServicesImage>
        </Parallax>

        <ProjectsContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elit ut aliquam purus sit amet luctus venenatis lectus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            Convallis posuere morbi leo urna molestie at elementum eu. Nibh ipsum consequat nisl vel pretium lectus.
          </Paragraph>
          <ProjectsGrid>
            <TransitionGroup className="projects">
              {projectsToShow &&
                projectsToShow.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { image, github, external, title, tech } = frontmatter;
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
                        <ProjectTop>
                          <CardImage src={image} ></CardImage>
                          <ProjectHeader></ProjectHeader>
                          <ProjectName>
                            {external ? (
                              <ProjectLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Visit Website">
                                {title}
                              </ProjectLink>
                            ) : (
                              title
                            )}
                            <ProjectPara>
                              <PriceModal
                                cre ={html}
                                style="z-index:50;"
                              ></PriceModal>
                            </ProjectPara>
                          </ProjectName>
                         <ProjectDescription dangerouslySetInnerHTML={{ __html: github }} />
                         <ProjectDescription dangerouslySetInnerHTML={{ __html: github }} />
                        </ProjectTop>
                        <ProjectBottom></ProjectBottom>
                      </ProjectInner>
                    </Project>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ProjectsGrid>


      </ProjectsContainer>
      </div>
    );
  }
}

export default Services;
