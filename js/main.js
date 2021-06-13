// FIXME: this need to be it's own file and brought into pricing only 
const baseURL = 'http://localhost:8001';

let requestURL, pricing;
// const divepricing = document.querySelector('divepricing');
// const rentalpricing = document.querySelector('rentalpricing');

function getDivePricing() {
  requestURL = `${baseURL}/data/diving.json`;
  let requestDive = new XMLHttpRequest();
  requestDive.open('GET', requestURL);
  requestDive.responseType = 'json';
  requestDive.send();

  requestDive.onload = function() {
    pricing = requestDive.response;
    generateTable(pricing, 'divepricing');
  };
};

function getRentalPricing() {
  requestURL = `${baseURL}/data/rental.json`;
  let requestRental = new XMLHttpRequest();
  requestRental.open('GET', requestURL);
  requestRental.responseType = 'json';
  requestRental.send();

  requestRental.onload = function() {
    pricing = requestRental.response;
    generateTable(pricing, 'rentalpricing');
  };
};

function getTrainingPricing() {
  requestURL = `${baseURL}/data/training.json`;
  let requestTraining = new XMLHttpRequest();
  requestTraining.open('GET', requestURL);
  requestTraining.responseType = 'json';
  requestTraining.send();

  requestTraining.onload = function() {
    pricing = requestTraining.response;
    generateTable(pricing, 'trainingpricing');
  };
};

function getSpecialtiesPricing() {
  requestURL = `${baseURL}/data/specialties.json`;
  let requestSpecialty = new XMLHttpRequest();
  requestSpecialty.open('GET', requestURL);
  requestSpecialty.responseType = 'json';
  requestSpecialty.send();

  requestSpecialty.onload = function() {
    pricing = requestSpecialty.response;
    generateTable(pricing, 'specialtiespricing');
  };
};


// rental pricing
// function getData(data) {
//   const myList = document.createElement('ul');
//   if (data) {
//     for(let i = 0; i < data.length; i++) {
//       const listItem = document.createElement('li');
//       listItem.textContent = data[i].title;
//       myList.appendChild(listItem);
//       divepricing.appendChild(myList);
//     }
//   }
// };

function generateTable(data, selector) {
  // get the reference for the body
  let body = document.querySelector(selector);


  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  tbl.className = 'center';

  let tblBody = document.createElement("tbody");

  let row = document.createElement("tr");

  let cell1 = document.createElement("th");
  let cell2 = document.createElement("th");
  let cell3 = document.createElement("th");

  let cellTitleText = document.createTextNode('Title');
  let cellPriceText = document.createTextNode('Price');
  let cellDescriptionText = document.createTextNode('Description');

  cell1.appendChild(cellTitleText);
  cell2.appendChild(cellPriceText);
  cell3.appendChild(cellDescriptionText);

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  tblBody.appendChild(row);

  // creating all cells
  for (let i = 0; i < data.length; i++) {
    // creates a table row
    let row = document.createElement("tr");
      let {
        title,
        price,
        description
      } = data[i];
  
    if(price === null) {
      price = 'Call for Price';
    };

    if(description === null) {
      description = '-';
    };

    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    let cellTitleText = document.createTextNode(title);
    let cellPriceText = document.createTextNode(price);
    let cellDescriptionText = document.createTextNode(description);

    cell1.appendChild(cellTitleText);
    cell2.appendChild(cellPriceText);
    cell3.appendChild(cellDescriptionText);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // for (const property in data[i]) {
    //   let cell = document.createElement("td");
    //   console.log('what is this => ', data[i][property]) 
    //   let cellText = document.createTextNode(data[i][property]);
    //   cell.appendChild(cellText);
    //   row.appendChild(cell);
    // }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  if (body) {
    body.appendChild(tbl);
  }
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

getDivePricing();
getRentalPricing();
getTrainingPricing();
getSpecialtiesPricing();
