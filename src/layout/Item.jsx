/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";

const Item = ({ children, flex, align, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};

Item.defaultProps = {
  align: "left",
  padding: "unset"
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  padding: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["center", "left", "right", "justify"])
};

export default Item;
