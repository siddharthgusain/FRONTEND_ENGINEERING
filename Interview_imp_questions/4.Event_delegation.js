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