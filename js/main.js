const links = [
    {
        label: "Week 1",
        url: "w01/index.html"
    }
];

links.forEach(link => {
    let li = document.createElement('li');

    let a = document.createElement('a');
    a.setAttribute('href', link.url);
    a.textContent = link.label;

    li.appendChild(a);

    document.querySelector('links').appendChild(li);
});
