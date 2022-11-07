import axios from "axios";
import { useEffect } from "react";
import { Tab, Table } from "../../components";
import { Border, Div } from "../../styles";
import { Color } from "../../variable";

const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const Name_Tab = [
    { name: "Coins", id: "0" },
    { name: "New Coins", id: "1" },
    { name: "Gainers & Losers", id: "2" },
    { name: "Categories", id: "3" },
    { name: "NFT", id: "4" },
    { name: "Gaming", id: "5" },
]

function Home() {

    useEffect(() => {
        axios
            .get(API)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(Error)
            })
    }, [])

    return (
        <Div>
            <Div width="60%">
                <Tab links={Name_Tab} />
            </Div>
            <Border height="0.1px" color={Color.darkWhite} margin="-10px 0 20px 0"/>
            <Table/>
        </Div>
    )
}

export default Home;