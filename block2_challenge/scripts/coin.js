// COIN PAGE CODE

window.addEventListener('load', (event) => {
    const last_updated = document.querySelector('#lastupdated');
    last_updated.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
    
    getCoinPage(); 
})

const getCoinPage = () => {
  const queryString = window.location.search;
  symbol = queryString.split("=")[1]
  const coin_api_URL = "https://coinlib.io/api/v1/coin?key=3c9b758ead5d6451&symbol=" + symbol;

  fetch(coin_api_URL)
    .then((response) => response.json())
    .then((jsObject) => {
      let coin = jsObject
      // console.log(coin)

      const thousands_separators = (num) =>{
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
      };

      document.querySelector(".rank").textContent = "#" + coin.rank;
      document.querySelector(".name").textContent = coin.name;
      document.querySelector(".show_symbol").textContent = coin.show_symbol;
      document.querySelector(".symbol").textContent = coin.symbol;
      document.querySelector(".price").textContent = "$" + thousands_separators(parseFloat(coin.price).toFixed(3));
      document.querySelector(".market_cap").textContent = "$" + thousands_separators(parseFloat(coin.market_cap).toFixed(2));
      document.querySelector(".high").textContent = "$" + thousands_separators(parseFloat(coin.high_24h).toFixed(3));
      document.querySelector(".low").textContent = "$" + thousands_separators(parseFloat(coin.low_24h).toFixed(3));
      document.querySelector(".date").textContent = new Date(coin.last_updated_timestamp);


      function reset(){
        document.getElementById('data').textContent = '';
      };
  });
};

document.querySelector(".add_to_button").addEventListener('click', () =>{
  const queryString = window.location.search;
  symbol = queryString.split("=")[1];

  const findMatch = (saved_symbol) => {
    return saved_symbol == symbol;
  }

  if (JSON.parse(localStorage.getItem('symbols')) !== null){
      var symbols = JSON.parse(localStorage.getItem('symbols'));
      if (!symbols.find(findMatch)){
        new_symbol = symbol;
        symbols.push(new_symbol);
        alert(symbol + " has been added to your saved coins list.")
      } else {
        alert(symbol + " is already in your saved coins list.")
      };
  } else {
      var symbols = [];
      new_symbol = symbol;
      symbols.push(new_symbol);
      alert(symbol + " has been added to your saved coins list.")
  }
  localStorage.setItem('symbols', JSON.stringify(symbols));
  // console.log(localStorage);
  // console.log(JSON.parse(localStorage.getItem('symbols')));
})