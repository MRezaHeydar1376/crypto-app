import { ChangeEvent, useState } from "react";
import { Search } from "../../assets";
import { Div, Img, Input } from "../../styles";

function InputSearch() {

    const [value, setValue] = useState("");

    function getValueInput(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    };

    return (
        <Div position="relative">
            <Input
                width="100%"
                height="30px"
                border="0.75px solid gray"
                borderRadius="8px"
                padding="0 5px"
                placeholder="Search"
                onChange={getValueInput}
            />
            {value === "" ? (
                <Img
                    src={Search}
                    alt=""
                    width="25px"
                    position="absolute"
                    top="4px"
                    left="5px"
                />
            ) : null}
        </Div>
    );
}

export default InputSearch;