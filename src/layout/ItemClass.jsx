import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const StyledItem = styled.div`
  flex: ${(props) => props.flex};
  text-align: ${(props) => props.align};
  padding: ${(props) => props.padding};
`;

class Item extends React.Component {
  render() {
    const { children, flex, align, padding } = this.props;
    return (
      <StyledItem flex={flex} align={align} padding={padding}>
        {children}
      </StyledItem>
    );
  }

  static defaultProps = {
    align: "left",
    padding: "unset"
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    padding: PropTypes.string,
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.oneOf(["center", "left", "right", "justify"])
  };
}

export default Item;
