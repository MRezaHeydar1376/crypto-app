import { DropDown, InputSearch } from "../../components";
import { Border, Button, Div, H6 } from "../../styles";
import { Color } from "../../variable";

function BottomNavbar() {
    return (
        <Div>
            <Div display="flex" margin="10px 0" align="center" justify="space-between">
                <Div width="60%" display="flex">
                    <DropDown title={"Cryptocurrencies"} links={["By Market Cap","New Cryptocurrencies","Categories","Watchlists","High Volume","All Coins"]}/>
                    <DropDown title={"Exchanges"} links={["Crypto Exchanges", "Decentralized Exchange","Derivatives"]}/>
                    <DropDown title={"NFT"} links={["NFT Floor Price","NFT Related Coins"]}/>
                    <DropDown title={"Learn Crypto"} links={["All Crypto Articles", "Analysis","Guides", "Glossary", "Video"]}/>
                    <DropDown title={"Products"} links={["CoinGecko Research","CoinGecko App", "Crypto API"]}/>
                </Div>
                <Div width="30%" display="flex" justify="space-between" align="center">
                    <Div
                        width="40%"
                        display="flex"
                        justify="center"
                        align="center"
                    >
                        <Button
                            backgrondColor="transparent"
                            border="none"
                            borderRadius="8px"
                        >
                            <H6
                                fontSize="14px"
                                color={Color.black}
                                fontWeight="600"
                            >
                                Login
                            </H6>
                        </Button>
                        <Button
                            backgrondColor={Color.green}
                            border="none"
                            borderRadius="8px"
                            width="100px"
                            height="30px"
                        >
                            <H6
                                fontSize="14px"
                                color={Color.white}
                                fontWeight="600"
                            >
                                Sign Up
                            </H6>
                        </Button>
                    </Div>
                    <Div width="50%">
                        <InputSearch />
                    </Div>
                </Div>
            </Div>
            <Border height="1px" />
        </Div>
    );
}

export default BottomNavbar;