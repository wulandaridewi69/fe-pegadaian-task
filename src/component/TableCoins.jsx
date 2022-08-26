import React from 'react'
import Layout from './Layout';
import CoinRow from '../component/CoinRow'

const titles = ['', '#', 'Coin', 'Price', '24h Volume', 'Market Cap']

const TableCoins = ({ coins, search }) => {

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));

    return (
        <Layout>
            <table className='table table-dark mt-4 table-hover '>
                <thead>
                    <tr>
                        {titles.map(title => (
                            <td>{title}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredCoins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </Layout>
    )

}

export default TableCoins;