# js-load-imgs-dynamically

This is a great example of dynamically loading images using JavaScript. First an image loads, then after 2 seconds it disappears and a new image is loaded. This happens for 3 images and the last image remains on the page.

## How Its Done

The whole idea behind this is to show an example of wrapping async behavior in a Promise and encapsulating that within a function. In this way we can pass a parameter to the Promise to be used in the logic.

A function is created that contains a promise. This promise creates a new image element and assignes it's src value to an image path provided by the parameter passed to the function. There are two event listeners, one for load event, and one for error event. In the load event listener, we append the new image element to the DOM. In the error listener, we throw a string error. Now we can use the promise and pass the first image path. Then once the promise is resolved, we use another promise function called wait (that uses a setTimeout) to wait 2 seconds. When that finishes, we remove the image from the DOM within the then method and return another promise by using the createImage promise function again. This pattern repeats till the final third image is loaded.

![Dynamic Image Loading](js-load-imgs-dynamically.jpg)
