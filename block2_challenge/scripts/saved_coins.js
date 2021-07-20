window.addEventListener('load', (event)=>{
    const last_updated = document.querySelector('#lastupdated');
    last_updated.textContent = document.lastModified;
  
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
});

let symbols = JSON.parse(localStorage.getItem('symbols'))
// console.log(symbols);
let symbols_list = '';

if (symbols !== null){
    symbols.forEach(symbol => {
        symbols_list += symbol + ",";
    });
}

symbols_list = symbols_list.slice(0, symbols_list.length - 1);
// console.log(symbols_list);

const api_URL = 'https://coinlib.io/api/v1/coin?key=3c9b758ead5d6451&symbol=' + symbols_list;

if(symbols !== null){
    if (symbols.length >= 2){
        fetch(api_URL)
        .then((response) => response.json())
        .then((jsObject) => {
            let coins = jsObject.coins
            // console.log(coins)
    
            const thousands_separators = (num) =>{
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
            }
    
            const buildTable = (coins) =>{
                let header = document.createElement('tr');
                let col1 = document.createElement('th');
                let col2 = document.createElement('th');
                let col3 = document.createElement('th');
                let col4 = document.createElement('th');
                let col6 = document.createElement('th');
    
                col1.textContent = 'Rank';
                col2.textContent = 'Name';
                col3.textContent = 'Symbol';
                col4.textContent = 'Price(USD)';
                col6.textContent = 'Market Cap';
    
                header.appendChild(col1);
                header.appendChild(col2);
                header.appendChild(col3);
                header.appendChild(col4);
                header.appendChild(col6);
    
                document.getElementById('data').appendChild(header);
    
                coins.forEach(coin => {
                    let row = document.createElement('tr');
    
                    let rank = document.createElement('td');
                    let symbol = document.createElement('td');
                    let name = document.createElement('td');
                    let price = document.createElement('td');
                    let cap = document.createElement('td');
    
                    rank.textContent = coin.rank;
                    symbol.textContent = coin.show_symbol;
                    name.textContent = coin.name;
                    price.textContent = '$' + thousands_separators(parseFloat(coin.price).toFixed(3));
                    cap.textContent = '$' + thousands_separators(parseFloat(coin.market_cap).toFixed(0));
    
                    row.appendChild(rank);
                    row.appendChild(name);
                    row.appendChild(symbol);
                    row.appendChild(price);
                    row.appendChild(cap);
                    row.setAttribute('data-symbol', coin.symbol);
    
                    row.addEventListener('click', e => {
                        let symbol = (e.currentTarget.dataset.symbol);
                        window.location.href= 'coin.html?symbol=' + symbol;
                });
    
                document.getElementById('data').appendChild(row);
                });
            }
            buildTable(coins.sort((rank1, rank2) => {return rank1.rank - rank2.rank}));
        });
    } else {
        fetch(api_URL)
        .then((response) => response.json())
        .then((jsObject) => {
            let coin = jsObject
            // console.log(coin)
    
            const thousands_separators = (num) =>{
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
            }
    
            const buildTable = (coin) =>{
                let header = document.createElement('tr');
                let col1 = document.createElement('th');
                let col2 = document.createElement('th');
                let col3 = document.createElement('th');
                let col4 = document.createElement('th');
                let col5 = document.createElement('th');
                let col6 = document.createElement('th');
    
                col1.textContent = 'Rank';
                col2.textContent = 'Name';
                col3.textContent = 'Symbol';
                col4.textContent = 'Price(USD)';
                col5.textContent = 'Volume';
                col6.textContent = 'Market Cap';
    
                header.appendChild(col1);
                header.appendChild(col2);
                header.appendChild(col3);
                header.appendChild(col4);
                header.appendChild(col5);
                header.appendChild(col6);
    
                document.getElementById('data').appendChild(header);
                
                let row = document.createElement('tr');
    
                let rank = document.createElement('td');
                let symbol = document.createElement('td');
                let name = document.createElement('td');
                let price = document.createElement('td');
                let volume = document.createElement('td');
                let cap = document.createElement('td');
    
                rank.textContent = coin.rank;
                symbol.textContent = coin.show_symbol;
                name.textContent = coin.name;
                price.textContent = '$' + thousands_separators(parseFloat(coin.price).toFixed(3));
                volume.textContent = thousands_separators(parseFloat(coin.volume_24h).toFixed(0));
                cap.textContent = '$' + thousands_separators(parseFloat(coin.market_cap).toFixed(0));
    
                row.appendChild(rank);
                row.appendChild(name);
                row.appendChild(symbol);
                row.appendChild(price);
                row.appendChild(volume);
                row.appendChild(cap);
                row.setAttribute('data-symbol', coin.symbol);
    
                row.addEventListener('click', e => {
                    let symbol = (e.currentTarget.dataset.symbol);
                    window.location.href= 'coin.html?symbol=' + symbol;
                });
    
                document.getElementById('data').appendChild(row);
            }
            buildTable(coin);
        });
    }
} else {
    let message = document.getElementById('message');
    let h3 = document.createElement('h3');

    h3.textContent = 'You currently have no saved coins';

    message.appendChild(h3);
}



