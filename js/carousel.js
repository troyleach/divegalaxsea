let carouselImages, el;
// let xCoord = 0;
// let yCoord = 265;


// el = document.querySelector('displayCarouselImage');
// el.innerHTML = `<h1 class="gallery-title">Explore the under water world of Cozumel</h1>`

// function generateImageDisplay(imageURL, name) {
//   let el = document.querySelector('displayImage');
//   el.innerHTML = `<img
//                       src=${imageURL}
//                       class="slidea"
//                       alt=${name} />`
//   window.scrollTo(xCoord, yCoord);
// };


function generateCarouselImage() {
  let carouselContainer = document.getElementById('carousel-image-container');
  let img = document.createElement("img");
  // FIXME: when I have the CORS thing fixed delete this line
  img.src = carouselImages[0].webViewLink;
  img.id = 'carousel-image'
  img.className = 'carousel-images center-block';
  img.alt = carouselImages[0].name
  carouselContainer.appendChild(img)
}

function changeCarouselImage(idx) {
  console.log(idx)
  let carouselImg = document.getElementById('carousel-image');
  carouselImg.src = carouselImages[0].webViewLink;
  // carouselContainer.appendChild(carouselImg);
};

// function generateImageThumb() {
//   const data = JSON.parse(localStorage.images);
//   for(cat in data) {
//     if (data[cat].folder === 'gallery') {
//       galleryImages = data[cat].images; 
//     }
//   }

//   let thumbs = document.getElementById('thumbs');
//   let columnCount = 6; // 6 columns accross col-md-2 === 12 units
//   let rowDiv = document.createElement("div");
//   rowDiv.className = 'row';

//   for(let i = 0; i < galleryImages.length; i++) {
//     let colDiv = document.createElement("div");
//     colDiv.className = 'col-md-2 box';
    
//     // FIXME: when I have the CORS thing fixed delete this line
//     let temporaryURL = `${galleryImages[i].webViewLink}`;

//     let img = document.createElement("img");
//     // img.src = galleryImages[i].webViewLink;
//     // FIXME: when I have the CORS thing fixed delete this line and uncomment the above line
//     img.src = temporaryURL;
//     img.className = 'slidea';
//     img.alt = galleryImages[i].name
//     img.setAttribute("onclick", `generateImageDisplay('${temporaryURL}', '${galleryImages[i].name}')`)
//     colDiv.appendChild(img);

//     if (columnCount === 0) {
//       // Makes a new row div for every 6 columns
//       rowDiv = document.createElement("div");
//       rowDiv.className = 'row';
//       columnCount = 6;
//     }
//     columnCount--
//     rowDiv.appendChild(colDiv)
//     thumbs.appendChild(rowDiv);
//   };
// };


// When the page has loaded set the stat
$(document).ready(function(){
  const data = JSON.parse(localStorage.images);
  for(cat in data) {
    if (data[cat].folder === 'carousel') {
      carouselImages = data[cat].images; 
    }
  }
  // display the first image when page loads
  generateCarouselImage();
  let counter = 1;
  
  // change the image every 3 seconds
  setInterval(function(){ 
    if(counter === 3) {
      counter = 0
    }

    let carouselImg = document.getElementById('carousel-image');
    carouselImg.src = carouselImages[counter].webViewLink;
    counter++
  }, 3000);
});


// axios.get(`${baseURL}/data/images.json`)
axios.get(`data/images.json`)
  .then(function (response) {
    console.log('success', response);
    window.localStorage.removeItem('images');
    const newObject = JSON.stringify(response.data)
    window.localStorage.setItem("images", newObject);
  })
  .catch(function (error) {
    // handle error
    console.log('error YO: ', error);
  })
  .then(function () {
    // always executed
  });
