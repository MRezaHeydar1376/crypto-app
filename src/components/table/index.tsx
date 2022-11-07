import { memo, useCallback, useState } from "react";
import { Luna, StarGold, StarWhite } from "../../assets";
import { Border, Div, H6, Img, Li, Paragraph, Ul, } from "../../styles";
import { Color } from "../../variable";

function TableComponent() {

    const [selectFavorite, setSelectFavorite] = useState(false);


    const handleSelectingFavorite = useCallback(() => {
        setSelectFavorite(!selectFavorite);
    }, [selectFavorite]);

    return (
        <Div>
            <Ul>
                <Border color={Color.darkWhite} />
                <Li height="40px" display="flex" align="center">
                    <Ul display="flex" justify="space-around" align="center">
                        <Li width="5%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                #
                            </H6>
                        </Li>
                        <Li width="20%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                Coin
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                Price
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                1h
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                24h
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                7d
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                24h Volume
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                Mkt Cap
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                Last 7 Days
                            </H6>
                        </Li>
                    </Ul>
                </Li>
                <Border color={Color.darkWhite} />
                <Li height="50px" display="flex" align="center">
                    <Ul display="flex" justify="space-around" align="center">
                        <Li width="5%" display="flex" align="center">
                            <Img
                                src={selectFavorite ? StarGold : StarWhite}
                                width="18px"
                                onClick={handleSelectingFavorite}
                                cursor="pointer"
                            />
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                                margin="0 10px"
                            >
                                1
                            </H6>
                        </Li>
                        <Li width="20%" display="flex" align="flex-end">
                            <Img src={Luna} width="18px" />
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                                margin="0 5px"
                            >
                                Bitcoin
                            </H6>
                            <Paragraph
                                fontSize="11px"
                                color={Color.gray}
                                fontWeight="400"
                                cursor="pointer"
                            >
                                BTC
                            </Paragraph>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                $20,414.16
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                -0.2%
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                -0.2%
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                -0.2%
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                $35,865,404,991
                            </H6>
                        </Li>
                        <Li width="10%">
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="400"
                            >
                                $391,844,264,085
                            </H6>
                        </Li>
                        <Li width="10%">
                            nemodar
                        </Li>
                    </Ul>
                </Li>
                <Border color={Color.darkWhite} />
            </Ul>
        </Div>
    );
}

export default memo(TableComponent);