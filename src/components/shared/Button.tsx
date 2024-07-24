import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakMap,
} from "@styles/button";

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  weak?: boolean;
  full?: boolean; // 화면 꽉 채울 것인지 아닌지
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  ({ color = "primary", weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = "small" }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: default;
        `
      : undefined,
);

export default Button;
