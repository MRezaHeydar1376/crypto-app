import styled from "@emotion/styled/macro";

interface Props {
    width?: string;
    height?: string;
    backgrondColor?: string;
    display?: string;
    justify?: string;
    align?: string;
}

export const Button = styled.button<Props>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ backgrondColor = "transparent" }) => (backgrondColor ? backgrondColor : "transparent")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
`