import React from 'react'

const CoinRow = ({ coin, index }) => {

    return (
        <tr >
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '5%'}} className='me-4'/>
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase text-center'>{coin.symbol}</span>
            </td>
            <td>IDR { coin.current_price}</td>
            <td>IDR { coin.total_volume}</td>
            <td>IDR { coin.market_cap}</td>
        </tr>
    )

}

export default CoinRow;
