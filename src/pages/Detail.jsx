import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../component/Layout";

const Detail = () => {

    const [loading, setLoading] = useState(true)

    const [coins, setCoins] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        const id = params.id
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => { setCoins(res.data) })
            .catch((error) => {
                if (error.response.status === 404) {
                    navigate(`/detail/${id}/Not Found`)
                }
            })
            .finally(() => setLoading(false));
    }

    if (loading) {
        return (loading)
    } else {
        return (
            <Layout>
                <div>{coins.name}</div>
                <div>{coins.market_data.current_price.idr}</div>
                <div className="container">
                    {coins.market_data.map((coin, index) => (
                        <div key={index} className="row">
                            <div className="col-6">
                                <h5>Market Cap</h5>
                                <p className="text-muted">IDR {coin.market_cap.idr}</p>
                                <h5>24h High</h5>
                                <p className="text-muted">IDR {coin.high_24h.idr}</p>
                                <h5>24h Low</h5>
                                <p className="text-muted">IDR {coin.low_24h.idr}</p>

                            </div>
                            <div className="col-6">
                                <h5>Fully Diluted Valuation</h5>
                                <p className="text-muted">{coin.fully_diluted_valuation.idr}</p>
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
    }
}

export default Detail;
