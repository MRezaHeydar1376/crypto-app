import { useCallback, useState } from 'react';
import { memo, ReactElement } from "react";
import { Button, Div, H6, Img, Paragraph } from '../../styles';

export type ITEM = {
    text: string;
    id: string;
}

interface Props {
    icon?: string;
    title: string;
    items: ITEM[];
    selectItem(text: string, id: string): void;
}

function ButtonDropDown({ icon, title, items, selectItem }: Props): ReactElement {

    const [dropdown, setDropdown] = useState(false);
    const [language, setLanguage] = useState("English");

    const openDropdown = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    const closeDropdown = () => {
        setDropdown(false);
    };

    const selectLanguage = (id: string) => {
        if (id === "1") {
            setLanguage("English")
            setDropdown(false);
            selectItem("English", "1")
        } else {
            setLanguage("فارسی")
            setDropdown(false);
            selectItem("فارسی", "2")
        }
    };

    return (
        <Div
            display="flex"
            align="center"
            direction="column"
            position="relative"
            width="10%"
        >
            <Button
                onClick={openDropdown}
                borderRadius="8px"
                display="flex"
                align="center"
                width="100%"
                justify="space-between"
            >
                <H6 fontSize="13px">
                    {language}
                </H6>
                {icon ? (
                    <Img
                        src={icon}
                        alt=""
                        borderRadius="100%"
                        width="30%"
                    />
                ) : null}
            </Button>
            {dropdown ?
                <Div
                    position="absolute"
                    top="35px"
                    display="flex"
                    align="ccenter"
                    direction="column"
                >
                    {items ? items.map(item => (
                        <Paragraph
                            key={item.id}
                            onClick={() => selectLanguage(item.id)}
                            margin="10px auto"
                            fontSize="12px"
                            cursor="pointer"
                        >
                            {item.text}
                        </Paragraph>
                    )) : null}
                </Div> :
                null
            }
        </Div>
    )
}

export default memo(ButtonDropDown);