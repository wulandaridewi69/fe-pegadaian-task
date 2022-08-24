import "../styles/App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "../component/TableCoins";
import Layout from "../component/Layout";
import Pagination from "@mui/material/Pagination";
// import { useNavigate } from "react-router-dom"

const App = () => {

  // const navigate = useNavigate()
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const getData = (page) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=25&page=${page}`)
      .then((res) => { 
        setCoins(res.data)
        // navigate(`/detail/${coins_id}`);
       })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <input type='text' placeholder='Search a Coin' className='form-control bg-dark text-center text-light border-0 mt-4' onChange={e => setSearch(e.target.value)} />
          <TableCoins coins={coins} search={search} />
          <Pagination
            size="large"
            count={5}
            onChange={(event, pageNumber) => getData(pageNumber)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default App;
