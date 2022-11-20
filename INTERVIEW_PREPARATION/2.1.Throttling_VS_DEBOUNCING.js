// Also used to rate limit function call
// Throttle word means limiting like throttling bandwidth of network

//-----------------SEARCH BAR------------------
/*
-> In DEBOUNCING We make function call if "difference in keystrokes" was greater than delay
-> In Throttling , we make function call "after some delay" and any keystroke between that
delay is "IGNORED".
*/

// DEBOUNCING MAKES MORE SENSE IN SEARCH BAR

//-----------------TRACKING WHEN USER RESIZES BROWSER--------------

let trackResize = () => {
    console.log("TRACKING RESIZE WINDOW");
}

window.addEventListener("resize", trackResize);

// IN THIS CASE THROTTLING MAKES MORE SENSE , cuz we will call function after some delay and ignore all events in between


//--------------------BUTTON PRESS-------------
// If user is clicking many times madly, what would you use?
// Shooting game could be an example , throttle the times gun is clicked


// WHAT IS BETTER DEBOUNCING OR THROTTLING ?
// ACTUALLY DEPENDS ON USE CASE




