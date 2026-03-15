import React from "react";
import styled, { css } from "styled-components";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "caption"
  | "small";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  as?: React.ElementType;
  color?: string;
}

const variantStyles = {
  h1: css`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  `,
  h3: css`
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
  `,
  h4: css`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  `,
  h5: css`
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  `,
  h6: css`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  `,
  subtitle: css`
    font-size: 0.825rem;
    font-weight: 400;
  `,
  body: css`
    font-size: 1rem;
    font-weight: 400;
  `,
  caption: css`
    font-size: 0.875rem;
  `,
  small: css`
    font-size: 0.75rem;
  `,
};

const StyledTypography = styled.span<{
  $variant: TypographyVariant;
  $color?: string;
}>`
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $color }) => $color && `color: ${$color};`}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  as,
  color,
  ...rest
}) => {
  const tagMap: Record<TypographyVariant, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle: "h6",
    body: "p",
    caption: "span",
    small: "span",
  };

  const Component = as || tagMap[variant] || "span";

  return (
    <StyledTypography
      as={Component}
      $variant={variant}
      $color={color}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
