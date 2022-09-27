import { useState } from "react";
import { Brand, FlagIran, FlagUsa } from "../../assets";
import { ButtonDropDown } from "../../components";
import { Border, Div, Img } from "../../styles";

const Items = [
    { text: "English", id: "1" },
    { text: "فارسی", id: "2" },
]

function TopNavbar() {
    const [icon, setIcon] = useState(FlagUsa);

    function selectItem(text: string, id: string) {
        if (id === "1") {
            setIcon(FlagUsa)
        } else {
            setIcon(FlagIran)
        }
    }

    return (
        <Div>
            <Div display="flex" justify="space-between" align="center">
                <Div width="20%" display="flex" justify="start">
                    <Img
                        src={Brand}
                        alt=""
                        width="75%"
                    />
                </Div>
                <Div width="80%" display="flex" justify="end">
                    <ButtonDropDown
                        title="Language"
                        icon={icon}
                        items={Items}
                        selectItem={selectItem}
                    />
                </Div>
            </Div>
            <Border height="1.5px" />
        </Div>
    )
}

export default TopNavbar;