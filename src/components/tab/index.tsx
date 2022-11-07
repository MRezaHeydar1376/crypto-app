import { memo, useState } from "react";
import { Border, Button, Div, H6 } from "../../styles";
import { Color } from "../../variable";

type Link = {
    name: string;
    id: string;
}

interface Props {
    links: Link[];
}

function Tab({ links }: Props) {

    const [activeTab, setActiveTab] = useState("");

    function handleActiveTab(id: string) {
        setActiveTab(id);
    };

    return (
        <Div display="flex" width="100%" align="center" margin="30px 0 10px">
            {links ? links.map(link => (
                <Button
                    key={link.id}
                    width="20%"
                    height="40px"
                    border="2px solid transparent"
                    hoverBorder={`2px solid ${activeTab === link.id ? Color.green : Color.darkGray}`}
                    onClick={() => handleActiveTab(link.id)}
                >
                    <H6
                        fontSize="14px"
                        color={activeTab === link.id ? Color.green : Color.gray}
                        fontWeight="600"
                        cursor="pointer"
                    >
                        {link.name}
                    </H6>
                </Button>
            )) : null}
        </Div>
    );
}

export default memo(Tab);