// let baseURLRental = 'http://localhost:8001';
// const rentalpricing = document.querySelector('rentalpricing');

// let rentalPricing;
// let requestURLRental = `${baseURLRental}/data/rental.json`;
// let requestRental = new XMLHttpRequest();
// requestRental.open('GET', requestURLRental);
// requestRental.responseType = 'json';
// requestRental.send();

// request.onload = function() {
//   rentalPricing = request.response;
//   generateTable(rentalPricing);
// }

// // function getData(data) {
// //   const myList = document.createElement('ul');
// //   if (data) {
// //     for(let i = 0; i < data.length; i++) {
// //       const listItem = document.createElement('li');
// //       listItem.textContent = data[i].title;
// //       myList.appendChild(listItem);
// //       divepricing.appendChild(myList);
// //     }
// //   }
// // };

// function generateTable(data) {
//   // get the reference for the body
//   let body = document.querySelector('rentalpricing');


//   // creates a <table> element and a <tbody> element
//   let tbl = document.createElement("table");
//   let tblBody = document.createElement("tbody");

//   let row = document.createElement("tr");

//   let cell1 = document.createElement("th");
//   let cell2 = document.createElement("th");
//   let cell3 = document.createElement("th");

//   let cellTitleText = document.createTextNode('Title');
//   let cellPriceText = document.createTextNode('Price');
//   let cellDescriptionText = document.createTextNode('Description');

//   cell1.appendChild(cellTitleText);
//   cell2.appendChild(cellPriceText);
//   cell3.appendChild(cellDescriptionText);

//   row.appendChild(cell1);
//   row.appendChild(cell2);
//   row.appendChild(cell3);

//   tblBody.appendChild(row);

//   // creating all cells
//   for (let i = 0; i < data.length; i++) {
//     // creates a table row
//     let row = document.createElement("tr");
//       let {
//         title,
//         price,
//         description
//       } = data[i];
  
//     if(price === null) {
//       price = 'Call for Price';
//     };

//     if(description === null) {
//       description = '-';
//     };

//     let cell1 = document.createElement("td");
//     let cell2 = document.createElement("td");
//     let cell3 = document.createElement("td");

//     let cellTitleText = document.createTextNode(title);
//     let cellPriceText = document.createTextNode(price);
//     let cellDescriptionText = document.createTextNode(description);

//     cell1.appendChild(cellTitleText);
//     cell2.appendChild(cellPriceText);
//     cell3.appendChild(cellDescriptionText);

//     row.appendChild(cell1);
//     row.appendChild(cell2);
//     row.appendChild(cell3);

//     // for (const property in data[i]) {
//     //   let cell = document.createElement("td");
//     //   console.log('what is this => ', data[i][property]) 
//     //   let cellText = document.createTextNode(data[i][property]);
//     //   cell.appendChild(cellText);
//     //   row.appendChild(cell);
//     // }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }
