window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

/*

--------------DOMContentLoaded-----------------
-> The DOMContentLoaded event fires when the HTML document has been completely parsed, 
and all deferred scripts (<script defer src="…"> and <script type="module">) 
have downloaded and executed. It doesn't wait for other things like images, 
subframes, and async scripts to finish loading.

-> This event is not cancelable.
--------------Window.load-------------
-> The load event is fired when the whole page has loaded, including all dependent resources
such as stylesheets, scripts, iframes, and images. This is in contrast to DOMContentLoaded,
which is fired as soon as the page DOM has been loaded, without waiting for resources to 
finish loading.

-> This event is not cancelable and does not bubble.


*/