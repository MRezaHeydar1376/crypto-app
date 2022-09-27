import { useState } from "react";
import { Brand, FlagIran, FlagUsa } from "../../assets";
import { ButtonDropDown } from "../../components";
import { Div } from "../../styles";

const Items = [
    { text: "English", id: "1" },
    { text: "فارسی", id: "2" },
]

function TopNavbar() {
    const [icon, setIcon] = useState(FlagUsa);

    function selectItem(text: string, id: string) {
        if(id === "1") {
            setIcon(FlagUsa)
        } else {
            setIcon(FlagIran)
        }
    }

    return (
        <Div display="flex" justify="space-between" align="center">
            <Div width="20%" display="flex" justify="start">
                <img src={Brand} alt="" />
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
    )
}

export default TopNavbar;