import React from 'react';
import ReactDOM from 'react-dom';
import { Brand, FlagIran } from "../../assets";
import { ButtonDropDown } from "../../components";
import { ITEM } from '../../components/button_dropdown';
import { Div } from '../../components/Global/style';

const Items = [
    {text: "Persian", id: "1"},
    {text: "English", id: "2"}
]

function TopNavbar() {
    return (
        <Div display="flex" align="center">
            <Div size="20%" display="flex" justify="start">
                <img src={Brand} alt="" />
            </Div>
            <Div size="80%" display="flex" justify="end">
                <ButtonDropDown
                    title="Language"
                    icon={FlagIran}
                    items={Items}
                />
            </Div>
        </Div>
    )
}

export default TopNavbar;