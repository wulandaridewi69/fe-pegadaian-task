# Coin Market

This application describes the monitoring of coins in the global market using the rupiah currency. In this application we can also see the details of the selected coin. in this application there are 5 pages and each page consists of 25 lines.

The challenge there is the creation of a number format

## URL

A RESTful API using https://www.coingecko.com/en/api/documentation with REACT App.

```bash
Localhost : http://localhost:3000/
```
## How To Run

1. Clone this repo
```bash
git@github.com:wulandaridewi69/fe-pegadaian-task-coin.git
```

2. Before run this project, do this in your terminal :
```bash
cd my-app 
nmp i
npm start
```

## Endpoint Hilight

For users with Pro API Key, please use this root URL to make API request: https://pro-api.coingecko.com/api/v3/

##### Homepage [ / ]
`GET` /coins/markets

- API fetch : 
```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=25&page=${p}
```
- Response :
```
cache-control: public,max-age=300 
 Content-type: application/json; charset=utf-8 
 Expires: Tue,30 Aug 2022 06:50:25 GMT
Code : 200
Description : List all coins with market data

```

##### Detail [ /detail/{id} ]
`GET` /coins/{id}

- API fetch : 
```
https://api.coingecko.com/api/v3/coins/${id}
```
- Response :
```
cache-control: public,max-age=300 
 Content-type: application/json; charset=utf-8 
 Expires: Tue,30 Aug 2022 08:48:01 GMT 
 Code : 200
Description : Get current data for a coin

```
## Build With:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

This is a [React.js](https://reactjs.org/) project bootstrapped with [`my-app`](https://github.com/vercel/next.js/tree/canary/packages/my-app).
