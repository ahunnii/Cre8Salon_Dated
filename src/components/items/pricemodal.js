/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components';

// include styles
import 'rodal/lib/rodal.css';
import Button from '../@styles/Button';
import { theme } from '../@styles';

const Contain = styled.ul`
  content: none;
  margin-top: 20px;
`;

const Modal = styled(Rodal)`
  .rodal-dialog {
    overflow-y: scroll;
  }

  h3 {
    color: black;
  }

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${theme.fonts.Montserrat};
    font-size: ${theme.fontSizes.large};

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${theme.colors.orange};
      font-size: ${theme.fontSizes.small};
      line-height: 12px;
    }
  }
`;

class PriceModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.show.bind(this)}>View All Prices</Button>

        <Modal
          height="95"
          width="95"
          measure="%"
          visible={this.state.visible}
          onClose={this.hide.bind(this)}>
          <Contain>
            <div dangerouslySetInnerHTML={{ __html: this.props.cre }}></div>
          </Contain>
        </Modal>
      </div>
    );
  }
}

export default PriceModal;
