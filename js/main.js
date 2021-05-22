const links = [
    {
        label: "Week 1",
        url: "w01/index.html"
    },
    {
        label: "Week 2",
        url: "w02/index.html"
    },
    {
        label: "Week 3",
        url: "w03/index.html"
    },
    {
        label: "Week 4",
        url: "w04/index.html"
    },
    {
        label: "Week 5",
        url: "w05/index.html"
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

