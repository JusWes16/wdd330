const links = [
    {
        label: "Week 1",
        url: "w01/index.html"
    }
];

let links_container = document.getElementById('links');
links.forEach(link => {
    links_container.innerHTML('<li>');
    links_container.innerHTML('<a>');
    
});