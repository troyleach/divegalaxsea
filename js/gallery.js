// TODO: should make these requests when the users first visits the site.
//   and store the information in the window, then come up with a way that when the user leaves
//   the site it clears the window cache. or just keep it there.. what ever... maybe a cookie..

let galleryImages, el;


el = document.querySelector('displayImage');
el.innerHTML = `<h1 class="gallery-title">Explore Cozumel</h1>`

function displayImage(url) {
  console.log('YO here I am now', url);
  generateImageDisplay(url);
};
// gallery-image-element


function generateImageDisplay(imageURL) {
  console.log('YO generateImageDisplay', images);
  let el = document.querySelector('displayImage');
  el.innerHTML = `<img
                      src=${imageURL}
                      class="slidea"
                      alt=${name}/>`
};


function generateImageThumb() {
  const data = JSON.parse(localStorage.images);
  for(cat in data) {
    if (data[cat].folder === 'gallery') {
      galleryImages = data[cat].images; 
    }
  }

  let thumbs = document.getElementById('thumbs');
  let columnCount = 6; // 6 columns accross col-md-2 === 12 units
  let rowDiv = document.createElement("div");
  rowDiv.className = 'row';

  for(let i = 0; i < galleryImages.length; i++) {
    let colDiv = document.createElement("div");
    colDiv.className = 'col-md-2 box';
    
    // FIXME: when I have the CORS thing fixed delete this line
    let temporaryURL = `${baseURL}/${galleryImages[i].webViewLink}`;

    let img = document.createElement("img");
    // img.src = galleryImages[i].webViewLink;
    // FIXME: when I have the CORS thing fixed delete this line
    img.src = temporaryURL;
    img.className = 'slidea';
    img.alt = galleryImages[i].name
    colDiv.appendChild(img);

    if (columnCount === 0) {
      console.log('Make a new ROW Div');
      rowDiv = document.createElement("div");
      rowDiv.className = 'row';
      columnCount = 6;
    }
    columnCount--
    console.log('counting', columnCount);
    rowDiv.appendChild(colDiv)
    thumbs.appendChild(rowDiv);
  }

  `
    <div class="col-md-2 box">
      <img
        src="img/gallery/img1.jpg"
        class="slidea"
        alt="Image 1"
        onclick="displayImage('img/gallery/img1.jpg')" />
    </div>
  `
};


// When the page has loaded then get the thumbs
$(document).ready(function(){
  generateImageThumb();
});


axios.get(`${baseURL}/data/images.json`)
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
