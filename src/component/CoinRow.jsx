import React from 'react'
import { useNavigate } from "react-router-dom"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import Layout from './Layout';

const CoinRow = ({ coin, index, props }) => {

    const navigate = useNavigate()

    return (
        // <Layout>
        <tr onClick={() => navigate(`../detail/${coin.id}`)} >
            <td>
                <StarOutlineIcon />
            </td>
            <td>
                <span>{index}</span>
            </td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: '5%' }} className='me-4' />
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase text-center'>{coin.symbol}</span>
            </td>
            <td>IDR {coin.current_price}</td>
            <td>IDR {coin.total_volume}</td>
            <td>IDR {coin.market_cap}</td>
        </tr>
        // </Layout>
    )

}

export default CoinRow;
