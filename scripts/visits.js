let visits = localStorage.getItem('visits');
let vis = 0;
let message = "";

if(visits == null)
{
    message = "Welcome to Table Top Chamber! This is your first visit!"
    localStorage.setItem('visits', 1);
}
else
{
    vis = parseInt(visits); 
    vis += 1;
    message = "<div id='message'>Welcome back to Table Top Chamber! You've visited " + vis + " times!</div>";
    localStorage.setItem('visits', vis);
}
document.querySelector('#message').outerHTML = message;