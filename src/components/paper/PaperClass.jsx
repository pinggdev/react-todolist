import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const StyledPaper = styled.div`
  width: 600px;
  height: 800px;
  background-color: ${(props) => props.theme.background.color.primary};
  border-radius: 4px;
  padding: 32px;
`;

const StyledFrame = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.black};
  height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <StyledPaper theme={theme}>
        <StyledFrame theme={theme}>{children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
