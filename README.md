# Crypto Ticker Data Crawler

This project is designed to crawl various cryptocurrency websites to discover endpoints that provide access to crypto ticker data. Our primary focus is on fetching the Bitcoin to USD exchange rate from multiple reputable sources, consolidating the data, and providing a comprehensive overview of the current market state.

## Features

- **Multiple Data Sources:** Fetches Bitcoin to USD rate from the following sources:
  - CoinTelegraph
  - CoinDesk
  - CoinMarketCap
  - Binance

- **Error Handling:** In-built error handling to ensure graceful degradation in case of API failures.

- **Simple Integration:** Designed to be easily integrated with other projects or expanded to support more cryptocurrencies and data sources.

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/adanzweig/crypto-ticker-data-crawler.git
```

2. Navigate to the project directory:

```bash
cd crypto-ticker-data-crawler
```

3. Install any necessary dependencies (if required).

4. Run the main script:

```bash
node index.js
```

## Usage

On executing the main script, the program will:

1. Connect to the respective APIs of the listed sources.
2. Fetch the Bitcoin to USD exchange rate.
3. Print the fetched rates to the console.

## Expansion

To add more data sources:

1. Create a new asynchronous function similar to the existing functions.
2. Make a request to the new source's API.
3. Parse the response and return the desired data.
4. Add the new function to the self-invoking async function at the bottom to integrate it into the data fetching process.

## Contributions

We welcome contributions to expand the data sources and improve the efficiency of the crawler. Please create a pull request with any proposed changes.

## License

This project is licensed under the MIT License.