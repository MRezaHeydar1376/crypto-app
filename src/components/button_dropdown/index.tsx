import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import { memo, ReactElement } from "react";
import { Border, Button, Div, H6, Img, Paragraph } from '../../styles';

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
    
    const wrapperRef: any = useRef(null);
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

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Div
            display="flex"
            align="center"
            direction="column"
            position="relative"
            width="10%"
            ref={wrapperRef}
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
                    backgroundColor="gray"
                >
                    {items ? items.map(item => (
                        <Button
                            key={item.id}
                            onClick={() => selectLanguage(item.id)}
                            width="100%"
                            border="0px"
                        >
                            <Paragraph
                                margin="10px auto"
                                fontSize="12px"
                                cursor="pointer"
                            >
                                {item.text}
                            </Paragraph>
                            <Border width="100%" height="1px" />
                        </Button>
                    )) : null}
                </Div> :
                null
            }
        </Div>
    )
}

export default memo(ButtonDropDown);

