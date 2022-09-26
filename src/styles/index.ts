import styled from "@emotion/styled/macro";

interface PropsDiv {
    size?: string;
    display?: string;
    justify?: string;
    align?: string;
}

interface PropsText {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
}

export const Div = styled.div<PropsDiv>`
    width: ${({ size = "100%" }) => (size ? size : "100%")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
`

export const H1 = styled.h1<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const H2 = styled.h2<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const H3 = styled.h3<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const H4 = styled.h4<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const H5 = styled.h5<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const H6 = styled.h6<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`
export const Paragraph = styled.p<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: Roboto;
`