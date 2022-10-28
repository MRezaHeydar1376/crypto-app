import { ReactElement, memo } from "react";
import { Div, H5, Img, Paragraph } from "../../styles";
import { Color } from "../../variable";

interface Props {
    icon: string;
    name: string;
    rank: string;
}

function CardSearch({ icon, name, rank }: Props): ReactElement {
    return (
        <Div
            display="flex"
            justify="space-between"
            align="center"
            margin="10px 0"
            cursor="pointer"
        >
            <Div display="flex" justify="start" align="center">
                <Img
                    src={icon}
                    alt=""
                    width="20px"
                />
                <H5
                    fontSize="15px"
                    color={Color.black}
                    margin="0 5px"
                >
                    {name}
                </H5>
            </Div>
            <Paragraph
                fontSize="14px"
                color={Color.black}
            >
                #{rank}
            </Paragraph>
        </Div>
    );
}

export default memo(CardSearch);