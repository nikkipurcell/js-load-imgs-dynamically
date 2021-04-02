'use strict'

const imagesDiv = document.querySelector('.images');

const wait = function(seconds) {
  return new Promise(function(resolve) { // also can pass in reject
    setTimeout(resolve, seconds * 1000);
  })
}

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      console.log('finished loading');
      imagesDiv.append(img);
      resolve(img);
    });

    img.addEventListener('error', function() {
      reject(new Error(`Problem loading image`));
    })
  })
}

let currentImg;

createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img
    console.log('Image 1 loaded');
    return wait(2); // no results value for then argument that follows
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg')
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg')
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
  })
  .catch(err => console.log(`Oh oh! ${err}`))
