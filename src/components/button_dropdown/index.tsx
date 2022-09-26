import React, { Fragment, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { memo, ReactElement } from "react";
import { Div, H6, Paragraf } from "../Global/style";

export type ITEM = {
    text: string;
    id: string;
}

interface Props {
    icon?: string;
    title: string;
    items: ITEM[];
}

function ButtonDropDown({ icon, title, items }: Props): ReactElement {

    const [dropdown, setDropdown] = useState(false);

    const openDropdown = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    const closeDropdown = () => {
        setDropdown(false);
    }
    console.log(items)
    return (
        <Div>
            <button onClick={openDropdown}>
                {icon ? (
                    <img src={icon} alt="" />
                ) : (null)}
                <H6>
                    {title}
                </H6>
            </button>
            <Div>
                {items?.map(item => (
                    <Fragment key={item.id}>
                        Ahmad
                    </Fragment>
                ))}
            </Div>
        </Div>
    )
}

export default memo(ButtonDropDown);