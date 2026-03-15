import React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "normal" | "outlined";
type ButtonShape = "normal" | "rounded";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  icon?: React.ReactNode;
};

const buttonVariants = {
  normal: css`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border: none;

    &:hover {
      background-color: ${props => props.theme.colors.primaryDark};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.disabled};
      color: #fff;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};

    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
    }

    &:disabled {
      border-color: ${props => props.theme.colors.disabled};
      color: ${props => props.theme.colors.disabled};
    }
  `,
};

const buttonShapes = {
  normal: css`
    border-radius: 6px;
  `,
  rounded: css`
    border-radius: 999px;
  `,
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $shape: ButtonShape;
}>`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $shape }) => buttonShapes[$shape]}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "normal",
  shape = "normal",
  icon,
  ...props
}) => (
  <StyledButton $variant={variant} $shape={shape} {...props}>
    {icon && icon}
    {children}
  </StyledButton>
);

export default Button;
