const links = [
    {
        label: "Week 1",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w01/index.html"
    },
    {
        label: "Week 2",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w02/index.html"
    },
    {
        label: "Week 3",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w03/index.html"
    },
    {
        label: "Week 4",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w04/index.html"
    },
    {
        label: "Week 5",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w05/index.html"
    },
    {
        label: "Week 6",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w06/index.html"
    },
    {
        label: "Week 7",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w07/index.html"
    },
    {
        label: "Week 8",
        url: "C:/Users/Gaming PC/Documents/College/Spring 2021/wdd330/wdd330/w08/index.html"
    }
];

window.addEventListener('load', (event) =>{
    links.forEach(link => {
        let li = document.createElement('li');
    
        let a = document.createElement('a');
        a.setAttribute('href', link.url);
        a.textContent = link.label;
    
        li.appendChild(a);
    
        document.querySelector('.links').appendChild(li);
    });
});

const dropdown = () => {
    let links = document.querySelector('.links');
    if (links.classList.length == 2){
        links.classList.remove('dropdown-content');
    } else {
        links.classList.add('dropdown-content');
    }
}

