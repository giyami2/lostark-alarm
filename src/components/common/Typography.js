import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const typeface = {
  B1: css`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
  `,
  B2: css`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
  `,
  B3: css`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  `,
  B4: css`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
  `,
  B5: css`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
  `,
  B6: css`
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 110%;
  `,
  M1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
  `,
  M2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  M3: css`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  `,
  M4: css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  `,
  M5: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  `,
  S1: css`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
  `,
  S2: css`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
  `,
  S3: css`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
  `,
  S4: css`
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;
  `,
  S5: css`
    font-style: normal;
    font-weight: 300;
    font-size: 8px;
    line-height: 150%;
  `,
  LT1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-decoration-line: underline;
  `,
  LT2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-decoration-line: underline;
  `,
  LT3: css`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    text-decoration-line: underline;
  `,
};

export default function Typography({ typeface, color, children, ...rest }) {
  return (
    <StyleTypo color={color} typeface={typeface} {...rest}>
      {children}
    </StyleTypo>
  );
}

const StyleTypo = styled.p`
  ${(props) =>
    props.typeface ? typeface[props.typeface] : typeface[props["M1"]]};
  margin: 0;
  color: ${props => props.theme.colors.black2};
  white-space: pre-line;
`;
