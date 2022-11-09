// Event delegation is based on event bubbling
/*
Instead of attaching eventlistner to each child , rather attach to thier parent , so that
we have one event listner 
*/


document.getElementById("category").addEventListener('click', (e) => {
    console.log(e.target.id);
    if (e.target.tagName == "LI")
        window.location.href = "/" + e.target.id;
}); // attaching event listner to parent rather than tha child elements 



/*
1) Improves memory space
2) Mitigates risk of performance bottle neck
3) DOM manipulation
4) When elements get added dynamically, the process of adding events is slow

Limitations:
1) All the events are"not bubbled up", some events like "blur, focus" are not bubbled up
2) If e.stopPropogation is used in child, then events are not bubbled up
*/
