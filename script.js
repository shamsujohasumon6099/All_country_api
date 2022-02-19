fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => getData(data));

function getData(data) {
    const table = document.getElementById('table');
    for (let i = 1; i < data.length; i++) {
        const element = data[i];

        // th created
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerText = i;
        tr.appendChild(th);

        // tr created
        const td = document.createElement('td');
        td.innerText = element.name.common;
        tr.appendChild(td);
        table.appendChild(tr);

        // tr capital

        if(element.capital == undefined){
            const td = document.createElement('td');
            td.innerText = '@@ Thare Is No Capital';
            tr.appendChild(td);
            table.appendChild(tr);
        }
        else{
            const td = document.createElement('td');
            td.innerText = element.capital[0];
            tr.appendChild(td);
            table.appendChild(tr);
        }

        // console.log(element.capital)
        
    }
}


// var table = document.getElementById('table');

// var td = document.createElement('td');
// td.innerText = 'Sumon';
// var tr = document.createElement('tr');
// tr.appendChild(td);
// table.appendChild(tr);