fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => getData(data));

function getData(data) {
    const table = document.getElementById('table');
    for (let i = 1; i < data.length; i++) {
        const element = data[i];


        // th created number
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerText = i;
        tr.appendChild(th);



        // tr continents
        td = document.createElement('td');
        td.innerText = element.continents;
        tr.appendChild(td);
        table.appendChild(tr);


        // tr country
        td = document.createElement('td');
        td.innerText = element.name.common;
        tr.appendChild(td);
        table.appendChild(tr);


        // tr capital
        if (element.capital == undefined) {
            td = document.createElement('td');
            td.innerText = '@@ Thare Is No Capital';
            tr.appendChild(td);
            table.appendChild(tr);
        }
        else {
            td = document.createElement('td');
            td.innerText = element.capital[0];
            tr.appendChild(td);
            table.appendChild(tr);
        }


        // add imgae
        const img = document.createElement('img');
        td = document.createElement('td');
        img.src = element.flags.png;
        img.style.width = '20%';
        td = img;
        tr.appendChild(td);
        tr.style.background = '#212529';
        table.appendChild(tr);


        // practise
        td = document.createElement('td');
        td.innerText = (element.population).toLocaleString('en');
        tr.appendChild(td);
        table.appendChild(tr);

    }
}


// var table = document.getElementById('table');

// var td = document.createElement('td');
// td.innerText = 'Sumon';
// var tr = document.createElement('tr');
// tr.appendChild(td);
// table.appendChild(tr);