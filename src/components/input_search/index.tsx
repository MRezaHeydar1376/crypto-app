import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CardSearch } from "..";
import { Luna, SearchBlack, SearchWhite } from "../../assets";
import { Border, Button, Div, H6, Img, Input } from "../../styles";
import { Color } from "../../variable";


function InputSearch() {

    const [value, setValue] = useState("");
    const [search, setSearch] = useState(false);
    const wrapperRef: any = useRef(null);

    function getValueInput(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    };

    function showSearch() {
        setSearch(true);
    };

    function hideSearch() {
        setSearch(false);
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setSearch(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    return (
        <Div position="relative" borderRadius="10px">
            <Button
                width="170px"
                height="35px"
                display="flex"
                justify="space-between"
                align="center"
                borderRadius="8px"
                backgrondColor={Color.gray}
                border="none"
                onClick={showSearch}
            >
                <Img
                    src={SearchWhite}
                    alt=""
                    width="25px"
                />
                <H6
                    fontSize="16px"
                    color={Color.white}
                    margin="0 30px"
                    cursor="pointer"
                >
                    Search
                </H6>
            </Button>
            {search ? (
                <Div
                    width="200px"
                    backgroundColor={Color.white}
                    boxShadow="0px 0px 10px 0px #998899"
                    borderRadius="10px"
                    padding="0 8px"
                    height="200px"
                    overflowY="auto"
                    overflowX="hidden"
                    position="absolute"
                    top="0px"
                    left="-16px"
                    ref={wrapperRef}
                >
                    <Input
                        width="100%"
                        height="30px"
                        border="none"
                        borderRadius="8px"
                        padding="0 5px"
                        placeholder="Search"
                        onChange={getValueInput}
                    />
                    {value === "" ? (
                        <Img
                            src={SearchBlack}
                            alt=""
                            width="25px"
                            position="absolute"
                            top="4px"
                            left="5px"
                        />
                    ) : null}
                    <Border />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                    <CardSearch
                        icon={Luna}
                        name="Terra Luna Classic"
                        rank="33"
                    />
                </Div>
            ) : null}

        </Div>
    );
}

export default InputSearch;