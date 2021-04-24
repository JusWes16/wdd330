const links = [
    {
        label: "Week 1",
        url: "w01/index.html"
    }
];

window.addEventListener('load', (event) =>{
    links.forEach(link => {
        let li = document.createElement('li');
    
        let a = document.createElement('a');
        a.setAttribute('href', link.url);
        a.textContent = link.label;
    
        li.appendChild(a);
    
        document.getElementById('links').appendChild(li);
    });
});

