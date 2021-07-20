window.addEventListener('load', (event)=>{
  const last_updated = document.querySelector('#lastupdated');
  last_updated.textContent = document.lastModified;

  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();

  page1();
})


// PAGE 1 CODE

const page1 = () =>{
  const api_URL = 'https://coinlib.io/api/v1/coinlist?key=3c9b758ead5d6451&page=1&order=rank_asc';

  fetch(api_URL)
    .then((response) => response.json())
    .then((jsObject) => {
      let coins = jsObject.coins
      // console.log(coins)
      reset();

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

        coins.forEach(coin => {
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
        });
      }
      buildTable(coins.sort((rank1, rank2) => {return rank1.rank - rank2.rank}));

      function reset(){
        document.getElementById('data').textContent = '';
      }

      function sortBy(){
        reset();
        let filter = document.getElementById('filter').value;
    
        if(filter == 'rank'){
            buildTable(coins.sort((rank1, rank2) => {
                return rank1.rank - rank2.rank;
            }));
        } else if(filter == 'name'){
            buildTable(coins.sort((name1, name2) => {
              return name1.name.toLowerCase().localeCompare(name2.name);
            }));
        } else if(filter == 'high-low'){
            buildTable(coins.sort((price1, price2) => {
              return  price2.price - price1.price;
            }));
        } else if(filter == 'low-high'){
            buildTable(coins.sort((price1, price2) => {
              return price1.price - price2.price;
            }));
        } else if(filter == 'volume'){
            buildTable(coins.sort((volume1, volume2) => {
              return volume2.volume_24h - volume1.volume_24h;
            }));
        } else if(filter == 'market'){
            buildTable(coins.sort((market1, market2) => {
              return market2.market_cap - market1.market_cap;
            }));
          } else {
            buildTable(coins.sort((rank1, rank2) => {
              return rank1.rank - rank2.rank;
            }));
        }
      }
      document.getElementById('filter').addEventListener('change', sortBy);
  });
}

// PAGE 2 CODE

const page2 = () =>{
  const api_URL2 = 'https://coinlib.io/api/v1/coinlist?key=3c9b758ead5d6451&page=2&order=rank_asc';

  fetch(api_URL2)
    .then((response) => response.json())
    .then((jsObject) => {
      let coins = jsObject.coins
      // console.log(coins)
      reset();

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

        coins.forEach(coin => {
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
        });
      };
      buildTable(coins.sort((rank1, rank2) => {return rank1.rank - rank2.rank}));

      function reset(){
        document.getElementById('data').textContent = '';
      };

      function sortBy(){
        reset();
        let filter = document.getElementById('filter').value;
    
        if(filter == 'rank'){
            buildTable(coins.sort((rank1, rank2) => {
                return rank1.rank - rank2.rank;
            }));
        } else if(filter == 'name'){
            buildTable(coins.sort((name1, name2) => {
              return name1.name.toLowerCase().localeCompare(name2.name);
            }));
        } else if(filter == 'high-low'){
            buildTable(coins.sort((price1, price2) => {
              return  price2.price - price1.price;
            }));
        } else if(filter == 'low-high'){
            buildTable(coins.sort((price1, price2) => {
              return price1.price - price2.price;
            }));
        } else if(filter == 'volume'){
            buildTable(coins.sort((volume1, volume2) => {
              return volume2.volume_24h - volume1.volume_24h;
            }));
        } else if(filter == 'market'){
            buildTable(coins.sort((market1, market2) => {
              return market2.market_cap - market1.market_cap;
            }));
        } else {
            buildTable(coins.sort((rank1, rank2) => {
              return rank1.rank - rank2.rank;
            }));
        }
      }
      document.getElementById('filter').addEventListener('change', sortBy);
  });
};






