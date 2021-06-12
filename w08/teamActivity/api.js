let url = "https://swapi.dev/api/people/";
let nextUrl = '';
let prevUrl = '';
const outputDiv = document.getElementById('output');



function getData() {
    document.getElementById('cardData').textContent = null;
    fetch(url)
        .then( response => response.json() )
        .then((jsObject) => {
            for(var x=0; x<jsObject.results.length; x++){
              let card = document.createElement('section');
              let cardData = document.createElement('p');

              cardData.textContent = jsObject.results[x].name;

              card.appendChild(cardData);

              document.getElementById('cardData').appendChild(card);
            }
          nextUrl = jsObject.next;
          prevUrl = jsObject.previous;
        })
        .catch( error => console.log('There was an error:', error));
        
};

document.getElementById('next').addEventListener('click', () => {
    if (nextUrl != null){
        url = nextUrl;
        getData();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (prevUrl != null){
        url = prevUrl;
        getData();
    } 
});