import { css } from "@emotion/core";

export const paper = ({ theme }) =>
  css`
    width: 600px;
    height: 800px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 32px;
  `;

export const frame = ({ theme }) =>
  css`
    border: 1px solid ${theme.color.primary.black};
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    height: 100%;
  `;
