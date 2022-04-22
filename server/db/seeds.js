use Shares_Portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        "Meta Data": {
        "1. Information": "Intraday (60min) open, high, low, close prices and volume",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2022-04-21 20:00:00",
        "4. Interval": "60min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
        },
        "Time Series (60min)": {
            "2022-04-21 20:00:00": {
            "1. open": "139.8600",
            "2. high": "139.9200",
            "3. low": "139.3000",
            "4. close": "139.3000",
            "5. volume": "4327"
            },
            "2022-04-21 19:00:00": {
            "1. open": "139.6600",
            "2. high": "139.8500",
            "3. low": "139.6600",
            "4. close": "139.8500",
            "5. volume": "1246"
            },
            "2022-04-21 18:00:00": {
            "1. open": "139.6001",
            "2. high": "139.6200",
            "3. low": "139.6001",
            "4. close": "139.6200",
            "5. volume": "1480"
            },
            "2022-04-21 17:00:00": {
            "1. open": "139.8500",
            "2. high": "139.8600",
            "3. low": "139.5700",
            "4. close": "139.8000",
            "5. volume": "122642"
            }
        }
    },

    {
        "Meta Data": {
        "1. Information": "Intraday (60min) open, high, low, close prices and volume",
        "2. Symbol": "AAPL",
        "3. Last Refreshed": "2022-04-21 20:00:00",
        "4. Interval": "60min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
        },
        "Time Series (60min)": {
        "2022-04-21 20:00:00": {
        "1. open": "166.3001",
        "2. high": "166.4200",
        "3. low": "165.9200",
        "4. close": "165.9200",
        "5. volume": "51168"
        },
        "2022-04-21 19:00:00": {
        "1. open": "166.1400",
        "2. high": "166.3800",
        "3. low": "166.0100",
        "4. close": "166.3100",
        "5. volume": "54975"
        },
        "2022-04-21 18:00:00": {
        "1. open": "166.2400",
        "2. high": "166.3800",
        "3. low": "166.0800",
        "4. close": "166.0900",
        "5. volume": "38428"
        },
        "2022-04-21 17:00:00": {
        "1. open": "166.4200",
        "2. high": "166.7700",
        "3. low": "165.9500",
        "4. close": "166.1000",
        "5. volume": "2162913"
        }
     }
    },

    {
        "Meta Data": {
        "1. Information": "Intraday (60min) open, high, low, close prices and volume",
        "2. Symbol": "AMZN",
        "3. Last Refreshed": "2022-04-21 20:00:00",
        "4. Interval": "60min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
        },
        "Time Series (60min)": {
        "2022-04-21 20:00:00": {
        "1. open": "2974.9300",
        "2. high": "2974.9300",
        "3. low": "2974.9300",
        "4. close": "2974.9300",
        "5. volume": "124"
        },
        "2022-04-21 19:00:00": {
        "1. open": "2969.0000",
        "2. high": "2969.0000",
        "3. low": "2965.0000",
        "4. close": "2965.0000",
        "5. volume": "1315"
        },
        "2022-04-21 18:00:00": {
        "1. open": "2971.1000",
        "2. high": "2975.0000",
        "3. low": "2967.0000",
        "4. close": "2970.0000",
        "5. volume": "2090"
        },
        "2022-04-21 17:00:00": {
        "1. open": "2965.9200",
        "2. high": "2974.2900",
        "3. low": "2961.0000",
        "4. close": "2973.2600",
        "5. volume": "57265"
        }
    }
}
]);