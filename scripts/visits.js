let visits = localStorage.getItem('visits');
let message = "";

if(visits = null)
{
    message = "Welcome to Table Top Chamber! This is your first visit!"
    localStorage.setItem('visits', 1);
}
else
{
    visits += 1;
    message = "Welcome back to Table Top Chamber! You've visited " + visits + " times!"
    localStorage.setItem('visits', visits);
}
document.querySelector('#message').outerHTML = message;