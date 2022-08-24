
import "../styles/App.css";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../component/Layout";

const titles = ['Market Cap', '24h Low / 24h High', 'Fully Dilueted Valuation', 'Max Supplay', 'Circulating Supplay']

const Detail = () => {

    const [coins, setCoins] = useState([])
    const params = useParams()
    const coins_id = params.coins_id
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => { setCoins(res.data) })
            .catch((error) => {
                if (error.response.status === 404) {
                    navigate(`/detail/${coins_id}/Not Found`)
                }
            });
    }

    return (
        <Layout>
            <div>{coins.name}</div>
            <div>{coins.current_price}</div>
            <div className="container">
                {coins.map((coin, index) => (
                    <div key={index} className="row">
                        <div className="col-6">
                            <h5>Market Cap</h5>
                            <p className="text-muted">IDR {coin.market_cap}</p>
                            <h5>24h High</h5>
                            <p className="text-muted">IDR {coin.high_24h}</p>
                            <h5>24h Low</h5>
                            <p className="text-muted">IDR {coin.low_24h}</p>

                        </div>
                        <div className="col-6">
                            <h5>Fully Diluted Valuation</h5>
                            <p className="text-muted">{coin.fully_diluted_valuation}</p>
                            <h5>Circulating Supply</h5>
                            <p className="text-muted">{coin.circulating_supply}</p>
                            <h5>Max Supply</h5>
                            <p className="text-muted">{coin.max_supply}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout >
    );
};

export default Detail;
