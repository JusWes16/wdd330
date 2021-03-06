const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

runBuildTable = () => {
    table = buildTable(MOUNTAINS);
    document.querySelector("#mountains").appendChild(table);
}

buildTable = (data) => {
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    return table
}
// document.addEventListener("load", buildTable(MOUNTAINS));



runFindByTagName = () => {
    tagName = document.getElementById('tagName').value;
    foundTags = findByTagName(document.body, tagName)
    document.getElementById('output').innerHTML = `Number of [${tagName}]'s found is: ${foundTags.length}`;
}

findByTagName = (node, tagName) => {
    let elementsFound = [];
    tagName = tagName.toUpperCase();

    explore = (node) => {
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName) elementsFound.push(child);
          explore(child);
        }
      }
    }
    explore(node);
    return elementsFound;
}
