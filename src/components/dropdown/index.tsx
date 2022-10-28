import { memo, useState } from "react";
import { Button, Div, H5, H6 } from "../../styles";
import { Color } from "../../variable";

interface Props {
    title: string;
    links: string[];
}

function DropDown({ title, links }: Props) {
    const [dropdown, setDropdown] = useState(false);

    function showDropdown() {
        setDropdown(true);
    };
    function closeDropdown() {
        setDropdown(false);
    };

    return (
        <Div onMouseLeave={closeDropdown} position="relative">
            <Button width="100%" border="none" onMouseEnter={showDropdown}>
                <H5
                    fontSize="14px"
                    color={Color.black}
                    fontWeight="600"
                >
                    {title}
                </H5>
            </Button>
            {dropdown ? (
                <Div
                    borderRadius="4px"
                    border="0.5px solid black"
                    position="absolute"
                    top="19px"
                    backgroundColor={Color.white}
                    padding="10px 5px"
                >
                    {links.map((link, index) => (
                        <Button border="none" key={index}>
                            <H6
                                margin="5px 0"
                                fontSize="12px"
                                color={Color.black}
                                fontWeight="600"
                                cursor="pointer"
                            >
                                {link}
                            </H6>
                        </Button>
                    ))}
                </Div>
            ) : null}
        </Div>
    );
}

export default memo(DropDown);