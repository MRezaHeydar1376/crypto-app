import axios from "axios";
import { useEffect } from "react";

const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function Home () {

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

    return(
        <div>

        </div>
    )
}

export default Home;