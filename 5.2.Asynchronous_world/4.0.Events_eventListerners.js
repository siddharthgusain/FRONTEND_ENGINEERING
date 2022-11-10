/*
Events are actions or occurrences that happen in the system you are programming,
which the system tells you about so you can respond to them in some way if desired

As mentioned above, events are actions or occurrences that happen in the system 
you are programming — the system produces (or "fires") a signal of some kind
when an event occurs, and provides a mechanism by which an action can be automatically
taken (that is, some code running) when the event occurs.
*/

// callbacks functions can be used to handle events , so those callbacks which 
//handle events are known as event handlers

/*
In the case of the Web, events are fired inside the browser window, and 
tend to be attached to a specific item that resides in it — 
this might be a single element, set of elements, 
the HTML document loaded in the current tab, or the entire browser window.

*/

const h1 = window.document.querySelector('h1');
/*  
Note:- DOM API is synchronous and there are no callbacks , JS engine moves to next line 
after executing this current line above.
*/

h1.onclick = function () {
    console.log("hello");
}; // this is a callback or event listerner
// note it is registered first and called only after JS stack is empty

console.log(h1);
