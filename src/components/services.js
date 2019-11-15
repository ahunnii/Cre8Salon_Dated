import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
import ScrollReveal from 'scrollreveal';

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  p{
    line-height:1.5;
    font-family:${theme.fonts.Montserrat};

  }
`;

const ProjectsGrid = styled.div`
margin-top:35px;
width:100%;
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px 15px;
    position: relative;
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
  height: 100%;
  width:100%;


  hr{
    margin-top:2px;
    margin-bottom:10px;
    width:25%;
    border: 0;
    background: ${theme.colors.darkSlate};
    box-shadow: -1px -1px 1px #111,
    2px 2px 1px ${theme.colors.backgroundGrey};
    height:2px;
  }
  table{

    width:100%;
    border-spacing: 3px 1rem;
    padding-bottom:0px;
  }
  td:nth-child(1) {

    text-align:left;
  }
  td:nth-child(2) {

    text-align:right;
  }
`;
const ProjectTop = styled.div`

height:auto;
width:100%;


`;
const ProjectBottom = styled.div`height:5px;`;

const ServiceName = styled.h1`
  margin:auto;
  text-align:left;
  font-family: ${theme.fonts.Raleway};
  color: ${theme.colors.darkSlate};
  text-transform:uppercase;
  font-weight:700;

  letter-spacing: .1em;
  text-shadow:-1px -1px 1px #111,2px 2px 1px ${theme.colors.backgroundGrey};
  padding-bottom:5px;
`;

const ServiceNameHeading = styled(Heading)`

  border-bottom:2px solid black;


`;

const ServiceDescription = styled.div`
  font-size: 24px;
  line-height: 1.25;

  strong{
    font-family:${theme.fonts.Raleway};
    color:${theme.colors.darkSlate};
    text-transform:uppercase;
    font-weight:900;
    letter-spacing:.08em;


  }
  span{
    font-family:${theme.fonts.Montserrat};
    white-space: nowrap;
    width:30px;

  }
  ${media.phone`font-size: 16px;`};
  ${media.phablet`font-size: 18px;`};
`;

const StupidFreakingDiv = styled.div`font-size: 10px;line-height: 1.25;visibility:hidden;`;

const Disclaimer = styled.em`
  font-family:${theme.fonts.Raleway};
  line-height:1.5;
  font-size:20px;
  margin-top:3%;
  margin-bottom:30px;
`;

const Ending = styled.strong`
  font-family:${theme.fonts.Raleway};
  line-height:1.5;
  font-size:20px;
  margin-top:3%;
  margin-bottom:30px;
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
    const GRID_LIMIT = 7;
    const { showMore } = this.state;
    const { data } = this.props;
    const services = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstSix = services.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? services : firstSix;

    return (
        <ProjectsContainer>
                <span id="services" ref={el => (this.stylists = el)}></span>
          <Heading>Services</Heading>
          <Disclaimer>*Note that prices may vary due to hair length, density, technique and stylist experience</Disclaimer>
          <ProjectsGrid>
            <TransitionGroup className="projects">
              {projectsToShow &&
                projectsToShow.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { title} = frontmatter;
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
                          <ServiceNameHeading>{title}</ServiceNameHeading>

                          <ServiceDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </ProjectTop>
                        <ProjectBottom></ProjectBottom>
                      </ProjectInner>
                    </Project>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>

        </ProjectsGrid>
        <Disclaimer>*We offer onsite and offsite wedding services.</Disclaimer>

        </ProjectsContainer>



    );
  }
}

export default Services;
