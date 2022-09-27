import styled from "@emotion/styled/macro";

interface PropsDiv {
    width?: string;
    display?: string;
    justify?: string;
    align?: string;
    direction?: string;
    position?: string;
    top?: string;
    left?: string;
    backgroundColor?: string;
}

interface PropsText {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    margin?: string;
    cursor?: string;
}

interface PropsImg {
    borderRadius?: string;
    width?: string;
    height?: string;
}

interface PropsButton {
    width?: string;
    height?: string;
    backgrondColor?: string;
    display?: string;
    justify?: string;
    align?: string;
    border?: string;
    borderRadius?: string;
}

interface PropsBorder {
    width?: string;
    height?: string;
    color?: string;
    margin?: string;
}

export const Button = styled.button<PropsButton>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ backgrondColor = "transparent" }) => (backgrondColor ? backgrondColor : "transparent")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    border: ${({ border = "1px solid black" }) => (border ? border : "1px solid black")};
    border-radius: ${({ borderRadius = "1px solid black" }) => (borderRadius ? borderRadius : "1px solid black")};
    cursor: pointer;
`

export const Div = styled.div<PropsDiv>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    flex-direction: ${({ direction = "row" }) => (direction ? direction : "row")};
    position: ${({ position = "block" }) => (position ? position : "row")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    background-color: ${({ backgroundColor = "transparent" }) => (backgroundColor ? backgroundColor : "transparent")};
`

export const H1 = styled.h1<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const H2 = styled.h2<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const H3 = styled.h3<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const H4 = styled.h4<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const H5 = styled.h5<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const H6 = styled.h6<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const Paragraph = styled.p<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ color = "black" }) => (color ? color : "black")};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const Img = styled.img<PropsImg>`
    border-radius: ${({ borderRadius = "0%" }) => (borderRadius ? borderRadius : "0%")};
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
`
export const Border = styled.hr<PropsBorder>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ color = "black" }) => (color ? color : "black")};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    padding: 0px;
`