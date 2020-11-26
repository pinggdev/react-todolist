/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";

const Item = ({ children, flex, align }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["center", "left", "right", "justify"])
};

export default Item;
