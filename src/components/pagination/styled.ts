import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  list-style-type: none;
`;

export const StyledPaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .arrow {
    &::before {
      position: relative;
      content: "";
      display: inline-block;
      width: 6.4px;
      height: 6.4px;
      border-right: 2px solid rgba(0, 0, 0, 0.87);
      border-top: 2px solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translate(-50%);
    }

    &.right {
      transform: rotate(45deg);
    }
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const StyledPaginationArrow = styled.div<{
  arrowType: "left" | "right";
}>`
  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 6.4px;
    height: 6.4px;
    border-right: 2px solid rgba(0, 0, 0, 0.87);
    border-top: 2px solid rgba(0, 0, 0, 0.87);
  }
  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    .arrow::before {
      border-right: 2px solid rgba(0, 0, 0, 0.43);
      border-top: 2px solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
  ${({ arrowType }) =>
    arrowType === "left"
      ? css`
          transform: rotate(-135deg) translate(-50%);
        `
      : css`
          transform: rotate(45deg);
        `};
`;
