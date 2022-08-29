import React from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

import Layout from "../component/Layout";


const Detail = () => {
    const [coins, setCoins] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const id = params.id
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setCoins({ ...coins, ...res.data })
                console.log('ini data dari', res)
            })
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
                <div className="pt-24" >
                    <div className="container border rounded pl-56 pr-56 ">
                        <h3 className="">{coins.name}</h3>
                        <h1 className="text-center text-muted">IDR {coins.market_data.current_price.idr}</h1>
                    </div>
                    <br/>
                    <div className="container border rounded ml-56 mr-56 ">
                        <div className="row">
                            <div className="col-6">
                                <h5>Market Cap</h5>
                                <p className="text-muted">IDR {coins.market_data.market_cap.idr}</p>
                                <h5>24h Low / 24h High</h5>
                                <p className="text-muted">
                                    IDR {coins.market_data.low_24h.idr} / IDR {coins.market_data.high_24h.idr}
                                </p>
                                <h5>Fully Diluted Valuation</h5>
                                <p className="text-muted">{coins.market_data.fully_diluted_valuation.idr}</p>

                            </div>
                            <div className="col-6">
                                <h5>24 Hour Trading Volume</h5>
                                <p className="text-muted">IDR {coins.market_data.total_volume.idr}</p>
                                <h5>Circulating Supply</h5>
                                <p className="text-muted">{coins.market_data.circulating_supply}</p>
                                <h5>Max Supply</h5>
                                <p className="text-muted">{coins.market_data.max_supply}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        );
    }
}

export default Detail;