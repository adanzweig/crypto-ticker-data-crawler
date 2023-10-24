// This function fetches the Bitcoin to USD rate from the CoinTelegraph API.
async function getCoinTelegraphRates(){
    try{
        // Make an asynchronous request to the CoinTelegraph API.
        const req = await fetch('https://ticker-api.cointelegraph.com/rates/?full=true');
        // Parse the response to JSON format.
        const data = await req.json();
        // Return the price of Bitcoin in USD.
        return data.data.BTC.USD.price;
    }catch(error){
        // Log any errors that occur during the fetch or parsing process.
        console.error('Error:',error);
    }
}

// This function fetches the Bitcoin to USD rate from the CoinDesk API.
async function getCoindeskRates(){
    try{
        // Make an asynchronous request to the CoinDesk API.
        const req = await fetch('https://production.api.coindesk.com/v2/tb/price/ticker?assets=all');
        // Parse the response to JSON format.
        const data = await req.json();
        // Return the closing price of Bitcoin in USD.
        return data.data.BTC.ohlc.c;
    }catch(error){
        // Log any errors that occur during the fetch or parsing process.
        console.error('Error:',error);
    }
}

// This function fetches the Bitcoin to USD rate from the CoinMarketCap API.
async function getCoinMarketCapRates(){
    try{
        // Make an asynchronous request to the CoinMarketCap API.
        const req = await fetch('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=10&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc&spotUntracked=true');
        // Parse the response to JSON format.
        const data = await req.json();
        // Search for the BTC/USD market pair and return its price.
        return data.data.marketPairs.find(mp=>mp.marketPair == 'BTC/USD').price;
    }catch(error){
        // Log any errors that occur during the fetch or parsing process.
        console.error('Error:',error);
    }
}

// This function fetches the Bitcoin to USD rate from the Binance API.
async function getBinanceRates(){
    try{
        // Make an asynchronous request to the Binance API.
        const req = await fetch('https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-products?includeEtf=true');
        // Parse the response to JSON format.
        const data = await req.json();
        // Search for the BTCUSDT asset and return its current price.
        return data.data.find(asset=>asset.s === 'BTCUSDT').c;
    }catch(error){
        // Log any errors that occur during the fetch or parsing process.
        console.error('Error:',error);
    }
}

// Self-invoking async function to execute the above functions and log the results.
(async()=>{
    // Fetch and log the Bitcoin to USD rate from the CoinTelegraph API.
    const telegraph = await getCoinTelegraphRates();
    console.log(telegraph);
    // Fetch and log the Bitcoin to USD rate from the CoinDesk API.
    const coindesk = await getCoindeskRates();
    console.log(coindesk);
    // Fetch and log the Bitcoin to USD rate from the CoinMarketCap API.
    const coinmarketcap = await getCoinMarketCapRates();
    console.log(coinmarketcap);
    // Fetch and log the Bitcoin to USD rate from the Binance API.
    const binance = await getBinanceRates();
    console.log(binance);
})()
